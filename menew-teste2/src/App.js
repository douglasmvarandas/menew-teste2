import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import ListaItens from './pages/ListaItens';


const isLogged = false;



function App() {



    return (

        <BrowserRouter >
            <div className="container-fluid bg-danger" >
                <h1 className="text-center text-white">Menew Teste 02 React</h1>
                <Switch>

                    <Route exact path="/">
                        <ListaItens />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/cadastro">
                        <Cadastro />
                    </Route>
                    <Route path="*">
                        <h4>Página não encontrada! 404</h4>
                    </Route>
                </Switch>
            </div>
            <footer>
                <div className="container">
                    <ul className="nav bg-danger justify-content-center fixed-bottom">

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Cardápio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/cadastro">Cadastre-se</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">Login</Link>
                        </li>

                    </ul>
                </div>
            </footer>

        </BrowserRouter>

    );
}


export default App;