import React from 'react';
import { Cards } from '../../components/cards/Cards';
import { Menu } from '../../components/header/Menu';
import './Home.css';
import sushi from '../../assets/sushi-boat.jpg'
import pizza from '../../assets/pizza.jpg'
import almoco from '../../assets/almoco.jpg'

function Home() {

    var itens = [
        {
            nome: "Almoço brasileiro",
            descricao: "O prato contem: feijão, Arroz e file de carne ao molho madeira",
            foto: almoco
        },
        {
            nome: "Pizza de calabreza",
            descricao: "Pizza massa fina com calabreza, cebola e azeitonas",
            foto: pizza
        },
        {
          nome: "Barca de sushi",
          descricao: "Sashime de Salmão, Sashimi de Atum, Nigiri de Salmão",
          foto: sushi
      }
    ]


  return (
    <div className="App">
        <div className="body">
          { itens.map(i =>{
            return(
              <Cards foto={i.foto} nome = {i.nome} descricao = {i.descricao} ></Cards> 
              )
            })}            
      </div>  
        <Menu></Menu>
    </div>
  );
}
export default Home;
