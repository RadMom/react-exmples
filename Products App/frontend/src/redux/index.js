import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import productsSlice from "./products/productsSlice";
import adminSlice from "./admin/adminSlice";
import ordersSlice from "./orders/ordersSlice";
import paginationAndFiltersSlice from "./paginationAndFilters/paginationAndFiltersSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
        cart: cartSlice,
        admin: adminSlice,
        orders: ordersSlice,
        paginationAndFilters: paginationAndFiltersSlice,
    },
});

export default store;
