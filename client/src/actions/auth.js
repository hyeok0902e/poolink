import axios from 'axios';
import _ from 'lodash';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './types';
import { URL, LOGIN } from './api';

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest);

    axios.post(URL + LOGIN, {
      email,
      password
    })
      .then(function (response) {
        dispatch(loginSuccess(response.data));
      })
      .catch(function (error) {
        if (_.get(error, 'response.status') === 400) {
          dispatch(loginFailure("Login fail"));
        }
        else {
          dispatch(loginFailure(error));
        }
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
    username: data.username
  };
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
}