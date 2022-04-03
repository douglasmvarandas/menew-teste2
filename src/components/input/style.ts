import styled from "styled-components";


export const Container = styled.div`
  text-align: center;
  width: 100%;

  .inputErrors {
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const InputContainer = styled.div`
  
  width: 100%;
  display: flex;
  margin: 5px 0;
  border-bottom: 1px solid #ccc;
  color: #A9A9A9;
  padding: 10px;

  input {
    width: 100%;
    background: transparent;
    border: none;
    ::placeholder{
      color:rgba(0, 0, 0, 0.5);
    } 
  }
`;
