import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import authSlice from "./authSlice";
import productsSlice from "./slices/products";
import adminSlice from "./slices/adminSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
        cart: cartSlice,
        admin: adminSlice,
    },
});

export default store;
