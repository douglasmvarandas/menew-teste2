import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
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
    width: 10%;
    height: 70%;
    background-color: #661dff;
    font-size: 16px;
    font-weight: bold;
    color: #d6d6d6;
    min-width: 130px;
    cursor: pointer;
    transition: all 0.2s;
    margin-left: 10px;

    &:hover {
        background-color: #d6d6d6;
        color: #661dff;
    }

    @media (max-width: 800px) {
        width: 20%;
        }
`;

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 80px;
    min-height: 80px;
    padding: 0 20px;
    background-color: red;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;