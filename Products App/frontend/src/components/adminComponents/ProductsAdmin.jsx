import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ProductAdmin from "./ProductAdmin";

import { getProducts } from "../../redux/actions/productsActions";
import { deleteProduct } from "../../redux/actions/adminActions";

import classes from "./ProductsAdmin.module.css";
import donkey from "../../assets/donkey.jpg";

const ProductsAdmin = () => {
    const products = useSelector((state) => state.products.products);

    console.log(products);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts());
        console.log("PRODUCTS ADMIN");
    }, [dispatch]);

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
    };

    const editProductHandler = () => {};

    return (
        <div className={classes.products}>
            <ul className={classes.list}>
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <li key={product._id}>
                            <ProductAdmin product={product} />
                            <button onClick={() => deleteProductHandler(product._id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No Products</p>
                )}
            </ul>
        </div>
    );
};

export default ProductsAdmin;
