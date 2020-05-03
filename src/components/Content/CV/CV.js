import React, { useState, useRef } from "react"
import { useSpring, useChain, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

const ContentContainer = styled("div")`
  display: inline-block;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "80px")};
  left: ${props => (props.mobile ? "10%" : "15%")};
  width: ${props => (props.mobile ? "80%" : "80%")};
  height: 100vh;
  text-align: center;
`

const Button = styled("button")`
  display: inline-block;
`

const SvgContainer = styled(animated.svg)`
  float: left;
  border-bottom: "3px solid white";
`

const CV = ({ mount, transitionStatus, exit, entry, location, children }) => {
  const windowSize = useWindowSize()
  console.log(windowSize)
  const route = location.pathname.substr(1)

  const [open, toggle] = useState(false)
  const mobile = windowSize.width < 650 ? true : false

  const height = windowSize.height
  const width = windowSize.width

  const margin = {
    top: mobile ? 105 : 80,
    right: 0,
    bottom: 50,
    left: 0,
  }

  const svgHeight = height - margin.top - margin.bottom

  const lineRef = useRef()
  const lineProps = useSpring({
    to: { y: open ? svgHeight - 200 : svgHeight },
    from: { y: svgHeight },
    ref: lineRef,
  })

  const circleRef = useRef()
  const circleProps = useSpring({
    to: { r: open ? 6 : 0 },
    from: { r: 0 },
    ref: circleRef,
  })

  const opacityLineProps = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: open ? 1 : 0,
    },
    config: {
      //   duration: 1000,
      mass: 1,
      tension: 120,
      friction: 15,
    },
  })

  useChain(open ? [lineRef, circleRef] : [circleRef, lineRef], [0, 0.5])

  return (
    <ContentContainer mobile={mobile}>
      <div style={{ opacity: opacityLineProps.opacity }}>
        <Button onClick={() => toggle(!open)}>TOGGLE ME</Button>
        <SvgContainer
          height={svgHeight}
          width="100"
          style={{
            opacity: opacityLineProps.opacity,
            border: "1px dashed #d4cac1",
          }}
        >
          <g>
            <animated.line
              x1="50"
              y1={lineProps.y}
              x2="50"
              y2={height - 50}
              stroke="#d4cac1"
              strokeWidth="2"
              // style={{ opacity: opacityLineProps.opacity }}
            />
            <animated.circle
              r={circleProps.r}
              cx="50"
              cy={svgHeight - 200}
              stroke="#d4cac1"
              strokeWidth="1.5"
              fill="#323745"
            />
          </g>
        </SvgContainer>
      </div>
    </ContentContainer>
  )
}

export default CV
