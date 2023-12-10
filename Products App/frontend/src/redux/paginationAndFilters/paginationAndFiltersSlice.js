import { createSlice } from "@reduxjs/toolkit";

//TO DO LIST
//1. filters for adminUsers and adminOrders? adminProducts filter===products.filter

const initialState = {
    pagination: {
        products: { totalPages: 0, currentPage: 1 },
        users: { totalPages: 0, currentPage: 1 },
        orders: { totalPages: 0, currentPage: 1 },
    },
    filters: {
        products: { category: "", sortBy: "", search: "" },
        users: { searchBy: "id", search: "", usersPerPage: 10 },
        orders: { searchBy: "id", search: "", sortBy: "createdAt" },
    },
};

const paginationAndFiltersSlice = createSlice({
    name: "paginationAndFilters",
    initialState,
    reducers: {
        //products actions
        setProductsPagination(state, action) {
            state.pagination.products = { ...action.payload };
            console.log(action.payload);
        },
        setProductsFilters(state, action) {
            state.filters.products = { ...action.payload, search: "" };
            console.log(action.payload);
        },
        resetProductsFilters(state) {
            state.filters.products = { category: "", sortBy: "", search: "" };
        },

        //user actions
        setUsersPagination(state, action) {
            state.pagination.users = action.payload;
            console.log(action.payload);
        },
        setUsersFilters(state, action) {
            state.filters.users = action.payload;
            console.log(action.payload);
        },
        resetUsersFilters(state) {
            state.filters.users = { searchBy: "id", search: "", sortBy: "createdAt" };
        },

        //orders actions
        setOrdersPagination(state, action) {
            state.pagination.orders = { ...action.payload };
            console.log(action.payload);
        },
        setOrdersFilters(state, action) {
            state.filters.orders = action.payload;
            console.log(action.payload);
        },
        resetOrdersFilters(state) {
            state.filters.orders = { searchBy: "id", search: "", sortBy: "createdAt" };
        },
    },
});

export const {
    setProductsPagination,
    setProductsFilters,
    resetProductsFilters,
    setUsersPagination,
    setUsersFilters,
    resetUsersFilters,
    setOrdersPagination,
    setOrdersFilters,
    resetOrdersFilters,
} = paginationAndFiltersSlice.actions;
export default paginationAndFiltersSlice.reducer;
