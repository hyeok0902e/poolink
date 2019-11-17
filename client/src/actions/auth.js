import axios from 'axios';

import * as types from './types';

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST
  }
}

export const loginSuccess = token => {
  return {
    type: types.LOGIN_SUCCESS,
    token: token
  }
}

export const loginFailure = error => {
  return {
    type: types.LOGIN_FAILURE,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: types.LOGOUT
  };
}

export const userCheckRequest = () => {
  return {
    type: types.USER_CHECK_REQUEST
  }
}

export const userCheckSuccess = (token) => {
  return {
    type: types.USER_CHECK_SUCCESS,
    token
  }
}

export const userCheckFailure = () => {
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

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    axios.post('http://127.0.0.1:8000/api/users/login/', {
      email: email,
      password: password
    })
      .then(res => {
        console.log('login data : ', res.data)
        const token = res.data.token;
        const expirationDate = new Date(Date.now() + 3600 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(loginSuccess(token));
      })
      .catch(error => {
        dispatch(loginFailure(error))
      })
  }
}

export const register = (email, username, password) => {
  return dispatch => {
    dispatch(loginRequest());
    axios.post('http://127.0.0.1:8000/api/users/register/', {
      email: email,
      username: username,
      password: password
    })
      .then(res => {
        console.log('signup data : ', res.data)
        const token = res.data.token;
        const expirationDate = new Date(Date.now() + 3600 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(loginSuccess(token));
      })
      .catch(err => {
        dispatch(loginFailure(err))
      })
  }
}