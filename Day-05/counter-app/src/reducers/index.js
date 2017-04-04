import bugsReducer from './bugsReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	bugsData : bugsReducer,
	counterData : counterReducer
});