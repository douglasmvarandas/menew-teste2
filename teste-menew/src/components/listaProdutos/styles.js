import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 60vw;
    padding: 50px;
    background-color: #cae4df;
    border-radius: 10px;
    border-color: #661dff;
    overflow: scroll;
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    padding: 5px;
    border : 1px solid grey;
    border-radius: 10px;
`;

export const TitleDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    
    @media (max-width: 650px) {
        padding: 0px;
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    max-width: 90px;
    max-height: 90px;

    @media (max-height: 600px) {
        max-width: 50px;
        max-height: 50px;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: red;
    margin-bottom: 20px;

    @media (max-height: 650px) {
        font-size: 20px;
    }

    @media (max-width: 650px) {
        font-size: 20px;
    }
`;

export const Descricao = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    height: 50%;
    background-color: #661dff;
    font-size: 16px;
    font-weight: bold;
    color: #d6d6d6;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #d6d6d6;
        color: #661dff;
    }

    @media (max-height: 650px) {
        width: 20%;
        height: 60%;
        font-size: 10px;
        padding: 0px;
    }

    @media (max-height: 800px) {
        font-size: 10px;
`;