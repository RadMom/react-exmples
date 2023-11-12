import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createOrder } from "../../redux/orders/orderActions";

import classes from "./Cart.module.css";
import { NavLink } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log(typeof cart.products);
    //Must finish order action
    const orderHandler = () => {
        dispatch(createOrder(cart.products));
    };
    return (
        <div>
            {cart.products.length > 0 ? (
                <div className={classes.cart}>
                    <div>
                        <ul className={classes.cartItems}>
                            {cart.products.map((product) => (
                                <li key={product.id}>
                                    <CartProduct product={product} />
                                </li>
                            ))}
                        </ul>
                        <p>Total Price: {cart.totalPrice}</p>
                    </div>
                    <div>
                        <NavLink to="/order">Order</NavLink>
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
