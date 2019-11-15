import axios from 'axios';
import { getConfig } from '../utils/config';
import * as types from './types';

export const getCommentRequest = (post_id) => {
  console.log('GET_COMMENT_REQUEST');
  return {
    type: types.GET_COMMENT_REQUEST,
    post_id
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
      dispatch(getCommentSuccess(res.data))
    })
    .catch(error => dispatch(getCommentFailure(error)));
}

export const createCommentRequest = (post_id) => {
  console.log("CREATE_POST_REQUEST");
  return {
      type: types.CREATE_POST_REQUEST,
      post_id,
  };
};

export const createCommentSuccess = () => {
  console.log("CREATE_POST_SUCCESS");
  return {
      type: types.CREATE_POST_SUCCESS
  };
};

export const createCommentFailure = (error) => {
  console.log("CREATE_POST_FAILURE");
  return {
      type: types.CREATE_POST_FAILURE,
      error: error
  };
};

export const createComment = (post_id, newComment) => dispatch => {
  dispatch(createCommentRequest(post_id));

  return axios.post('http://127.0.0.1:8000/api/comments/create/?type=post&id=' + post_id, newComment, getConfig())
      .then(res => dispatch(createCommentSuccess))
      .catch(error => dispatch(createCommentFailure(error)));
};
