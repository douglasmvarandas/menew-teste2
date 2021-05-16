import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageDefault from './components/pageDefault';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import SignupPage from './pages/signup';

export default function Routes (){
    return (
        <Router>
          <Switch>
            <PageDefault>
              <Route exact path="/" component={Home} />
              <Route path="/cadastro" component={SignupPage} />
              <Route path="/dash" render={(props) => <Dashboard {...props} />} />
            </PageDefault>
          </Switch>
        </Router>
    );
};