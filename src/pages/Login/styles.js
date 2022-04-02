import styled from 'styled-components';

export const Container = styled.section`
    background: #ff4851;

    width: 100vw;
    height: 100vh;

    display: flex;

    align-items: center;
    justify-content: center;


   > div {
        width: 40%;
        height: 40%;
        padding: 10px;

        background: #fff;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        > img {
        width: 50%;
        height: 70%;   
        }

        > form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        

        width: 50%;
        height: 100%;
        }


    }


`;