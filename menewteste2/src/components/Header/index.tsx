import React, { useState } from "react";
import { Container, Content, } from "./styles";
import LogoImg from '../../assets/menew-bymv.png';
import { TelaLog } from "../Login/Login";

interface TelaLogprops {
    title: string;
    onClick: Boolean;
    onClose: () => void
}

export function Header() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
         <Container>
             <Content >
                 <img src={LogoImg} alt="Logo Menew"/>
                 <h1>FomeZero Lanchonete</h1>
                 <button type="button" onClick={() => setIsModalVisible(true)}>Entrar</button>
                 {isModalVisible ? <TelaLog onClose={() => setIsModalVisible(false)}/>: null}
            </Content>
         </Container>
    )
}