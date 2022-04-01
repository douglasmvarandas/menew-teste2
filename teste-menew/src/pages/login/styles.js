import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const MenuButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 40px;
    height: 100%;
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
`;

export const LinkText = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: red;
    margin-bottom: 20px;

    &:hover {
        color: #661dff;
        cursor: pointer;
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
    justify-content: center;
    width: 20%;
    height: 30%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    border-color: #661dff;

    @media (max-width: 850px) {
        width: 40%;
    }
`;

export const Input = styled.input`
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    height: 100%;
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
    
`;