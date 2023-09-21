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
        setLogin(state, actions) {
            state.error = null;
            state.isLoading = true;
            state.userInfo = actions.payload;
            localStorage.setItem("userInfo", JSON.stringify(actions.payload));

            //set expirationTime
            const expirationTime = new Date().getTime() + 1 * 24 * 60 * 60 * 1000; //1 day
            localStorage.setItem("expirationTime", expirationTime);
            console.log(expirationTime);
            state.isLoading = false;
        },

        setLogout(state, actions) {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
            localStorage.removeItem("expirationTime");
            localStorage.removeItem("products");
        },

        setError(state, actions) {
            state.error = actions.payload;
        },
    },
});

export const { setLogin, setLogout, setError } = authSlice.actions;
export default authSlice.reducer;
