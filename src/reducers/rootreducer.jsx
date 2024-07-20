// index.js (where combineReducers is used)
import { combineReducers } from 'redux';
import userReducer from'../data/Userreducer'; // Correct path to reducer file
import watchLaterReducer from '../slices/Watchlaterslice';
import authReducer from '../slices/Authslice';
import  appReducer  from '../slices/appslice';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  auth: authReducer,
  watchLaterlist: watchLaterReducer,
});

export default rootReducer;

