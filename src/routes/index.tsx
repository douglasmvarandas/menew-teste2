import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/home" exact component={Home} />
    {/* <Route path="/dashboard" exact component={Dashboard} isPrivate /> */}
  </Switch>
);

export default Routes;
