import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: false,
  comments: [],
  replies: [],
}

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case types.GET_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        comments: action.comments,
        replies: action.replies,
      };
    case types.GET_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default: {
      return {
        ...state
      }
    }
  }
}

export default commentReducer;