import React from 'react';
import { Container } from './elements';

const Button = ({ onClick, children }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
);

export default Button;
