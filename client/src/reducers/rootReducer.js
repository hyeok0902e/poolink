import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: null,
  posts: [],
  title: null,
  content: null,
}

const rootReducer = (state = initState, action) => {
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
        content: action.content
      }
    case types.GET_DETAIL_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    default:
      return state;
  }
}

export default rootReducer;