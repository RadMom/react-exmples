import axios from "axios";

import { setLoading, setProducts, setError } from "./productsSlice";
import {
    setProductsPagination,
    setProductsFilters,
} from "../paginationAndFilters/paginationAndFiltersSlice";

const urlBase = "http://localhost:5000/";

//GET ALL Products
export const getProducts = (filters) => async (dispatch) => {
    dispatch(setLoading(true));
    console.log(filters);
    try {
        const { data } = await axios.get(urlBase + "products", {
            params: {
                page: filters?.page || 1,
                limit: filters?.itemsPerPage || 10,
                category: filters?.category || "",
                sortBy: filters?.sortBy || "",
                search: filters?.search || "",
            },
        });
        console.log(data);
        dispatch(setProducts(data.products));
        dispatch(
            setProductsPagination({ totalPages: data.totalPages, currentPage: data.currentPage })
        );
        dispatch(setProductsFilters(filters));
    } catch (error) {
        console.log(error);
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                    ? error.message
                    : "An unexpected error ..."
            )
        );
    }
};

//GET SINGLE Product
export const getSingleProduct = (id) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const { data } = await axios.get(urlBase + { id });
        console.log(data);
        dispatch(setProducts(data));
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                    ? error.message
                    : "An unexpected error ..."
            )
        );
    }
};
