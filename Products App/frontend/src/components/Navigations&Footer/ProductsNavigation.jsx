import React, { useState } from "react";
import classes from "./ProductsNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsActions";
// import { setFilteredProductsByCategory } from "../../redux/products/productsSlice";

const categories = ["all", "test1", "test2", "test3", "test4"];

const ProductsNavigation = () => {
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        category: "all",
        sortBy: "lowest",
        itemsPerPage: 10,
    });

    const filterHandler = () => {
        dispatch(getProducts(filters));
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className={classes["products-nav"]}>
            <div className={classes.category}>
                <p>Category</p>
                <select name="category" value={filters.category} onChange={handleFilterChange}>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className={classes["items-per-page"]}>
                <p>Products per page</p>
                <select
                    name="itemsPerPage"
                    value={filters.itemsPerPage}
                    onChange={handleFilterChange}
                >
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                </select>
            </div>
            <div className={classes["price"]}>
                <p>Price</p>
                <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
                    <option value="-1">Lowest first</option>
                    <option value="1">Highest first</option>
                </select>
            </div>

            <button onClick={filterHandler}>Filter</button>
        </div>
    );
};

export default ProductsNavigation;
