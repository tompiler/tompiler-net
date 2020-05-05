import React, { useRef } from "react"
import { useSpring, useChain, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"
import { DendogramContainer } from "./DendogramLayer1"
import {
  SkillCategoryContainer,
  InnerSkillCategoryContainer,
  Skill,
} from "./SkillCategory"

import styled from "styled-components"

import data from "./links"

const Container = styled("div")`
  display: inline-block;
  width: 15vw;
`

const SvgContainer = styled(animated.svg)`
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
  height: ${props => props.height + "vh"};
  width: 10vw;
  /* border: 1px dashed lightgrey; */
`

const HeadingContainer = styled("div")`
  display: flex;
  position: absolute;
  top: ${props => props.top + "vh"};
  height: ${props => props.height + "vh"};
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
  circleRadiusInv,
  padding,
}) => {
  const windowSize = useWindowSize()

  const svgWidth = windowSize.width * 0.15

  const toPxH = h => (h / 100) * windowSize.height

  const innerSvgHeightPx = toPxH(innerSvgHeight)
  const lineLengthPx = toPxH(lineLength)

  const yStartInv = i => {
    return innerSvgHeight - lineLength * i - circleRadiusInv * i
  }

  const yStartPx = i => {
    return innerSvgHeightPx - lineLengthPx * i - circleRadius * i
  }

  // DENDOGRAM LAYER 1

  const pathRef = useRef()
  const pathProps = useSpring({
    to: {
      x: open ? -1200 : -700,
    },
    from: { x: -200 },
    config: {
      mass: 1,
      tension: 150,
      friction: 50,
    },
    ref: pathRef,
  })

  console.log(pathProps.x.value)

  var links = []

  data.skillCategoryLinks.forEach(link => {
    links.push(
      <animated.path
        key={link.key}
        d={`
    M ${[0, yStartPx(link.y0.order)]}
    C  ${[
      svgWidth * 0.33,
      innerSvgHeightPx -
        lineLengthPx * link.y0.order -
        circleRadius * link.y0.order,
    ]} ${[svgWidth * 0.66, toPxH(link.y1.vh)]} ${[svgWidth, toPxH(link.y1.vh)]}
  `}
        fill="none"
        stroke="lightgray"
        strokeWidth={0.7}
        strokeDasharray="800"
        strokeDashoffset={pathProps.x}
      />
    )
  })

  var skills = []
  const skillCategories = Object.values(data.skillCategories)
  skillCategories.forEach(skillCategory => {
    skills.push(
      <InnerSkillCategoryContainer
        height={svgHeight}
        top={skillCategory.vh}
        key={skillCategory.name}
      >
        <Skill style={{ opacity: 1 }}>{skillCategory.name}</Skill>
      </InnerSkillCategoryContainer>
    )
  })

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
        ? innerSvgHeight - lineLength - circleRadiusInv + "vh"
        : innerSvgHeight - circleRadiusInv + "vh",
    },
    from: { y: innerSvgHeight - circleRadiusInv + "vh" },
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
        ? innerSvgHeight - lineLength * 2 - circleRadiusInv * 2 + "vh"
        : innerSvgHeight - lineLength - circleRadiusInv * 2 + "vh",
    },
    from: { y: innerSvgHeight - lineLength - circleRadiusInv * 2 + "vh" },
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
        ? innerSvgHeight - lineLength * 3 - circleRadiusInv * 3 + "vh"
        : innerSvgHeight - lineLength * 2 - circleRadiusInv * 3 + "vh",
    },
    from: { y: innerSvgHeight - lineLength * 2 - circleRadiusInv * 3 + "vh" },
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
        ? innerSvgHeight - lineLength * 4 - circleRadiusInv * 4 + "vh"
        : innerSvgHeight - lineLength * 3 - circleRadiusInv * 4 + "vh",
    },
    from: { y: innerSvgHeight - lineLength * 3 - circleRadiusInv * 4 + "vh" },
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
        ? innerSvgHeight - lineLength * 5 - circleRadiusInv * 5 + "vh"
        : innerSvgHeight - lineLength * 4 - circleRadiusInv * 5 + "vh",
    },
    from: { y: innerSvgHeight - lineLength * 4 - circleRadiusInv * 5 + "vh" },
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
          pathRef,
        ]
      : [
          pathRef,
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
    [0, 0.2, 0.5, 0.7, 1, 1.2, 1.5, 1.7, 2, 2.2, 2.5, 3]
  )

  return (
    <>
      <Container>
        <SvgContainer
          height={svgHeight + "vh"}
          width="5vw"
          style={{ border: "1px dashed white" }}
        >
          <g>
            <Circle r={circleProps0.r} cx="2.5vw" cy={innerSvgHeight + "vh"} />
            <Line
              x1="2.5vw"
              y1={lineProps.y}
              x2="2.5vw"
              y2={innerSvgHeight - circleRadiusInv + "vh"}
            />
            <Circle
              r={circleProps.r}
              cx="2.5vw"
              cy={innerSvgHeight - lineLength - circleRadiusInv + "vh"}
            />
            <Line
              x1="2.5vw"
              y1={lineProps2.y}
              x2="2.5vw"
              y2={innerSvgHeight - lineLength - circleRadiusInv * 2 + "vh"}
            />
            <Circle
              r={circleProps2.r}
              cx="2.5vw"
              cy={innerSvgHeight - lineLength * 2 - circleRadiusInv * 2 + "vh"}
            />
            <Line
              x1="2.5vw"
              y1={lineProps3.y}
              x2="2.5vw"
              y2={innerSvgHeight - lineLength * 2 - circleRadiusInv * 3 + "vh"}
            />
            <Circle
              r={circleProps3.r}
              cx="2.5vw"
              cy={innerSvgHeight - lineLength * 3 - circleRadiusInv * 3 + "vh"}
            />
            <Line
              x1="2.5vw"
              y1={lineProps4.y}
              x2="2.5vw"
              y2={innerSvgHeight - lineLength * 3 - circleRadiusInv * 4 + "vh"}
            />
            <Circle
              r={circleProps4.r}
              cx="2.5vw"
              cy={innerSvgHeight - lineLength * 4 - circleRadiusInv * 4 + "vh"}
            />
            <Line
              x1="2.5vw"
              y1={lineProps5.y}
              x2="2.5vw"
              y2={innerSvgHeight - lineLength * 4 - circleRadiusInv * 5 + "vh"}
            />
            <Circle
              r={circleProps5.r}
              cx="2.5vw"
              cy={innerSvgHeight - lineLength * 5 - circleRadiusInv * 5 + "vh"}
            />
          </g>
        </SvgContainer>
        <TimelineHeadingsContainer height={svgHeight}>
          <HeadingContainer height={10} top={yStartInv(5) - 5}>
            <Heading style={{ opacity: circleProps5.opacity }}>
              Infinity Works
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(4) - 5}>
            <Heading style={{ opacity: circleProps4.opacity }}>
              Decathlon UK (contract)
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(3) - 5}>
            <Heading style={{ opacity: circleProps3.opacity }}>
              Charles River Associates
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(2) - 5}>
            <Heading style={{ opacity: circleProps2.opacity }}>
              Rated People
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(1) - 5}>
            <Heading style={{ opacity: circleProps.opacity }}>
              Mindshare Worldwide
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(0) - 5}>
            <Heading style={{ opacity: circleProps0.opacity }}>
              Education
            </Heading>
          </HeadingContainer>
        </TimelineHeadingsContainer>
      </Container>
      <DendogramContainer height={svgHeight}>
        <animated.svg
          height={svgHeight + "vh"}
          width="15vw"
          style={{ border: "1px dashed white" }}
        >
          {links}
        </animated.svg>
      </DendogramContainer>
      <SkillCategoryContainer height={svgHeight}>
        {skills}
      </SkillCategoryContainer>
    </>
  )
}

export default Timeline
