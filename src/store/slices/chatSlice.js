import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    storeChat: (state, action) => {
      const { key, data } = action.payload;
      state[key] = data;
    },
    removeChat: (state, action) => {
      delete state[action.payload];
    }
  }
});

export const { storeChat, removeChat } = chatSlice.actions;

export default chatSlice.reducer;
