import React from 'react';
import { Container } from './elements';

const Button = ({ onClick, children, ...props }) => (
  <Container
    {...props}
    onClick={onClick}
  >
    {children}
  </Container>
);

export default Button;
