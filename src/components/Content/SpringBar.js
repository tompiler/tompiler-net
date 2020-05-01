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
  margin: ${props => (props.mobile ? "0 0" : "0.2vh 0")};
  cursor: pointer;
  border-radius: 1.5px;
  /* border: ${props => (props.width > 0 ? props.color : `white`)}; */
`

const SpringBar = ({ mount, entry, to, location, barColour }) => {
  const windowSize = useWindowSize()
  const theme = useContext(ThemeContext)

  const colour = theme.pageColours[to]

  const props = useSpring({
    from: { width: 0 },
    to: {
      width:
        mount &&
        entry.state.entryState === undefined &&
        location.pathname.substr(1) === to
          ? to === "tompiler"
            ? 48
            : 36
          : mount && entry.state.entryState === to
          ? to === "tompiler"
            ? 48
            : 36
          : 0,
    },
    config: {
      //   duration: 1000,
      mass: 1,
      tension: 450,
      friction: 55,
    },
  })

  return (
    <BarContainer mobile={windowSize.width < 650 ? true : false} to={to}>
      <Bar
        mobile={windowSize.width < 650 ? 1 : 0}
        style={{
          width: props.width.interpolate(x => x + "px"),
          background: `rgba(${colour.red},${colour.green},${colour.blue},${colour.a})`,
        }}
      ></Bar>
    </BarContainer>
  )
}

export default SpringBar
