import classes from "./ProductsList.module.css";

//components
import ProductDetails from "./ProductDetails";

const ProductsList = (props) => {
    const products = props.products;
    console.log(products);
    const error = props.error;

    return (
        <div>
            <div className={classes.products}>
                <ul className={classes.list}>
                    {products ? (
                        products.map((product) => (
                            <li key={product._id} className={classes.item}>
                                <ProductDetails
                                    product={product}
                                    id={product._id}
                                    image={product.image}
                                    title={product.name}
                                    description={product.description}
                                    price={product.price}
                                ></ProductDetails>
                            </li>
                        ))
                    ) : (
                        <p>No Products</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProductsList;
