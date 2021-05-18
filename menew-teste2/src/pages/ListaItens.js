import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardImg = styled.img`
border: 3px solid #000;
border-radius:5px;
height:450px;
`;
const Card = styled.div`
padding:10px;
`
function ListaItens() {
    const [lista, setLista] = useState([]);
    useEffect(() => {

        setLista([
            {
                nome: 'Pizza Grande',
                descricao: 'Pizza grande feita e assada na hora.',
                url: 'https://uploads.metropoles.com/wp-content/uploads/2020/12/21155322/pizzahut-1280x720-1-600x400.jpg',
                sabor: [
                    { nomeSabor: 'Calabresa' },
                    { nomeSabor: 'Frango' },
                    { nomeSabor: 'Quatro Queijos' },
                    { nomeSabor: 'A moda da casa' }
                ]
            },
            {
                nome: 'Pizza Média',
                descricao: 'Pizza média, pre-pronta e assada na hora',
                url: 'https://www.folhadealphaville.com.br/images/articles/5643/b2ap3_medium_b2ap3_amp_pizzahutweb.jpg',
                sabor: [
                    { nomeSabor: 'Presunto' },
                    { nomeSabor: 'Mussarela' },
                    { nomeSabor: 'Portuguesa' },
                    { nomeSabor: 'Napolitana' }
                ]
            },
            {
                nome: 'Pizza Pequena',
                descricao: 'Pizza pequena, pré-pronta e assada na hora',
                url: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-brotinho-1-730x449.jpg',
                sabor: [
                    { nomeSabor: 'Presunto' },
                    { nomeSabor: 'Mussarela' },
                    { nomeSabor: 'Portuguesa' },
                    { nomeSabor: 'Napolitana' }
                ]
            },
            {
                nome: 'Massas',
                descricao: 'Porções pequenas, médias e grandes de massas variadas',
                url: 'https://www.cozinhatecnica.com/wp-content/uploads/ngg_featured/tipos-de-massas-secas.jpg',
                sabor: [
                    { nomeSabor: 'Macarrão' },
                    { nomeSabor: 'Nhoque' },
                    { nomeSabor: 'Lasanha' },
                    { nomeSabor: 'Panquecas' }
                ]
            },
            {
                nome: 'Cerveja',
                descricao: 'Cerveja gelada. Lata ou long neck',
                url: 'https://capitaobarley.com.br/wp-content/uploads/2020/03/cervejaartesanal_.jpg',
                sabor: [
                    { nomeSabor: 'Heineken' },
                    { nomeSabor: 'Brahma' },
                    { nomeSabor: 'Sterlla Artois' },
                    { nomeSabor: 'Skol' }
                ]
            },
            {
                nome: 'Sucos',
                descricao: 'Suco natural direto da fruta',
                url: 'https://s2.glbimg.com/nD7Ao3HBAyAK7_g_Tt75yk1pEiY=/780x440/e.glbimg.com/og/ed/f/original/2019/01/15/31617293018_896bf29d55_k.jpg',
                sabor: [
                    { nomeSabor: 'Laranja' },
                    { nomeSabor: 'Abacaxi' },
                    { nomeSabor: 'Limão' },
                    { nomeSabor: 'Uva' }
                ]
            },

            {
                nome: 'Refrigerante Lata',
                descricao: 'Para cada 2 pizzas grandes ganhe uma lata de brinde',
                url: 'https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg',
                sabor: [
                    { nomeSabor: 'Cocacola' },
                    { nomeSabor: 'Cocacola Zero' },
                    { nomeSabor: 'Guaraná Antartica' },
                    { nomeSabor: 'Kuat' }
                ]
            },
            {
                nome: 'Refrigerante Litro',
                descricao: 'E na compra de 3 pizzas grandes o litro fica pela metade do preço!',
                url: 'https://kidfood8.webnode.com/_files/200000235-a7c2aa7c2c/refri%201L.png',
                sabor: [
                    { nomeSabor: 'Cocacola' },
                    { nomeSabor: 'Fanta' },
                    { nomeSabor: 'Sukita' },
                    { nomeSabor: 'Sprite' }
                ]
            }

        ])

    }, [])

    return (
        <div className="container">
            <div className="card" style={{ border: 0 }}>
                <div className="card-header bg-danger">
                    <h3 className="text-center text-white">Cardápio</h3>
                </div>
                <div className="card-body">
                    <div className="card-title"><h3 className="card-text text-center">Fique a vontade!</h3></div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-group justify-content-center">
                                {lista.map((item, index) => {
                                    return (

                                        <Card key={index} className="col-sm-6 hoverable">
                                            <div className="card">
                                                <CardImg className="card-img-top" src={item.url} alt="Card Image Cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.nome}</h5>
                                                    <p className="card-text"> {item.descricao} </p>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">
                                                        <ul>
                                                            <h5 className="text-center">{item.nome === 'Cerveja' ? 'Marcas' : 'Sabores'}</h5>
                                                            {item.sabor.map((sabores, index2) => {
                                                                return (<li key={index2}>{sabores.nomeSabor}</li>)
                                                            })}
                                                        </ul>
                                                    </small>
                                                </div>
                                            </div>
                                        </Card>

                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListaItens;