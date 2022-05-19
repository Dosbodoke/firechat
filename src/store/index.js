import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import authReducer from './slices/authSlice';
import chatReducer from './slices/chatSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    auth: authReducer,
    chat: chatReducer
  }
});
