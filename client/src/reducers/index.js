import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import post from './post';
import comment from './comment';

const rootReducer = combineReducers({
    auth,
    user,
    post,
    comment,
  });
  
  export default rootReducer;