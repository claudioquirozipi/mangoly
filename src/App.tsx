import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {font-family: 'Montserrat', sans-serif;}
  .red {color: red;}
  .bgPrimary {background: blue};
  .secundary {color: pink};
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
