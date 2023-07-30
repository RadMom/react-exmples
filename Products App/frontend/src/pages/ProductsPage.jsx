import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
  
    const token = JSON.parse(localStorage.getItem("userInfo")).token;

    console.log(token);

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                const data = await axios.get("http://localhost:5000/products", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProducts(oldState=>data.data);
                console.log(products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchingProducts();
    }, []);
    console.log(products);
    return <ProductsList products={products} />;
};

export default ProductsPage;
