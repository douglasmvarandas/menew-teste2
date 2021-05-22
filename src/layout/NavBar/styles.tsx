import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
`;

export const Navtop = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Brand = styled.div`
    width: 800px !important;
    a {
        font-weight: 700;
        color: black;
        text-decoration: none;
        font-size: 24px;
        transition: all .3s;
        width: 200px !important;
        &:hover{
            color: #696969;
        }
    }
`;


export const Nav = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    a {
        font-weight: 700;
        color: black;
        text-decoration: underline 3px #991c1c;
        text-transform: uppercase;
        font-size: 1rem;
        margin-right: 10px;
        transition: all .3s;
        &:nth-child(2){
            color: #ffffff;
            text-decoration: underline 8px #b43333;
            display: flex;
            font-size: 1.5rem;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #991c1c;
        }
        &:hover{
            color: #696969;
            text-decoration: underline 5px #b43333;
        }
        &:link{
            font-weight: 900;
        }

    }
`;

export const NavRight = styled.nav`
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: space-between;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: #941616;
        color: #FFF !important;
        font-weight: bold;
        border-radius: 50%;
        font-size: 1rem !important;
    }
    a {

        font-weight: 700;
        color: #941616;
        text-decoration: none;
        font-size: 24px;
        margin-left: 20px;
        transition: all .3s;
        &:hover{
            color: #a14141;
        }
        &:link{
            font-weight: 900;
        }

    }
`;


