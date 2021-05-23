import { Buttons, Cancel, ChecBox, LogBox, Overlay } from "./StyleCadast";
import LogoImg from '../../assets/menew-bymv.png';
import { BrowserRouter, Link } from "react-router-dom";

export function Cadastro() {
    return (
        <BrowserRouter>
        <Overlay>
            <LogBox>
                <img src={LogoImg} alt=""/>
                <h1>Insira os dados abaixo</h1>
                <input type="text" name="Nome" id="Nome" placeholder="Digite seu nome" required/>
                <input type="e-mail" name="e-mail" id="email" placeholder="seuemail@voce.com" required/>
                <input type="text" name="CPF" id="CPF" placeholder="CPF" required/>
               <input type="password" name="Senha" id="Senha" placeholder="Defina uma Senha" required/>
               <input type="password" name="Senha" id="Senha" placeholder="Confirme sua Senha" required/>
               <ChecBox>
               <input type="checkbox" name="Manter Conectado" id="Manter Conectado"/>
               <label htmlFor="Manter Conectado">Concordo com os termos.</label>
               </ChecBox>
               <Buttons>
                   <Cancel>
                       <Link to="/">
                       <span>Cancelar</span>
                       </Link>
                   </Cancel>
                   <button type="submit" name="SubmitLogin">Confirmar</button>
               </Buttons>
            </LogBox>
        </Overlay>
        </BrowserRouter>
    )
}