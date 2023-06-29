import { Link } from "react-router-dom";
import classes from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
    console.log(products);
    return (
        <div className={classes.products}>
            <h1>All Events</h1>
            <ul className={classes.list}>
                {products.map((product) => (
                    <li
                        key={product.id}
                        className={classes.item}
                    >
                        <Link to={`/products/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.title}
                            />
                            <div className={classes.content}>
                                <h2>{product.title}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
