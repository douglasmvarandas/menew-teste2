import React,{useState} from 'react'
import {MdEmail,MdLock} from 'react-icons/md'
import {HiEye,HiEyeOff} from 'react-icons/hi'


export const Home =()=>{
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    const [show,setShow]=useState(false)

    const handleClick = (e:Event)=>{
        e.preventDefault()
        setShow(!show)
    }

   const entrar=()=>{
       //let email=document.querySelector('#email' as unknown as HTMLInputElement).value
       //let senha= document.querySelector('#senha' as unknown HTMLInputElement).value
       let listaUser= []
       let userValid = {
           nome:'',
           cpf:'',
           email:'',
           senha:''
       }

       listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]')
       listaUser.forEach((item:any)=>{
           if(email == item.email && password == item.senha){
               userValid={
                   email:item.email,
                   nome:item.nome,
                   cpf:item.cpf,
                   senha:item.senha
               }
           }
       })
        
       console.log(userValid)
       if(email==userValid.email&& password==userValid.senha){
           alert('acesso liberado')
       }else{
           alert('Acesso negado!')
       }
       

   }

    return(
        <div>
            <div className='corpo'>
                <h1>Acesse</h1>
                <div className="inputEmail">
                    <MdEmail/>
                    <input type="text"  id="email" value={email}  onChange={e=>setEmail(e.target.value)}  placeholder="Digite seu email" /><br></br>
                </div>

                <div className='inputSenha'>
                    <MdLock/>
                    <input type={show?"text":"password"}  value={password} onChange={e=>setPassword(e.target.value)}  placeholder="Digite sua senha"/>
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
                
                <button type='submit' onClick={entrar}>Entrar</button>
                <h4>Não tenho conta</h4>
                <button type='submit'>Cadastrar</button>
            </div>

        </div>
    )
}