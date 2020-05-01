import React, { useContext } from "react"
import Context from "./store/context"

import Toolbar from "./Toolbar/Toolbar"
import Content from "./Content/Content"

import useWindowSize from "./useWindowSize"

import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/theme/theme"
import { GlobalStyles } from "../components/store/globalStyle"

const Navigation = styled("div")`
  position: fixed;
  height: ${props => (props.mobile ? "56px" : "70vh")};
  top: 56px;
  left: 0;
  width: ${props => (props.mobile ? "100%" : "50%")};
  z-index: 0;
  display: ${props => (props.mobile ? "block" : "flex")};
  align-items: ${props => (props.mobile ? "stretch" : "center")};
`

const LinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.mobile ? "row" : "column")};
`

const ContainerRight = styled("div")`
  display: block;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "140px")};
  left: ${props => (props.mobile ? "10%" : "30vw")};
  width: ${props => (props.mobile ? "80%" : "40vw")};
  height: 100vh;
  text-align: center;
`

const Layout = props => {
  const windowSize = useWindowSize()

  const { state } = useContext(Context)
  return (
    <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Toolbar />
        <div>
          <Navigation mobile={windowSize.width < 650 ? true : false}>
            <div>
              <LinkContainer mobile={windowSize.width < 650 ? true : false}>
                {props.left}
              </LinkContainer>
            </div>
          </Navigation>
          <ContainerRight mobile={windowSize.width < 650 ? true : false}>
            <Content name={props.name}>{props.children}</Content>
          </ContainerRight>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
