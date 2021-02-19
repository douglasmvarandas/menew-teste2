import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    font-size: 14px;
  }
  body {
    display: flex;
    align-items: center;
    width: 100%;
    font-family: 'Nunito', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    overflow-x: auto;
    overflow-y: auto;


  &::-webkit-scrollbar {
    width: 7px;
    height: 10px;
    margin: 5px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #EEEEF8;
    margin: 5px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #EEEEF8;
    margin: 5px;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #d9d9d9;
    border-radius: 10px;
    margin: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 10px;
    margin: 5px;
  }

  }
  button {
    cursor: pointer;
    border-radius: 6px;
    font-size: 12px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  a:link {
    text-decoration: none !important;
      -webkit-text-decoration: none !important;
  }

  #root {
    width: 100%;
    max-width: 1440px;
  }
`;
