import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAcrions } from "../../redux/cartSlice";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const subtractItemHandler = (id) => {
        dispatch(cartAcrions.subtractItemFromCart(id));
    };

    const addItemHandler = (item) => {
        dispatch(cartAcrions.addItemToCart(item));
    };

    const orderHandler = () => {};
    return (
        <div >
            {cart.items.length > 0 ? (
                <div className={classes.cart}>
                    <div>
                        <ul>
                            {cart.items.map((item) => (
                                <li key={item.id}>
                                    <CartItem
                                        item={item}
                                        onSubtract={subtractItemHandler}
                                        onAdd={addItemHandler}
                                    />
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
