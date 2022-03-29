import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContexto } from "../../contexto/Auth/AuthContexto"

export const Login =()=>{
    const auth = useContext(AuthContexto)
    const navigate = useNavigate()
    const [email, setEmail]=useState('')

    const [password, setPassword]=useState('')

    const handleLogin = async()=>{
        if(email && password){
            const isLogged = await auth.sigin(email, password)
            if(isLogged){
                navigate('/')
            }else{
                alert("Ops não foi possivel")
            }
        }
    }
    
    return(
        <div>
            <h2>Pagina de login</h2>
            <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="Digite seu email"/>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Digite sua senha"/>
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}