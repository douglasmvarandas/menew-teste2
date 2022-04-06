import { Routes, Route, Outlet } from "react-router-dom";
import Layout from './Layout';

import Home from '../views/Home/Home';
import Cadastro from '../views/Cadastro/Cadastro';
import Edicao from '../views/Edicao/Edicao';
import Login from '../views/Login/Login';
import Logout from '../views/Logout/Logout';
import './App.css';


function App() {

    return (
 
        <Layout >
            <Routes>
                <Route path='/' >
                    <Route index element={<Home />} />
                    <Route path='cadastro' element={<Cadastro />} />
                    <Route path='login' element={<Login />} />
                    <Route path='editar/:id' element={<Edicao />} />
                    <Route path='logout' element={<Logout />} />
                </Route>
            </Routes>
        </Layout>
        
    )


}

export default App;
