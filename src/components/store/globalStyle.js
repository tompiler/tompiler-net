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

  .tl-wrapper {
    position: absolute;
  }

  html {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: "Open Sans";
    font-weight: 400;
    margin: 0;
    font-size: 100%;

    @media ${({ theme }) => theme.breakpoints.desktopmd} {
      font-size: 95%;
    }

    @media ${({ theme }) => theme.breakpoints.desktopsm} {
      font-size: 90%;
    }

    @media ${({ theme }) => theme.breakpoints.lg} {
      font-size: 80%;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
      font-size: 100%;
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 100%;
    }
  }

  
`
