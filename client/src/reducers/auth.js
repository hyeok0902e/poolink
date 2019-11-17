import * as types from '../actions/types';

const initialState = {
  token: null,
  isAuthenticated: false,
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
        isAuthenticated: true,
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
    case types.USER_CHECK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case types.USER_CHECK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        token: action.token,
        isAuthenticated: true,
      }
    case types.USER_CEHCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default authReducer;
