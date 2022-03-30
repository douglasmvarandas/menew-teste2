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

  


    return(
        <div>
            <div className='corpo'>
                <h1>Acesse</h1>
                <div className="inputEmail">
                
                    <MdEmail/>
                   
                    <input type="text" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Digite seu email" /><br></br>
                </div>
                <div className='inputSenha'>
                    <MdLock/>
                    <input type={show?"text":"password"} id="sen" value={password} onChange={e=>setPassword(e.target.value)} name="password" placeholder="Digite sua senha"/>
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
                
                <button type='submit'>Entrar</button>
                <h4>Não tenho conta</h4>
                <button type='submit'>Cadastrar</button>
            </div>

        </div>
    )
}