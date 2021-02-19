import { HTMLProps } from 'react';
import styled from 'styled-components';

export const ButtonSecundary = styled.button<HTMLProps<HTMLButtonElement>>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  height: 40px;
  width: 100%;
  min-width: 200px;
  background: #fff;
  border-radius: 10px;
  border: solid 1px #005289;
  color: #005289;
  text-transform: uppercase;
  text-decoration: none !important;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none !important;
  -webkit-text-decoration: none !important;

  &:hover {
    background: #e5e5e5;
  }

  p {
    text-decoration: none !important;
    -webkit-text-decoration: none !important;
  }

  svg {
    margin-right: 1rem;
    margin-left: -1rem;
  }
`;
