import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToCart,
    subtractProductFromCart,
    removeProductFromCart,
} from "../../redux/cart/cartSlice";

import classes from "./CartProduct.module.css";
import donkey from "../../assets/donkey.jpg";

const CartProduct = (props) => {
    console.log(props);
    // TO DO LIST FOR THIS COMPONENT:
    // 1. if product.stock==0 => disable add button
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    console.log(products);

    const subtractProductHandler = (id) => {
        dispatch(subtractProductFromCart(id));
    };

    const addProductHandler = (product) => {
        dispatch(addProductToCart(product));
    };

    const removeProductHandler = (id) => {
        dispatch(removeProductFromCart(id));
    };

    return (
        <table className={classes.cartproduct}>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={classes.image}>
                        <img src={donkey} alt={props.product.name} />
                    </td>
                    <td className={classes.name}>
                        <p>{props.product.name}</p>
                    </td>
                    <td className={classes.quantity}>
                        <div className={classes.buttons}>
                            <button
                                className={classes["btn-decrement"]}
                                onClick={() => subtractProductHandler(props.product.id)}
                            >
                                -
                            </button>
                            <p>
                                {props.product.quantity > props.product.stock
                                    ? props.product.stock
                                    : props.product.quantity}
                            </p>
                            <button
                                disabled={props.product.quantity >= props.product.maxQuantity}
                                className={classes["btn-increment"]}
                                onClick={() => addProductHandler(props.product)}
                            >
                                +
                            </button>
                        </div>
                        <button onClick={() => removeProductHandler(props.product.id)}>
                            Remove
                        </button>
                    </td>
                    <td className={classes.price}>
                        <p>{props.product.price}</p>
                        <p>Total price for product: {props.product.totalPriceForItem}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CartProduct;
