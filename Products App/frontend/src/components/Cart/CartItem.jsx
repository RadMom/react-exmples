import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { cartAcrions } from "../../redux/cartSlice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const subtractItemHandler = (id) => {
        dispatch(cartAcrions.subtractItemFromCart(id));
    };

    const addItemHandler = (item) => {
        dispatch(cartAcrions.addItemToCart(item));
    };

    const removeItemHandler=(id)=>{
        dispatch(cartAcrions.removeItemFromCart(id))
    }
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
