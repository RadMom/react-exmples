import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
  

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                const data = await axios.get("http://localhost:5000/products");
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
