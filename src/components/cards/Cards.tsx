import './Cards.css';
import React from 'react';

interface Props {
    nome: string,
    descricao: string,
    foto: string
}


export function Cards(props:Props)  {   
    return(
        <div className="cardContainer">
                <div id="cards" className="cards">
                        <img src={props.foto} alt="Foto" />
                    <div className="card-info">
                        <div className="nome">Nome: {props.nome}</div>
                        <div className="descricao"> {props.descricao} </div>
                    </div>
                </div>
        </div>
    )
}


