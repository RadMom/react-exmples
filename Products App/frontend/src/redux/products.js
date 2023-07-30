import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action) {},
    },
});

export default productsSlice.reducer;
