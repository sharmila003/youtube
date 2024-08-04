
// Watchlaterslice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { auth } from '../firebase';

export const fetchWatchLater = createAsyncThunk('watchLaterlist/fetchWatchLater', async () => {
  const user = auth.currentUser;
  if (!user) return [];

  const token = await user.getIdToken(true);
  const response = await axios.get('/api/watch-later', {
   headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('Fetched Watch Later Data:', response.data);
  return response.data;
});

export const addToWatchLater = createAsyncThunk('watchLaterlist/addToWatchLater', async (video) => {
  const user = auth.currentUser;
  console.log("currentuser",user)
  if (!user) throw new Error('User not authenticated');

  const token = await user.getIdToken(true);
  console.log('Fetch Watch Later Token:', token);
  const response = await axios.post('/api/watch-later', { videoId: video.id }, {
    
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log( response);
  return response.data;
});

export const removeFromWatchLater = createAsyncThunk('watchLaterlist/removeFromWatchLater', async (videoId) => {
  const user = auth.currentUser;
  if (!user) throw new Error('User not authenticated');

  const token = await user.getIdToken(true);
  await axios.delete(`/api/watch-later/${videoId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('Removed from Watch Later:', videoId);
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


/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import { auth } from '../firebase';

export const fetchWatchLater = createAsyncThunk('watchLaterlist/fetchWatchLater', async () => {
  const response = await axios.get('/api/watch-later'); // No headers needed
  console.log('Fetched Watch Later Data:', response.data);
  return response.data;
});

export const addToWatchLater = createAsyncThunk('watchLaterlist/addToWatchLater', async (video) => {
  const response = await axios.post('/api/watch-later', { videoId: video.id }); // No headers needed
  console.log(response);
  return response.data;
});

export const removeFromWatchLater = createAsyncThunk('watchLaterlist/removeFromWatchLater', async (videoId) => {
  await axios.delete(`/api/watch-later/${videoId}`); // No headers needed
  console.log('Removed from Watch Later:', videoId);
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

export default watchLaterSlice.reducer;*/



