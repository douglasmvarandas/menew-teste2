import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    height: 100vh;
    width: 100%;
`;

export const Input = styled.input`
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    width: 400px;
    height: 25px;
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

    &:focus {
        outline: none;
        background-color: #d6d6d6;
        color: #661dff;
    }
    
    @media (max-width: 1200px) {
        width: 50%;
        font-size: 14px;
        }
`;

export const EditButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 40px;
    height: 15%;
    width: 60%;
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

    @media (max-width: 1200px) {
        width: 50%;
        font-size: 14px;
        }
`;

export const ItemInputContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;

export const ButtonVoltar = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 40px;
    height: 15%;
    width: 40%;
    background-color: #661dff;
    font-size: 16px;
    font-weight: bold;
    color: #d6d6d6;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 10px;

    &:hover {
        background-color: #d6d6d6;
        color: #661dff;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: red;
    margin-bottom: 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 40%;
    height: 50%;
    padding: 20px;
    border : 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    

    @media (max-width: 1200px) {
        width: 50%;
        font-size: 14px;
        }

    @media (max-width: 600px) {
        width: 80%;
        font-size: 12px;
        }
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    max-width: 300px;
    max-height: 300px;
    border-radius: 5px;

    @media (max-width: 768px) {
        max-width: 200px;
        max-height: 200px;
    }

`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
`;