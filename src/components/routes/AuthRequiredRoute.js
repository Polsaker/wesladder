import {Redirect, Route} from 'react-router';
import auth from '../../auth/authenticator';

class AuthRequiredRoute extends Route{
    render() {
        if(!auth.loggedIn()){
            return <Redirect to="/login"></Redirect>
        }else{
          return <this.props.component />
        }
    }
}
export default AuthRequiredRoute;
