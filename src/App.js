import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        nome:'',
        cpf:'',
        email:'',
        image:'',
        key:''
      }
    } 
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this); 
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  

  handleInput(e){
    this.setState({
      currentItem:{
        nome: this.refs.nome.value,
        cpf: this.refs.cpf.value,
        email: this.refs.email.value,
        image:this.refs.image.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;

    if(newItem.nome !== ""){
      const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem:{
        nome:'',
        cpf:'',
        email:'',
        image:'',
        key:''
      }
    })
    }

  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(nome,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.nome= nome;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){

    return(
      <div className="App">

      <div id="titulo">
        <h2>TESTE MENEW 2 - REACTJS</h2>
      </div>

      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" ref="nome" name="nome" placeholder="Digite o Nome" 
          value={this.state.currentItem.nome}
          onChange={(event)=>this.handleInput(event)}/>
          <input type="text" ref="cpf" name="cpf" placeholder="Digite o CPF" 
          value={this.state.currentItem.cpf}
          onChange={(event)=>this.handleInput(event)}/>
          <input type="text" ref="email" name="email" placeholder="Digite o E-mail" 
          value={this.state.currentItem.email}
          onChange={(event)=>this.handleInput(event)}/>
          <input type="text" ref="image" name="image" placeholder="Informe o link da imagem" 
          value={this.state.currentItem.image}
          onChange={(event)=>this.handleInput(event)}/>
          <button type="submit">Adicionar</button>
        </form>
      </header>
      <ListItems items={this.state.items} 
      deleteItem={this.deleteItem} 
      setUpdate={this.setUpdate} />
      </div>
    );
  }
}

export default App;
