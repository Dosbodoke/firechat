import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./app/pageSlice";

export const store = configureStore({
    reducer: {
        page: pageReducer,
    },
})