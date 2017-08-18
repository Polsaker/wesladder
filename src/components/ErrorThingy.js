import React from 'react';
import connect from 'react-redux/es/connect/connect';
import Snackbar from 'material-ui/Snackbar';
import * as types from '../actions/actionTypes';

class ErrorThingy extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRequestClose = () => {
    this.props.dispatch({type: types.REMOVE_ERROR});
  };

  render(){
    return (<Snackbar
      open={(this.props.errors!=='')}
      message={this.props.errors}
      onRequestClose={this.handleRequestClose} />)
  }
}

export default connect(state => ({
    errors: state.errors,
  }))(ErrorThingy);
