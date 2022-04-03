import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 10px;
  background: #bfcff7;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);

  :hover {
    background: #fff;
    font-weight: bold;
    transition: 0.2s all ease;
  }
  :active {
    background: #bfcff7;
    transition: 0.1s;
  }
`;
