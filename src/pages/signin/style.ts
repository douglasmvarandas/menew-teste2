import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;

  width: 40%;
  height: 100vh;
  background: #f9ffff;

  div {
    text-align: center;
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  display: none;
  

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100vh;
    background: #00A09A;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    img {
      width: 60%;
    }
  }
`;