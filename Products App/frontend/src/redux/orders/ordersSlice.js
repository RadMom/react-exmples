import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    isLoading: false,
    error: null,
};

// const order = {
//     userId,
//     username,
//     userEmail,
//     orderItems: [],
//     shippingAddress: [],
//     paymentMethod,
//     paymentDetails,
//     shippingPrice,
//     totalPrice,
//     paidAt,
//     isDelivered,
//     deliveredAt,
// };
const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrder(state, action) {
            state.orders.push(action.payload);
            state.isLoading = false;
            state.error = null;
        },
        setError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setIsLoading(state, action) {
            state.error = null;
            state.isLoading = action.payload;
        },
    },
});

export const { setOrder, setError, setIsLOading } = orderSlice.actions;
export default orderSlice.reducer;
