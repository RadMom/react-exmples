import React, { useState, useEffect } from "react";
import classes from "./ProductsNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";

import { resetUsersFilters } from "../../redux/paginationAndFilters/paginationAndFiltersSlice";
import { getAllOrders, getAllUsers } from "../../redux/admin/adminActions";

const UsersFilters = () => {
    const dispatch = useDispatch();

    // Get the current filters from the Redux store
    const usersFilters = useSelector((state) => state.paginationAndFilters.filters.users);

    // Set up local state to manage updated filters
    const [updatedFilters, setUpdatedFilters] = useState({
        usersPerPage: usersFilters?.usersPerPage || 10,
        searchBy: usersFilters?.searchBy || "id",
        search: usersFilters?.search || "",
    });

    // Handle filter changes
    const handleFilters = () => {
        dispatch(getAllUsers({ ...updatedFilters }));
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
        dispatch(resetUsersFilters());

        // Reset local state to default filter values
        setUpdatedFilters({
            usersPerPage: 10,
            searchBy: "id",
            search: "",
        });

        // Fetch products with default filters
        dispatch(getAllUsers());
    };

    return (
        <table className={classes["products-nav-table"]}>
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="usersPerPage">Users per page</label>
                        <select
                            id="usersPerPage"
                            name="usersPerPage"
                            value={updatedFilters.usersPerPage}
                            onChange={handleFiltersChange}
                        >
                            <option value={5}>5 per page</option>
                            <option value={10}>10 per page</option>
                            <option value={20}>20 per page</option>
                        </select>
                    </td>

                    <td>
                        <label htmlFor="searchBy">Search by:</label>
                        <select
                            id="searchBy"
                            name="searchBy"
                            value={updatedFilters.searchBy}
                            onChange={handleFiltersChange}
                        >
                            <option value="id">User ID</option>
                            <option value="name">User name</option>
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

export default UsersFilters;
