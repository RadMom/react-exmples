import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productsActions";

import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
    console.log("ProductsPage");
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const error = useSelector((state) => state.products.error);
    // const products = data.filteredProducts.length > 0 ? data.filteredProducts : data.products;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <ProductsList
            products={filteredProducts.length > 0 ? filteredProducts : products}
            error={error}
        />
    );
};

export default ProductsPage;
