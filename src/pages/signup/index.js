import React, { useState } from 'react';
import './styles.css';
import sprites from '../../assets/sprites.png';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';
import { verifyCPF, verifyEmail } from './controller/verifyEmailAndCpf';


function SignupPage() {
    const [ user, setUser ] = useState({email: '', cpf: '', name: ''});
    const [ redirect, setRedirect ]= useState(<div></div>);

    function SingUpApi(event){
        event.preventDefault();

        //remove '.' e '-' do cpf
        var userLogin = {
            email: user.email,
            cpf: user.cpf.replace('.', '').replace('.', '').replace('.', '').replace('-', ''),
            name: user.name
        };
        if (userLogin.cpf.length !== 11) return alert('CPF inválido!');
        
        else if (userLogin.email === '') return alert('email em branco, favor digitar o email');
        
        else {
            api.get('/users').then(res =>{
                if(verifyEmail(res.data, userLogin.email)) return alert("email já cadastrado!");
                
                else if (verifyCPF(res.data, userLogin.cpf)) return alert('CPF já cadastrado!');
                
                else{
                    api.post('/users', {name: userLogin.name, email: userLogin.email, cpf: userLogin.cpf}).then(res => {
                        if (res.data.length === 0) return alert('email ou CPF não encontrdos');
                        
                        else {
                            alert("Cadastrado com sucesso!");
                            setRedirect(<Redirect to="/dash" user={res.data} />);
                        }
                    });
                };
            });
        };
    };

    function cpfMask(value){
        // impede entrar outro caractere que não seja número
        if(isNaN(value[value.length-1])) setUser({...user, cpf: value.substring(0, value.length-1)});
        //coloca um ponto a cada 3 numeros
        if (value.length === 3 || value.length === 7) setUser({...user, cpf: value += '.'});

        else if (value.length === 11) setUser({...user, cpf: value += '-'});

        else setUser({...user, cpf: value});
    }
    return (
        <div className="home">
            <div className="divLogo">
                <Link to="/" id="HomeLogo" style={{backgroundImage: 'url('+sprites+')'}} />
                <h1>Menew, sistema de gestão para Bares, Restaurantes, food trucks, hotéis e derivados</h1>
            </div>
            <div className="SigninCard">
                <h1>Cadastro</h1>
                <form onSubmit={SingUpApi}>
                    <input type="text" name="name" placeholder="nome" value={user.name} onChange={(e)=> setUser({...user, name: e.target.value})} />
                    <input type="text" name="email" placeholder="email" value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})} />
                    <input type="text" name="cpf" placeholder="CPF" maxLength='14' value={user.cpf} onChange={(e) => cpfMask(e.target.value)} />
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/"> Voltar para Login</Link>
            </div>
            {redirect}
        </div>
    )
}

export default SignupPage;