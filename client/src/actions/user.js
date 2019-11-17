import { logout } from './auth';

import * as types from './types';

export const userCheckRequest = () => {
  console.log("USER_CHECK_REQUEST");
  return {
    type: types.USER_CHECK_REQUEST
  }
}

export const userCheckSuccess = (token) => {
  console.log("USER_CHECK_SUCCESS");
  return {
    type: types.USER_CHECK_SUCCESS,
    token
  }
}

export const userCheckFailure = () => {
  console.log("USER_CHECK_FAILURE");
  return {
    type: types.USER_CEHCK_FAILURE
  }
}

export const userCheck = () => {
  return dispatch => {
    dispatch(userCheckRequest())

    const token = localStorage.getItem('token');
    if (token === null) {
      dispatch(userCheckFailure())
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));

      if (expirationDate <= new Date()) {
        dispatch(userCheckFailure())
        dispatch(logout());
      } else {
        dispatch(userCheckSuccess(token));
      }
    }
  }
}
