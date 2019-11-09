import axios from 'axios';
import _ from 'lodash';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './types';
import { API_URL, LOGIN_URL, LOGOUT_URL, getHeader } from './api';

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());

    axios.post(API_URL + LOGIN_URL, {
      email,
      password
    })
      .then(function (response) {
        dispatch(loginSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(loginFailure("잘못된 이메일 혹은 비밀번호입니다."));
      });
  };
}

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
}

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    token: data.token,
    username: data.user
  };
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutAction());
    
    axios.post(API_URL + LOGOUT_URL, null, getHeader());
  }
}

export const logoutAction = () => {
  return {
    type: LOGOUT
  };
}