import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAcrions } from "../../redux/cartSlice";

import classes from "./Cart.module.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log(cart.items);

    const subtractItemHandler=(id)=>{
      dispatch(cartAcrions.removeItemFromCart(id))
    }

    const addItemHandler=(item)=>{
      dispatch(cartAcrions.addItemToCart(item))
    }
    return (
        <div className={classes.cart}>
            {cart.items.length > 0 ? (
              <div>
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.id}>
                            <div>
                                <p>Name : {item.name}</p>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total price for item: {item.totalPriceForItem}</p>
                            </div>
                            <div>
                              <button onClick={()=>subtractItemHandler(item.id)}>-</button>
                              <button onClick={()=>addItemHandler(item)}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <p>Total Price: {cart.totalPrice}</p>
                </div>
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
};

export default Cart;
