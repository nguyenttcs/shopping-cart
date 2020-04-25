import axios from 'axios';

export const CART_LIST = 'CART_LIST';
export const SET_CART_LIST = 'SET_CART_LIST';
export const START_FETCH_CART_LIST = 'START_FETCH_CART_LIST';
export const FETCH_CART_LIST_SUCCESS = 'FETCH_CART_LIST_SUCCESS';
export const FETCH_CART_LIST_FAIL = 'FETCH_CART_LIST_FAIL';

export const getCartList = (payload) => {
  return {
    type: CART_LIST,
    payload,
  };
};

export const setCartList = (payload) => {
  return {
    type: SET_CART_LIST,
    payload,
  };
};

const startFetchingCartList = () => {
  return {
    type: START_FETCH_CART_LIST,
  };
};

const fetchingCartListSuccess = (payload) => {
  return {
    type: FETCH_CART_LIST_SUCCESS,
    payload,
  };
};

const fetchingCartListFail = (payload) => {
  return {
    type: FETCH_CART_LIST_FAIL,
    payload,
  };
};

export const fetchCartList = () => (dispatch) => {
  dispatch(startFetchingCartList());
  axios
    .get('http://localhost:3001/carts')
    .then((res) => {
      if (res.data) {
        dispatch(fetchingCartListSuccess(res.data));
      } else {
        dispatch(fetchingCartListFail('Error'));
      }
    })
    .catch((err) => {
      dispatch(fetchingCartListFail(err));
    });
};
