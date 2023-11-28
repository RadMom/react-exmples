import React, { useState, useEffect } from "react";
import classes from "./ProductsNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsActions";
import {
    resetProductsFilters,
    setProductsFilters,
} from "../../redux/paginationAndFilters/paginationAndFiltersSlice";

const categories = ["all", "test1", "test2", "test3", "test4"];

const ProductsNavigation = () => {
    const dispatch = useDispatch();

    // Get the current filters from the Redux store
    const currentFilters = useSelector((state) => state.paginationAndFilters.filters.products);

    // Set up local state to manage updated filters
    const [updatedFilters, setUpdatedFilters] = useState({
        category: currentFilters?.category || "all",
        sortBy: currentFilters?.sortBy || "lowest",
        itemsPerPage: currentFilters?.itemsPerPage || 10,
        search: currentFilters?.search || "",
    });

    // Handle filter changes
    const handleFilters = () => {
        dispatch(getProducts(updatedFilters));
        dispatch(setProductsFilters(updatedFilters));
    };

    // Handle applying filters
    const handleFiltersChange = (e) => {
        const { name, value } = e.target;
        setUpdatedFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // Handle resetting filters to default values
    const handleResetFilters = () => {
        // Dispatch the action to reset filters in Redux store
        dispatch(resetProductsFilters());

        // Reset local state to default filter values
        setUpdatedFilters({
            category: "all",
            sortBy: "lowest",
            itemsPerPage: 10,
            search: "",
        });

        // Fetch products with default filters
        dispatch(getProducts());
    };

    return (
        <table className={classes["products-nav-table"]}>
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={updatedFilters.category}
                            onChange={handleFiltersChange}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </td>

                    <td>
                        <label htmlFor="itemsPerPage">Products per page</label>
                        <select
                            id="itemsPerPage"
                            name="itemsPerPage"
                            value={updatedFilters.itemsPerPage}
                            onChange={handleFiltersChange}
                        >
                            <option value={5}>5 per page</option>
                            <option value={10}>10 per page</option>
                            <option value={20}>20 per page</option>
                        </select>
                    </td>

                    <td>
                        <label htmlFor="sortBy">Price</label>
                        <select
                            id="sortBy"
                            name="sortBy"
                            value={updatedFilters.sortBy}
                            onChange={handleFiltersChange}
                        >
                            <option value="-1">Lowest first</option>
                            <option value="1">Highest first</option>
                        </select>
                    </td>

                    <td>
                        <label htmlFor="search">Search</label>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            value={updatedFilters.search}
                            onChange={handleFiltersChange}
                        />
                    </td>

                    <td>
                        <button onClick={handleFilters}>Filter</button>
                        <button onClick={handleResetFilters}>Reset filters</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ProductsNavigation;
