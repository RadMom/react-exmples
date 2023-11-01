import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteProduct } from "../../redux/actions/adminActions";
import { addItemToCartAndReduceQuantity } from "../../redux/slices/cartSlice";

import Card from "../../UI/Card";
import classes from "./ProductDetails.module.css";

import donkey from "../../assets/donkey.jpg";

const ProductDetails = (props) => {
    const { title, price, description, image, id } = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addItemToCartAndReduceQuantity(props));
    };

    return (
        <Card>
            <header className={classes.header}>
                <h3>{title}</h3>
                <img className={classes.image} src={donkey} />
            </header>
            <div className={classes.description}>
                <p>{description}</p>
            </div>

            <div className={classes["price-and-stock"]}>
                <p className={classes.price}>${price}</p>
                <p className={classes.stock}>Stock: {props.product.stock}</p>
            </div>

            <div className={classes.actions}>
                <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </Card>
    );
};

export default ProductDetails;
