import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createOrder } from "../../redux/orders/orderActions";
import CartItem from "./CartProduct";
import classes from "./Cart.module.css";

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
                                    <CartItem product={product} />
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
