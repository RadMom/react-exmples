import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAcrions } from "../../redux/cartSlice";
import { deleteProduct } from "../../redux/actions/adminActions";

import Card from "../../UI/Card";
import classes from "./ProductDetails.module.css";

import donkey from "../../assets/donkey.jpg";

const ProductDetails = (props) => {
    const { title, price, description, image, id } = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartAcrions.addItemToCart(props));
    };

    return (
        <Card>
            <header className={classes.header}>
                <h3>{title}</h3>
                <img
                    className={classes.image}
                    src={donkey}
                />
            </header>
            <p className={classes.limit}>{description}</p>
            <div className={classes.price}>${price}</div>
            <div className={classes.actions}>
                <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </Card>
    );
};

export default ProductDetails;
