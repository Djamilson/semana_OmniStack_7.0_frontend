import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
// import { Wrapper, Container, Content } from "./styles/components";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes />
  </BrowserRouter>
);

export default App;
