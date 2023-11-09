import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setUsers(state, action) {
            state.users = action.payload.users;
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const { setLoading, setError, setUsers } = adminSlice.actions;
export default adminSlice.reducer;
