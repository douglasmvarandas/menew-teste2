import {useContext} from 'react'
import {AuthContexto} from '../../contexto/Auth/AuthContexto'
export const Privada =()=>{
    const auth= useContext(AuthContexto)
    return(
        <div>..Pagina privada Deus é bom</div>
    )
}