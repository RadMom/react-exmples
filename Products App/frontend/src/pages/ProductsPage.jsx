import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsNavigation from "../components/Navigations&Footer/ProductsNavigation";
import { getProducts } from "../redux/products/productsActions";

import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
    console.log("ProductsPage");
    const dispatch = useDispatch();
    const { products, filteredProducts, loading, error } = useSelector((state) => state.products);

    // const products = data.filteredProducts.length > 0 ? data.filteredProducts : data.products;

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <>
            <ProductsNavigation />
            {loading && !products && !filteredProducts && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {(products || filteredProducts) && (
                <ProductsList
                    products={filteredProducts.length > 0 ? filteredProducts : products}
                />
            )}
        </>
    );
};

export default ProductsPage;
