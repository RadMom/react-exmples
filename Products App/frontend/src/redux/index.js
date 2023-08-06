import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import productsSlice from "./slices/products"

const store = configureStore({
    reducer: {
        auth: authSlice,
        products:productsSlice,
        cart:cartSlice
    },
});

export default store;
