import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
`;

export const LoginArea = styled.div`
  background: #202024;
  max-width: 480px;
  margin: 16px auto 32px;
  border-radius: 64px;

  @media(max-width: 768px) {
    max-width: 85%;
  }
`;
