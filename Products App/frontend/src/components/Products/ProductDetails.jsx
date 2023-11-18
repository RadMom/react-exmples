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
    const productsError = useSelector((state) => state.products.error);

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        if (!userInfo) {
            setShowModal(true);
            return;
        }
        dispatch(setDecrementProductQuantity(props));
        if (!productsError) {
            dispatch(addProductToCart(props));
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <Modal closeModal={closeModal}>
                    <Login closeModal={closeModal} />
                </Modal>
            )}
            <Card>
                <header className={classes.header}>
                    <h3 data-full-text={title}>{title}</h3>
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
