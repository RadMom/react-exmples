import React from "react";

import ProductsList from "../components/Products/ProductsList";

const products = [
    {
        id: "p1",
        image: "image1",
        title: "Product 1",
        details: "Product one Product one Product one Product one  Product one Product one",
        price: 10,
    },
    {
        id: "p2",
        image: "image2",
        title: "Product 2",
        details: "Product two Product two Product two Product",
        price: 20,
    },
    {
        id: "p3",
        image: "image1",
        title: "Product 3",
        details: "Prduct three Product three Product three",
        price: 30,
    },
    {
        id: "p4",
        image: "image4",
        title: "Product 4",
        details: "Product four Product four Product four",
        price: 40,
    },
];
const ProductsPage = () => {
    return <ProductsList products={products} />;
};

export default ProductsPage;
