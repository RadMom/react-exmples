import axios from "axios";

import { setLoading, setProducts, setProduct, setError } from "../slices/products";

const urlBase = "http://localhost:5000/";

//GET ALL Products
export const getProducts = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const {data} = await axios.get(urlBase + "products");
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

//GET SINGLE Product
export const getSingleProduct= (id) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const {data} = await axios.get(urlBase + {id});
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


