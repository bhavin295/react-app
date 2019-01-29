import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './../reducer/index';

const middleware = [thunk];

const store = createStore(
	rootReducer, {}, compose(applyMiddleware(...middleware, logger))
);
export default store;