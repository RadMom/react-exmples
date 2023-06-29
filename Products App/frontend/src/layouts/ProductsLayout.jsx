import { Outlet } from "react-router-dom";

import ProductsNavigation from "../components/Navigations/ProductsNavigation";

const ProductsLayout = () => {
    return (
        <div className="products-layout">
            <ProductsNavigation />
            <Outlet />
        </div>
    );
};

export default ProductsLayout;
