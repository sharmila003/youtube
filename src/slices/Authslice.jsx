/*import { createSlice } from '@reduxjs/toolkit';

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



export default authSlice.reducer;*/


// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    watchLaterList: [],
  },
  reducers: {
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload;
    //  state.user = action.payload.user;
    },
    setLogoutState: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    addToWatchLater(state, action) {
      state.watchLaterList.push(action.payload);
    },
    removeFromWatchLater: (state, action) => {
      state.watchLaterList = state.watchLaterList.filter(id => id !== action.payload);
    },
  },
});

export const { setLoginState, setLogoutState ,addToWatchLater, removeFromWatchLater } = authSlice.actions;
export default authSlice.reducer;
