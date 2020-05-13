import React from "react"

import useWindowSize from "../useWindowSize"

import { SpringLink } from "./SpringLink"
import SpringBar from "./SpringBar"

import styled from "styled-components"

const LinkContainer = styled("div")`
  display: block;
  padding: 1vh 4vw;
  font-size: 1.4em;
  width: 12vw;
  text-align: left;

  @media ${props => props.theme.breakpoints.md} {
    display: inline-block;
    padding: 1vh 0;
    font-size: 0.95em;
    width: 18vw;
    text-align: center;
  }
`

const StyledSpringLink = styled(SpringLink)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.color};
  margin: 0;

  &:hover {
    color: #fa923f;
    cursor: pointer;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.9em;
    margin: 0 0 0.2vh 0;
  }
`

const MobileLink = props => {
  const windowSize = useWindowSize()
  return (
    <LinkContainer>
      <StyledSpringLink
        to={`/${props.to}`}
        exitLength={0.5}
        entryLength={props.to === "cv" ? 0 : 0.5}
        entryDelay={0.5}
        entryState={props.to}
        exitState={
          props.location.pathname === "/"
            ? "tompiler"
            : props.location.pathname.substr(1)
        }
        mobile={windowSize.width < 650 ? true : false}
      >
        {props.to === "tompiler" ? "home" : props.to}
      </StyledSpringLink>
      <SpringBar {...props} />
    </LinkContainer>
  )
}

export default MobileLink
