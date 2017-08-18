import {combineReducers} from 'redux';
import session from './sessionReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  session, errors
})

export default rootReducer;
