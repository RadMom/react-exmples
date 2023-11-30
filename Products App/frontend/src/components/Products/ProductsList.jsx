import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductsList.module.css";

import { addProductToCart } from "../../redux/cart/cartSlice";
import donkey from "../../assets/donkey.jpg";
//components
import ProductDetails from "./ProductDetails";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";
import Login from "../Login&Registration/Login";

const ProductsList = (props) => {
    const { userInfo } = useSelector((state) => state.auth);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const products = props.products;
    const error = props.error;
    console.log(props);

    const addToCartHandler = (product) => {
        console.log(product);
        if (!userInfo) {
            setShowModal(true);
            return;
        }
        const productInfo = {
            id: product._id,
            name: product.name,
            price: product.price,
            stock: product.stock,
        };
        dispatch(addProductToCart(productInfo));
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {showModal && (
                <Modal closeModal={closeModal}>
                    <Login closeModal={closeModal} />
                </Modal>
            )}
            <div className={classes.products}>
                <div className={classes.list}>
                    {products ? (
                        products.map((product) => (
                            <Card key={product._id} className={classes["product-card"]}>
                                <NavLink to={`${product._id}`}>
                                    <header className={classes["product-header"]}>
                                        <img className={classes.image} src={donkey} />
                                        <h2>{product.name}</h2>
                                    </header>
                                </NavLink>
                                <div className={classes["price-and-stock"]}>
                                    <p className={classes.price}>${product.price}</p>
                                    <p className={classes.stock}>Stock: {product.stock}</p>
                                </div>
                                <div className={classes.actions}>
                                    <button
                                        onClick={() => addToCartHandler(product)}
                                        disabled={product.stock == 0}
                                        className={
                                            product.stock > 0 ? "btn-active" : "btn-inactive"
                                        }
                                    >
                                        {product.stock > 0 ? "Add to cart" : "Out of stock"}
                                    </button>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <p>No Products</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
