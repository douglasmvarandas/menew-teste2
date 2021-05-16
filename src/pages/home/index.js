import React, { useState } from 'react';
import './styles.css';
import sprites from '../../assets/sprites.png';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

function Home() {
    const [ user, setUser ] = useState({email: '', cpf: ''});
    const [ redirect, setRedirect ]= useState(<div></div>)
    function SingInApi(event){
        event.preventDefault();
        //remove '.' e '-' do cpf
        var userLogin = {
            email: user.email,
            cpf: user.cpf.replace('.', '').replace('.', '').replace('.', '').replace('-', '')
        };
        if (userLogin.cpf.length !== 11) return alert('CPF inválido!');
        
        else if (userLogin.email === '') return alert('email em branco, favor digitar o email');
        
        else {
            api.get('/users?email='+userLogin.email+'&cpf='+userLogin.cpf).then(res => {
                if (res.data.length === 0) return alert('email ou CPF não encontrdos');
                
                else return setRedirect(<Redirect to={{ pathname: '/dash', state: res.data }} />);
            })};
    };
    function cpfMask(value){
        if(isNaN(value[value.length-1])) return setUser({...user, cpf: value.substring(0, value.length-1)});

        if (value.length === 3 || value.length === 7) return setUser({...user, cpf: value += '.'});

        else if (value.length === 11) return setUser({...user, cpf: value += '-'});
        
        else return setUser({...user, cpf: value});
    }
    return (
        <div className="home">
            <div className="divLogo">
                <Link to="/" id="HomeLogo" style={{backgroundImage: 'url('+sprites+')'}} />
                <h1>Menew, sistema de gestão para Bares, Restaurantes, food trucks, hotéis e derivados</h1>
            </div>
            <div className="SigninCard">
                <h1>Login</h1>
                <form onSubmit={SingInApi}>
                    <input type="text" name="email" placeholder="email" value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})} />
                    <input type="text" name="cpf" placeholder="CPF" maxLength='14' value={user.cpf} onChange={(e) => cpfMask(e.target.value)} />
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/cadastro">Clique aqui para Cadastrar-se</Link>
            </div>
            {redirect}
        </div>
    )
}

export default Home;