import { createGlobalStyle } from 'styled-components';

import CaveatFont from './fonts';

export default createGlobalStyle`
  ${CaveatFont}
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: rgba(230, 230, 230, 1);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #000;
    font-size: 14px;
    font-family: 'Caveat', cursive;
  }

  button {
    cursor: pointer;
  }
`;
