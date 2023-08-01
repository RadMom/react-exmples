import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductDetails from "./ProductDetails";
import classes from "./ProductsList.module.css";

const ProductsList = (props) => {
    const products = props.products;
    console.log(props);
    return (
        <div className={classes.products}>
            
            <ul className={classes.list}>
                {products ? (
                    products.map((product) => (
                        <ProductDetails
                            id={product._id}
                            key={product._id}
                            image={product.image}
                            title={product.name}
                            description={product.description}
                            price={product.price}
                        ></ProductDetails>
                    ))
                ) : (
                    <p>No Products</p>
                )}
            </ul>
        </div>
    );
};

export default ProductsList;
