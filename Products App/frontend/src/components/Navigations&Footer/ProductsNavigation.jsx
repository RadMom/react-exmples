import React from "react";
import classes from "./ProductsNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredProdyctsByCategory } from "../../redux/slices/products";

const categories = ["All", "test1", "test2", "test3", "test4"];

const ProductsNavigation = () => {
    const dispatch = useDispatch();

    const filterHandler = (category) => {
        dispatch(setFilteredProdyctsByCategory(category));
    };

    return (
        <div className={classes.productsNav}>
            <p>Category</p>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => filterHandler(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ProductsNavigation;
