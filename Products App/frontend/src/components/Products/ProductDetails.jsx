import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Login&Registration/Login";

import { addProductToCart, addItemToCartAndReduceQuantity } from "../../redux/cart/cartSlice";

import Card from "../../UI/Card";
import classes from "./ProductDetails.module.css";

import donkey from "../../assets/donkey.jpg";
import { setDecrementProductQuantity } from "../../redux/products/productsSlice";
import Modal from "../../UI/Modal";

const ProductDetails = (props) => {
    const { title, price, description, image, id } = props;
    const { userInfo } = useSelector((state) => state.auth);

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        if (!userInfo) {
            setShowModal(true);
            return;
        }
        dispatch(addProductToCart(props));
        dispatch(setDecrementProductQuantity(props));
    };

    const onClose = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <Modal onClose={onClose}>
                    <Login />
                </Modal>
            )}
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
        </>
    );
};

export default ProductDetails;
