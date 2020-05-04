import React, { useRef } from "react"
import { useSpring, useChain, animated } from "react-spring"

import styled from "styled-components"

const SvgContainer = styled(animated.svg)`
  float: left;
  border-bottom: "3px solid white";
`

const Line = styled(animated.line)`
  stroke: ${props => props.theme.color};
  stroke-width: 1.2;
`

const Circle = styled(animated.circle)`
  stroke: ${props => props.theme.color};
  stroke-width: 1.8;
  fill: ${props => props.theme.background};
`

const TimelineHeadingsContainer = styled("div")`
  display: inline-block;
  /* position: relative; */
  left: ${props => (props.mobile ? "10%" : "20%")};
  height: ${props => props.height + "px"};
  width: 10vw;
  /* border: 1px dashed lightgrey; */
`

const HeadingContainer = styled("div")`
  display: flex;
  position: absolute;
  top: ${props => props.top + "px"};
  height: ${props => props.height / 20 + "px"};
  width: 10vw;
  /* border: 1px dashed lightgrey; */
`

const Heading = styled(animated.div)`
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-size: 1.2em;
`

const Timeline = ({
  open,
  mobile,
  svgHeight,
  innerSvgHeight,
  lineLength,
  circleRadius,
  padding,
}) => {
  const circleRef0 = useRef()
  const circleProps0 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
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
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
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
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
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
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
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
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
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
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
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
    <>
      <SvgContainer
        height={svgHeight}
        width="5vw"
        // style={{ border: "1px dashed white" }}
      >
        <g>
          <Circle r={circleProps0.r} cx="2.5vw" cy={innerSvgHeight} />
          <Line
            x1="2.5vw"
            y1={lineProps.y}
            x2="2.5vw"
            y2={innerSvgHeight - circleRadius}
          />
          <Circle
            r={circleProps.r}
            cx="2.5vw"
            cy={innerSvgHeight - lineLength - circleRadius}
          />
          <Line
            x1="2.5vw"
            y1={lineProps2.y}
            x2="2.5vw"
            y2={innerSvgHeight - lineLength - circleRadius * 2}
          />
          <Circle
            r={circleProps2.r}
            cx="2.5vw"
            cy={innerSvgHeight - lineLength * 2 - circleRadius * 2}
          />
          <Line
            x1="2.5vw"
            y1={lineProps3.y}
            x2="2.5vw"
            y2={innerSvgHeight - lineLength * 2 - circleRadius * 3}
          />
          <Circle
            r={circleProps3.r}
            cx="2.5vw"
            cy={innerSvgHeight - lineLength * 3 - circleRadius * 3}
          />
          <Line
            x1="2.5vw"
            y1={lineProps4.y}
            x2="2.5vw"
            y2={innerSvgHeight - lineLength * 3 - circleRadius * 4}
          />
          <Circle
            r={circleProps4.r}
            cx="2.5vw"
            cy={innerSvgHeight - lineLength * 4 - circleRadius * 4}
          />
          <Line
            x1="2.5vw"
            y1={lineProps5.y}
            x2="2.5vw"
            y2={innerSvgHeight - lineLength * 4 - circleRadius * 5}
          />
          <Circle
            r={circleProps5.r}
            cx="2.5vw"
            cy={innerSvgHeight - lineLength * 5 - circleRadius * 5}
          />
        </g>
      </SvgContainer>
      <TimelineHeadingsContainer height={svgHeight}>
        <HeadingContainer height={svgHeight} top={padding.top - svgHeight / 40}>
          <Heading style={{ opacity: circleProps5.opacity }}>
            Infinity Works
          </Heading>
        </HeadingContainer>
        <HeadingContainer
          height={svgHeight}
          top={padding.top + lineLength + circleRadius * 1 - svgHeight / 40}
        >
          <Heading style={{ opacity: circleProps4.opacity }}>
            Decathlon UK (contract)
          </Heading>
        </HeadingContainer>
        <HeadingContainer
          height={svgHeight}
          top={padding.top + lineLength * 2 + circleRadius * 2 - svgHeight / 40}
        >
          <Heading style={{ opacity: circleProps3.opacity }}>
            Charles River Associates
          </Heading>
        </HeadingContainer>
        <HeadingContainer
          height={svgHeight}
          top={padding.top + lineLength * 3 + circleRadius * 3 - svgHeight / 40}
        >
          <Heading style={{ opacity: circleProps2.opacity }}>
            Rated People
          </Heading>
        </HeadingContainer>
        <HeadingContainer
          height={svgHeight}
          top={padding.top + lineLength * 4 + circleRadius * 4 - svgHeight / 40}
        >
          <Heading style={{ opacity: circleProps.opacity }}>
            Mindshare Worldwide
          </Heading>
        </HeadingContainer>
        <HeadingContainer
          height={svgHeight}
          top={padding.top + lineLength * 5 + circleRadius * 5 - svgHeight / 40}
        >
          <Heading style={{ opacity: circleProps0.opacity }}>Education</Heading>
        </HeadingContainer>
      </TimelineHeadingsContainer>
    </>
  )
}

export default Timeline
