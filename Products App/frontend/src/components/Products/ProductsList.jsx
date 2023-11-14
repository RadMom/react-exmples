import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductDetails from "./ProductDetails";
import classes from "./ProductsList.module.css";
import Pagination from "../Pagination";
import { getProducts } from "../../redux/products/productsActions";

const ProductsList = (props) => {
    const dispatch = useDispatch();
    const pagination = useSelector((state) => state.paginationAndFilters.pagination);
    const filters = useSelector((state) => state.paginationAndFilters.filters);
    const products = props.products;
    console.log(products);
    const error = props.error;

    const handlePageChange = (page) => {
        dispatch(getProducts({ ...filters, page }));
    };
    return (
        <div>
            <div className={classes.products}>
                <ul className={classes.list}>
                    {products ? (
                        products.map((product) => (
                            <li key={product._id} className={classes.item}>
                                <ProductDetails
                                    product={product}
                                    id={product._id}
                                    image={product.image}
                                    title={product.name}
                                    description={product.description}
                                    price={product.price}
                                ></ProductDetails>
                            </li>
                        ))
                    ) : (
                        <p>No Products</p>
                    )}
                </ul>
            </div>
            <Pagination
                totalPages={pagination.totalPages}
                currentPage={pagination.currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductsList;
