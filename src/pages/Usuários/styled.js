import styled from 'styled-components';

export const ListPage = styled.div`

    * {
        margin: auto;
        padding: 0;
        list-style: none;
    }
    .list {
        margin: 30px;
        display: flex;
        flex-direction: row;
    }
    .lists {
        margin-bottom: 80px;
        background: #0B2027;
        padding: 20px;
        border-radius: 3px;
    }
    img{
        display: inline-block;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    span{
        display: inline-block;
        color: white;
        font-weight: 700;
        margin-bottom: 20px;
    }
    p{  
        letter-spacing: .5px;
        font-weight: 700;
        border-radius: 4px;
        padding: 15px;
        background: white;
        color: black;
        font-style: bold;  
        margin-bottom: 25px;
    }
`;