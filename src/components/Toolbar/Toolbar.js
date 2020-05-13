import React from "react"
import HomeButton from "./HomeButton"
import ToggleDarkMode from "./ToggleDarkMode"
import styled from "styled-components"

const Header = styled("header")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 7vh;
  z-index: 500;
  font-family: "Open Sans";
  display: block;
`

const Nav = styled("nav")`
  display: inline-block;
  height: 100%;
  padding: 0 1rem;
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0;
  }
`

const Toolbar = () => {
  return (
    <Header>
      <Nav>
        <HomeButton />
        <ToggleDarkMode />
      </Nav>
    </Header>
  )
}

export default Toolbar
