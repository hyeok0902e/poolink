import axios from 'axios';

import * as types from './types';

export const authStart = () => {
  return {
    type: types.AUTH_START
  }
}

export const authSuccess = token => {
  return {
    type: types.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = error => {
  return {
    type: types.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: types.AUTH_LOGOUT
  };
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
}

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://127.0.0.1:8000/api/users/login/', {
      email: email,
      password: password
    })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date.getTime() + 3600 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(error => {
        dispatch(authFail(error))
      })
  }
}

export const authSignup = (email, username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://127.0.0.1:8000/api/users/register/', {
      email: email,
      username: username,
      password: password
    })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err))
      })
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  }
}
