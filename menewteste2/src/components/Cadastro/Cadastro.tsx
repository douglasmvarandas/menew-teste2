import { Buttons, Cancel, ChecBox, LogBox, Overlay } from "./StyleCadast";
import LogoImg from '../../assets/menew-bymv.png';

export const Cadastro = ({ onClose = () => {}}) => {
    return (
        <Overlay>
            <LogBox>
                <img src={LogoImg} alt=""/>
                <h1>Insira os dados abaixo</h1>
                <input type="text" name="Nome" id="Nome" placeholder="Digite seu nome"/>
                <input type="e-mail" name="e-mail" id="email" placeholder="seuemail@voce.com"/>
                <input type="text" name="CPF" id="CPF" placeholder="CPF"/>
               <input type="password" name="Senha" id="Senha" placeholder="Defina uma Senha"/>
               <input type="password" name="Senha" id="Senha" placeholder="Confirme sua Senha"/>
               <ChecBox>
               <input type="checkbox" name="Manter Conectado" id="Manter Conectado"/>
               <label htmlFor="Manter Conectado">Concordo com os termos.</label>
               </ChecBox>
               <Buttons>
                   <Cancel>
                       <span onClick={onClose}>Cancelar</span>
                   </Cancel>
                   <button type="submit" name="SubmitLogin">Confirmar</button>
               </Buttons>
            </LogBox>
        </Overlay>
    )
}