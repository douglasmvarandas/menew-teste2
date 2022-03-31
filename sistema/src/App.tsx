import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import Itens from './pages/Itens';

import {Privada} from './pages/Privada';
import { RequireAuth } from './contexto/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContexto } from './contexto/Auth/AuthContexto';

function App() {
  const auth = useContext(AuthContexto)
  
  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link>
        <Link to="/">Logout</Link>
        {auth.user && <a href='javascript:;'>Sair</a>}
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Privada" element={<RequireAuth><Privada /></RequireAuth>
        } />
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Itens" element={<Itens/>}/>
      </Routes>

      
      
    </div>
  );
}

export default App;