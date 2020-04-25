import {
  CART_LIST,
  SET_CART_LIST,
  START_FETCH_CART_LIST,
  FETCH_CART_LIST_SUCCESS,
  FETCH_CART_LIST_FAIL,
} from '../actions/cartAction';

const initState = {
  cartList: [],
};

export default function getCart(state = initState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case CART_LIST:
      return {
        ...state,
        cartList: payload,
      };
    case SET_CART_LIST:
      return {
        ...state,
        cartList: payload,
      };
    case START_FETCH_CART_LIST:
      return {
        ...state,
      };
    case FETCH_CART_LIST_SUCCESS:
      return {
        ...state,
        cartList: payload,
      };
    case FETCH_CART_LIST_FAIL:
      return {
        ...state,
        cartList: [],
        error: payload,
      };
    default:
      return state;
  }
}
