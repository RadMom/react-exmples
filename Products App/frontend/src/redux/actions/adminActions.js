import axios from "axios";
import { setProducts, setDeleteProduct } from "../slices/products";
import { setUsers } from "../slices/adminSlice";

const baseUrl = "http://localhost:5000/";
const getToken = JSON.parse(localStorage.getItem("userInfo")) || undefined;
let token = "";
if (getToken) {
    token = getToken.token;
}

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
            console.log(error.response.data);
        }
    };

//DELETE Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
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
            dispatch(setProducts(response.data));
        } catch (error) {
            console.log(error.response.data);
        }
    };

//GET ALL Users
export const getAllUsers = () => async (dispatch) => {
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
