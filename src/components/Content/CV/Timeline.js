import React, { useRef } from "react"
import { useSpring, useChain, animated } from "react-spring"

import { graphql, useStaticQuery } from "gatsby"

import useWindowSize from "../../useWindowSize"
import { SkillCategoryDendogramContainer } from "./DendogramLayer1"
import { SkillItemDendogramContainer } from "./DendogramLayer2"
import {
  SkillCategoryContainer,
  InnerSkillCategoryContainer,
  SkillCategory
} from "./SkillCategory"
import {
  SkillItemContainer,
  InnerSkillItemContainer,
  SkillItem
} from "./SkillItem"

import SummaryDetailExplain from "./SummaryDetailExplain"

import styled from "styled-components"

import data from "./links"

const Container = styled("div")`
  display: inline-block;
  position: absolute;
  width: 12%;
  height: 100%;
  /* border: 1px dashed papayawhip; */

  @media ${props => props.theme.breakpoints.md} {
    position: relative;
    width: 80%;
    height: 70%;
  }
`

const SvgContainer = styled(animated.svg)`
  height: ${props => props.height + "vh"};
  float: left;
  width: 40%;
  overflow: visible;
  /* border: 1px dashed white; */
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
  cursor: pointer;
`

const ColumnHeading = styled(animated.div)`
  display: inline-block;
  height: 3vh;
  width: 100%;
  text-align: center;
  font-family: "Hammersmith One";
  font-size: 1.1em;
  color: ${props => props.theme.color};
  border-bottom: ${props => `1px solid ${props.theme.cv.color}`};
  /* border: 1px dashed lightpink; */
`

const ColumnBody = styled("div")`
  height: 89vh;
`

const TimelineHeadingsContainer = styled("div")`
  display: inline-block;
  left: 40%;
  height: ${props => props.height + "vh"};
  width: 60%;
  /* border: 1px dashed lightgrey; */

  @media ${props => props.theme.breakpoints.md} {
    left: 0%;
    width: 60%;
  }
`

const HeadingContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => props.top + "vh"};
  width: 60%;
  text-align: left;
  /* border: 1px dashed lightgrey; */
`

const Heading = styled("div")`
  font-size: 1em;
  font-weight: ${props =>
    props.hover === "true" || props.selected ? 500 : 500};
  color: ${props => props.theme.cv.color};
  &:hover {
    color: ${props => props.theme.cv.hover};
  }
  cursor: pointer;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.85em;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 0.8em;
  }
`

const HeadingDuration = styled("div")`
  font-style: italic;
  font-size: 0.8em;
  color: ${props => props.theme.cv.color};
  width: 80%;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.7em;
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 0.65em;
    width: 100%;
  }
`

const DendrogramPath = styled(animated.path)`
  fill: none;
  stroke: ${props =>
    props.hover === "true" || props.selected
      ? props.theme.cv.line.hover
      : props.theme.cv.line.color};
  stroke-width: ${props =>
    props.hover === "true" || props.selected ? 2 : 0.6};
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
  circleRadiusInv
}) => {
  const windowSize = useWindowSize()

  const svgWidth = windowSize.width * 0.16

  const toPxH = h => (h / 100) * windowSize.height

  const innerSvgHeightPx = toPxH(innerSvgHeight)
  const lineLengthPx = toPxH(lineLength)

  const yStartInv = i => {
    return innerSvgHeight - lineLength * i - circleRadiusInv * i
  }

  const yStartPx = i => {
    return innerSvgHeightPx - lineLengthPx * i - circleRadius * i
  }

  const mobileAdjY = mobile ? 12 : 0

  // DENDOGRAM LAYER 1

  const DendogramLayer1Ref = useRef()
  const DendogramLayer1Props = useSpring({
    to: {
      x: open ? -3000 : -1200
    },
    from: { x: -1200 },
    config: {
      mass: 1,
      tension: 20,
      friction: 20
    },
    ref: DendogramLayer1Ref
  })

  const skillCategorylinks = data.skillCategoryLinks.map(link => (
    <DendrogramPath
      key={link.key}
      d={`
    M ${[0, yStartPx(link.y0.order)]}
    C  ${[
      svgWidth * 0.33,
      innerSvgHeightPx -
        lineLengthPx * link.y0.order -
        circleRadius * link.y0.order
    ]} ${[svgWidth * 0.66, toPxH(link.y1.vh - 1.8)]} ${[
        svgWidth,
        toPxH(link.y1.vh - 1.8)
      ]}
  `}
      hover={hover === link.y0.order ? "true" : "false"}
      selected={selected.value === link.y0.order}
    />
  ))

  // SKILL CATEGORY LAYER

  const skillCategoryRef = useRef()
  const skillCategoryProps = useSpring({
    to: {
      opacity: open ? 1 : 0
    },
    from: { opacity: 0 },
    ref: skillCategoryRef,
    config: {
      mass: 1,
      tension: 150,
      friction: 35
    }
  })

  const skillCategoryList = Object.values(data.skillCategories).map(
    skillCategory => (
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
  )

  // DENDOGRAM LAYER 2

  const DendogramLayer2Ref = useRef()
  const DendogramLayer2Props = useSpring({
    to: {
      x: open ? -2300 : -1000
    },
    from: { x: -1000 },
    config: {
      mass: 1,
      tension: 20,
      friction: 20
    },
    ref: DendogramLayer2Ref
  })

  const skillItemlinks = data.skillItemLinks.map(link => (
    <DendrogramPath
      key={link.key}
      d={`
    M ${[0, toPxH(link.y0.vh - 1.8)]}
    C  ${[svgWidth * 0.33, toPxH(link.y0.vh - 1.8)]} ${[
        svgWidth * 0.66,
        toPxH(link.y1.vh - 1.8)
      ]} ${[svgWidth, toPxH(link.y1.vh - 1.8)]}
  `}
      hover={link.y1.validTimelineNodesOrder.includes(hover) ? "true" : "false"}
      selected={link.y1.validTimelineNodesOrder.includes(selected.value)}
    />
  ))

  // SKILL ITEM LAYER

  const skillItemRef = useRef()
  const skillItemProps = useSpring({
    to: {
      opacity: open ? 1 : 0
    },
    from: { opacity: 0 },
    ref: skillItemRef,
    config: {
      mass: 1,
      tension: 150,
      friction: 35
    }
  })

  const skillItemList = Object.values(data.skillItems).map(skillItem => (
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
  ))

  const circleRef0 = useRef()
  const circleProps0 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef0
  })

  const lineRef1 = useRef()
  const lineProps1 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength - circleRadiusInv + "vh"
        : innerSvgHeight - circleRadiusInv + "vh"
    },
    from: { y: innerSvgHeight - circleRadiusInv + "vh" },
    ref: lineRef1
  })

  const circleRef1 = useRef()
  const circleProps1 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef1
  })

  const lineRef2 = useRef()
  const lineProps2 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 2 - circleRadiusInv * 2 + "vh"
        : innerSvgHeight - lineLength - circleRadiusInv * 2 + "vh"
    },
    from: { y: innerSvgHeight - lineLength - circleRadiusInv * 2 + "vh" },
    ref: lineRef2
  })

  const circleRef2 = useRef()
  const circleProps2 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef2
  })

  const lineRef3 = useRef()
  const lineProps3 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 3 - circleRadiusInv * 3 + "vh"
        : innerSvgHeight - lineLength * 2 - circleRadiusInv * 3 + "vh"
    },
    from: { y: innerSvgHeight - lineLength * 2 - circleRadiusInv * 3 + "vh" },
    ref: lineRef3
  })

  const circleRef3 = useRef()
  const circleProps3 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef3
  })

  const lineRef4 = useRef()
  const lineProps4 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 4 - circleRadiusInv * 4 + "vh"
        : innerSvgHeight - lineLength * 3 - circleRadiusInv * 4 + "vh"
    },
    from: { y: innerSvgHeight - lineLength * 3 - circleRadiusInv * 4 + "vh" },
    ref: lineRef4
  })

  const circleRef4 = useRef()
  const circleProps4 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef4
  })

  const lineRef5 = useRef()
  const lineProps5 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 5 - circleRadiusInv * 5 + "vh"
        : innerSvgHeight - lineLength * 4 - circleRadiusInv * 5 + "vh"
    },
    from: { y: innerSvgHeight - lineLength * 4 - circleRadiusInv * 5 + "vh" },
    ref: lineRef5
  })

  const circleRef5 = useRef()
  const circleProps5 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef5
  })

  const lineRef6 = useRef()
  const lineProps6 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 6 - circleRadiusInv * 6 + "vh"
        : innerSvgHeight - lineLength * 5 - circleRadiusInv * 6 + "vh"
    },
    from: { y: innerSvgHeight - lineLength * 5 - circleRadiusInv * 6 + "vh" },
    ref: lineRef6
  })

  const circleRef6 = useRef()
  const circleProps6 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef6
  })

  const lineRef7 = useRef()
  const lineProps7 = useSpring({
    to: {
      y: open
        ? innerSvgHeight - lineLength * 7 - circleRadiusInv * 7 + "vh"
        : innerSvgHeight - lineLength * 6 - circleRadiusInv * 7 + "vh",
      x: open ? 3 + mobileAdjY * 1.5 + "vw" : 1 + mobileAdjY + "vw"
    },
    from: {
      y: innerSvgHeight - lineLength * 6 - circleRadiusInv * 7 + "vh",
      x: 1 + mobileAdjY + "vw"
    },
    ref: lineRef7
  })

  const circleRef7 = useRef()
  const circleProps7 = useSpring({
    to: { r: open ? circleRadius : 0, opacity: open ? 1 : 0 },
    from: { r: 0, opacity: 0 },
    ref: circleRef7
  })

  const detailRef = useRef()
  const detailProps = useSpring({
    to: {
      opacity: open ? 1 : 0
    },
    from: {
      opacity: 0
    },
    ref: detailRef
  })

  // chain
  useChain(
    mobile && open
      ? [
          detailRef,
          circleRef0,
          lineRef1,
          circleRef1,
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
          lineRef7,
          circleRef7
        ]
      : open
      ? [
          circleRef0,
          lineRef1,
          circleRef1,
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
          lineRef7,
          circleRef7,
          DendogramLayer1Ref,
          skillCategoryRef,
          DendogramLayer2Ref,
          skillItemRef,
          detailRef
        ]
      : [
          detailRef,
          skillItemRef,
          DendogramLayer2Ref,
          skillCategoryRef,
          DendogramLayer1Ref,
          circleRef7,
          lineRef7,
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
          circleRef1,
          lineRef1,
          circleRef0
        ],
    mobile && open
      ? [
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
          2.1,
          2.1,
          2.4
        ]
      : open
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
          2.1,
          2.1,
          3.1,
          3.2,
          3.6,
          4.0
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
          3.5,
          3.8,
          3.9,
          4.2,
          4.5
        ]
  )

  const circleSprings = [
    circleProps0,
    circleProps1,
    circleProps2,
    circleProps3,
    circleProps4,
    circleProps5,
    circleProps6,
    circleProps7
  ]

  const lineSprings = [
    lineProps1,
    lineProps2,
    lineProps3,
    lineProps4,
    lineProps5,
    lineProps6
  ]

  const selectedArray = [-1, 1, 2, 3, 4, 5, 6, 7]

  const result = useStaticQuery(graphql`
    query TimelineQuery {
      dataJson {
        main {
          columnHeadings
        }
        detail {
          heading
          selected
          values {
            duration
          }
        }
      }
    }
  `)

  const detail = result.dataJson.detail
  const columnHeadings = result.dataJson.main.columnHeadings

  return (
    <>
      <SummaryDetailExplain
        mobile={mobile}
        selected={selected}
        detailProps={detailProps}
        setSelected={setSelected}
      ></SummaryDetailExplain>
      {(selected.menu || !mobile) && (
        <Container>
          {!mobile && (
            <ColumnHeading style={{ opacity: circleProps7.opacity }}>
              {columnHeadings[0]}
            </ColumnHeading>
          )}
          <SvgContainer
            height={svgHeight}
            menu={selected.menu ? 1 : 0}
            // style={{ border: "1px dashed white" }}
          >
            <g>
              <Line
                x1={lineProps7.x}
                y1={lineProps7.y}
                x2={1 + mobileAdjY + "vw"}
                y2={
                  innerSvgHeight - lineLength * 6 - circleRadiusInv * 7 + "vh"
                }
                strokeDasharray="4 8"
              />
              {lineSprings.map((spring, i) => (
                <Line
                  x1={1 + mobileAdjY + "vw"}
                  y1={spring.y}
                  x2={1 + mobileAdjY + "vw"}
                  y2={
                    innerSvgHeight -
                    lineLength * i -
                    circleRadiusInv * (i + 1) +
                    "vh"
                  }
                  key={"lineSpring-" + i}
                />
              ))}
              {circleSprings.map((spring, i) => (
                <Circle
                  onClick={() =>
                    setSelected(state => ({
                      value: selectedArray[i],
                      prevValue: state.value,
                      menu: false
                    }))
                  }
                  r={spring.r}
                  cx={
                    i === 7
                      ? 3 + mobileAdjY * 1.5 + "vw"
                      : 1 + mobileAdjY + "vw"
                  }
                  cy={
                    innerSvgHeight - lineLength * i - circleRadiusInv * i + "vh"
                  }
                  hover={hover === selectedArray[i] ? "true" : "false"}
                  selected={selected.value === selectedArray[i]}
                  key={"circleSpring-" + i}
                />
              ))}
            </g>
          </SvgContainer>
          <TimelineHeadingsContainer height={svgHeight}>
            {circleSprings.map((spring, i) => (
              <HeadingContainer
                top={yStartInv(i) + (mobile ? -1.3 : 1.8)}
                style={{ opacity: spring.opacity }}
                key={"headingContainer" + i}
              >
                <Heading
                  onMouseOver={() => setHover(selectedArray[i])}
                  onMouseOut={() => setHover(null)}
                  onClick={() =>
                    setSelected(state => ({
                      value: selectedArray[i],
                      prevValue: state.value,
                      menu: false
                    }))
                  }
                  onFocus={() => void 0}
                  onBlur={() => void 0}
                  hover={hover === selectedArray[i] ? "true" : "false"}
                  selected={selected.value === selectedArray[i]}
                >
                  {detail[i].heading}
                </Heading>
                <HeadingDuration>{detail[i].values.duration}</HeadingDuration>
              </HeadingContainer>
            ))}
          </TimelineHeadingsContainer>
        </Container>
      )}
      {!mobile && (
        <>
          <SkillCategoryDendogramContainer
          // style={{ border: "1px dashed white" }}
          >
            <animated.svg
              height="100%"
              width="100%"
              strokeDasharray="1900"
              strokeDashoffset={DendogramLayer1Props.x}
            >
              {skillCategorylinks}
            </animated.svg>
          </SkillCategoryDendogramContainer>
          <SkillCategoryContainer>
            <ColumnHeading style={{ opacity: skillCategoryProps.opacity }}>
              {columnHeadings[1]}
            </ColumnHeading>
            <ColumnBody>{skillCategoryList}</ColumnBody>
          </SkillCategoryContainer>

          <SkillItemDendogramContainer>
            <animated.svg
              height="100%"
              width="100%"
              strokeDasharray="1300"
              strokeDashoffset={DendogramLayer2Props.x}
            >
              {skillItemlinks}
            </animated.svg>
          </SkillItemDendogramContainer>
          <SkillItemContainer>
            <ColumnHeading style={{ opacity: skillItemProps.opacity }}>
              {columnHeadings[2]}
            </ColumnHeading>
            <ColumnBody>{skillItemList}</ColumnBody>
          </SkillItemContainer>
        </>
      )}
    </>
  )
}

export { Timeline, Line, Circle }
