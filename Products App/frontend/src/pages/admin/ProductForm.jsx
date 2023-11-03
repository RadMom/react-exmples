import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createProduct } from "../../redux/admin/adminActions";

const ProductForm = () => {
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState();
    const [productCategory, setProductCategory] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStock, setProductStock] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createProductHandler = async (e) => {
        e.preventDefault();
        dispatch(
            createProduct(
                productName,
                productImage,
                productCategory,
                productDescription,
                productPrice,
                productStock
            )
        );
        // navigate("/admin/products");
    };

    return (
        <div>
            <form onSubmit={createProductHandler}>
                <label htmlFor="name">Product Name</label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    id="name"
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    required
                />

                <br />
                <label htmlFor="image">Image :</label>
                <input type="file" id="image" onChange={(e) => setProductImage(e.target.value)} />
                <br />
                <label htmlFor="category">Product Category</label>
                <input
                    type="text"
                    placeholder="Enter Category"
                    id="category"
                    onChange={(e) => setProductCategory(e.target.value)}
                    value={productCategory}
                />
                <br />
                <label htmlFor="description">Product Description</label>
                <input
                    type="text"
                    placeholder="Write description"
                    id="description"
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                />
                <br />
                <label htmlFor="price">Product Price</label>
                <input
                    type="number"
                    placeholder="Enter price"
                    id="price"
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <br />
                <label htmlFor="stock">Product Stock</label>
                <input
                    type="number"
                    placeholder="Enter Stock"
                    id="stock"
                    onChange={(e) => setProductStock(e.target.value)}
                    value={productStock}
                />
                <br />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
