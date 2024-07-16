// index.js (where combineReducers is used)
import { combineReducers } from 'redux';
import userReducer from'../data/Userreducer'; // Correct path to reducer file
import watchLaterReducer from '../slices/Watchlaterslice';
import authReducer from '../slices/Authslice';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  watchLater: watchLaterReducer,
});

export default rootReducer;

