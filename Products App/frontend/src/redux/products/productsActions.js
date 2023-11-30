import axios from "axios";

import { setProducts, setProduct, setError, setIsLoading } from "./productsSlice";
import {
    setProductsPagination,
    setProductsFilters,
} from "../paginationAndFilters/paginationAndFiltersSlice";

const urlBase = "http://localhost:5000/";

//GET ALL Products
export const getProducts = (filters, page) => async (dispatch) => {
    dispatch(setIsLoading(true));
    console.log(filters);
    try {
        const { data } = await axios.get(urlBase + "products", {
            params: {
                page: page || 1,
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
export const getSingleProduct = (productId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    console.log(productId);

    try {
        const { data } = await axios.get(urlBase + "products/" + productId);
        console.log(data);
        dispatch(setProduct(data));
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
