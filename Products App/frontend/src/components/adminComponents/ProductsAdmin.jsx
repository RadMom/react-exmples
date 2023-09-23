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

    return (
        <div className={classes["products-list"]}>
            {products && products.length > 0 ? (
                products.map((product) => <ProductAdmin key={product._id} product={product} />)
            ) : (
                <p>No Products</p>
            )}
        </div>
    );
};

export default ProductsAdmin;
