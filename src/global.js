import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 40px;
    background-color:#f9f9f9;

  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  p,h2,h1,input,button{
    font-family: 'Song Myung', serif;
  }
  `;
