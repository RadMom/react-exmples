import axios from "axios";

import { setLoading, setProducts, setError } from "./productsSlice";

const urlBase = "http://localhost:5000/";

//GET ALL Products
export const getProducts = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const { data } = await axios.get(urlBase + "products");
        dispatch(setProducts(data));
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
        dispatch(setProduct(data));
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