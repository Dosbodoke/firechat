import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  name: '',
  photoURL: '',
  uid: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      const data = action.payload;
      if (data) {
        Object.assign(state, data, { isLoggedIn: true });
      } else {
        Object.assign(state, initialState);
      }
    }
  }
});

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
