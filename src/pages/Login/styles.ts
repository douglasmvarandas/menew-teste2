import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  width: 100vw;
  height: 100vh;
`;

export const CardLogin = styled.div`
  display: flex;
  background: #0c0c0d;
  box-shadow: 0px 4px 27px 10px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  padding: 3rem;

  h1 {
    margin-bottom: 2rem;
    color: #f2d479;
    font-size: 1.5rem;
  }

  a {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-content: center !important;

    img {
      margin-bottom: 2rem !important;
      margin-left: -20px;
      width: 60%;
    }

    label {
      font-size: 16px;
      font-weight: 500;
      color: #6c6b6b;
      text-decoration: none;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
