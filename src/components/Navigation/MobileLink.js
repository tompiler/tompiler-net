import React from "react"

import useWindowSize from "../useWindowSize"

import { SpringLink } from "./SpringLink"
import SpringBar from "./SpringBar"

import styled from "styled-components"

const LinkContainer = styled("div")`
  display: ${props => (props.mobile ? "inline-block" : "block")};
  padding: ${props => (props.mobile ? "1vh 0vw" : "1vh 4vw")};
  font-size: ${props => (props.mobile ? "0.95em" : "1.4em")};
  width: ${props => (props.mobile ? "18vw" : "12vw")};
  text-align: ${props => (props.mobile ? "center" : "left")};
`

const StyledSpringLink = styled(SpringLink)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.color};
  margin: ${props => (props.mobile ? "0 0 0.2vh 0" : "0")};

  &:hover {
    color: #fa923f;
    cursor: pointer;
  }
`

const MobileLink = props => {
  const windowSize = useWindowSize()
  return (
    <LinkContainer mobile={windowSize.width < 650 ? true : false}>
      <StyledSpringLink
        to={`/${props.to}`}
        exitLength={0.5}
        entryLength={0.5}
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
