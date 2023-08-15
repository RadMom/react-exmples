import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    //Must finish order action
    const orderHandler = () => {};
    return (
        <div>
            {cart.items.length > 0 ? (
                <div className={classes.cart}>
                    <div>
                        <ul className={classes.cartItems}>
                            {cart.items.map((item) => (
                                <li key={item.id}>
                                    <CartItem item={item} />
                                </li>
                            ))}
                        </ul>
                        <p>Total Price: {cart.totalPrice}</p>
                    </div>
                    <div>
                        <button onClick={orderHandler}>Buy</button>
                    </div>
                </div>
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
};

export default Cart;
