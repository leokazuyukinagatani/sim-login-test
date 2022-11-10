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

  @media only screen and (max-width: 480px) {
    html{
      font-size: 36%;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    html{
      font-size: 64%;
    }
  }


  @media only screen and (min-width: 2560px) {
    html{
      font-size: 100%;
    }
  }



`;
