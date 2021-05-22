import styled from 'styled-components';
import { Props } from '.';
import { primaryColor, dangerColor } from '../../styles/global';

const colors = {
  bg: {
    btnPrimary: primaryColor,
    btnDanger: dangerColor,
    btnDefault: `transparent`,
  },
  color: {
    btnPrimary: primaryColor,
    btnDanger: dangerColor,
    btnDefault: `#FFF`,
  },
};

export const ButtonComponent = styled.button<Props>`
  height: 3rem;
  width: 100%;
  font-family: 'DIN Pro Medium';
  background: ${props => colors.bg[props.className]};
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: ${props => colors.color[props.color]};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 1.2rem;
  margin-bottom: 1.3rem;
  cursor: pointer;
  svg {
    margin-right: 0.3rem;
  }

  &:hover {
    background: #a1261a;
  }
  &:disabled {
    background: #b9b9b9;
    cursor: not-allowed;
  }
`;
