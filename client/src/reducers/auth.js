import * as types from '../actions/types';
import { updateObject } from '../utils/config';

const initialState = {
  token: null,
  error: null,
  loading: false
}

const loginRequest = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
}

const loginSuccess = (state, action) => {
  console.log("LOGIN_SUCCESS")
  return updateObject(state, {
      token: action.token,
      error: null,
      loading: false
  });
}

const loginFailure = (state, action) => {
  console.log("LOGIN_FAILURE");
  return updateObject(state, {
    error: action.error,
    loading: false
  });
}

const logout = (state, action) => {
  console.log("LOGOUT")
  return updateObject(state, {
    token: null
  });
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return loginRequest(state, action);
    case types.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case types.LOGIN_FAILURE:
      return loginFailure(state, action);
    case types.LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
}

export default reducer;
