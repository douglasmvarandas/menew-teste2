import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import {Privada} from './pages/Privada';
import { RequireAuth } from './contexto/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContexto } from './contexto/Auth/AuthContexto';

function App() {
  const auth = useContext(AuthContexto)
  return (
    <div className="App">
      <header><h1>header do site</h1></header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Privada">Privada</Link>
        {auth.user && <a href='javascript:;'>Sair</a>}
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Privada" element={<RequireAuth><Privada /></RequireAuth>
        } />
      </Routes>

      
      
    </div>
  );
}

export default App;