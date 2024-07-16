// watchLaterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const watchLaterSlice = createSlice({
  name: 'watchLaterList',
  initialState: [],
  reducers: {
    addToWatchLater: (state, action) => {
      state.push(action.payload);
    },
    removeFromWatchLater: (state, action) => {
      return state.filter(video => video.id !== action.payload.id);
    },
  },
});

export const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;
