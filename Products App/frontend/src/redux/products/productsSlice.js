import { createSlice, current } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        filteredProducts: [],
        loading: false,
        error: null,
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setProducts(state, action) {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
            JSON.stringify(localStorage.setItem("products", JSON.stringify(action.payload)));
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
        setDecrementProductQuantity(state, action) {
            console.log(current(state.products));
            console.log(action.payload);
            const id = action.payload.id;
            console.log(action.payload.id);
            const existingItem = state.products.find((product) => product._id == id);
            console.log(existingItem);
            if (existingItem) {
                if (existingItem.stock > 0) {
                    existingItem.stock--;
                } else {
                    throw new Error("Product quantity is 0!!! )");
                }
            }
        },
        setFilteredProdyctsByCategory(state, action) {
            console.log(action.payload);
            const category = action.payload;
            if (category === "All") {
                state.filteredProducts = [];
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
    // extraReducers: (builder) =>
    //     builder.addCase(addItemToCart, (state, action) => {
    //         const id = action.payload.id;

    //         // Find the product in the cart and decrement its stock if necessary
    //         const existingItem = state.products.find((item) => item.id === id);

    //         if (existingItem) {
    //             // Check the product stock and decrement if available
    //             const existingProduct = products.find((product) => product._id === id);

    //             if (existingProduct && existingProduct.stock > 0) {
    //                 existingProduct.stock--;
    //             }
    //         }
    //     }),
});

export const {
    setLoading,
    setProducts,
    setProduct,
    setError,
    setDeleteProduct,
    setUpdatedProducts,
    setFilteredProdyctsByCategory,
    setDecrementProductQuantity,
} = productsSlice.actions;

export default productsSlice.reducer;
