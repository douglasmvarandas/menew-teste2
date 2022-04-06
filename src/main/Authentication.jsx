import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App'
import Login from '../views/Login/Login'
import axios from 'axios'
import { appContext } from './Context'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

// Componente que verifica se o usuário está logado ou não
// e redireciona a depender da situação.

// este componente também armazena a lista de usuários no localStorage para melhor gerenciar o estado

const themeOptions = {
    palette: {
        primary: {
            main:'#dc3545'
        }
    }
}

const theme = createTheme(themeOptions)

const Authentication = (props) => {

    const [validado, setValidado] = useState(false);
    const [users, setUsers] = useState({});
    const [products, setProducts] = useState({});
    const [estadoComponente, setEstadoComponente] = useState('inicial');
    const [user, setUser] = useState({});


    useEffect(() => {
        axios.get('data.json')
        .then(resp => { 

            setProducts(resp.data.products);
            setEstadoComponente('else')
            let usuarios = localStorage.getItem('@app-users')
            if(!usuarios) {
                localStorage.setItem('@app-users', JSON.stringify(resp.data.users))
                console.log(localStorage.getItem('@app-users'));
                setUsers(resp.data.users)
            } else {
                let lista = JSON.parse(localStorage.getItem('@app-users'))
                setUsers(lista)
                console.log(lista);
            }
    
        })
        .catch(err => console.log(err))
    },[])
    
    useEffect(() => {
        
        let token = localStorage.getItem('@app-token');
        if(token){setValidado(true)}

    }, [])

    let value = {products, setProducts, users, setUsers, estadoComponente, user, setUser}

    if(!validado) {
        return (
            <ThemeProvider theme={theme} >
                <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center'}} >
                    <BrowserRouter>
                        <appContext.Provider value={value} >
                            <Routes>
                                <Route path='/' element={<Login />} />
                            </Routes>
                        </appContext.Provider>
                    </BrowserRouter>
                </SnackbarProvider>
            </ThemeProvider>
        )
    } else {
        return (
            <ThemeProvider theme={theme} >
                <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center'}}  >
                    <BrowserRouter>
                        <appContext.Provider value={value} >
                            <App>
                                {props.children}
                            </App>
                        </appContext.Provider>
                    </BrowserRouter>
                </SnackbarProvider>
            </ThemeProvider>
        )
    }
}




export default Authentication