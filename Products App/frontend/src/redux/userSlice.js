import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) ?? null,
    isLoading:false,
    error:null,
    
    
};
