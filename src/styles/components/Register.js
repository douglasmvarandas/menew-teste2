import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;

  .register-image {
    max-width: 560px;
    margin-left: auto;
    border-top-right-radius: 64px;
    border-bottom-right-radius: 64px;
    mix-blend-mode: lighten;
  }

  @media (max-width: 1280px) {
    .register-image {
      display: none;
    }
  }
`;

export const RegisterArea = styled.div`
  background: #202024;
  max-width: 1120px;
  display: flex;
  margin: 16px auto 32px;
  border-radius: 64px;

  @media (max-width: 1280px) {
    max-width: 480px;
    display: block;
  }

  @media(max-width: 768px) {
    max-width: 85%;
  }
`;
