import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const productsSlice=({
    name:"products",
    initialState,
    reducers:{
        setProducts
    }
})