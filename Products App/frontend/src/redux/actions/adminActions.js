import axios from "axios";
import { setDeleteProduct } from "../slices/products";

const baseUrl = "http://localhost:5000/";

export const createProduct =
    (productName, productImage, productCategory, productDescription, productPrice, productStock) =>
    async (dispatch) => {
        try {
            const token = JSON.parse(localStorage.getItem("userInfo")).token;
            console.log(token);
            const response = await axios.post(
                baseUrl + "products",
                {
                    // user: req.user._id,
                    name: productName,
                    image: productImage,
                    category: productCategory,
                    description: productDescription,
                    price: productPrice,
                    stock: productStock,
                },
                { headers: { authorization: `Bearer ${token}` } }
            );

            if (response.statusText !== "OK") {
                console.log(response);
                dispatch(login(response.data));

                console.log("Login!!!");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

//DELETE Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const token = JSON.parse(localStorage.getItem("userInfo")).token;
        console.log(token);
        const response = await axios.delete(baseUrl + "products/" + id, {
            headers: { authorization: `Bearer ${token}` },
        });

        if (response.statusText !== "OK") {
            console.log(response);
            dispatch(login(response.data));

            console.log("Login!!!");
            navigate("/");
        }

        dispatch(setDeleteProduct(id));
    } catch (error) {
        console.log(error);
    }
};

//EDIT Product
export const editProduct =
    (
        productName,
        productImage,
        productCategory,
        productDescription,
        productPrice,
        productStock,
        _id
    ) =>
    async (dispatch) => {
        try {
            const token = JSON.parse(localStorage.getItem("userInfo")).token;
            console.log(token);
            const response = await axios.put(
                `${baseUrl}products/${_id}`,
                {
                    // user: req.user._id,
                    name: productName,
                    image: productImage,
                    category: productCategory,
                    description: productDescription,
                    price: productPrice,
                    stock: productStock,
                },
                { headers: { authorization: `Bearer ${token}` } }
            );

            if (response.statusText !== "OK") {
                console.log(response);
                dispatch(login(response.data));

                console.log("Login!!!");
                navigate("/");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

//GET ALL Users
export const getAllUsers = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const { data } = await axios.get(urlBase + "users");
        console.log(data);
        dispatch(setUsers(data));
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

//GET SINGLE User
export const getSingleUser = (id) => async (dispatch) => {};

//EDIT USER
export const editUser = () => async (dispatch) => {}; //must check user info and what to pass

//DELETE User
export const deleteUser = (id) => async (dispatch) => {};

//GET ALL Orders
export const getAllOrders = () => async (dispatch) => {};

//GET USER Orders
export const getUserOrders = (id) => async (dispatch) => {};

//DELETE Order
export const deleteOrder = (id) => async (dispatch) => {};

//EDIT Order
export const consteditOrder = () => async (dispatch) => {}; //must check what to pass
