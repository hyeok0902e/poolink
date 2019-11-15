import axios from 'axios';
import { getConfig } from '../utils/config';
import * as types from './types';

export const getPostRequest = () => {
    console.log("GET_POST_REQUEST");
    return {
        type: types.GET_POST_REQUEST
    };
};

export const getPostSuccess = posts => {
    console.log("GET_POST_SUCCESS");
    return {
        type: types.GET_POST_SUCCESS,
        posts,
    };
};

export const getPostFailure = (error) => {
    console.log("GET_POST_FAILURE");
    return {
        type: types.GET_POST_FAILURE,
        error: error
    };
};

export const getPost = () => dispatch => {
  dispatch(getPostRequest);

  return axios.get('http://127.0.0.1:8000/api/posts/')
      .then(res => {
          dispatch(getPostSuccess(res.data))
      })
      .catch(error => dispatch(getPostFailure(error)));
}


export const getDetailPostRequest = (post_id) => {
  console.log("GET_DETAIL_POST_REQUEST");
  return {
      type: types.GET_DETAIL_POST_REQUEST,
      post_id
  };
};

export const getDetailPostSuccess = post => {
  console.log("GET_DETAIL_POST_SUCCESS");
  console.log(post)
  return {
      type: types.GET_DETAIL_POST_SUCCESS,
      title: post.title,
      content: post.content,
      username: post.user.username,
  };
};

export const getDetailPostFailure = (error) => {
  console.log("GET_DETAIL_POST_FAILURE");
  return {
      type: types.GET_DETAIL_POST_FAILURE,
      error: error
  };
};

export const getDetailPost = (post_id) => dispatch => {
  dispatch(getDetailPostRequest(post_id));

  return axios.get('http://127.0.0.1:8000/api/posts/' + post_id + '/')
      .then(res => {
          dispatch(getDetailPostSuccess(res.data))
      })
      .catch(error => dispatch(getDetailPostFailure(error)));
}

export const createPostRequest = () => {
    console.log("CREATE_POST_REQUEST");
    return {
        type: types.CREATE_POST_REQUEST
    };
};

export const createPostSuccess = () => {
    console.log("CREATE_POST_SUCCESS");
    return {
        type: types.CREATE_POST_SUCCESS
    };
};

export const createPostFailure = (error) => {
    console.log("CREATE_POST_FAILURE");
    return {
        type: types.CREATE_POST_FAILURE,
        error: error
    };
};

export const createPost = newPost => dispatch => {
    dispatch(createPostRequest());
    return axios.post('http://127.0.0.1:8000/api/posts/create/', newPost, getConfig())
        .then(res => dispatch(createPostSuccess))
        .catch(error => dispatch(createPostFailure));
};

export const updatePostRequest = postId => {
    console.log("UPDATE_POST_REQEUST");
    return {
        type: types.UPDATE_POST_REQEUST,
        postId: postId
    };
};

export const updatePostSuccess = postId => {
    console.log("UPDATE_POST_SUCCESS");
    return {
        type: types.UPDATE_POST_SUCCESS,
        postId: postId
    };
};

export const updatePostFailure = (postId, error) => {
    console.log("UPDATE_POST_FAILURE");
    return {
        type: types.UPDATE_POST_FAILURE,
        postId: postId,
        error: error
    };
};

export const updatePost = (postId, newPost) => dispatch => {
    dispatch(updatePostRequest);
    
    return axios.put(
        `http://127.0.0.1:8000/api/posts/${postId}/edit/`, newPost, getConfig())
        .then(res => dispatch(updatePostSuccess))
        .catch(error => dispatch(updatePostFailure));
};

export const deletePostRequest = postId => {
    console.log("DELETE_POST_REQEUST");
    return {
        type: types.DELETE_POST_REQEUST,
        postId: postId 
    };
};

export const deletePostSuccess = postId => {
    console.log("DELETE_POST_SUCCESS");
    return {
        type: types.DELETE_POST_SUCCESS,
        postId: postId
    };
};

export const deletePostFailure = (postId, error) => {
    console.log("DELETE_POST_FAILURE");
    return {
        type: types.DELETE_POST_FAILURE,
        postId: postId,
        error: error
    }
}

export const deletePost = postId => dispatch => {
    dispatch(deletePostRequest);

    return axios.delete(`http://127.0.0.1:8000/api/posts/${postId}/delete/`, getConfig())
        .then(res => dispatch(deletePostSuccess))
        .catch(error => dispatch(deletePostFailure))
};