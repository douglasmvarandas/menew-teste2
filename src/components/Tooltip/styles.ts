import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: auto;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  width: auto !important;

  span {
    width: auto !important;
    min-width: 70px;
    /* max-width: 250px; */
    background: #333333;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    z-index: 99999999 !important;
    text-align: center !important;

    position: absolute !important;
    bottom: calc(100% + 8px) !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    color: #fff !important;
    text-overflow: clip;

    p {
      text-overflow: ellipsis;
      /* width: auto !important; */
      /* max-width: 15ch; */
      color: #fff;
      white-space: nowrap;
    }

    ${props =>
      props.color === 'red' &&
      css`
        background: #cb4444;
        &::before {
          border-color: #cb4444 transparent !important;
        }
      `}
    ${props =>
      props.color === 'green' &&
      css`
        background: #669462;
        &::before {
          border-color: #669462 transparent !important;
        }
      `}
    ${props =>
      props.color === 'yellow' &&
      css`
        background: #ffaf38;
        &::before {
          border-color: #ffaf38 transparent !important;
        }
      `}
    ${props =>
      props.color === 'blue' &&
      css`
        background: #005087;
        &::before {
          border-color: #005087 transparent !important;
        }
      `}


    &::before {
      content: '';
      border-style: solid;
      border-color: #333333 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
