import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productsActions";

import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
    const productsList = useSelector((state) => state.products);
    const { products } = productsList;
    const dispatch = useDispatch();
    console.log(productsList);

    //MUST CHECK localeStorage ???
    
    const test = JSON.parse(localStorage.getItem("products"));
    console.log(test);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <ProductsList products={test} />;
};

export default ProductsPage;
