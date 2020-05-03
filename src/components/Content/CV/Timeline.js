import React, { useRef } from "react"
import { useSpring, useChain, animated } from "react-spring"

import styled from "styled-components"

const SvgContainer = styled(animated.svg)`
  float: left;
  border-bottom: "3px solid white";
`

const Timeline = ({
  open,
  mobile,
  svgHeight,
  innerSvgHeight,
  lineLength,
  circleRadius,
}) => {
  const circleRef0 = useRef()
  const circleProps0 = useSpring({
    to: { r: open ? circleRadius : 0 },
    from: { r: 0 },
    ref: circleRef0,
  })

  const lineRef = useRef()
  const lineProps = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength - circleRadius
        : innerSvgHeight - circleRadius,
    },
    from: { y: innerSvgHeight - circleRadius },
    ref: lineRef,
  })

  const circleRef = useRef()
  const circleProps = useSpring({
    to: { r: open ? circleRadius : 0 },
    from: { r: 0 },
    ref: circleRef,
  })

  const lineRef2 = useRef()
  const lineProps2 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 2 - circleRadius * 2
        : innerSvgHeight - lineLength - circleRadius * 2,
    },
    from: { y: innerSvgHeight - lineLength - circleRadius * 2 },
    ref: lineRef2,
  })

  const circleRef2 = useRef()
  const circleProps2 = useSpring({
    to: { r: open ? circleRadius : 0 },
    from: { r: 0 },
    ref: circleRef2,
  })

  const lineRef3 = useRef()
  const lineProps3 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 3 - circleRadius * 3
        : innerSvgHeight - lineLength * 2 - circleRadius * 3,
    },
    from: { y: innerSvgHeight - lineLength * 2 - circleRadius * 3 },
    ref: lineRef3,
  })

  const circleRef3 = useRef()
  const circleProps3 = useSpring({
    to: { r: open ? circleRadius : 0 },
    from: { r: 0 },
    ref: circleRef3,
  })

  const lineRef4 = useRef()
  const lineProps4 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 4 - circleRadius * 4
        : innerSvgHeight - lineLength * 3 - circleRadius * 4,
    },
    from: { y: innerSvgHeight - lineLength * 3 - circleRadius * 4 },
    ref: lineRef4,
  })

  const circleRef4 = useRef()
  const circleProps4 = useSpring({
    to: { r: open ? circleRadius : 0 },
    from: { r: 0 },
    ref: circleRef4,
  })

  const lineRef5 = useRef()
  const lineProps5 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 5 - circleRadius * 5
        : innerSvgHeight - lineLength * 4 - circleRadius * 5,
    },
    from: { y: innerSvgHeight - lineLength * 4 - circleRadius * 5 },
    ref: lineRef5,
  })

  const circleRef5 = useRef()
  const circleProps5 = useSpring({
    to: { r: open ? circleRadius : 0 },
    from: { r: 0 },
    ref: circleRef5,
  })

  // chain
  useChain(
    open
      ? [
          circleRef0,
          lineRef,
          circleRef,
          lineRef2,
          circleRef2,
          lineRef3,
          circleRef3,
          lineRef4,
          circleRef4,
          lineRef5,
          circleRef5,
        ]
      : [
          circleRef5,
          lineRef5,
          circleRef4,
          lineRef4,
          circleRef3,
          lineRef3,
          circleRef2,
          lineRef2,
          circleRef,
          lineRef,
          circleRef0,
        ],
    [0, 0.2, 0.5, 0.7, 1, 1.2, 1.5, 1.7, 2, 2.2, 2.5]
  )

  return (
    <SvgContainer height={svgHeight} width="100">
      <g>
        <animated.circle
          r={circleProps0.r}
          cx="50"
          cy={innerSvgHeight}
          stroke="#d4cac1"
          strokeWidth="1.5"
          fill="#323745"
        />
        <animated.line
          x1="50"
          y1={lineProps.y}
          x2="50"
          y2={innerSvgHeight - circleRadius}
          stroke="#d4cac1"
          strokeWidth="2"
        />
        <animated.circle
          r={circleProps.r}
          cx="50"
          cy={innerSvgHeight - lineLength - circleRadius}
          stroke="#d4cac1"
          strokeWidth="1.5"
          fill="#323745"
        />
        <animated.line
          x1="50"
          y1={lineProps2.y}
          x2="50"
          y2={innerSvgHeight - lineLength - circleRadius * 2}
          stroke="#d4cac1"
          strokeWidth="2"
        />
        <animated.circle
          r={circleProps2.r}
          cx="50"
          cy={innerSvgHeight - lineLength * 2 - circleRadius * 2}
          stroke="#d4cac1"
          strokeWidth="1.5"
          fill="#323745"
        />
        <animated.line
          x1="50"
          y1={lineProps3.y}
          x2="50"
          y2={innerSvgHeight - lineLength * 2 - circleRadius * 3}
          stroke="#d4cac1"
          strokeWidth="2"
        />
        <animated.circle
          r={circleProps3.r}
          cx="50"
          cy={innerSvgHeight - lineLength * 3 - circleRadius * 3}
          stroke="#d4cac1"
          strokeWidth="1.5"
          fill="#323745"
        />
        <animated.line
          x1="50"
          y1={lineProps4.y}
          x2="50"
          y2={innerSvgHeight - lineLength * 3 - circleRadius * 4}
          stroke="#d4cac1"
          strokeWidth="2"
        />
        <animated.circle
          r={circleProps4.r}
          cx="50"
          cy={innerSvgHeight - lineLength * 4 - circleRadius * 4}
          stroke="#d4cac1"
          strokeWidth="1.5"
          fill="#323745"
        />
        <animated.line
          x1="50"
          y1={lineProps5.y}
          x2="50"
          y2={innerSvgHeight - lineLength * 4 - circleRadius * 5}
          stroke="#d4cac1"
          strokeWidth="2"
        />
        <animated.circle
          r={circleProps5.r}
          cx="50"
          cy={innerSvgHeight - lineLength * 5 - circleRadius * 5}
          stroke="#d4cac1"
          strokeWidth="1.5"
          fill="#323745"
        />
      </g>
    </SvgContainer>
  )
}

export default Timeline
