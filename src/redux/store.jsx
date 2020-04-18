import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const rootReducers = combineReducers({

});

const store = createStore(
    rootReducers,
    compose(applyMiddleware(thunk))
);

export default store;