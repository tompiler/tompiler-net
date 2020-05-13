import React, { useContext } from "react"

import useWindowSize from "../useWindowSize"

import { useSpring, animated } from "react-spring"

import styled, { ThemeContext } from "styled-components"

const BarContainer = styled("div")`
  display: flex;
  justify-content: ${props =>
    !props.mobile || props.to === "tompiler" ? "flex-start" : "center"};
`
const Bar = styled(animated.div)`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 3px;
  margin: 0.2vh 0;
  cursor: pointer;
  border-radius: 1.5px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.9em;
    margin: 0;
  }
`

const SpringBar = ({ mount, entry, to, location, barColour }) => {
  const windowSize = useWindowSize()
  const theme = useContext(ThemeContext)
  const route = location.pathname.replace(/\//g, "")

  const colour = theme.pageColours[to]
  const props = useSpring({
    from: { width: 0 },
    to: {
      width:
        mount &&
        entry.state.entryState === undefined &&
        (route === to || (route === "" && to === "tompiler"))
          ? to === "tompiler"
            ? 48
            : 36
          : mount && entry.state.entryState === to
          ? to === "tompiler"
            ? 48
            : 36
          : 0
    },
    config: {
      mass: 1,
      tension: 450,
      friction: 55
    }
  })

  return (
    <BarContainer mobile={windowSize.width < 650} to={to}>
      <Bar
        style={{
          width: props.width.interpolate(x => x + "px"),
          background: `rgba(${colour.red},${colour.green},${colour.blue},${colour.a})`
        }}
      ></Bar>
    </BarContainer>
  )
}

export default SpringBar
