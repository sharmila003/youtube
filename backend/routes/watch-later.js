import express from 'express';
import { addToWatchLater, getWatchLaterList } from '../controllers/watch-later.js';
import { verifyToken } from '../verifytoken.js';

const router = express.Router();

// Add a video to the watch later list
router.post('/', verifyToken, addToWatchLater);

// Get watch later list for the user
router.get('/', verifyToken,getWatchLaterList );

export default router;
