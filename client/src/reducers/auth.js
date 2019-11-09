import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/types';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  username: null,
  email: null,
  token: null,
  error: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        username: action.username,
        email: action.email,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        token: null,
        username: null,
        email: null,
        error: action.error
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default auth;
