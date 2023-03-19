import  express  from "express";

import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controlers/Products.js"

const router = express.Router();

router.get('/', getAllProducts);
router.get(':id', getProductById);
router.post('/create', createProduct);
router.patch('/upd/:id', updateProduct);
router.delete('/del/:id', deleteProduct);

export default router;