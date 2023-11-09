import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    isLoading: false,
    error: null,
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrder(state, action) {
            state.orders.push(action.payload);
            (state.isLoading = false), (state.error = null);
        },
        setError(state, action) {
            (state.isLoading = false), (state.error = action.payload);
        },
        setIsLOading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const { setOrder, setError, setIsLOading } = orderSlice.actions;
export default orderSlice.reducer;
