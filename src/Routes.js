import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Usuários from './pages/Usuários';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/Cadastro">
                <Cadastro />
            </Route>
            <Route exact path="/Usuários">
                <Usuários />
            </Route>
        </Switch>
    );
}