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
        console.log('auth login data : ', res.data)
        const token = res.data.token;
        localStorage.setItem('token', token);
        dispatch(authSuccess(token));
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
        console.log('auth signup data : ', res.data)
        const token = res.data.token;
        localStorage.setItem('token', token);
        dispatch(authSuccess(token));
      })
      .catch(err => {
        dispatch(authFail(err))
      })
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    dispatch(authSuccess(token));
    console.log('authCheckState : ', token)
    console.log('localStorage.getItem("token")', localStorage.getItem('token'))
  }
}

