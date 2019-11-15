import axios from 'axios';
import { getConfig } from '../utils/config';
import * as types from './types';

export const getCommentRequest = (post_id) => {
  console.log('GET_COMMENT_REQUEST');
  return {
    type: types.GET_COMMENT_REQUEST
  };
};

export const getCommentSuccess = (comments) => {
  console.log("GET_COMMENT_SUCCESS");
  return {
    type: types.GET_COMMENT_SUCCESS,
    comments
  };
};

export const getCommentFailure = (error) => {
  console.log("GET_COMMENT_FAILURE");
  return {
    type: types.GET_COMMENT_FAILURE,
    error
  };
};

export const getComment = () => dispatch => {
  dispatch(getCommentRequest());

  return axios.get('http://127.0.0.1:8000/api/comments/')
    .then(res => {
      console.log('comment list: ', res.data);
      dispatch(getCommentSuccess(res.data))
    })
    .catch(error => dispatch(getCommentFailure(error)));
}