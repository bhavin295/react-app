import { combineReducers } from 'redux';
import userReducer from './userReducer';
import assignUserReducer from './assignUserReducer';

const rootReducer = combineReducers({
	userReducer,
	assignUserReducer
});

export default rootReducer;	