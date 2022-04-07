import styled from 'styled-components';

export const Container = styled.div`
    background: #ff4851;

    width: 100%;
    height: 100vh;

    display: flex;

    align-items: center;
    justify-content: center;


   > div {
        width: 50%;
        height: 400px;
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

        @media (max-width: 915px) {
            flex-direction: column;
            width: 90%;


            > form {
                width: 100%;
            }

            > img {
                width: 30%;
                height: 40%;
            }
        }
    }
`;