import React from 'react';
import styled from 'styled-components';

const CardLogin = styled.div`
position:fixed;
left:0;
top:0;
right:0;
bottom:0;
z-index:90;
display:flex;
justify-content:center;
align-items:center;`
function Login() {
    return (
        <CardLogin>
            <div className="card text-center ">
                <div className="card-header bg-danger"><h3 className="text-white">Se já é cadastrado, faça o login</h3></div>
                <div className="card-body ">
                    <form>
                        <div className="row ">
                            <div className="col">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <label htmlFor="InputEmail">Email</label>
                                            <input type="email" className="form-control" id="InputEmail" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <label htmlFor="inputSenha">Senha</label>
                                            <input type="password" className="form-control" id="inputSenha" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-danger">Logar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </CardLogin>
    )
}

export default Login;