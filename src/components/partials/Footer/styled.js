import styled from 'styled-components';

export const FooterArea = styled.div`
    height: 60px;
    display: block;
    max-width: 1500px;
   

.container {
    background-color:#CD0039;
    margin: auto;
    display: flex;
}
nav {
    width: 45%;
    padding-top:10px;
    padding-bottom:10px;

}
ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}

ul {
    display: flex;
    align-items:center;
    height: 40px;
}

li {
    margin: 30%;

    a{
        text-decoration: none;
        color: white;
        font-size: 20px;

        &:hover {
            color: #ccc;
        }
    }
}

@media (max-width:800px) {
    .container {
        flex-direction: column;
    }
}
`;