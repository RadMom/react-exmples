import { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
    const [productName, setProductName] = useState();
    const [productImage, setProductImage] = useState();
    const [productCategory, setProductCategory] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productStock, setProductStock] = useState();

    const createProductHandler = async (e) => {
        e.preventDefault();
        try {
            const token = JSON.parse(localStorage.getItem("userInfo")).token;
            console.log(token);
            const response = await axios.post(
                "http://localhost:5000/products",
                {
                    // user: req.user._id,
                    name: productName,
                    image: productImage,
                    category: productCategory,
                    description: productDescription,
                    price: productPrice,
                    stock: productStock,
                },
                { headers: { authorization: `Bearer ${token}` } }
            );

            if (response.statusText !== "OK") {
                console.log(response);
                dispatch(login(response.data));

                console.log("Login!!!");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={createProductHandler}>
                <label htmlFor="name">Product Name</label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    id="productName"
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <label htmlFor="image">Image :</label>
                <input
                    type="file"
                    id="productImage"
                    onChange={(e) => setProductImage(e.target.value)}
                />
                <label htmlFor="category">Product Category</label>
                <input
                    type="text"
                    placeholder="Enter Category"
                    id="productCategory"
                    onChange={(e) => setProductCategory(e.target.value)}
                    value={productCategory}
                />
                <label htmlFor="description">Product Description</label>
                <input
                    type="text"
                    placeholder="Write description"
                    id="description"
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                />
                <label htmlFor="price">Product Price</label>
                <input
                    type="number"
                    placeholder="Enter price"
                    id="price"
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <label htmlFor="stock">Product Stock</label>
                <input
                    type="number"
                    placeholder="Enter Stock"
                    id="productStock"
                    onChange={(e) => setProductStock(e.target.value)}
                    value={productStock}
                />

                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
