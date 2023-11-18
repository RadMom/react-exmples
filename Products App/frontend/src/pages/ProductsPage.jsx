import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import ProductsNavigation from "../components/Navigations&Footer/ProductsNavigation";
import ProductsList from "../components/Products/ProductsList";
import ReusableNav from "../components/Navigations&Footer/ReusableNav";
import Pagination from "../components/Pagination";

//actions
import { getProducts } from "../redux/products/productsActions";

const ProductsPage = () => {
    console.log("ProductsPage");
    const dispatch = useDispatch();
    const { products, filteredProducts, loading, error } = useSelector((state) => state.products);
    const productsPagination = useSelector(
        (state) => state.paginationAndFilters.pagination.products
    );
    const productsFilters = useSelector((state) => state.paginationAndFilters.filters.products);

    useEffect(() => {
        console.log(products.length);
        if (products.length <= 0) {
            dispatch(getProducts());
            console.log("fetched");
        }
    }, [dispatch]);

    const handlePageChange = (page) => {
        dispatch(getProducts({ ...productsFilters, page }));
    };

    // const filterOptions = [
    //     { category: { options: ["all", "test1", "test2", "test3", "test4"] } },
    //     { sortBy: { options: ["lowest", "highest"] } },
    //     { itemsPerPage: { options: [5, 10, 20] } },
    //     { search: "" },
    // ];

    return (
        <div>
            {/* <ReusableNav options={filterOptions} /> */}
            <ProductsNavigation />
            {loading && !products && !filteredProducts && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {(products || filteredProducts) && (
                <>
                    <ProductsList
                        products={filteredProducts.length > 0 ? filteredProducts : products}
                    />
                    <Pagination
                        totalPages={productsPagination.totalPages}
                        currentPage={productsPagination.currentPage}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
};

export default ProductsPage;
