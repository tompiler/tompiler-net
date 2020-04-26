import React from "react"
import transitionCellStyles from "./transitionCell.module.scss"

import { SpringLink } from "../SpringLink"
import SpringBar from "./SpringBar"
import useWindowSize from "../useWindowSize"

import styled from "styled-components"

const LinkContainer = styled("div")`
  display: ${props => (props.mobile ? "inline-block" : "block")};
  padding: ${props => (props.mobile ? "1vh 0vw" : "1vh 4vw")};
  font-size: ${props => (props.mobile ? "0.87em" : "1.4em")};
  width: ${props => (props.mobile ? "18vw" : "12vw")};
  text-align: ${props => (props.mobile ? "center" : "left")};
`

const MobileLink = props => {
  const windowSize = useWindowSize()
  return (
    <LinkContainer mobile={windowSize.width < 650 ? true : false}>
      <SpringLink
        className={transitionCellStyles.springLink}
        to={`/${props.to}`}
        exitLength={0.5}
        entryLength={0.5}
        entryDelay={0.5}
        entryState={props.to}
        exitState={props.location.pathname === "/" ? "tompiler" : props.route}
      >
        {props.to === "tompiler" ? "home" : props.to}
      </SpringLink>
      <SpringBar {...props} />
    </LinkContainer>
  )
}

export default MobileLink
