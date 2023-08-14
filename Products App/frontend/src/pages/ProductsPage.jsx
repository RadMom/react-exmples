import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productsActions";

import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    // const products = data.filteredProducts.length > 0 ? data.filteredProducts : data.products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <ProductsList products={filteredProducts.length > 0 ? filteredProducts : products} />;
};

export default ProductsPage;
