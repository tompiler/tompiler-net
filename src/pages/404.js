import React, { useContext } from "react"
import Context from "../components/store/context"

import useWindowSize from "../components/useWindowSize"
import { SpringLink } from "../components/Navigation/SpringLink"

import styled, { ThemeProvider } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"
import { lightTheme, darkTheme } from "../components/theme/theme"

import HomeButton from "../components/Toolbar/HomeButton"

import { GlobalStyles } from "../components/store/globalStyle"

import { Link } from "gatsby"

import "../styles/404.scss"

const Container = styled("div")`
  display: flex;
  width: auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`

const ColumnFlex = styled("div")`
  display: flex;
  flex-direction: column;
`

const FourOhFourContainer = styled("div")`
  display: block;
  font-size: 8em;
`

const FourOhFour = styled(FontAwesomeIcon)``

const Main = styled("div")`
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
  &:hover {
    color: #fa923f;
  }
`

// HomeButoon Styles
const HomeButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
  & div {
    margin: 0;
    padding: 0;
  }
`

const NotFound = () => {
  const windowSize = useWindowSize()
  const { state } = useContext(Context)

  return (
    <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <ColumnFlex>
          <HomeButtonContainer>
            <HomeButton />
          </HomeButtonContainer>

          <FourOhFourContainer>
            4
            <FourOhFour
              size={
                windowSize.width > 1900
                  ? "8x"
                  : windowSize.width > 650
                  ? "sm"
                  : "lg"
              }
              icon={faHeartBroken}
            ></FourOhFour>
            4
          </FourOhFourContainer>
          <Main>
            <StyledLink to="/tompiler">Back to Home</StyledLink>
          </Main>
        </ColumnFlex>
      </Container>
    </ThemeProvider>
  )
}

export default NotFound
