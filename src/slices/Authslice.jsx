import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  watchLaterList: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.watchLaterList = [];
    },
    addToWatchLater(state, action) {
      state.watchLaterList.push(action.payload);
    },
  },
});

export const { login, logout, addToWatchLater } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectWatchLater = (state) => state.auth.watchLater;



export default authSlice.reducer;
