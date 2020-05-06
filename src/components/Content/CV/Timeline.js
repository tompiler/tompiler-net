import React, { useRef } from "react"
import { useSpring, useChain, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"
import { SkillCategoryDendogramContainer } from "./DendogramLayer1"
import { SkillItemDendogramContainer } from "./DendogramLayer2"
import {
  SkillCategoryContainer,
  InnerSkillCategoryContainer,
  SkillCategory,
} from "./SkillCategory"
import {
  SkillItemContainer,
  InnerSkillItemContainer,
  SkillItem,
} from "./SkillItem"

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
  font-weight: ${props => (props.hover === "true" ? 500 : 400)};
  &:hover {
    color: #fafafa;
  }
  cursor: pointer;
`

const DendrogramPath = styled(animated.path)`
  fill: none;
  stroke: lightgray;
  stroke-width: ${props => (props.hover === "true" ? 1.4 : 0.7)};
`

const Timeline = ({
  open,
  mobile,
  hover,
  setHover,
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

  const DendogramLayer1Ref = useRef()
  const DendogramLayer1Props = useSpring({
    to: {
      x: open ? -3000 : -1200,
    },
    from: { x: -1200 },
    config: {
      mass: 1,
      tension: 30,
      friction: 15,
    },
    ref: DendogramLayer1Ref,
  })

  var skillCategorylinks = []

  data.skillCategoryLinks.forEach(link => {
    skillCategorylinks.push(
      <DendrogramPath
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
        hover={hover === link.y0.order ? "true" : "false"}
      />
    )
  })

  // SKILL CATEGORY LAYER

  const skillCategoryRef = useRef()
  const skillCategoryProps = useSpring({
    to: {
      opacity: open ? 1 : 0,
    },
    from: { opacity: 0 },
    ref: skillCategoryRef,
    config: {
      mass: 1,
      tension: 150,
      friction: 35,
    },
  })

  var skillCategoryList = []
  const skillCategories = Object.values(data.skillCategories)
  skillCategories.forEach(skillCategory => {
    skillCategoryList.push(
      <InnerSkillCategoryContainer
        height={svgHeight}
        top={skillCategory.vh}
        key={skillCategory.name}
      >
        <SkillCategory
          style={{ opacity: skillCategoryProps.opacity }}
          hover={
            skillCategory.validTimelineNodesOrder.includes(hover)
              ? "true"
              : "false"
          }
        >
          {skillCategory.name}
        </SkillCategory>
      </InnerSkillCategoryContainer>
    )
  })

  // DENDOGRAM LAYER 2

  const DendogramLayer2Ref = useRef()
  const DendogramLayer2Props = useSpring({
    to: {
      x: open ? -2300 : -1000,
    },
    from: { x: -1000 },
    config: {
      mass: 1,
      tension: 30,
      friction: 15,
    },
    ref: DendogramLayer2Ref,
  })

  var skillItemlinks = []

  data.skillItemLinks.forEach(link => {
    skillItemlinks.push(
      <DendrogramPath
        key={link.key}
        d={`
    M ${[0, toPxH(link.y0.vh)]}
    C  ${[svgWidth * 0.33, toPxH(link.y0.vh)]} ${[
          svgWidth * 0.66,
          toPxH(link.y1.vh),
        ]} ${[svgWidth, toPxH(link.y1.vh)]}
  `}
        hover={
          link.y1.validTimelineNodesOrder.includes(hover) ? "true" : "false"
        }
      />
    )
  })

  // SKILL ITEM LAYER

  const skillItemRef = useRef()
  const skillItemProps = useSpring({
    to: {
      opacity: open ? 1 : 0,
    },
    from: { opacity: 0 },
    ref: skillItemRef,
    config: {
      mass: 1,
      tension: 150,
      friction: 35,
    },
  })

  var skillItemList = []
  const skillItems = Object.values(data.skillItems)
  skillItems.forEach(skillItem => {
    skillItemList.push(
      <InnerSkillItemContainer
        height={svgHeight}
        top={skillItem.vh}
        key={skillItem.name}
      >
        <SkillItem
          style={{ opacity: skillItemProps.opacity }}
          hover={
            skillItem.validTimelineNodesOrder.includes(hover) ? "true" : "false"
          }
        >
          {skillItem.name}
        </SkillItem>
      </InnerSkillItemContainer>
    )
  })
  console.log(skillItemList)

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

  const lineRef6 = useRef()
  const lineProps6 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 6 - circleRadiusInv * 6 + "vh"
        : innerSvgHeight - lineLength * 5 - circleRadiusInv * 6 + "vh",
      x: open ? 3.5 + "vw" : 2.5 + "vw",
    },
    from: {
      y: innerSvgHeight - lineLength * 5 - circleRadiusInv * 6 + "vh",
      x: 2.5 + "vw",
    },
    ref: lineRef6,
  })

  const circleRef6 = useRef()
  const circleProps6 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef6,
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
          lineRef6,
          circleRef6,
          DendogramLayer1Ref,
          skillCategoryRef,
          DendogramLayer2Ref,
          skillItemRef,
        ]
      : [
          skillItemRef,
          DendogramLayer2Ref,
          skillCategoryRef,
          DendogramLayer1Ref,
          circleRef6,
          lineRef6,
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
    [
      0,
      0,
      0.3,
      0.3,
      0.6,
      0.6,
      0.9,
      0.9,
      1.2,
      1.2,
      1.5,
      1.5,
      1.8,
      1.8,
      2.8,
      2.9,
      3.3,
    ]
  )

  return (
    <>
      <Container>
        <SvgContainer
          height={svgHeight + "vh"}
          width="5vw"
          // style={{ border: "1px dashed white" }}
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
            <Line
              x1={lineProps6.x}
              y1={lineProps6.y}
              x2="2.5vw"
              y2={innerSvgHeight - lineLength * 5 - circleRadiusInv * 6 + "vh"}
              strokeDasharray="4 8"
            />
            <Circle
              r={circleProps6.r}
              cx="3.5vw"
              cy={innerSvgHeight - lineLength * 6 - circleRadiusInv * 6 + "vh"}
            />
          </g>
        </SvgContainer>
        <TimelineHeadingsContainer height={svgHeight}>
          <HeadingContainer height={10} top={yStartInv(6) - 5}>
            <Heading
              style={{ opacity: circleProps6.opacity }}
              onMouseOver={() => setHover(6)}
              onMouseOut={() => setHover(null)}
              hover={hover === 6 ? "true" : "false"}
            >
              Side Projects
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(5) - 5}>
            <Heading
              style={{ opacity: circleProps5.opacity }}
              onMouseOver={() => setHover(5)}
              onMouseOut={() => setHover(null)}
              hover={hover === 5 ? "true" : "false"}
            >
              Infinity Works
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(4) - 5}>
            <Heading
              style={{ opacity: circleProps4.opacity }}
              onMouseOver={() => setHover(4)}
              onMouseOut={() => setHover(null)}
              hover={hover === 4 ? "true" : "false"}
            >
              Decathlon UK (contract)
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(3) - 5}>
            <Heading
              style={{ opacity: circleProps3.opacity }}
              onMouseOver={() => setHover(3)}
              onMouseOut={() => setHover(null)}
              hover={hover === 3 ? "true" : "false"}
            >
              Charles River Associates
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(2) - 5}>
            <Heading
              style={{ opacity: circleProps2.opacity }}
              onMouseOver={() => setHover(2)}
              onMouseOut={() => setHover(null)}
              hover={hover === 2 ? "true" : "false"}
            >
              Rated People
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(1) - 5}>
            <Heading
              style={{ opacity: circleProps.opacity }}
              onMouseOver={() => setHover(1)}
              onMouseOut={() => setHover(null)}
              hover={hover === 1 ? "true" : "false"}
            >
              Mindshare Worldwide
            </Heading>
          </HeadingContainer>
          <HeadingContainer height={10} top={yStartInv(0) - 5}>
            <Heading
              style={{ opacity: circleProps0.opacity }}
              onMouseOver={() => setHover(9)}
              onMouseOut={() => setHover(null)}
              hover={hover === 0 ? "true" : "false"}
            >
              Education
            </Heading>
          </HeadingContainer>
        </TimelineHeadingsContainer>
      </Container>
      <SkillCategoryDendogramContainer height={svgHeight}>
        <animated.svg
          height={svgHeight + "vh"}
          width="15vw"
          // style={{ border: "1px dashed white" }}
          strokeDasharray="1900"
          strokeDashoffset={DendogramLayer1Props.x}
        >
          {skillCategorylinks}
        </animated.svg>
      </SkillCategoryDendogramContainer>
      <SkillCategoryContainer height={svgHeight}>
        {skillCategoryList}
      </SkillCategoryContainer>
      <SkillItemDendogramContainer height={svgHeight}>
        <animated.svg
          height={svgHeight + "vh"}
          width="15vw"
          // style={{ border: "1px dashed white" }}
          strokeDasharray="1300"
          strokeDashoffset={DendogramLayer2Props.x}
        >
          {skillItemlinks}
        </animated.svg>
      </SkillItemDendogramContainer>
      <SkillItemContainer height={svgHeight}>
        {skillItemList}
      </SkillItemContainer>
    </>
  )
}

export default Timeline
