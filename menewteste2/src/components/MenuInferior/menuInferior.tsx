import React from "react";
import MenuImg from '../../assets/menu.svg';
import Pesquisa from '../../assets/ampliacao.svg';
import Cart from '../../assets/carrinho-de-compras.svg';
import { Content, Footer } from "./stylefoot";

export function MenuInf() {
    return (
        <Footer >
            <Content>
                <img src={MenuImg} alt="Menu"/>
                <img src={Pesquisa} alt="Lupa"/>
                <img src={Cart} alt="CarrinhoDeCompras"/>
            </Content>
        </Footer >
     )
}  