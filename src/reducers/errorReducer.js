import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function errors(state = initialState.errors, action) {
  switch (action.type) {
    case types.ADD_ERROR:
      return state = action.error;
    case types.REMOVE_ERROR:
      return state = '';
    default:
      return state;
  }
}
