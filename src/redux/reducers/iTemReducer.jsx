import {
  FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
  SET_ITEMS,
} from '../actions/ItemAction';

const initState = {
  listItems: [],
  isLoading: true,
  error: '',
};

export default function iTemAction(state = initState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        listItems: payload,
        isLoading: false,
      };
    case FETCHING_FAIL:
      return {
        ...state,
        isLoading: false,
        listItems: [],
        error: payload,
      };
    case SET_ITEMS:
      return {
        ...state,
        listItems: payload,
      };
    default:
      return state;
  }
}
