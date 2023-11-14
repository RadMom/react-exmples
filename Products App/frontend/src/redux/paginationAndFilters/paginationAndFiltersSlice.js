import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagination: {
        totalPages: 0,
        currentPage: 1,
    },
    filters: {
        category: "",
        sortBy: "",
        search: "",
    },
};

const paginationAndFiltersSlice = createSlice({
    name: "paginationAndFilters",
    initialState,
    reducers: {
        setPagination(state, action) {
            state.pagination = { ...action.payload };
            console.log(action.payload);
        },
        setFilters(state, action) {
            state.filters = action.payload;
            console.log(action.payload);
        },
        setResetFilters(state) {
            state.filters = { category: "", sortBy: "", search: "" };
        },
    },
});

export const { setPagination, setFilters, setResetFilters } = paginationAndFiltersSlice.actions;
export default paginationAndFiltersSlice.reducer;
