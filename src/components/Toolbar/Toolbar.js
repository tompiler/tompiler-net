import React from "react"
import HomeButton from "./HomeButton"
import useWindowSize from "../useWindowSize"
import ToggleDarkMode from "./ToggleDarkMode"
import styled from "styled-components"

const Header = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  z-index: 500;
  font-family: "Open Sans";
  display: block;
`

const Nav = styled("nav")`
  display: inline-block;
  height: 100%;
  padding: ${props => (props.mobile ? "0" : "0 1rem")};
  /* justify-content: ${props => (props.mobile ? "center" : "flex-start")}; */
  width: 100%;
`

const Toolbar = () => {
  const windowSize = useWindowSize()

  return (
    <Header>
      <Nav mobile={windowSize.width < 650 ? true : false}>
        <HomeButton />
        <ToggleDarkMode />
      </Nav>
    </Header>
  )
}

export default Toolbar
