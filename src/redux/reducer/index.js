import { combineReducers } from 'redux';
import userReducer from './userReducer';
import assignUserReducer from './assignUserReducer';
import passwordReducer from './passwordReducer';

const rootReducer = combineReducers({
	userReducer,
	assignUserReducer,
	passwordReducer
});

export default rootReducer;	