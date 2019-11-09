import store from '../store';

export const API_URL = "http://127.0.0.1:8000/api/";
export const LOGIN_URL = "users/login/";
export const LOGOUT_URL = "users/logout/";
export const REGISTER_URL = "users/register/";

export const getHeader = () => {
  const isAuthenticated = store.getState().auth.isAuthenticated;
  if (isAuthenticated) {
    const token = store.getState().auth.token;
    const config = {
      header: {'Authorization': 'JWT ' + token}
    };
    return config;
  }
  return null;
}