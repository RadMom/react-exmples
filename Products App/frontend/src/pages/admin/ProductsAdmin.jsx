import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import ProductAdmin from "../../components/adminComponents/ProductAdmin";
import ProductsNavigation from "../../components/Navigations&Footer/ProductsNavigation";
import Pagination from "../../components/Pagination";

//actions
import { getProducts } from "../../redux/products/productsActions";

import classes from "./ProductsAdmin.module.css";

const ProductsAdmin = () => {
    const products = useSelector((state) => state.products.products);
    const productsPagination = useSelector(
        (state) => state.paginationAndFilters.pagination.products
    );
    const productsFilters = useSelector((state) => state.paginationAndFilters.filters.products);

    //TO DO LIST
    //1. Pagination
    //2. Filters -same as in productsList

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts());
        console.log("PRODUCTS ADMIN");
    }, [dispatch]);

    const handlePageChange = (page) => {
        dispatch(getProducts(productsFilters, page));
    };
    return (
        <div className={classes["products-list"]}>
            <ProductsNavigation />
            {products && products.length > 0 ? (
                products.map((product) => <ProductAdmin key={product._id} product={product} />)
            ) : (
                <p>No Products</p>
            )}
            <Pagination
                totalPages={productsPagination.totalPages}
                currentPage={productsPagination.currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductsAdmin;
