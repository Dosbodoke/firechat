import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
    },
})

// export const { saveUser } = authSlice.actions;
export const { setLoggedIn } = authSlice.actions;

export default authSlice.reducer;

