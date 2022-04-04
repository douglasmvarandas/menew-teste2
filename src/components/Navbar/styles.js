import styled from 'styled-components';

export const Navbar = styled.nav`
    height: 70px;
    width: 100%;

    background: #333333;

    position: fixed;
    z-index: 1;
    top: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-left: 8rem;
    padding-right: 8rem;
    
    img {
        height: 60px;
        width: 70px;
    }

    @media (max-width:  768px) {
        padding: 1rem
    }
`;