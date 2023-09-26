import { addItemToCart } from "../slices/cartSlice";
import { setDecrementProductQuantity } from "../slices/products";

export const addItemToCartAndReduceQuantity = (newItem) => (dispatch) => {
    dispatch(addItemToCart(newItem));
    dispatch(setDecrementProductQuantity(newItem));
};
