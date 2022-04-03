import React from 'react';
import NavBar from '../../components/Navbar/index';
import { Container, Div } from './styles';
import ButtonComponent from "../../components/Button/index";

const Dashboard = () => {
    return (
        <Div>
            <NavBar />
            <Container>
                <div>
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
            </Container>
        </Div>

    );
}

export default Dashboard;