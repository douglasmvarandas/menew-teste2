import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem/ListItem";
import { MenuInf } from "./components/MenuInferior/menuInferior";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  
  return (
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <ListItem />
        <Routes />
       <MenuInf />
      </BrowserRouter>
  );
}

