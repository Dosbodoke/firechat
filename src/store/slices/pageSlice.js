import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'lobby',
  roomId: ''
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      const { name, roomId } = action.payload
      state.name = name
      state.roomId = roomId || ''
    }
  }
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
