
// Watchlaterslice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWatchLaterVideos, saveVideoToWatchLater, deleteVideoFromWatchLater } from '../Firestore';
import { auth } from '../firebase';

export const fetchWatchLater = createAsyncThunk('watchLaterlist/fetchWatchLater', async () => {
  const user = auth.currentUser;
  if (!user) return [];
  
  return await getWatchLaterVideos(user.uid);
});

export const addToWatchLater = createAsyncThunk('watchLaterlist/addToWatchLater', async (video) => {
  const user = auth.currentUser;
  if (!user) throw new Error('User not authenticated');
  
  return await saveVideoToWatchLater(user.uid, video);
});

export const removeFromWatchLater = createAsyncThunk('watchLaterlist/removeFromWatchLater', async (videoId) => {
  const user = auth.currentUser;
  if (!user) throw new Error('User not authenticated');

  await deleteVideoFromWatchLater(user.uid, videoId);
  return videoId;
});

const watchLaterSlice = createSlice({
  name: 'watchLaterlist',
  initialState: {
    videos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchLater.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWatchLater.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchWatchLater.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addToWatchLater.fulfilled, (state, action) => {
        state.videos.push(action.payload);
      })
      .addCase(removeFromWatchLater.fulfilled, (state, action) => {
        state.videos = state.videos.filter(video => video.id !== action.payload);
      });
  },
});

export default watchLaterSlice.reducer;


