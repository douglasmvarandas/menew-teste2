import InputMask from 'react-input-mask';
import './Cadastro.css'

export function Cadastro () {

    
    return(
        <div className="pageCadastro">
            <div className="cadastro">
                <h3>Novo Cadastro:</h3>

                <InputMask mask="999.999.999-99" placeholder="CPF" id="cpf"></InputMask>
                <input type="text" name="nome" id="nome" placeholder="Nome Completo"/>
                <input  type="email" name="email" id="email" placeholder="E-mail"  />
                <button className="btnEnviar">Enviar</button>
            </div>
        </div>
    )
}