import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import productsSlice from "./products/products";
import adminSlice from "./admin/adminSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
        cart: cartSlice,
        admin: adminSlice,
    },
});

export default store;
