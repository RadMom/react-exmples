import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
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
            JSON.stringify(localStorage.setItem("products", JSON.stringify(state.products)));
        },
        setFilteredProdyctsByCategory(state, action) {
            const category = action.payload;
            const filteredProducts = state.products.filter(
                (product) => product.category === category
            );
            state.products = filteredProducts;
            JSON.stringify(localStorage.setItem("products", JSON.stringify(filteredProducts)));
            console.log(state.products);
        },
    },
});

export const {
    setLoading,
    setProducts,
    setProduct,
    setError,
    setDeleteProduct,
    setFilteredProdyctsByCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
