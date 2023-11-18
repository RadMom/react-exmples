import React from "react";
import classes from "./ProductsNavigation.module.css";
const ReusableNav = ({ options }) => {
    console.log(options);
    const filters = options;
    // const filters = [
    //     { key1: { options: ["key1opt1", "key1opt2", "key1opt3"], default: "key1opt2" } },
    //     { key2: { options: ["key2opt1", "key2opt2", "key2opt3"], default: "key2opt2" } },
    //     { key3: "" },
    // ];

    return (
        <div>
            {/* {filters.map((filter, index) => (
                <div key={index}>
                    <p>
                        {index}-{Object.keys(filter)[0]}
                    </p>
                    {filter[Object.keys(filter)[0]].options &&
                        filter[Object.keys(filter)[0]].options.map((opt, optIndex) => (
                            <p key={optIndex}>{opt}</p>
                        ))}
                    <br />
                </div>
            ))} */}
            <table>
                <tbody>
                    {filters.map((filter, index) => (
                        <tr key={index}>
                            {Object.keys(filter)[0] && (
                                <>
                                    <td>{Object.keys(filter)[0]}</td>
                                    {Object.keys(filter)[0] === "search" ? (
                                        <td>
                                            <input type="text" />
                                        </td>
                                    ) : Array.isArray(filter[Object.keys(filter)[0]].options) ? (
                                        <td>
                                            <select>
                                                {filter[Object.keys(filter)[0]].options.map(
                                                    (option, optIndex) => (
                                                        <option key={optIndex}>{option}</option>
                                                    )
                                                )}
                                            </select>
                                        </td>
                                    ) : (
                                        <td>{filter[Object.keys(filter)[0]]}</td>
                                    )}
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <table className={classes["products-nav-table"]}>
                <tbody>
                    <tr>
                        {filters.map((filter, index) => (
                            <td key={index}>
                                <label>{Object.keys(filter)[index]}</label>
                            </td>
                        ))}
                        <td>
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={updatedFilters.category}
                                onChange={handleFiltersChange}
                            >
                                {filters.map((category) => (
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
            </table> */}
        </div>
    );
};

export default ReusableNav;
