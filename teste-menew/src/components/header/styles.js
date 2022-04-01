import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: red;
    height: 10%;
    width: 100%;
    align-self: flex-end;
`;

export const HeaderImg = styled.img`
    height: 100% ;
    width: 100% ;
    max-width: 80px;
    max-height: 80px;
`;

export const ButtonVoltar = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 10%;
    height: 70%;
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

    @media (max-width: 800px) {
        font-size: 14px;
        width: 20%;
        }
`;