import React from "react";
import { setDecrementProductQuantity } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import {
    addItemToCart,
    subtractItemFromCart,
    removeItemFromCart,
} from "../../redux/slices/cartSlice";

import classes from "./CartItem.module.css";
import donkey from "../../assets/donkey.jpg";

const CartItem = (props) => {
    console.log(props);
    const productStock = useSelector((state) => state.products);
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
            <div className={classes["product-info"]}>
                <div className={classes.image}>
                    <img src={donkey} />
                </div>
                <div className={classes.actions}>
                    <p>Name : {props.item.name}</p>

                    <div className={classes.buttons}>
                        <button
                            className={classes["btn-decrement"]}
                            // disabled={(props.item.stock = 0)}
                            onClick={() => subtractItemHandler(props.item.id)}
                        >
                            -
                        </button>
                        {/* <p>{props.item.stock}</p> */}
                        <button
                            className={classes["btn-increment"]}
                            onClick={() => addItemHandler(props.item)}
                        >
                            +
                        </button>
                    </div>
                    <button onClick={() => removeItemHandler(props.item.id)}>Remove</button>
                </div>

                <div className={classes.price}>
                    <p>Price: {props.item.price}</p>
                    <p>Total price for item: {props.item.totalPriceForItem}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
