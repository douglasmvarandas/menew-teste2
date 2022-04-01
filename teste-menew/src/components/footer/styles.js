import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100px;
    bottom: 0px;
    position: fixed;

    @media (max-height: 768px) {
        position: relative;
    }
`;

export const FooterImage = styled.img`
    width: 100px;
    height: 100px;
    align-self: flex-end;
`;