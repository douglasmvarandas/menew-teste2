import styled from "styled-components";

interface InputContainerStyledProps {
  colorSchema?: boolean;
  borderSchema?: boolean;
}

export const Container = styled.div`
  text-align: center;
  width: 100%;

  .inputErrors {
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const InputContainer = styled.div<InputContainerStyledProps>`
  background: ${(props) =>
    props.colorSchema ? "#fff" : "transparent"};
  border-radius: 5px;
  border: ${(props) =>
    props.borderSchema
      ? "2px solid #ccc"
      : "2px solid #fff"};
  color: #A9A9A9;
  padding: 1rem;
  width: 100%;
  display: flex;

  input {
    background: transparent;
    width: 100%;
    border: none;
    align-items: center;
  }
`;
