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
        {/* <div className="toolbar-gap"></div> */}
        {/* <div className="toolbar_navigation-items">
        <ul>
          <li>
            <SpringLink
              to="/articles"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"articles"}
              exitState={"articles"}
            >
              articles
            </SpringLink>
          </li>
          <li>
            <SpringLink
              to="/tutorials"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"tutorials"}
              exitState={"tutorials"}
            >
              tutorials
            </SpringLink>
          </li>
          <li>
            <SpringLink
              to="/contact"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"contact"}
              exitState={"contact"}
            >
              contact
            </SpringLink>
          </li>
          <li style={{ padding: 0 }}>
            <SpringLink
              to="/cv"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"cv"}
              exitState={"cv"}
            >
              cv
            </SpringLink>
          </li>
          <li>
            <SpringLink
              to="/mission"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"mission"}
              exitState={"mission"}
            >
              mission
            </SpringLink>
          </li>
        </ul>
      </div> */}
      </Nav>
    </Header>
  )
}

export default Toolbar
