import React from 'react';

import { AiFillDelete } from 'react-icons/ai';
import { FiEdit, FiPlus, FiMonitor } from 'react-icons/fi';

import './styles.css';

function Search() {
  return (
    <div className="search-content">
      <main>
        <h1>Dados</h1>
        <div className="card-unique">
          <div>
            <label>Nome</label>
            <input
              type="text"
              value={'David Lucas'}
            />
          </div>
          <div>
            <label>CPF/CNPJ</label>
            <input
              type="text"
              value={'12345612388'}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={'lucas@menew.com.br'}
            />
          </div>
          <div>
            <label>Função</label>
            <input
              type="text"
              value={'Estagiário'}
            />
          </div>
        </div>
      </main>
      <footer>
        <button className="btn-card" title="Adicionar">
          <FiPlus size={25} color='#fff' />
        </button>
        <button className="btn-card" title="Editar informações do Usuário">
          <FiEdit size={25} color='#fff' />
        </button>
        <button className="btn-card" title="Verificar Habilidades">
          <FiMonitor size={25} color='#fff' />
        </button>
        <button className="btn-card" id="btn-card-delete" title="Remover Usuário">
          <AiFillDelete size={25} color='#fff' />
        </button>
      </footer>
    </div >
  );
}

export default Search;