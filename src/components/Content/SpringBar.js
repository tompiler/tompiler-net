import React from "react"
import { useSpring, animated } from "react-spring"
import useWindowSize from "../useWindowSize"

import styled from "styled-components"

const BarContainer = styled("div")`
  display: flex;
  justify-content: ${props => (props.mobile ? "center" : "flex-start")};
`
const Bar = styled(animated.div)`
  position: relative;
  width: 200px;
  height: 3px;
  margin: ${props => (props.mobile ? "0 0" : "0.2vh 0")};
  cursor: pointer;
  border-radius: 3px;
  border: 3px solid white;
`

const SpringBar = ({ mount, entry, to, location, barColour }) => {
  const windowSize = useWindowSize()

  const props = useSpring({
    from: { width: 0 },
    to: {
      width:
        mount &&
        entry.state.entryState === undefined &&
        location.pathname.substr(1) === to
          ? 40
          : mount && entry.state.entryState === to
          ? 40
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
    <BarContainer mobile={windowSize.width < 650 ? true : false}>
      <Bar
        mobile={windowSize.width < 650 ? true : false}
        style={{
          width: props.width.interpolate(x => x + "px"),
          background: `rgba(${barColour.red},${barColour.green},${barColour.blue},${barColour.a})`,
        }}
      ></Bar>
    </BarContainer>
  )
}

export default SpringBar
