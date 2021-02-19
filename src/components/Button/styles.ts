import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  secundary: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #f2d479;
  height: 38px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #0c0c0d;
  width: 100% !important;
  font-weight: 700;
  font-size: 12px;
  margin-top: 16px;
  transition: background-color 0.2s;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    background: ${shade(0.2, '#f2d479')};
  }

  ${props =>
    props.secundary &&
    css`
      border: 1px solid #f2d479;
      background: transparent;
      color: #f2d479;

      &:hover {
        background: ${shade(0.2, '#0c0c0d')};
      }
    `}
`;
