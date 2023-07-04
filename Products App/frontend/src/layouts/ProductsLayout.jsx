import { Outlet } from "react-router-dom";

import ProductsNavigation from "../components/Navigations&Footer/ProductsNavigation";
import classes from"./ProductsLayout.module.css"

const ProductsLayout = () => {
    return (
        <div className={classes.products}>
            <ProductsNavigation />
            <Outlet />
        </div>
    );
};

export default ProductsLayout;
