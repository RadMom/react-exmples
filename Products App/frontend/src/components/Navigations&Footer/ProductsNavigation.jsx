import React, { useState } from "react";
import classes from "./ProductsNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredProdyctsByCategory } from "../../redux/products/products";

const categories = ["All", "test1", "test2", "test3", "test4"];

const ProductsNavigation = () => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(10);
    console.log(selectedCategory);

    const filterHandler = (category) => {
        dispatch(setFilteredProdyctsByCategory(selectedCategory));
        setSelectedCategory((old) => selectedCategory);
    };

    return (
        <div className={classes["products-nav"]}>
            <div className={classes.category}>
                <p>Category</p>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value={"All"}>All</option>
                    <option value={"test1"}>test1</option>
                    <option value={"test2"}>test2</option>
                    <option value={"test3"}>test3</option>
                </select>
            </div>

            <div className={classes["items-per-page"]}>
                <p>Products per page</p>
                <select
                    value={selectedItemsPerPage}
                    onChange={(e) => setSelectedItemsPerPage(e.target.value)}
                >
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                </select>
            </div>

            <button onClick={filterHandler}>Filter</button>
        </div>
    );
};

export default ProductsNavigation;
