import React from "react"

import { useSpring, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

import data from "./links"

const DendogramContainer = styled("div")`
  display: inline-block;
  width: 15vw;
  height: ${props => props.height + "vh"};
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "80px")};
  left: ${props => (props.mobile ? "10%" : "25vw")};
`

const SvgContainer = styled(animated.svg)`
  border-bottom: "3px solid white";
  height: 100%;
`

const DendogramLayer1 = ({
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
  const toPxW = w => (w / 100) * windowSize.width

  const innerSvgHeightPx = toPxH(innerSvgHeight)
  const lineLengthPx = toPxH(lineLength)

  const yStart = i => {
    return innerSvgHeightPx - lineLengthPx * i - circleRadius * i
  }

  var links = []

  data.skillCategoryLinks.forEach(link => {
    links.push(
      <path
        d={`
    M ${[0, yStart(link.y0.order)]}
    C ${[
      svgWidth * 0.33,
      innerSvgHeightPx -
        lineLengthPx * link.y0.order -
        circleRadius * link.y0.order,
    ]} ${[svgWidth * 0.66, toPxH(link.y1.vh)]} ${[svgWidth, toPxH(link.y1.vh)]}
  `}
        fill="none"
        stroke="lightgray"
        strokeWidth={0.7}
      />
    )
  })

  const startPoint = [0, yStart(5)]
  const controlPoint1 = [
    svgWidth * 0.33,
    innerSvgHeightPx - lineLengthPx * 5 - circleRadius * 5,
  ]

  const controlPoint2 = [svgWidth * 0.66, (svgHeight * 20) / 100]
  const endPoint = [svgWidth, (svgHeight * 20) / 100]

  const startPoint2 = [0, yStart(4)]
  const controlPoint3 = [
    svgWidth * 0.33,
    innerSvgHeightPx - lineLengthPx * 4 - circleRadius * 4,
  ]

  const controlPoint4 = [svgWidth * 0.66, (svgHeight * 20) / 100]
  const endPoint2 = [svgWidth, (svgHeight * 20) / 100]

  const path = (
    <>
      <path
        d={`
      M ${startPoint}
      C ${controlPoint1} ${controlPoint2} ${endPoint}
    `}
        fill="none"
        stroke="lightgray"
        strokeWidth={2}
      />

      <path
        d={`
    M ${startPoint2}
    C ${controlPoint3} ${controlPoint4} ${endPoint2}
  `}
        fill="none"
        stroke="lightgray"
        strokeWidth={2}
      />
    </>
  )

  console.log(
    windowSize,
    svgHeight,
    innerSvgHeight,
    circleRadiusInv,
    circleRadius,
    lineLength,
    innerSvgHeightPx,
    lineLengthPx
  )

  return (
    <DendogramContainer height={svgHeight}>
      <SvgContainer
        height={svgHeight}
        width="15vw"
        style={{ border: "1px dashed white" }}
      >
        {links}
        {/* {path} */}
        <rect
          height={svgHeight}
          width={"15vw"}
          stroke="1px dashed white"
          fill="none"
        />
      </SvgContainer>
    </DendogramContainer>
  )
}

export default DendogramLayer1
