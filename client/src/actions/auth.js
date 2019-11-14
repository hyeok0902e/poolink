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

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
}

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    axios.post('http://127.0.0.1:8000/api/users/login/', {
      email: email,
      password: password
    })
      .then(res => {
        console.log('login data : ', res.data)
        const token = res.data.token;
        localStorage.setItem('token', token);
        dispatch(loginSuccess(token));
      })
      .catch(error => {
        dispatch(loginFailure(error))
      })
  }
}

export const authSignup = (email, username, password) => {
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
        localStorage.setItem('token', token);
        dispatch(loginSuccess(token));
      })
      .catch(err => {
        dispatch(loginFailure(err))
      })
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    dispatch(loginSuccess(token));
    console.log('authCheckState : ', token)
  }
}

