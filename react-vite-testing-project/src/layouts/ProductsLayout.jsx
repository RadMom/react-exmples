import { Outlet } from "react-router-dom";

import ProductsNavigation from "../components/Navigations/ProductsNavigation";

const ProductsLayout = () => {
    return (
        <>
            <ProductsNavigation />
            <Outlet />
        </>
    );
};

export default ProductsLayout;
