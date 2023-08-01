import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
    return (
        <div>
            <div>
                <p>Name : {props.item.name}</p>
                <p>Price: {props.item.price}</p>
                <p>Quantity: {props.item.quantity}</p>
                <p>Total price for item: {props.item.totalPriceForItem}</p>
            </div>
            <div>
                <button onClick={() => props.onSubtract(props.item.id)}>-</button>
                <button onClick={() => props.onAdd(props.item)}>+</button>
            </div>
        </div>
    );
};

export default CartItem;
