// index.js (where combineReducers is used)
import { combineReducers } from 'redux';
import userReducer from'../data/Userreducer'; // Correct path to reducer file

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export default rootReducer;

