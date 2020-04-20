import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const SET_ITEMS = 'SET_ITEMS';

const startFetching = () => {
  return {
    type: FETCHING,
  };
};

const fetchingSuccess = (payload) => {
  return {
    type: FETCHING_SUCCESS,
    payload,
  };
};

const fetchingFail = (payload) => {
  return {
    type: FETCHING_FAIL,
    payload,
  };
};

export const getItems = () => (dispatch) => {
  dispatch(startFetching());
  axios
    .get('http://localhost:3001/items')
    .then((res) => {
      if (res.data) {
        dispatch(fetchingSuccess(res.data));
      } else {
        dispatch(fetchingFail('Error'));
      }
    })
    .catch((err) => {
      dispatch(fetchingFail(err));
    });
};

export const setItems = (payload) => {
  return {
    type: SET_ITEMS,
    payload,
  };
};
