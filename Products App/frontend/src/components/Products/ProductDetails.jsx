import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Login from "../Login&Registration/Login";

import { addProductToCart } from "../../redux/cart/cartSlice";

import Card from "../../UI/Card";
import classes from "./ProductDetails.module.css";

import donkey from "../../assets/donkey.jpg";
import Modal from "../../UI/Modal";
import { getSingleProduct } from "../../redux/products/productsActions";

const ProductDetails = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const productId = useParams();
    console.log(productId);

    useEffect(() => {
        dispatch(getSingleProduct(productId));
    }, []);

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

            {/* <Card>
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
            </Card> */}
        </>
    );
};

export default ProductDetails;
