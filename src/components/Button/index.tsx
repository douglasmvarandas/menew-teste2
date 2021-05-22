import React, { InputHTMLAttributes } from 'react';
import { ButtonComponent } from './styles';

type ButtonProps = InputHTMLAttributes<HTMLButtonElement>;

export type Props = ButtonProps;

const Button: React.FC<Props> = ({
  type,
  children,
  className,
  color,
  onClick,
}) => {
  return (
      <ButtonComponent
        type={type ? 'button' : 'submit'}
        color={color}
        onClick={onClick}
        className={className}
      >
        {children}
      </ButtonComponent>
  );
};

export default Button;
