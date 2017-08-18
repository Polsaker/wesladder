import React from 'react';
import {Redirect, Route} from 'react-router';
import auth from '../../auth/authenticator';

class AuthNotRequiredRoute extends Route{
    render() {
        if(auth.loggedIn()){
            return <Redirect to="/"></Redirect>
        }else{
          return <this.props.component />
        }
    }
}

export default AuthNotRequiredRoute;
