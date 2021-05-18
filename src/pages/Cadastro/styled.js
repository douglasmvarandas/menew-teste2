import styled from 'styled-components';

export const PageArea = styled.div`

    form {
        background-color:#fff;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        margin: 90px 40px 150px 40px;

        .area{
            display:flex;
            align-items: center;
            padding: 10px;
            max-width:500px;

            .area--title {
                width: 200px;
                text-align: right;
                padding-right:20px;
                font-weight: bold;
                font-size: 14px;
            }
            .area--input{
                flex:1;

                input {
                    width: 100%;
                    font-size:14px;
                    padding:4px;
                    border: 1px solid #DDD;
                    border-radius: 3px;
                    outline: 0;
                    transition: all ease .3s;

                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                }

                button {
                    background-color: #CD0039;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px;
                    border-radius: 4px;
                    color:white;
                    font-size: 15px;
                    cursor: pointer;

                    &:hover {
                        background-color: #B61830;
                    }
                }
            }
        }
    }
`;