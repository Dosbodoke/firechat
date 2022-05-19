import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    saveChat: (state, action) => {
      const { key, data } = action.payload;
      state[key] = data;
    }
  }
});

export const { saveChat } = chatSlice.actions;

export default chatSlice.reducer;
