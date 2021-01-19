import React from 'react';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';

import './styles.css';

const NewUser = () => {
  return (
    <div className="new-user-container">
      <Header name="Lucas" />
      <main>
        <form className="form">
          <fieldset>
            <legend>Seus Dados</legend>

            <Input 
              name="name"
              label="Nome Completo"
            />

            <Input 
              name="email"
              label="Email"
            />

            <Input 
              name="cpf"
              label="CPF"
            />
          </fieldset>
          <fieldset>
            <legend>
              Informações
            </legend>
            <Textarea 
              name="description"
              label="Descrição"
            />

            <Input 
              name="job"
              label="Função"
            />
          </fieldset>
          <footer>
            <p>
              Importante! Preencha todos os dados!
            </p>
            <button type="submit">Salvar Usuário</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default NewUser;