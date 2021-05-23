import React from 'react';
import { Content, Item } from './styleProduct';
import FomeZero from '../../assets/ComboFomezero.jpg';
import Soft from '../../assets/ComboSoft.jpg';
import Dois from '../../assets/DuplaDeDois.jpg';
import Fresc from '../../assets/Frescurinha.jpg';
import Moderno from '../../assets/Moderninho.jpg';
import Pig from '../../assets/PigAustralian.jpg';
import Salada from '../../assets/Saladuplo.jpg';
import Simple from '../../assets/Simplao.jpg';

export function ListItem() {
    return (
        <>
        <Item>
            <Content>
                <img src={FomeZero} alt="Combo Fome Zero"/>
                <h2>Combo Fome Zero</h2>
                <span>Hamburguer delicioso e completo acompanhado de Batata e Molho Especial</span>
            </Content>
            <Content>
                <img src={Soft} alt="Combo Soft"/>
                <h2>Combo Soft</h2>
                <span>Hamburguer deliciosamente Elaborado e acompanhamentos bem sofisticados</span>
            </Content>
            <Content>
                <img src={Dois} alt="Dupla de Dois"/>
                <h2>Dupla de Dois</h2>
                <span>Aquele Lanche especial para quem nuca esta desacompanhado</span>
            </Content>
            <Content>
                <img src={Fresc} alt="Frescurinha"/>
                <h2>Frescurinha</h2>
                <span>Cai deliciosamente bem. Mesmo com frescura</span>
            </Content>
        </Item>
                <Item>
                <Content>
                    <img src={Moderno} alt="Moderninho"/>
                    <h2>Moderninho</h2>
                    <span>Hamburguer para quem gosta de elegancia e modernidade</span>
                </Content>
                <Content>
                    <img src={Pig} alt="Pig Australiano"/>
                    <h2>Pig Australiano</h2>
                    <span>Hamburguer suino no pão australiano acompanhado de molho especial</span>
                </Content>
                <Content>
                    <img src={Salada} alt="Saladuplo"/>
                    <h2>Saladuplo</h2>
                    <span>2 Hamburgers bem suculentos acompanha um balde de Batata e molho especial</span>
                </Content>
                <Content>
                    <img src={Simple} alt="Simplao"/>
                    <h2>Simplão</h2>
                    <span>Simplão de Tudo</span>
                </Content>
            </Item>
            </>
    )
}