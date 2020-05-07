import React, { useRef } from "react"
import { useSpring, useTransition, useChain, animated } from "react-spring"

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

import EmploymentDetail from "./EmploymentDetail"

import styled from "styled-components"

import data from "./links"

const Container = styled("div")`
  display: inline-block;
  width: 12vw;
  height: 92vh;
  /* border: 1px dashed blue; */
`

const SvgContainer = styled(animated.svg)`
  height: ${props => props.height + "vh"};
  width: 5vw;
  overflow: visible;
`

const Line = styled(animated.line)`
  stroke: ${props => props.theme.color};
  stroke-width: 1.2;
`

const Circle = styled(animated.circle)`
  stroke: ${props => props.theme.color};
  stroke-width: 1.8;
  fill: ${props =>
    props.hover === "true" || props.selected
      ? props.theme.cv.circle.hover
      : props.theme.background};
`

const ColumnHeading = styled(animated.div)`
  display: inline-block;
  height: 3vh;
  width: 100%;
  text-align: center;
  font-family: "Hammersmith One";
  font-size: 1.1em;
  color: ${props => props.theme.cv.color};
  border-bottom: ${props => `1px solid ${props.theme.cv.color}`};
`

const ColumnBody = styled("div")`
  height: 89vh;
`

const TimelineHeadingsContainer = styled("div")`
  display: inline-block;
  /* position: relative; */
  left: ${props => (props.mobile ? "10%" : "20%")};
  height: ${props => props.height + "vh"};
  width: 7vw;
  /* border: 1px dashed lightgrey; */
`

const HeadingContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: top;
  position: absolute;
  top: ${props => props.top + "vh"};
  height: ${props => props.height + "vh"};
  width: 7vw;
  /* border: 1px dashed lightgrey; */
`

const Heading = styled("div")`
  /* display: flex; */
  align-items: center;
  font-family: "Open Sans";
  font-size: 1em;
  font-weight: ${props =>
    props.hover === "true" || props.selected === "true" ? 700 : 600};
  color: ${props => props.theme.cv.color};
  &:hover {
    color: ${props => props.theme.cv.hover};
  }
  cursor: pointer;
`

const HeadingDuration = styled("div")`
  font-style: italic;
  font-size: 0.8em;
  color: ${props => props.theme.cv.color};
  width: 6vw;
`

const DendrogramPath = styled(animated.path)`
  fill: none;
  stroke: ${props =>
    props.hover === "true" || props.selected
      ? props.theme.cv.line.hover
      : props.theme.cv.line.color};
  stroke-width: ${props =>
    props.hover === "true" || props.selected ? 1.2 : 0.7};
`

const Timeline = ({
  open,
  mobile,
  hover,
  selected,
  setHover,
  setSelected,
  svgHeight,
  innerSvgHeight,
  lineLength,
  circleRadius,
  circleRadiusInv,
  padding,
}) => {
  const windowSize = useWindowSize()

  const svgWidth = windowSize.width * 0.13

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
      tension: 20,
      friction: 20,
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
    ]} ${[svgWidth * 0.66, toPxH(link.y1.vh - 1.8)]} ${[
          svgWidth,
          toPxH(link.y1.vh - 1.8),
        ]}
  `}
        hover={hover === link.y0.order ? "true" : "false"}
        selected={selected.value === link.y0.order}
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
          selected={skillCategory.validTimelineNodesOrder.includes(
            selected.value
          )}
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
      tension: 20,
      friction: 20,
    },
    ref: DendogramLayer2Ref,
  })

  var skillItemlinks = []

  data.skillItemLinks.forEach(link => {
    skillItemlinks.push(
      <DendrogramPath
        key={link.key}
        d={`
    M ${[0, toPxH(link.y0.vh - 1.8)]}
    C  ${[svgWidth * 0.33, toPxH(link.y0.vh - 1.8)]} ${[
          svgWidth * 0.66,
          toPxH(link.y1.vh - 1.8),
        ]} ${[svgWidth, toPxH(link.y1.vh - 1.8)]}
  `}
        hover={
          link.y1.validTimelineNodesOrder.includes(hover) ? "true" : "false"
        }
        selected={link.y1.validTimelineNodesOrder.includes(selected.value)}
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
          selected={skillItem.validTimelineNodesOrder.includes(selected.value)}
        >
          {skillItem.name}
        </SkillItem>
      </InnerSkillItemContainer>
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

  const lineRef6 = useRef()
  const lineProps6 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 6 - circleRadiusInv * 6 + "vh"
        : innerSvgHeight - lineLength * 5 - circleRadiusInv * 6 + "vh",
      x: open ? 4 + "vw" : 2.5 + "vw",
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

  const detailRef = useRef()
  const detailProps = useSpring({
    to: {
      opacity: open ? 1 : 0,
    },
    from: {
      opacity: 0,
    },
    ref: detailRef,
  })

  const transitions = useTransition(selected.value.toString(), null, {
    from: {
      cy: selected.value > selected.prevValue ? "15%" : "85%",
      opacity: 0,
    },
    enter: { cy: "50%", opacity: 1 },
    leave: {
      cy: selected.value > selected.prevValue ? "85%" : "15%",
      opacity: 0,
    },
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
          detailRef,
        ]
      : [
          detailRef,
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
    open
      ? [
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
          3.6,
        ]
      : [
          0.4,
          0.5,
          1.5,
          1.5,
          1.8,
          1.8,
          2.1,
          2.1,
          2.3,
          2.3,
          2.6,
          2.6,
          2.9,
          2.9,
          3.2,
          3.2,
          3.5,
          3.6,
        ]
  )

  return (
    <>
      <Container>
        <ColumnHeading style={{ opacity: circleProps6.opacity }}>
          EMPLOYMENT
        </ColumnHeading>
        <SvgContainer
          height={svgHeight} /*style={{ border: "1px dashed white" }}*/
        >
          <g>
            <Circle
              r={circleProps0.r}
              cx="2.5vw"
              cy={innerSvgHeight + "vh"}
              hover={hover === 0 ? "true" : "false"}
              selected={selected.value === 0 ? true : false}
            />
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
              hover={hover === 1 ? "true" : "false"}
              selected={selected.value === 1 ? true : false}
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
              hover={hover === 2 ? "true" : "false"}
              selected={selected.value === 2 ? true : false}
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
              hover={hover === 3 ? "true" : "false"}
              selected={selected.value === 3 ? true : false}
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
              hover={hover === 4 ? "true" : "false"}
              selected={selected.value === 4 ? true : false}
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
              hover={hover === 5 ? "true" : "false"}
              selected={selected.value === 5 ? true : false}
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
              cx="4vw"
              cy={innerSvgHeight - lineLength * 6 - circleRadiusInv * 6 + "vh"}
              hover={hover === 6 ? "true" : "false"}
              selected={selected.value === 6 ? true : false}
            />
          </g>
        </SvgContainer>
        <TimelineHeadingsContainer
          height={svgHeight}
          // style={{ border: "1px dashed green" }}
        >
          <HeadingContainer
            height={8}
            top={yStartInv(6) + 2}
            style={{ opacity: circleProps6.opacity }}
          >
            <Heading
              onMouseOver={() => setHover(6)}
              onMouseOut={() => setHover(null)}
              onClick={() =>
                setSelected(state => ({ value: 6, prevValue: state.value }))
              }
              onFocus={() => void 0}
              onBlur={() => void 0}
              hover={hover === 6 ? "true" : "false"}
              selected={selected.value === 6}
            >
              Side Projects
            </Heading>
            <HeadingDuration>Ongoing</HeadingDuration>
          </HeadingContainer>
          <HeadingContainer
            height={8}
            top={yStartInv(5) + 2}
            style={{ opacity: circleProps5.opacity }}
          >
            <Heading
              onMouseOver={() => setHover(5)}
              onMouseOut={() => setHover(null)}
              onClick={() =>
                setSelected(state => ({ value: 5, prevValue: state.value }))
              }
              onFocus={() => void 0}
              onBlur={() => void 0}
              hover={hover === 5 ? "true" : "false"}
              selected={selected.value === 5}
            >
              Infinity Works
            </Heading>
            <HeadingDuration>July 2019 - present</HeadingDuration>
          </HeadingContainer>
          <HeadingContainer
            height={8}
            top={yStartInv(4) + 2}
            style={{ opacity: circleProps4.opacity }}
          >
            <Heading
              onMouseOver={() => setHover(4)}
              onMouseOut={() => setHover(null)}
              onClick={() =>
                setSelected(state => ({ value: 4, prevValue: state.value }))
              }
              onFocus={() => void 0}
              onBlur={() => void 0}
              hover={hover === 4 ? "true" : "false"}
              selected={selected.value === 4}
            >
              Decathlon UK (contract)
            </Heading>
            <HeadingDuration>January 2019 - June 2019</HeadingDuration>
          </HeadingContainer>
          <HeadingContainer
            height={8}
            top={yStartInv(3) + 2}
            style={{ opacity: circleProps3.opacity }}
          >
            <Heading
              onMouseOver={() => setHover(3)}
              onMouseOut={() => setHover(null)}
              onClick={() =>
                setSelected(state => ({ value: 3, prevValue: state.value }))
              }
              onFocus={() => void 0}
              onBlur={() => void 0}
              hover={hover === 3 ? "true" : "false"}
              selected={selected.value === 3}
            >
              Charles River Associates
            </Heading>
            <HeadingDuration>October 2016 - December 2018</HeadingDuration>
          </HeadingContainer>
          <HeadingContainer
            height={8}
            top={yStartInv(2) + 2}
            style={{ opacity: circleProps2.opacity }}
          >
            <Heading
              onMouseOver={() => setHover(2)}
              onMouseOut={() => setHover(null)}
              onClick={() =>
                setSelected(state => ({ value: 2, prevValue: state.value }))
              }
              onFocus={() => void 0}
              onBlur={() => void 0}
              hover={hover === 2 ? "true" : "false"}
              selected={selected.value === 2}
            >
              Rated People
            </Heading>
            <HeadingDuration>September 2014 - September 2016</HeadingDuration>
          </HeadingContainer>

          <HeadingContainer
            height={8}
            top={yStartInv(1) + 1.8}
            style={{ opacity: circleProps.opacity }}
          >
            <Heading
              onMouseOver={() => setHover(1)}
              onMouseOut={() => setHover(null)}
              onClick={() =>
                setSelected(state => ({ value: 1, prevValue: state.value }))
              }
              onFocus={() => void 0}
              onBlur={() => void 0}
              hover={hover === 1 ? "true" : "false"}
              selected={selected.value === 1}
            >
              Mindshare Worldwide
            </Heading>
            <HeadingDuration>November 2013 - August 2014</HeadingDuration>
          </HeadingContainer>
          <HeadingContainer
            height={8}
            top={yStartInv(0) + 2}
            style={{ opacity: circleProps0.opacity }}
          >
            <Heading
              onMouseOver={() => setHover(0)}
              onMouseOut={() => setHover(null)}
              onClick={() =>
                setSelected(state => ({ value: 0, prevValue: state.value }))
              }
              onFocus={() => void 0}
              onBlur={() => void 0}
              hover={hover === 0 ? "true" : "false"}
              selected={selected.value === 0}
            >
              Education
            </Heading>
            <HeadingDuration>September 2009 - August 2013</HeadingDuration>
          </HeadingContainer>
        </TimelineHeadingsContainer>
      </Container>

      <SkillCategoryDendogramContainer /*style={{ border: "1px dashed white" }}*/
      >
        <animated.svg
          height={svgHeight + "vh"}
          width="15vw"
          strokeDasharray="1900"
          strokeDashoffset={DendogramLayer1Props.x}
        >
          {skillCategorylinks}
        </animated.svg>
      </SkillCategoryDendogramContainer>
      <SkillCategoryContainer>
        <ColumnHeading style={{ opacity: skillCategoryProps.opacity }}>
          SKILL
        </ColumnHeading>
        <ColumnBody>{skillCategoryList}</ColumnBody>
      </SkillCategoryContainer>
      <SkillItemDendogramContainer /*style={{ border: "1px dashed white" }}*/>
        <animated.svg
          height={svgHeight + 5 + "vh"}
          width="15vw"
          strokeDasharray="1300"
          strokeDashoffset={DendogramLayer2Props.x}
        >
          {skillItemlinks}
        </animated.svg>
      </SkillItemDendogramContainer>
      <SkillItemContainer>
        <ColumnHeading style={{ opacity: skillItemProps.opacity }}>
          TECHNOLOGY
        </ColumnHeading>
        <ColumnBody>{skillItemList}</ColumnBody>
      </SkillItemContainer>
      <EmploymentDetail
        detailProps={detailProps}
        transitions={transitions}
      ></EmploymentDetail>
    </>
  )
}

export { Timeline, Line, Circle }
