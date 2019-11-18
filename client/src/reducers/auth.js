import * as types from '../actions/types';

const initialState = {
  token: null,
  error: null,
  isLoading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isLoading: false,
        error: false,
      }
    case types.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: true
      }
    case types.LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default authReducer;
