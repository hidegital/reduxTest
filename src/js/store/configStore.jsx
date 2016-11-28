import { applyMiddleware, createStore } from 'redux';
// import reducer from '../reducers/index';
import { combineReducers } from 'redux';
import {foo,bar} from '../reducers/index';
import createLogger from 'redux-logger';

export default function configureStore() {
	const logger = createLogger();
	const store = createStore(combineReducers({foo,bar}),applyMiddleware(logger));
	return store;
}


