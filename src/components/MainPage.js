import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WesAppBar from './WesAppBar'


class MainPage extends React.Component {
  render(){
    return(
      <MuiThemeProvider>
      <div>
        <WesAppBar title="Wesnoth Ladder"/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default MainPage;
