import './Login.css';


export function Login () {
    return(
        <div className="pageLogin">
            <div className="login">
                <h3>Sign in</h3>
                <input type="text" name="username" id="username" placeholder="username"/>
                <input  type="password" name="senha" id="senha" placeholder="senha"  />
                <span>Esqueceu senha?</span>
                <button className="btnLogin">Entrar</button>
            </div>
        </div>
    )
}