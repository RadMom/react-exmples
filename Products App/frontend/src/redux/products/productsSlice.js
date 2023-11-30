import { createSlice, current } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: {},
        filteredProducts: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setProducts(state, action) {
            state.products = action.payload; //expecting products array
            state.isLoading = false;
            state.error = null;
            JSON.stringify(localStorage.setItem("products", JSON.stringify(action.payload)));
        },
        setProduct(state, action) {
            state.product = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setDeleteProduct(state, action) {
            const id = action.payload;
            state.products = state.products.filter((product) => product._id !== id);
            console.log(state.products);
            state.isLoading = false;
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
            console.log(action.payload);
            const id = action.payload.id;
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
    setIsLoading,
    setProducts,
    setProduct,
    setError,
    setDeleteProduct,
    setUpdatedProducts,
    setDecrementProductQuantity,
} = productsSlice.actions;

export default productsSlice.reducer;
