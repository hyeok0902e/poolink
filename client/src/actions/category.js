import axios from 'axios';
import * as types from './types';

export const getCategoryRequest = () => {
    console.log("GET_CATEGORY_REQUEST");
    return {
        type: types.GET_CATEGORY_REQUEST
    };
};

export const getCategorySuccess = () => {
    console.log("GET_CATEGORY_SUCCESS");
    return {
        type: types.GET_CATEGORY_SUCCESS
    };
};

export const getCategoryFailure = (error) => {
    console.log("GET_CATEGORY_FAILURE");
    return {
        type: types.GET_CATEGORY_FAILURE,
        error: error
    };
};

export const getCategory = () => dispatch => {
    dispatch(getCategoryRequest);

    return axios.get('http://127.0.0.1:8000/api/categories/')
        .then(res => {
            dispatch(getCategorySuccess)
            return res.data;
        })
        .catch(error => dispatch(getCategoryFailure));
}
