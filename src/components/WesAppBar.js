import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/es/bindActionCreators';
import * as sessionActions from '../actions/sessionActions';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom'


class Login extends Component {
  static muiName = "FlatButton";

  render() {
    return (
      <div>
      <Link to="/login"><FlatButton {...this.props} label="Log in"></FlatButton></Link>
      <Link to="/register"><RaisedButton {...this.props} label="Register" secondary={true}></RaisedButton></Link>
      </div>
    );
  }
}

class WesAppBar extends Component {
  constructor(/*props*/) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    return (
        <AppBar
          title={this.props.title}
          iconElementRight={this.props.logged_in ? (
              <FlatButton label="Sign out" onClick={this.logOut} />) : <Login />}
        />
    );
  }
}

function mapStateToProps(state) {
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WesAppBar);
