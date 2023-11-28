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
        dispatch(addProductToCart(props));
    };

    const closeModal = () => {
        setShowModal(false);
    };

    //How to manage product stock?
    // Every time when fetch products to check cart products and reduce product stock?
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
                    <p className={classes.stock}>Stock: {props.stock}</p>
                </div>

                <div className={classes.actions}>
                    <button
                        onClick={addToCartHandler}
                        disabled={props.stock == 0}
                        className={props.stock > 0 ? "btn-active" : "btn-inactive"}
                    >
                        {props.stock > 0 ? "Add to cart" : "Out of stock"}
                    </button>
                </div>
            </Card>
        </>
    );
};

export default ProductDetails;
