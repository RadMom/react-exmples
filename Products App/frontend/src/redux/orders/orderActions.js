import axios from "axios";

const urlBase = "http://localhost:5000/orders/";
const token = JSON.parse(localStorage.getItem("userInfo"))?.token || undefined;

//CREATE ORDER
export const createOrder = (products) => async (dispatch) => {
    console.log(products);
    try {
        const response = await axios.post(
            urlBase,
            { products },
            { headers: { authorization: `Bearer ${token}` } }
        );

        console.log(response);
    } catch (err) {
        console.error(err);
        return err;
    }
};
