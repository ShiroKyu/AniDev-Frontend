import React from 'react';

import LeftMenu from './components/LeftMenu';
import Header from './components/Header';

import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <LeftMenu />
      <Header />
    </>
  );
}

export default App;
