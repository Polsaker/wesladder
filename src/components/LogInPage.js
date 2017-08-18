import React from 'react';
import bindActionCreators from 'redux/es/bindActionCreators';
import connect from 'react-redux/es/connect/connect';
import * as sessionActions from '../actions/sessionActions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Paper from 'material-ui/Paper';

import ValidatorForm from 'react-material-ui-form-validator/lib/ValidatorForm';
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator';

import ErrorThingy from './ErrorThingy'


class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {username: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 style={{textAlign: 'center'}}>Log In</h1>
          <ValidatorForm ref="form"
            onSubmit={this.onSave}
            style={formStyle}>
            <Paper style={{padding: '0 2em 2em 2em'}}>
              <TextValidator
                name="username"
                hintText="Enter your user name"
                floatingLabelText="Username"
                value={this.state.credentials.username}
                onChange={this.onChange}
                validators={['required']}
                fullWidth={true}
                errorMessages={['This field is required']}/>
              <br/>
              <TextValidator
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.onChange}
                validators={['required']}
                fullWidth={true}
                errorMessages={['This field is required']}/>
              <br/>
              <RaisedButton
                label="Submit"
                primary={true}
                fullWidth={true}
                style={{marginTop: '2em'}}
                type="submit"/>
            </Paper>
          </ValidatorForm>
          <ErrorThingy/>
        </div>
      </MuiThemeProvider>
  );
  }
}

const formStyle = {
  margin: '2em auto',
  width: 380
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LogInPage);
