import styled from "styled-components";

export const RegisterContainer = styled.div`
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

  width: 30%;
  height: 100vh;
  background: #f9ffff;
 

  div {
    text-align: center;
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  display: none;
  background: #00A09A;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100vh;
    img {
      width: 50%;
    }
  }
`;