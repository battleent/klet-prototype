import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'SBAggroL';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroL.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

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
    font-family: 'Pretendard'
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
  }

  ::placeholder {
    color: #cccccc;
  }
`;

export default GlobalStyle;
