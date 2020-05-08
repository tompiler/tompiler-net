import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"
import useInterval from "../../useInterval"

import { Timeline } from "./Timeline"

import styled from "styled-components"

import data from "./links"

const ContentContainer = styled("div")`
  display: inline-block;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "68px")};
  left: ${props => (props.mobile ? "10%" : "12%")};
  width: ${props => (props.mobile ? "80%" : "80%")};
  height: 100vh;
`

// const Button = styled("button")`
//   position: fixed;
//   bottom: 5vh;
//   left: 50px;
//   background: none;
//   width: 5vw;
//   height: 5vh;

//   font-family: "Open Sans";
//   font-weight: 600;
//   color: ${props => props.theme.color};
//   -webkit-appearance: button;
//   border-radius: 5px;
//   box-shadow: none;

//   &:focus {
//     outline: none;
//   }
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => `${props.theme.cv.toggle.hover}`};
//   }
//   transition: background-color 250ms;
// `

const CV = ({ mount, transitionStatus, exit, entry, location, children }) => {
  const windowSize = useWindowSize()
  // console.log(windowSize)
  // const route = location.pathname.substr(1)

  // spring for page transitions
  // const opacityProps = useSpring({
  //   from: { opacity: 0 },
  //   to: {
  //     opacity: mount && route === "cv" ? 1 : 0,
  //   },
  //   config: {
  //     //   duration: 1000,
  //     mass: 1,
  //     tension: 120,
  //     friction: 15,
  //   },
  // })

  // springs for CV component transitions
  const [open, toggle] = useState(false)
  const [selected, setSelected] = useState({ value: 5, prevValue: null })
  const [hover, setHover] = useState(null)
  const [first, toggleFirst] = useState(true)
  const mobile = windowSize.width < 650 ? true : false

  const margin = {
    top: mobile ? 15 : 10,
    right: 0,
    bottom: 8,
    left: 0,
  }

  const padding = {
    bottom: 3,
    top: 10,
  }

  const circleNodes = Object.keys(data.timelineNodes).length
  const circleRadius = 6
  const circleRadiusInv = (circleRadius / windowSize.height) * 100
  const svgHeight = 100 - margin.top - margin.bottom
  const innerSvgHeight = svgHeight - padding.bottom

  const lineLength =
    (svgHeight - padding.top - padding.bottom) / (circleNodes - 1) -
    circleRadiusInv

  useInterval(() => {
    toggleFirst(false)
    if (first) {
      toggle(true)
    }
  }, 1000)

  return (
    <ContentContainer mobile={mobile}>
      {/* <animated.div style={{ opacity: opacityProps.opacity }}> */}
      {/* <Button onClick={() => toggle(!open)}>Toggle Animation</Button> */}
      <Timeline
        open={open}
        mobile={mobile}
        hover={hover}
        selected={selected}
        setHover={setHover}
        setSelected={setSelected}
        svgHeight={svgHeight}
        innerSvgHeight={innerSvgHeight}
        lineLength={lineLength}
        circleRadius={circleRadius}
        circleRadiusInv={circleRadiusInv}
        padding={padding}
      />
      {/* </animated.div> */}
    </ContentContainer>
  )
}

export default CV
