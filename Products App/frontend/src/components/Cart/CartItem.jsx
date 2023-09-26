import React from "react";
import { setDecrementProductQuantity } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import {
    addItemToCart,
    subtractItemFromCart,
    removeItemFromCart,
} from "../../redux/slices/cartSlice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const subtractItemHandler = (id) => {
        dispatch(subtractItemFromCart(id));
    };

    const addItemHandler = (item) => {
        dispatch(addItemToCart(item));
    };

    const removeItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };
    return (
        <div className={classes.cartItem}>
            <div>
                <p>Name : {props.item.name}</p>
                <p>Price: {props.item.price}</p>

                <p>Total price for item: {props.item.totalPriceForItem}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={() => subtractItemHandler(props.item.id)}>-</button>
                <p>Quantity: {props.item.quantity}</p>
                <button onClick={() => addItemHandler(props.item)}>+</button>
            </div>
            <button onClick={() => removeItemHandler(props.item.id)}>Remove from cart</button>
        </div>
    );
};

export default CartItem;
