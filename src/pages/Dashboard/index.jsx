import React from 'react';
import NavBar from '../../components/Navbar/index';

import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';

import ButtonComponent from '../../components/Button';

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <Container>
                <div className="container">
                    <div className="container-header">
                        <h1>Olá, Victor Alves.</h1>
                        <span>
                            Total de produtos cadastrados: 20
                        </span>
                        <ButtonComponent
                            content='CADASTRAR NOVO PRODUTO'
                            color='neutral'
                            fullWidth={true}
                            type='submit'
                        />
                    </div>
                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ButtonComponent
                            content='EDITAR PRODUTO'
                            color='neutral'
                            fullWidth={true}
                            type='submit'
                        />
                    </div>
                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ButtonComponent
                            content='EDITAR PRODUTO'
                            color='neutral'
                            fullWidth={true}
                            type='submit'
                        />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ButtonComponent
                            content='EDITAR PRODUTO'
                            color='neutral'
                            fullWidth={true}
                            type='submit'
                        />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ButtonComponent
                            content='EDITAR PRODUTO'
                            color='neutral'
                            fullWidth={true}
                            type='submit'
                        />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ButtonComponent
                            content='EDITAR PRODUTO'
                            color='neutral'
                            fullWidth={true}
                            type='submit'
                        />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ButtonComponent
                            content='EDITAR PRODUTO'
                            color='neutral'
                            fullWidth={true}
                            type='submit'
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Dashboard;