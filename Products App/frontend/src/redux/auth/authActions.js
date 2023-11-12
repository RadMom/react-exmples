import axios from "axios";
import { setLogin, setLogout, setError } from "./authSlice";

export const login = (email, password, navigate) => async (dispatch) => {
    console.log(email, password);
    try {
        const response = await axios.post("http://localhost:5000/user/login", {
            email,
            password,
        });
        if (response.statusText === "OK") {
            dispatch(setLogin(response.data));
            navigate("/products");
        }
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

export const registration = (username, email, password, navigate) => async (dispatch) => {
    console.log(email, password);
    try {
        const response = await axios.post("http://localhost:5000/user/registration", {
            username,
            email,
            password,
        });
        if (response.statusText === "OK") {
            dispatch(setLogin(response.data));
            navigate("/products");
        }
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
