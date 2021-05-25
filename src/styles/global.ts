import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --pure-white: #fcfcfc;
    --dark-black: #00080a;
    --main-blue: #4991ab;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  body{
    background: var(--white);
    color: var(--dark-black);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }
  button, a{
    cursor: pointer;
  }
`;
