import { useState } from "react"
import { JsxElement } from "typescript"
import { useApi } from "../../hooks/useApi"
import { User } from "../../Types/User"
import { AuthContexto } from "./AuthContexto"

export const AuthProvider =({children}:{children: JSX.Element})=>{
    const [user,setUser]= useState<User | null>(null)
    const api = useApi()

    const sigin = async(email:string, password:string)=>{

        const data = await api.signin(email,password)
        if(data.user && data.token){
            setUser(data.user)
            return true
        }
        return false
       


    }

    const signout = async()=>{
        const data = await api.logout()
        setUser(null)
    }

    return(
        <AuthContexto.Provider value={{user, sigin,signout}}>
            {children}
        </AuthContexto.Provider>
    )
}