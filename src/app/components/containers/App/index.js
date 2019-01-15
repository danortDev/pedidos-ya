import React from 'react';
import { styled } from 'styletron-react';

const GlobalStyles = styled('div', {
  fontFamily: 'Roboto'
});

const App = ({ children }) => (
  <GlobalStyles>
    {children}
  </GlobalStyles>
);

export default App;
