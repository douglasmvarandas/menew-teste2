import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;

  #bottom-navigation {
    background: #202024;
    width: 100vw;
    height: 80px;
  }

  #icon0 {
    opacity: 0.5;
  }

  #icon1 {
    opacity: 0.5;
  }

  #icon2 {
    opacity: 0.5;
  }

  .menu-icons {
    width: 48px;
    height: 48px;
    color: #04D361;
  }

  @media (max-width: 768px) {
    .menu-icons {
      width: 32px;
      height: 32px;
      color: #04D361;
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;