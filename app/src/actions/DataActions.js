import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START });
        axios   
            .get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.message });
                console.log('Dog Photos', res.data.message);
            })
            .catch(err => {
                dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
            });
    };
};