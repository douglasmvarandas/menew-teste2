import { useForm } from "react-hook-form";
import React,{useState} from 'react'
import {MdEmail,MdLock} from 'react-icons/md'
import {HiEye,HiEyeOff} from 'react-icons/hi'
export const Cadastro =()=>{
    const [password,setPassword] = useState('')
    const [show,setShow]=useState(false)
    const handleClick = (e:Event)=>{
        e.preventDefault()
        setShow(!show)
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => console.log(data);
    const [nome, setNome]=useState('')
    const [email, setEmail]= useState('')
    const [cpf, setCpf]= useState('')
    const [senha, setSenha]= useState('')

    const handle = ()=>{
         
        let listUser = JSON.parse(localStorage.getItem('listaUser')||'[]')
        listUser.push({
        'nome':nome,
        'email':email,
        'cpf':cpf,
        'senha':senha

        })
        localStorage.setItem('listaUser',JSON.stringify(listUser))
        
       
      
        
    }
    
   
  
    return(
        <div>
        <div className='corpo'>
            <h1>Cadastre-se</h1>
            <form onSubmit = { handleSubmit(onSubmit) }>
                <div className="inputEmail">
                    <input type="text" name="nome" id="nome" onChange={(e)=>setNome(e.target.value)}  placeholder="Digite seu nome" /><br></br>
                </div>

                <div className="inputEmail">
                
                    <input type="text" name="cpf" id="cpf"  onChange={(e)=>setCpf(e.target.value)} placeholder="Digite seu Cpf" /><br></br>
                </div>

                <div className="inputEmail">
                    <MdEmail/>
                    <input type="text" name="email"  id="email"onChange={(e)=>setEmail(e.target.value)} placeholder="Digite seu email" /><br></br>
                </div>
                <div className='inputSenha'>
                    <MdLock/>
                    <input type={show?"text":"password"} name="password"  onChange={(e)=>setSenha(e.target.value)} id="senha"  placeholder="Digite sua senha"/>
                    <div className='login-emoji'>
                        {show?(
                            <HiEye
                            onClick={()=>handleClick}
                            />
                            
                        ):(
                            <HiEyeOff
                            onClick={()=>handleClick}
                            
                            />
                        )
                        
                        }
                    </div>
                </div>
            </form>
            <button type='submit' onClick={handle}>Criar</button>
        </div>
        

    </div>
    )
}