import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const FlatLista = styled.FlatList`
    flex: 1;
`;

export const ViewContainer = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: 'mediumseagreen'
`;

export const Imagem = styled.Image`
    width: 100;
    height: 100;
    margin: 5
`;

export const ItemName = styled.View`
    align-items: "center";
    background-color: "#dcda48";
    flex-grow: 1;
    margin: 4;
    padding: 20
`;

export const ViewText = styled.View`
    flex: 1;
    flex-direction: 'row'
`;

export const Texto = styled.Text`
    color: 'white';
    padding: 10
`;