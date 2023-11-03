import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = true;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        setUsers(state, action) {
            state.users = action.payload.users;
            state.loading = false;
            state.error = null;
        },
    },
});

export const { setLoading, setError, setUsers } = adminSlice.actions;
export default adminSlice.reducer;
