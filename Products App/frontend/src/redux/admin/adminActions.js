import axios from "axios";
import { setUpdatedProducts, setDeleteProduct } from "../products/productsSlice";
import { setUsers } from "./adminSlice";
import store from "../index";

const baseUrl = "http://localhost:5000/";
const token = JSON.parse(localStorage.getItem("userInfo"))?.token || undefined;
// let token = "";
// if (getToken) {
//     token = getToken.token;
// }

export const createProduct =
    (productName, productImage, productCategory, productDescription, productPrice, productStock) =>
    async (dispatch) => {
        try {
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

            // if (response.statusText !== "OK") {
            //     console.log(response);
            //     dispatch(login(response.data));

            //     console.log("Login!!!");
            //     navigate("/");
            // }
        } catch (error) {
            console.log(error.response);
        }
    };

//DELETE Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
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
            console.log(response.data);
            dispatch(setUpdatedProducts(response.data));
        } catch (error) {
            console.log(error);
        }
    };

//GET ALL Users
export const getAllUsers = () => async (dispatch, getState) => {
    const token = getState().auth.userInfo.token;
    console.log(token);
    // const state = store.getState();
    // const token = state.auth.userInfo?.token || undefined;
    try {
        const { data } = await axios.get(baseUrl + "user", {
            headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        dispatch(setUsers(data));
    } catch (error) {
        console.log(error);
    }
};

//GET SINGLE User
export const getSingleUser = (id) => async (dispatch) => {
    try {
    } catch (error) {}
};

//EDIT USER
export const editUser = () => async (dispatch) => {
    try {
    } catch (error) {}
}; //must check user info and what to pass

//DELETE User
export const deleteUser = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(baseUrl + "user/" + id, {
            headers: { authorization: `Bearer ${token}` },
        });

        if (response.statusText !== "OK") {
            return response;
        }

        dispatch(setDeleteProduct(id));
    } catch (error) {
        console.log(error);
    }
};

//GET ALL Orders
export const getAllOrders = () => async (dispatch) => {
    const response = await axios.get(baseUrl + "orders/admin/orders");
};

//GET USER Orders
export const getUserOrders = (id) => async (dispatch) => {};

//DELETE Order
export const deleteOrder = (id) => async (dispatch) => {};

//EDIT Order
export const editOrder = () => async (dispatch) => {}; //must check what to pass
