import React, { useContext } from "react"
import Context from "./store/context"
import { useStaticQuery, graphql } from "gatsby"

import Toolbar from "./Toolbar/Toolbar"
import TransitionStateWrapper from "./Content/TransitionStateWrapper"
import Navigation from "./Navigation/Navigation"
import Footer from "./Footer/Footer"
import Seo from "./Seo"

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

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    width: 100%;
    height: 5vh;
    margin: 1vh 0 1vh 0;
    align-items: stretch;
  }
`

const LinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }
`

const Layout = (props) => {
  const { state } = useContext(Context)

  const data = useStaticQuery(graphql`
    query ProfilePic {
      file(relativePath: { eq: "img/self.jpg" }) {
        childImageSharp {
          resize(width: 1200, height: 800) {
            src
            height
            width
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={state.isDark ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Seo image={data.file.childImageSharp.resize} />
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
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
