import { createGlobalStyle } from 'styled-components';

export const bgColor = '#f7f7f7';
export const primaryColor = '#072E84';
export const secundaryColor = '#EDB512';
export const dangerColor = '#F7685B';

const GlobalStyle = createGlobalStyle`

  * {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0;
    box-sizing:border-box;
  }



  html, body {
    background: ${bgColor};
    font-family: 'Roboto', Helvetica, sans-serif;
    padding:0;
    margin:0;
    box-sizing:border-box;

  }

  body, input, textarea {
    font: 400 16px 'Roboto', sans-serif;
    letter-spacing: 0.15px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
    outline: none;
  }
  button {
    outline: none;
  }
`;

export default GlobalStyle;
