import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'lobby',
  room: { key: '', name: '' }
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      const { name, room } = action.payload;
      state.name = name;
      state.room = room || initialState.room;
    }
  }
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
