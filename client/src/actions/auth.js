import axios from 'axios';

import * as types from './types';

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST
  }
}

export const loginSuccess = data => {
  console.log(data)
  return {
    type: types.LOGIN_SUCCESS,
    token: data.token,
    username: data.username,
    email: data.email
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
  localStorage.removeItem('expirationDate');
  return {
    type: types.LOGOUT
  };
}

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    axios.post('http://127.0.0.1:8000/api/users/login/', {
      email: email,
      password: password
    })
      .then(res => {
        const token = res.data.token;
        const expirationDate = new Date(Date.now() + 3600 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(loginSuccess(res.data));
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