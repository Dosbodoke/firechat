import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./app/pageSlice";
import authReducer from "./app/authSlice";

export const store = configureStore({
    reducer: {
        page: pageReducer,
        auth: authReducer,
    },
})