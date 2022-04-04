import styled from "styled-components"

export const FormComponentRegister = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  background: #00A09A;
  text-align: center;

  position: absolute;
  top: 5%;

  button{
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  }

  span {
    text-align: center;
    font-size: 12px;
  }

  div{
    display: flex;
    justify-content: space-between;
    color: #fff;
    h3{
      transform: translateY(-10px);

    }
    svg{
      width: 25px;
      height: 25px;
      transform: translateY(-15px);
      cursor: pointer;
    }
  }

  @media (min-width: 768px){
    top: 10%;
  }
`;

export const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 120px;

  input{
    padding: 10px;
    border: none;
  }
`;