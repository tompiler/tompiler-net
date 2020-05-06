import React, { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"
import useInterval from "../../useInterval"

import Timeline from "./Timeline"
import DendogramLayer1 from "./DendogramLayer1"
import SkillCategory from "./SkillCategory"
import DendogramLayer2 from "./DendogramLayer2"
import SkillItem from "./SkillItem"
import styled from "styled-components"

import data from "./links"

const ContentContainer = styled("div")`
  display: inline-block;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "80px")};
  left: ${props => (props.mobile ? "10%" : "12%")};
  width: ${props => (props.mobile ? "80%" : "80%")};
  height: 100vh;
`

const Button = styled("button")`
  position: fixed;
  top: 200px;
  left: 50px;
  display: inline;
`

const ButtonLine = styled("button")`
  position: fixed;
  top: 220px;
  left: 50px;
  display: inline;
`

const CV = ({ mount, transitionStatus, exit, entry, location, children }) => {
  const windowSize = useWindowSize()
  // console.log(windowSize)
  const route = location.pathname.substr(1)

  // spring for page transitions
  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: mount && route === "cv" ? 1 : 0,
    },
    config: {
      //   duration: 1000,
      mass: 1,
      tension: 120,
      friction: 15,
    },
  })

  // springs for CV component transitions
  const [open, toggle] = useState(false)
  const [hover, setHover] = useState(null)
  const [first, toggleFirst] = useState(true)
  const mobile = windowSize.width < 650 ? true : false

  const height = windowSize.height
  const width = windowSize.width

  const margin = {
    top: mobile ? 15 : 10,
    right: 0,
    bottom: 5,
    left: 0,
  }

  const padding = {
    bottom: 5,
    top: 5,
  }

  const circleNodes = Object.keys(data.timelineNodes).length
  const circleRadius = 6
  const circleRadiusInv = (circleRadius / windowSize.height) * 100
  const svgHeight = 100 - margin.top - margin.bottom
  const svgWidth = width * 0.12
  const innerSvgHeight = svgHeight - padding.bottom
  // const lineLength = innerSvgHeight / 6 - circleRadius * 6

  const lineLength =
    (svgHeight - padding.top - padding.bottom) / (circleNodes - 1) -
    circleRadiusInv
  // const lineLength =
  //   (innerSvgHeight - circleRadiusInv * circleNodes) / circleNodes -
  //   padding.top / circleNodes

  useInterval(() => {
    toggleFirst(false)
    if (first) {
      toggle(true)
    }
  }, 1000)

  return (
    <ContentContainer mobile={mobile}>
      <animated.div style={{ opacity: opacityProps.opacity }}>
        <Button onClick={() => toggle(!open)}>TOGGLE ME</Button>

        <Timeline
          open={open}
          mobile={mobile}
          hover={hover}
          setHover={setHover}
          svgHeight={svgHeight}
          innerSvgHeight={innerSvgHeight}
          lineLength={lineLength}
          circleRadius={circleRadius}
          circleRadiusInv={circleRadiusInv}
          padding={padding}
        />
        {/* <DendogramLayer1
          open={open}
          mobile={mobile}
          svgHeight={svgHeight}
          innerSvgHeight={innerSvgHeight}
          lineLength={lineLength}
          circleRadius={circleRadius}
          circleRadiusInv={circleRadiusInv}
          padding={padding}
        />
        <SkillCategory
          open={open}
          mobile={mobile}
          svgHeight={svgHeight}
          innerSvgHeight={innerSvgHeight}
          lineLength={lineLength}
          circleRadius={circleRadius}
          padding={padding}
        />

        <DendogramLayer2
          open={open}
          mobile={mobile}
          svgHeight={svgHeight}
          innerSvgHeight={innerSvgHeight}
          lineLength={lineLength}
          circleRadius={circleRadius}
          padding={padding}
        /> */}
        {/*
        <SkillItem
          open={open}
          mobile={mobile}
          svgHeight={svgHeight}
          innerSvgHeight={innerSvgHeight}
          lineLength={lineLength}
          circleRadius={circleRadius}
          padding={padding}
        /> */}
      </animated.div>
    </ContentContainer>
  )
}

export default CV
