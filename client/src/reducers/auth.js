import * as types from '../actions/types';
import { updateObject } from '../utils/config';
import { authSuccess } from '../actions/auth';

const initialState = {
  token: null,
  error: null,
  loading: false
}

const authStart = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
}

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
}

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return authStart(state, action);
    case types.AUTH_SUCCESS:
      return authSuccess(state, action);
    case types.AUTH_FAIL:
      return authFail(state, action);
    case types.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
}

export default reducer;
