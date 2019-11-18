import * as types from '../actions/types';

const initialState = {
  isAuthenticated: false,
  error: null,
  isLoading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default userReducer;
