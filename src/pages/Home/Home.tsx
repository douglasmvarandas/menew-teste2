import React from 'react';
import { Cards } from '../../components/cards/Cards';
import { Menu } from '../../components/header/Menu';
import './Home.css';


function Home() {

    var itens = [
        {
            nome: "Almoço brasileiro",
            descricao: "O prato contem: feijão, Arroz, batata frita e file de carne ao molho madeira",
            foto: "https://portal.fgv.br/sites/portal.fgv.br/files/styles/noticia_geral/public/noticias/set/17/prato-feito.jpg?itok=klqGuxxN&c=33313733cdad61e4bd51beabb4a84531"
        },
        {
            nome: "Pizza de calabreza",
            descricao: "Pizza massa fina com calabreza, cebola e azeitonas",
            foto: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg"
        },
        {
          nome: "Barca de sushi",
          descricao: "Sashime de Salmão, Sashimi de Atum, Nigiri de Salmão",
          foto: "../../assets/sushi-boat.jpg"
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
