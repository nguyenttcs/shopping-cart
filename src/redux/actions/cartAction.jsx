export const CART_LIST = 'CART_LIST';
export const SET_CART_LIST = 'SET_CART_LIST';

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
