import React from "react"
import { SpringLink } from "../SpringLink"
import SpringBar from "../Content/SpringBar"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"
import useWindowSize from "../useWindowSize"

import { blue } from "../WordSelector/WordSelectorData"

import styled from "styled-components"

const Container = styled("div")`
  padding-left: 0.5rem;
  margin: 1vh 0 0 0;
  color: black;
  text-decoration: none;
  font-size: 1.7rem;
  cursor: pointer;
`

const StyledSpringLink = styled(SpringLink)`
  display: block;
  margin: ${props => (props.mobile ? "0 0 0.7vh 0" : "0")};
  color: black;
  text-decoration: none;
  &:hover {
    color: #fa923f;
  }
`

const DrawerToggleButton = () => {
  const location = useLocation()
  const windowSize = useWindowSize()

  return (
    <Container>
      <StyledSpringLink
        mobile={windowSize.width < 650 ? true : false}
        to={"/tompiler"}
        exitLength={0.6}
        entryLength={0.8}
        entryDelay={0.6}
        entryState={"tompiler"}
        exitState={"tompiler"}
      >
        tompiler
      </StyledSpringLink>
      <TransitionState>
        {props => (
          <SpringBar
            {...props}
            to={"tompiler"}
            location={location}
            barColour={blue}
          />
        )}
      </TransitionState>
    </Container>
  )
}

export default DrawerToggleButton
