import React from "react";
import { useSelector,useDispatch } from "react-redux";

import ProductsList from "../components/Products/ProductsList";

const products=[]
const ProductsPage = () => {
    const dispatch=useDispatch()
    
    return <ProductsList products={products} />;
};

export default ProductsPage;
