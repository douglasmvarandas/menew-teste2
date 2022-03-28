import React, {createContext} from 'react'
import users from '../data/users'

//passo um obj vazio p iniciar o contexto
const UsersContext = createContext({})

export const UsersProvider = props => {
  return (
    //dentro do context eu crio o provider q recebe uma lista de elementos q será renderizado nos childrens
    <UsersContext.Provider value={{ 
      state: { 
        users 
        }
        }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext