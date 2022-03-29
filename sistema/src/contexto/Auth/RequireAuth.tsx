import { useContext } from "react"
import { AuthContexto } from "./AuthContexto"
import { Login } from "../../pages/login"

export const RequireAuth = ({children}:{children:JSX.Element})=>{
    const auth = useContext(AuthContexto)
    if(!auth.user){
        return <Login />
    }
    return children

}