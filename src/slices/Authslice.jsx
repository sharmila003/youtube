
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
