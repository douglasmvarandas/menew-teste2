import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 70%;
    height: 450px;
    padding: 20px;

    background: #fff;
    border: 2px solid #000;

    .modal-title {
        width: 100%;
        border-bottom: 2px solid blue;

        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;

        > h1{
            font-size: 1.8rem;
        }
    }

    > form {
        width: 100%;
        height: 80%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        padding: 20px;
    }

    .modal-footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        
        button:nth-child(1){
            margin-right: 20px;
        }

        > button {
            font-size: 0.8rem;
        }
`;