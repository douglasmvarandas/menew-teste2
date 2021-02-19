import styled, { css } from 'styled-components';
import Tooltip from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #181818;
  border: 1px solid #181818;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    color: #303030;
    margin-right: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      svg {
        color: #c53030;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #f2d479;
      border-color: #f2d479;
      /* box-shadow: 0 0 0 1.5px #f2d479; */
      svg {
        color: #f2d479;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #181818 !important;
      color: #f2d479 !important;
      svg {
        color: #f2d479 !important;
      }
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f2d479;
    font-weight: 500;
    font-size: 14px;
    height: 38px;
    letter-spacing: 0.5px;
    width: 70% !important;

    &::placeholder {
      color: #303030;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
