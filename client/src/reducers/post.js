import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: null,
  posts: [],
  category: null,
  title: null,
  content: null,
  username: null,
}

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        posts: action.posts,
      };
    case types.GET_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case types.GET_DETAIL_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case types.GET_DETAIL_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        title: action.title,
        content: action.content,
        category: action.category,
        username: action.username,
      }
    case types.GET_DETAIL_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    case types.CREATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      }
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      }
    case types.CREATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    case types.DELETE_POST_REQEUST:
      return {
        ...state,
        isLoading: true,
        error: false,
      }
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      }
    case types.DELETE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    case types.UPDATE_POST_REQEUST:
      return {
        ...state,
        isLoading: true,
        error: false,
      }
    case types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      }
    case types.UPDATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default postReducer;