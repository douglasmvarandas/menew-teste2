import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1550px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 100px;
    
    .container {
        width: 70%;
        height: 100%;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

        .container-header{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            
            padding: 10px;
            border-bottom: 2px solid red;

            width: 100%;
            height: 180px;

            font-size: 1rem;

        }

        .container-body{
            border: 2px solid #000;

            width: 250px;
            height: 320px;
            margin: 15px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding-top:0;

            > img {
                width: 99%;
                height: 50%;
                border-bottom: 1px solid #000;
            }

            > h3 {
                font-size: 1.2rem;
            }

            > p {
                font-size: 0.8rem;
                padding: 0.5rem;
            }
    }

`;