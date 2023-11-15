import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsNavigation from "../components/Navigations&Footer/ProductsNavigation";
import { getProducts } from "../redux/products/productsActions";

import ProductsList from "../components/Products/ProductsList";
import ReusableNav from "../components/Navigations&Footer/ReusableNav";

const ProductsPage = () => {
    console.log("ProductsPage");
    const dispatch = useDispatch();
    const { products, filteredProducts, loading, error } = useSelector((state) => state.products);

    // console.log(typeof products);
    // console.log(typeof filteredProducts);
    useEffect(() => {
        console.log(products.length);
        if (products.length <= 0) {
            dispatch(getProducts());
            console.log("fetched");
        }
    }, [dispatch]);

    const filterOptions = [
        { category: { options: ["all", "test1", "test2", "test3", "test4"] } },
        { sortBy: { options: ["lowest", "highest"] } },
        { itemsPerPage: { options: [5, 10, 20] } },
        { search: "" },
    ];

    return (
        <>
            <ReusableNav options={filterOptions} />
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
