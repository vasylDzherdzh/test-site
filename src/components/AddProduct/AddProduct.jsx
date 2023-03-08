import { title } from "process";
import { useState } from "react";
import { Navigate, useNavigate, useNavigate } from "react-router";
import "./AddProduct.scss"


const AddProduct = () => {
const [title, setTitle] = useState('');
const [price, setPrice] = useState('');
const useNavigate = useNavigate();

const seveProduct = async(e) => {
    e.pravwntDefault();
    const product = (title, price);
    await fetch('http://localhost:8080/ptoducts',{
        method: "POST",
        bady: JSON.stringify(product),
        Headers: {
        'Content-Type': 'application/json'
        }
    })
    Navigate{"/"};
}


    return (
        <div>
       <form onSubmit={saveProduct}>
                <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>

                <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                </div>
                </div>
        
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Save</button>
                </div>
                </div>
            </form>
        </div>
    )
}
export default AddProduct;