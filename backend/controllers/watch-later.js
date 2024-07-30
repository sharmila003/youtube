/*import  WatchLater  from  '../models/watch-later.js'

export  const addToWatchLater = async (req, res) => {
  try {
    const videos = await Video.find(); // Adjust this to match your database/model
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos', error });
  }
};

export  const addVideo = async (req, res) => {
  const { videoId } = req.body;
  try {
    const video = await Video.create({ videoId }); // Adjust this to match your database/model
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error adding video', error });
  }
};

export const removeVideo = async (req, res) => {
  const { id } = req.params;
  try {
    await Video.findByIdAndDelete(id); // Adjust this to match your database/model
    res.status(200).json({ message: 'Video removed' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing video', error });
  }
};*/


// controllers/watch-later.js

import WatchLater from '../models/watch-later.js';

/*export const addToWatchLater = async (req, res) => {
  const { videoId } = req.body;
  try {
    const video = await WatchLater.create({ userId: req.user._id, videoId });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error adding video to watch later', error });
  }
};*/


export const addToWatchLater = async (req, res) => {
  const { videoId } = req.body;

  if (!req.user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  
  
  try {
    const video = await WatchLater.create({ userId: req.user._id, videoId });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error adding video to watch later', error });
  }
};


export const getWatchLaterList = async (req, res) => {
  try {
    const watchLaterList = await WatchLater.find({ userId: req.user._id });
    console.log('WatchLaterList:', watchLaterList); 
    res.status(200).json(watchLaterList);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching watch later list', error });
  }
};

