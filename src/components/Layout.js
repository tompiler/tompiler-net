import React, { useContext } from "react"
import Context from "./store/context"

import Toolbar from "./Toolbar/Toolbar"
import TransitionStateWrapper from "./Content/TransitionStateWrapper"
import Navigation from "./Navigation/Navigation"

import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/theme/theme"
import { GlobalStyles } from "../components/store/globalStyle"

const NavigationContainer = styled("div")`
  position: absolute;
  margin: 0;
  height: 70vh;
  top: 6vh;
  left: 0;
  width: 12%;
  z-index: 0;
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    display: block;
    width: 100%;
    height: 5vh;
    margin: 2vh 0 2vh 0;
    align-items: stretch;
  }
`

const LinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.md} {
    flex-direction: row;
  }
`

const Layout = props => {
  const { state } = useContext(Context)

  return (
    <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Toolbar />
      <>
        <NavigationContainer>
          <div>
            <LinkContainer>
              <Navigation />
            </LinkContainer>
          </div>
        </NavigationContainer>
        <TransitionStateWrapper>{props.children}</TransitionStateWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
