import { createGlobalStyle } from 'styled-components'
import theme from './index.js'

export const GlobalStyles = createGlobalStyle`
  body {
    background: rgb(255, 255, 255);
    letter-spacing: 0.12px;
    margin: 0px;
    font-size: 1rem;
  }

  input:focus-within, textarea:focus-within {
    box-shadow: none !important;
  }

  @font-face {
    font-family: "Sora Extra Light";
    src: url("/fonts/Sora-ExtraLight.ttf") format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: "Sora Bold";
    src: url("/fonts/Sora-Bold.ttf") format("truetype");
    font-style: normal;
  }

  body,
  html,
  a {
    font-family: 'Sora Extra Light', serif;
    text-decoration: none !important;
  }

  body {
    margin:0;
    padding:0;
    border: 0;
    outline: 0;
    background: #fff;
    overflow-x: hidden;
  }

  a:hover {
    color: #18216d;
  }

  input,
  textarea {
    border-radius: 4px;
    border: 0;
    background: rgb(241, 242, 243);
    transition: all 0.3s ease-in-out;  
    outline: none;
    width: 100%;  
    padding: 1rem 1.25rem;

    :focus-within {
        background: none;
        box-shadow: #2e186a 0px 0px 0px 1px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Sora Bold', serif;
    color: ${theme.palette.primary.main};
    font-size: 56px;
    line-height: 1.18;
    margin-top: 0;
    margin-bottom: .5em;

    @media only screen and (max-width: 890px) {
      font-size: 47px;
    }
  
    @media only screen and (max-width: 414px) {
      font-size: 32px;
    }
  }

  p {
    color: ${theme.palette.primary.main};
    font-size: ${parseInt(theme.typography.fontSize) + 4}px;
    line-height: 1.41;
  }

  a {
    text-decoration: none;
    outline: none;
    color: #2E186A;

    :hover {
        color: #2e186a;
    }
  }

  *:focus {
    outline: none;
  }
`
