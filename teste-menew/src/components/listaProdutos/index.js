import React from 'react';
import { Card, Image, Title, Descricao, ProductContainer, Button, TitleDescriptionContainer } from './styles';
// import { produtos } from '../../data';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import itemActions from '../../redux/itens/actions';

function ListaProdutos(props) {

    const navigate = useNavigate();
    const { produtos } = props;

    const editProductHandler = (id) => {
        navigate(`/produto/${id}`);
    }

    return (
        <Card>
            {produtos.map(produto => (
                <ProductContainer key={produto.id}>
                    <Image src={`${produto.foto}`} alt="" />
                    <TitleDescriptionContainer>
                        <Title>{produto.nome}</Title>
                        <Descricao>{produto.descricao}</Descricao>
                    </TitleDescriptionContainer>
                    <Button onClick={() => editProductHandler(produto.id)} >Editar produto</Button>
                </ProductContainer>
            ))}
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        produtos: state.Itens.produtos,
    };
}

export default connect(mapStateToProps, {
    ...itemActions,
})(ListaProdutos);
