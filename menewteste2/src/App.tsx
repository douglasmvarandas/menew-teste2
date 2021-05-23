import React from "react";
import { Cadastro } from "./components/Cadastro/Cadastro";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem/ListItem";
import { TelaLog } from "./components/Login/Login";
import { MenuInf } from "./components/MenuInferior/menuInferior";
import { GlobalStyle } from "./styles/global";

export function App() {
  
  return (
    <>
        <Header />
        <GlobalStyle />
        <ListItem />
       <MenuInf />
    </>
  );
}

