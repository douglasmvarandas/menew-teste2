import {Component} from 'react'
import {FaEdit,FaWindowClose} from 'react-icons/fa'


export default class Itens extends Component{

    componentDidMount(){

        const itens = JSON.parse(localStorage.getItem('itens')||'[]')
        if(!itens) return

        this.setState({itens})

    }

    componentDidUpdate(prevProps:any,prevState:any){
        const {itens}= this.state
        if(itens===prevState.itens)return;
        localStorage.setItem('itens', JSON.stringify(itens))


        
    }

    state={
        novoItem:'',
        itens:[
            'celular',
            'televisão',
            'notebook'
        ],
        index:-1
    }
    
    handleOnSubmit=(e:any)=>{
        e.preventDefault()
        const{itens,index}=this.state
        let {novoItem}= this.state
        novoItem= novoItem.trim()

        if(itens.indexOf(novoItem)!==-1)return;
        const novosItens = [...itens]
        if(index ===-1){
            this.setState({
                itens:[...novosItens,novoItem],
                novoItem:'',
                
            })

        }else{
            novosItens[index]=novoItem
            this.setState({
                itens:[...novosItens],
                index:-1
            })
        }
       


    }
   
    handleChange=(e:any)=>{
        this.setState({
            novoItem:e.target.value
        })

    }

    handleEdit=(e:any,index:number)=>{
        const {itens}= this.state
        this.setState({
            index,
            novoItem:itens[index]
        })

    }

    handleDelete=(e:any,index:number)=>{
        const {itens}=this.state
        const novosItens = [...itens]
        novosItens.splice(index,1)

        this.setState({
            itens:[...novosItens]
        })
        
    }
    render(){
        const {novoItem,itens} = this.state
        return(
            <div className="lista">
            <h1>Lista de Itens</h1>
            <form onSubmit={this.handleOnSubmit}>
                <div className='inputEmail'>
                    <input type="text" onChange={this.handleChange} value={novoItem} placeholder="Digite algo "/>
                </div>
                <button type="submit">Adicionar</button>
            </form>
           <ul className='itens'>
               {itens.map((item, index)=>(
                   <li key={item}>
                       {item}
                       <div className='icones'>
                            <FaEdit onClick={(e)=>this.handleEdit(e, index)} className="edit"/>
                            <FaWindowClose  onClick={(e)=>this.handleDelete(e, index)} className="delete"/>
                       </div>
                    </li>
               ))}

           </ul>
        </div>

        )
        }
}

