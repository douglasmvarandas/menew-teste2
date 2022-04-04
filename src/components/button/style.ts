import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 10px;
  background: #00A09A;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);

  :hover {
    background: #fff;
    font-weight: bold;
    color: #00A09A;
    box-shadow: 1px 1px 6px #00A09A;
    transition: 0.2s all ease;
  }
  :active {
    background: #bfcff7;
    transition: 0.1s;
  }
`;
