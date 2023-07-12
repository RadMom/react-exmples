import React from "react";

import Card from "../../UI/Card";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
    const { title, price, details, image, id } = props;
    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                {/* <p>{details}</p> */}
                <div className={classes.actions}>
                    <button>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductDetails;
