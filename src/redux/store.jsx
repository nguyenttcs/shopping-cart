import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import iTemAction from "./reducers/iTemReducer";

const rootReducers = combineReducers({
    iTemAction: iTemAction
});

const store = createStore(
    rootReducers,
    compose(applyMiddleware(thunk))
);

export default store;