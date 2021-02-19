import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  secundary?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  secundary = false,
  ...rest
}) => (
  <Container type="button" {...rest} secundary={secundary}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
