import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import Main from 'pages/Main';
import SignIn from 'pages/Auth/SignIn';

import history from './history';

import Private from './private';
import Guest from './guest';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Private path="/" exact component={Main} />
      <Private component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
