import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import iTemAction from "./reducers/iTemReducer";
import getCart from "./reducers/cartReducer";

const rootReducers = combineReducers({
    iTemAction: iTemAction,
    cartListAction: getCart
});

const store = createStore(
    rootReducers,
    compose(applyMiddleware(thunk))
);

export default store;