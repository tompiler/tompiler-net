import React from "react"

import { TransitionState } from "gatsby-plugin-transition-link"

import { useLocation } from "@reach/router"
import useWindowSize from "../useWindowSize"

import { SpringLink } from "../Navigation/SpringLink"
import SpringBar from "../Navigation/SpringBar"

import styled from "styled-components"

const Container = styled("div")`
  display: inline-block;
  padding-left: 0.5rem;
  margin: 1vh 0 0 0;
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: 1.7rem;
  cursor: pointer;
`

const StyledSpringLink = styled(SpringLink)`
  display: inline-block;
  color: ${props => props.theme.color};
  text-decoration: none;
  &:hover {
    color: #fa923f;
  }
`

const HomeButton = () => {
  const location = useLocation()
  const windowSize = useWindowSize()

  return (
    <Container>
      <StyledSpringLink
        mobile={windowSize.width < 650 ? 1 : 0}
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
        {props => <SpringBar {...props} to={"tompiler"} location={location} />}
      </TransitionState>
    </Container>
  )
}

export default HomeButton
