import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import auth from '../auth/authenticator'
import SubmissionError from 'redux-form/es/SubmissionError'

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      if(response.access_token){
        sessionStorage.setItem('jwt', response.access_token);
        dispatch(loginSuccess());
      }else{
        dispatch({type: types.ADD_ERROR, error: response.description});
      }
    }).catch(error => {
      throw(error);
    });
  };
}

export function registerUser(credentials) {
  return function(dispatch){
    return sessionApi.login(credentials).then(response => {
      if(response.status == 'ok'){

      }else{
        throw new SubmissionError(response.error)
      }
    }).catch(error => {
      throw(error);
    });
  }
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}
