import React from 'react';
import ReactDOM from 'react-dom';

import Provider from 'react-redux/es/components/Provider';

import MainPage from './components/MainPage';
import configureStore from './store/configureStore'
import { Route, Switch, Router } from 'react-router-dom';
import AuthNotRequiredRoute from './components/routes/AuthNotRequiredRoute';
import history from './history';

import LogInPage from './components/LogInPage';

const store = configureStore();
require('./style.css')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <AuthNotRequiredRoute exact path="/login" component={LogInPage}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('mount')
);
