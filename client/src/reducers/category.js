import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: false,
  categories: [],
}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        categories: action.categories,
      };
    case types.GET_CATEGORY_FAILURE:
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

export default categoryReducer;