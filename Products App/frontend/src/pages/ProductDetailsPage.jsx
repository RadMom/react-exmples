import React, { useEffect } from "react";
import { getSingleProduct } from "../redux/products/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import classes from "./ProductDetailsPage.module.css";

const ProductDetailsPage = () => {
    const { isLoading, error, product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const productId = useParams();
    console.log(productId);

    useEffect(() => {
        dispatch(getSingleProduct(productId));
    }, []);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {product && (
                <div className={classes.product}>
                    <h2>{product.name}</h2>
                </div>
            )}
        </div>
    );
};

export default ProductDetailsPage;
