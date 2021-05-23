import styled from 'styled-components';

export const Container = styled.div`
  height: 128px;
  margin: 32px 128px;
  overflow-x: hidden;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dashboard {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: auto;
    text-decoration: none;
  }
 
  .icon {
    width: 64px;
    height: 64px;
  }

  .name {
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
    color: #E1E1E6;
  }

  .name-complement {
    font-weight: 400;
  }

  .register {
    font-size: 20px;
    font-weight: 700;
    color: #A8A8B3;
    text-decoration: none;
    transition: 0.2s;
  }

  .register:hover {
    color: #E1E1E6;
  }
  
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 48px;
    margin-left: 20px;
    border: 2px solid #ce1717;
    border-radius: 32px;
    opacity: 0.8;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s;
  }

  .login:hover {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    .register {
      display: none;
    }

    .login {
      display: none;
    }
  }

  @media (max-width: 768px) {
    margin: 32px;
  }
`;

export const Login = styled.div`
  font-size: 20px;
  font-weight: 700;    
  color: #ce1717;
  text-decoration: none;
`;
