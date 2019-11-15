import {combineReducers} from 'redux';
import auth from './auth';
import post from './post';
import comment from './comment';

const rootReducer = combineReducers({
    auth,
    post,
    comment,
  });
  
  export default rootReducer;