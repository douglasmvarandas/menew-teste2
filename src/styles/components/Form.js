import styled from 'styled-components';

export const Form = styled.div`
  display: block;
  padding: 48px 0 70px;
  text-align: center;

  .title {
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 10px 45px;
    padding-right: 45px;
    color: #E1E1E6;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 400;
    margin-left: 45px;
    padding-right: 45px;
    color: #E1E1E6;
  }

  .login-link {
    font-weight: 700;
    color: #ce1717;
    text-decoration: none;
  }

  .form {
    margin: 44px 0 0 45px;
    text-align: left;
  }

  .input-form label {
    font-size: 24px;
    font-weight: 700;
    margin-left: 3px;
    color: #E1E1E6;
  }

  .input-area {
    background: #323234;
    width: 390px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0 48px;
    border-radius: 16px;
  }

  .name-icon, .email-icon, .lock-icon, .cpf-icon {
    width: 32px;
    height: 32px;
    margin-left: 30px;
    color: #A8A8B3;
  }

  .input-area input {
    background: none;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    border: none;
    padding: 0 17px;
    color: #A8A8B3;
  }

  .button-form {
    background: #E1E1E6;
    width: 390px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 91px;
    border-radius: 16px;
    cursor: pointer;
  }

  .button {
    font-size: 24px;
    font-weight: 700;
    border: none;
    color: #121214;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 32px;
    }

    .subtitle {
      font-size: 16px;
    }

    .form {
      margin: 44px 0 0 16px;
    }

    .input-form label {
      font-size: 20px;
    }

    .input-area {
      width: 90%;
      margin: 10px 0 36px;
    }

    .name-icon, .email-icon, .lock-icon, .cpf-icon {
      width: 24px;
      height: 24px;
      margin-left: 20px;
    }

    .input-area input {
      font-size: 16px;
      padding: 0 8px;
    }

    .button-form {
      width: 90%;
      margin-top: 64px;
    }

    .button {
      font-size: 20px;
    }
  }
`;
