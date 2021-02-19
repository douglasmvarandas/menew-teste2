import React from 'react';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  color?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  color,
  children
}) => {
  return (
    <Container className={className} color={color}>
      {children}
      <span>
        <p>{title}</p>
      </span>
    </Container>
  );
};

export default Tooltip;
