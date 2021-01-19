import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import NewUser from './pages/NewUser';
import UserDetail from './pages/UserDetail';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new-user" component={NewUser} />
        <Route path="/user-detail" component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;