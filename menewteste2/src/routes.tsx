import React, { useImperativeHandle } from "react";
import  {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import { Cadastro } from "./components/Cadastro/Cadastro";
import { ListItem } from "./components/ListItem/ListItem";
import { TelaLog } from "./components/Login/Login";



export function Routes() {
    return(
    <>
        <Switch>
            <Route exact path="/Cadastro" component={Cadastro} />
            <Route exact path="/TelaLog" component={TelaLog} />
            <Route exact path="/ListItem" component={ListItem} />
        </Switch>    
    </>
    );
};