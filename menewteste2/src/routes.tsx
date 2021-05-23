import React from "react";
import  {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import { Cadastro } from "./components/Cadastro/Cadastro";



export function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/Cadastro" component={Cadastro} />
        </Switch>    
    </BrowserRouter>
    );
};