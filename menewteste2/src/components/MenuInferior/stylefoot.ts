import styled from 'styled-components';

export const Footer = styled.footer`
    background: var(--GreyMenu);
    position: fixed;
    bottom: 0;
        
    width: 100%;
`;

export const Content = styled.div`
    max-width: 1340px;
    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

  

   img {
        max-width: 2rem;

        cursor: pointer;

        &:hover {
            -webkit-transform: scale(1.2);
             transform: scale(1.2);
        }
   }
`;
   