import React from "react";
import { setDecrementProductQuantity } from "../../redux/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToCart,
    subtractProductFromCart,
    removeProductFromCart,
} from "../../redux/cart/cartSlice";

import classes from "./Cartproduct.module.css";
import donkey from "../../assets/donkey.jpg";

const CartProduct = (props) => {
    console.log(props);
    const productStock = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const subtractProductHandler = (id) => {
        dispatch(subtractProductFromCart(id));
    };

    const addProductHandler = (product) => {
        dispatch(addProductToCart(product));
    };

    const removeproductHandler = (id) => {
        dispatch(removeProductFromCart(id));
    };
    return (
        <div className={classes.cartproduct}>
            <div className={classes["product-info"]}>
                <div className={classes.image}>
                    <img src={donkey} />
                </div>
                <div className={classes.actions}>
                    <p>Name : {props.product.name}</p>

                    <div className={classes.buttons}>
                        <button
                            className={classes["btn-decrement"]}
                            // disabled={(props.product.stock = 0)}
                            onClick={() => subtractProductHandler(props.product.id)}
                        >
                            -
                        </button>
                        <p>{props.product.quantity}</p>
                        <button
                            className={classes["btn-increment"]}
                            onClick={() => addProductHandler(props.product)}
                        >
                            +
                        </button>
                    </div>
                    <button onClick={() => removeproductHandler(props.product.id)}>Remove</button>
                </div>

                <div className={classes.price}>
                    <p>Price: {props.product.price}</p>
                    <p>Total price for product: {props.product.totalPriceForItem}</p>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
