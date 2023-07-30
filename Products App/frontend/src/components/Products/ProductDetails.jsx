import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartAcrions } from "../../redux/cartSlice";

import Card from "../../UI/Card";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
    const { title, price, description, image, id } = props;
    const dispatch=useDispatch()
    const cart = useSelector((state) => state.cart);
    console.log(cart);

    const addToCartHandler = () => {
       dispatch(cartAcrions.addItemToCart(props))
    };
    return (
        <li
            key={id}
            className={classes.item}
        >
            <Card>
                <header>
                    <h3>{title}</h3>
                    <img
                        src={image}
                       
                    />
                    <div className={classes.price}>${price}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductDetails;
