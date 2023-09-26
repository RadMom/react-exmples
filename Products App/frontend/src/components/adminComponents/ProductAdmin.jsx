import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createProduct, deleteProduct, editProduct } from "../../redux/actions/adminActions";

import classes from "./ProductAdmin.module.css";

const ProductAdmin = (props) => {
    const {
        name,
        description,
        category,
        image,
        price,
        numbersOfReviews,
        rating,
        reviews,
        stock,
        user,
        createdAt,
        updatedAt,
        _id,
    } = props.product;

    const [productName, setProductName] = useState(name ? name : "");
    const [productImage, setProductImage] = useState(image ? image : "");
    const [productCategory, setProductCategory] = useState(category ? category : "");
    const [productDescription, setProductDescription] = useState(description ? description : "");
    const [productPrice, setProductPrice] = useState(price ? price : "");
    const [productStock, setProductStock] = useState(stock ? stock : "");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteProductHandler = (e) => {
        e.preventDefault();
        if (window.confirm(`Are you sure that you want to DELETE ${name} ?`)) {
            dispatch(deleteProduct(_id));
        }
    };

    const updateProductHandler = async (e) => {
        e.preventDefault();
        if (window.confirm(`Are you sure that you want to UPDATE ${name} ?`)) {
            dispatch(
                editProduct(
                    productName,
                    productImage,
                    productCategory,
                    productDescription,
                    productPrice,
                    productStock,
                    _id
                )
            );
        }

        // navigate("/admin/products");
    };

    return (
        <div className={classes["product-container"]}>
            <form className={classes["product-form"]}>
                <label htmlFor="name">Product Name</label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    id="name"
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <label htmlFor="image">Image :</label>
                <input
                    type="text"
                    id="image"
                    onChange={(e) => setProductImage(e.target.value)}
                    value={productImage}
                    required
                />
                <label htmlFor="category">Product Category</label>
                <input
                    type="text"
                    placeholder="Enter Category"
                    id="category"
                    onChange={(e) => setProductCategory(e.target.value)}
                    value={productCategory}
                    required
                />
                <label htmlFor="description">Product Description</label>
                <input
                    type="text"
                    placeholder="Write description"
                    id="description"
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    required
                />
                <label htmlFor="price">Product Price</label>
                <input
                    type="number"
                    placeholder="Enter price"
                    id="price"
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                    required
                />
                <label htmlFor="stock">Product Stock</label>
                <input
                    type="number"
                    placeholder="Enter Stock"
                    id="stock"
                    onChange={(e) => setProductStock(e.target.value)}
                    value={productStock}
                    required
                />
                <button className={classes.button} onClick={updateProductHandler}>
                    Update Product{" "}
                </button>
                <button className={classes.button} onClick={deleteProductHandler}>
                    Delete
                </button>
            </form>
        </div>
    );
};

export default ProductAdmin;
