import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  padding: 1rem;
  height: 60px;
  background: #0c0c0d;
  z-index: 9999;

  @media (max-width: 480px) {
    position: fixed;
    left: 0;
    top: calc(100vh - 40px);
    bottom: 0 !important;
    justify-content: space-around;
  }
`;

export const Logo = styled.img`
  &,
  img {
    width: 60px;
    /* height: 50px; */
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 40%;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #fff;
    align-items: center;

    svg {
      display: none;
    }

    @media (max-width: 480px) {
      svg {
        display: block;
      }
      span {
        display: none;
      }
    }
  }

  p,
  button {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    transition: 0.4s;
    border: none;
    background: transparent;

    &:hover {
      font-weight: 800;
      font-size: 12px;
    }
  }
`;

export const Option = styled.span<ContainerProps>`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  transition: 0.4s;
  border: none;
  background: transparent;
  margin-left: 0.5rem;

  &:hover {
    color: #f2d479;
    font-weight: 800;
    font-size: 12px;
  }

  ${props =>
    props.isActive &&
    css`
      color: #f2d479;
      font-weight: 800;
      font-size: 12px;
    `}
`;
