import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    product: null,
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = true;
        },
        setProducts(state, action) {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
            JSON.stringify(localStorage.setItem("products", JSON.stringify(action.payload)));
        },
        setProduct(state, action) {
            state.product = action.payload;
            state.loading = false;
            state.error = null;
            JSON.stringify(localStorage.setItem("product", action.payload));
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        setDeleteProduct(state, action) {
            const id = action.payload;
            state.products = state.products.filter((product) => product._id !== id);
            console.log(state.products);
            state.loading = false;
            state.error = null;
            JSON.stringify(localStorage.setItem("products", JSON.stringify(state.products)));
        },
        setUpdatedProducts(state, action) {
            const { _id } = action.payload;
            let index = state.products.findIndex((product) => product._id === _id);
            console.log(index);
            if (index >= 0) {
                state.products[index] = action.payload;
                JSON.stringify(localStorage.setItem("products", JSON.stringify(state.products)));
                console.log(state.products[index]);
            } else {
                state.error = "Can not update product...";
            }
        },
        setFilteredProdyctsByCategory(state, action) {
            const category = action.payload;
            if (category === "All") {
                state.filteredProducts = state.products;
                return;
            }

            state.filteredProducts = state.products.filter(
                (product) => product.category === category
            );
            if (state.filteredProducts.length === 0) {
                state.error = "no products";
                return;
            }
            state.error = null;
            console.log(state.filteredProducts);
        },
    },
});

export const {
    setLoading,
    setProducts,
    setProduct,
    setError,
    setDeleteProduct,
    setUpdatedProducts,
    setFilteredProdyctsByCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
