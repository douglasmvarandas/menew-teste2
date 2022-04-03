import styled from 'styled-components';


export const Div = styled.div`
    display: flex;
    justify-content: center;
`;


export const Container = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 100px;
    width: 100%;
    max-width: 1120px;
    height: 100vh;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        padding: 10px;
        border-bottom: 2px solid red;

        width: 100%;
        height: 180px;
    }
`;