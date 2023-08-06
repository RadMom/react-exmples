import React from "react";
import classes from "./ProductsNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredProdyctsByCategory } from "../../redux/slices/products";

const ProductsNavigation = () => {
    const dispatch = useDispatch();

    const filterHandler=(category)=>{
        dispatch(setFilteredProdyctsByCategory(category))
    }

    return (
        <div className={classes.productsNav}>
            <p>Category</p>
            <nav>
                <li>
                    <button onClick={()=>filterHandler("car")}>car</button>
                </li>
                <li>Religion</li>
                <li>Funny</li>
                <li>Pepi</li>
                <li>Something</li>
            </nav>
        </div>
    );
};

export default ProductsNavigation;
