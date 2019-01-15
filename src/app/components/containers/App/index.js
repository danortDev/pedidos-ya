import React from 'react';
import Navbar from 'app/components/ui/Navbar';
import { MainWrapper } from './elements';

const App = ({ children }) => (
  <MainWrapper>
    <Navbar />
    {children}
  </MainWrapper>
);

export default App;
