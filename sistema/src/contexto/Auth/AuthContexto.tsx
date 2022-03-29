import {createContext} from 'react';
import {User} from '../../Types/User'

export type AuthContextoType = {
    user:User|null
    sigin:(email:string,password:string)=>Promise<boolean>
    signout:()=> void
    
}

export const AuthContexto = createContext<AuthContextoType>(null!);
