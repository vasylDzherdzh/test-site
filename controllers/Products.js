import Product from "../models/productModel.js";


export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    }
    catch (error){
     res.json({message: error.message});
    }
}

export const getProductById = async (req, res) => {
    try{
        const Product = await Product.findAll({
            where: {
                id: req.param.id 
            }
        });
        res.json(Product[0]);
    }
        catch (error){
            res.json({message: error.message});
           }
    }

    export const updateProduct = async (req, res) => {
        try{
            await Product.update(req.body, {
                where: {
                    id: req.param.id
                }
            });
         res.json({
            "message": "Product Updated"
           });
         } catch (error){
            res.json({message: error.message});
           }
    }

    export const createProduct = async (req, res) => {
        try {
            await Product.create(req.body);
            res.json ({
                "massage": "Product Created"
            });
        } catch (error) {
            res.json ({ massage: error.message});
        }
    }

    export const deleteProduct = async (req, res) => {
        try {
            await Product.destroy({
                where: {
                    id: req.param.id
                }
            });
            res.json({
                "massage": "Product deleted"
            });
        } catch (error) {
            res.json({ massage: error.massage});
        }
    }