import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Login } from './pages/Login/Login';


function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
