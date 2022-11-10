import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 87.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
    color: ${({ theme }) => theme.COLORS.BLACK};
    -webkit-font-smoothin: antialiased;
  }

  a {
    font-family: 'Magra';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-decoration-line: underline;
    color: #095181;
    cursor: pointer;
  }

  img,
  svg {
    pointer-events: none;

    &::selection {
      background: none;
    }
  }
  
  .hidden {
    opacity: 0;
  }

  
  @media screen and (min-width:320px) and (max-width:767px){
    html {
      font-size: 35%;
    }
  }

  
  @media screen and (min-width: 768px) and (max-width:1023px){
    html {
      font-size: 60%;
    }
  }
  
  @media(min-width: 768px) and (max-width:1023px){
    html {
      font-size: 50%;
    }
  }

  @media(min-width:1024px) and (max-width:2559px) {
    html {
      font-size: 50%;
    }
  }

   
  @media screen and (min-width:1024px) and (max-width:2559px) {
    html {
      font-size: 65%;
    }
  }


`;
