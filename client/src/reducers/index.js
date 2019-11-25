import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import post from './post';
import comment from './comment';
import category from './category';

const rootReducer = combineReducers({
    auth,
    user,
    post,
    comment,
    category
  });
  
  export default rootReducer;