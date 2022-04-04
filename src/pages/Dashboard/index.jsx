import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/Navbar/index';

import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';

import ModalCreateProduct from './ModalCreateProduct/index';
import ModalEditProduct from './ModalEditProduct/index';

import { initial_state } from '../../utils/constants';

const Dashboard = () => {
    const user = useSelector(state => state.user)
    const [produtos, setProdutos] = useState(initial_state);
    console.log(user)

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
                        <ModalCreateProduct />
                    </div>
                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ModalEditProduct />
                    </div>
                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ModalEditProduct />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ModalEditProduct />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ModalEditProduct />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ModalEditProduct />
                    </div>                    <div className="container-body">
                        <img src={Logo} alt="Logo Menew" />
                        <h3>Detergente</h3>
                        <p>Lorem DCMSCM SKNCKDCJNSJNCI<br />IAOCOASOCAINCOASN</p>
                        <ModalEditProduct />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Dashboard;