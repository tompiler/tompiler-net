import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.5vw;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.track};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.thumb};
  }

  html {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: "Open Sans";
    font-weight: 400;
    margin: 0;
  }
`
