import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) ?? null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, actions) => {
            state.userInfo = actions.payload;
            localStorage.setItem("userInfo", JSON.stringify(actions.payload));

            //set expirationTime
            const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; //30 days
            localStorage.setItem("expirationTime", expirationTime);
            console.log(expirationTime);
        },

        logout: (state, actions) => {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("expirationTime");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
