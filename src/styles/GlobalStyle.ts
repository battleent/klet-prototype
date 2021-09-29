import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *::before,
  *::after {
    min-width: 0;
    box-sizing: inherit;
    letter-spacing: -0.008em;
  }

  html {
    box-sizing: border-box;
    height: -webkit-fill-available;
  }

  body {
    display: flex;
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }

  #__next {
    flex: 1;
  }

  svg,
  img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    line-height: inherit;
    appearance: none;
  }

  ::placeholder {
    color: #cccccc;
  }
`;

export default GlobalStyle;
