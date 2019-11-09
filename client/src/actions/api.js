import store from '../store';

export const URL = "http://127.0.0.1:8000/api/";
export const LOGIN = "users/login/";
export const LOGOUT = "users/logout/";
export const REGISTER = "users/register/";

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