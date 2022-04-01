/* eslint-disable eqeqeq */
import React from 'react';
// import { produtos } from '../../data';
import { useParams } from "react-router-dom";
import Footer from '../../components/footer/index';
import { Container, Input, Title, Card, Image, Text, ItemInputContainer, EditButton } from './styles';
import Header from '../../components/header';
import { connect } from 'react-redux';
import itemActions from '../../redux/itens/actions';

function EditItem(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');
    const { id } = useParams();
    const { produtos, editRequest } = props;
    const produto = produtos.find(produto => produto.id == id);

    const handleSubmit = (e) => {
        e.preventDefault();
        let nomeEditado = name;
        let descricaoEditada = description;
        let fotoEditada = image;

        if (name == '') {
            nomeEditado = produto.nome;
        }
        if (description == '') {
            descricaoEditada = produto.descricao;
        }
        if (image == '') {
            fotoEditada = produto.foto;
        }

        editRequest(id, nomeEditado, descricaoEditada, fotoEditada);

    }


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.value);
    }


    return (
        <Container>
            <Header />
            <Title>Editar produto {id}</Title>
            <Card>
                <ItemInputContainer>
                    <Image src={`${produto.foto}`} alt="" />
                    <Input type="text" placeholder="Editar imagem" onChange={e => handleImageChange(e)} />
                </ItemInputContainer>
                <ItemInputContainer>
                    <Text>Nome: {produto.nome}</Text>
                    <Input placeholder="Editar nome" onChange={e => handleNameChange(e)} />
                </ItemInputContainer>
                <ItemInputContainer>
                    <Text>Descrição: {produto.descricao}</Text>
                    <Input placeholder="Editar descrição" onChange={e => handleDescriptionChange(e)} />
                </ItemInputContainer>
                <EditButton onClick={handleSubmit}>Salvar edição</EditButton>
            </Card>
            <Footer />
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        produtos: state.Itens.produtos,
    };
}

export default connect(mapStateToProps, {
    ...itemActions,
})(EditItem);