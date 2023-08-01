import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAcrions } from "../../redux/cartSlice";

import Card from "../../UI/Card";
import classes from "./ProductDetails.module.css";

import donkey from"../../assets/donkey.jpg"

const ProductDetails = (props) => {
    const { title, price, description, image, id } = props;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log(cart);

    const addToCartHandler = () => {
        dispatch(cartAcrions.addItemToCart(props));
    };
    return (
        <li
            key={id}
            className={classes.item}
        >
            <Card>
                <header className={classes.header}>
                    <h3>{title}</h3>
                    <img className={classes.image}src={donkey}
                    
                    
                    />
                </header>
                <p className={classes.limit}>{description}</p>
                <div className={classes.price}>${price}</div>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductDetails;
