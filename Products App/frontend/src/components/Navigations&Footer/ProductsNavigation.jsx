import React from "react";
import classes from "./ProductsNavigation.module.css";

const ProductsNavigation = () => {
    return (
        <div className={classes.productsNav}>
            <p>Collections</p>
            <nav>
                <li>Nature</li>
                <li>Religion</li>
                <li>Funny</li>
                <li>Pepi</li>
                <li>Something</li>
            </nav>
        </div>
    );
};

export default ProductsNavigation;
