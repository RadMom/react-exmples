import { Link } from "react-router-dom";

import ProductDetails from "./ProductDetails";
import classes from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
    console.log(products);
    return (
        <div className={classes.products}>
            <h1>All Events</h1>

            <ul className={classes.list}>
                {products.map((product) => (
                    <ProductDetails
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        details={product.details}
                        price={product.price}
                    ></ProductDetails>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
