import { CART_LIST, SET_CART_LIST } from '../actions/cartAction';

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
    default:
      return state;
  }
}
