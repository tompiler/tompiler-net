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

  @media ${(props) => props.theme.breakpoints.desktopmd} {
    font-size: 1.4em;
    padding: 1vh 3vw;
  }

  @media ${(props) => props.theme.breakpoints.desktopsm} {
    font-size: 1.25em;
    padding: 1vh 2vw;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.1em;
    padding: 1vh 1vw;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1em;
    padding: 1vh 1vw;
  }

  @media ${(props) => props.theme.breakpoints.md} {
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
  color: ${(props) => props.theme.color};
  margin: 0;

  &:hover {
    color: #fa923f;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4vw;
    margin: 0 0 0.2vh 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4vw;
    margin: 0 0 0 0;
  }
`

const MobileLink = (props) => {
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
            ? "/"
            : props.location.pathname.substr(1)
        }
        mobile={windowSize.width < 650 ? true : false}
      >
        {props.to}
      </StyledSpringLink>
      <SpringBar {...props} />
    </LinkContainer>
  )
}

export default MobileLink
