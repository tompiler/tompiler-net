import React from "react"

import { useSpring, animated } from "react-spring"

import styled from "styled-components"

const DendogramContainer = styled("div")`
  display: inline-block;
  width: 15vw;
  height: ${props => props.height + "vh"};
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "80px")};
  left: ${props => (props.mobile ? "10%" : "48vw")};
`

const SvgContainer = styled(animated.svg)`
  border-bottom: "3px solid white";
  height: 100%;
`

const DendogramLayer2 = ({
  open,
  mobile,
  svgHeight,
  innerSvgHeight,
  lineLength,
  circleRadius,
  padding,
}) => {
  const startPoint = [0, innerSvgHeight - lineLength * 5 - circleRadius * 5]
  const controlPoint = [300, 175]
  const endPoint = [25, 325]
  const path = (
    <path
      d={`
      M ${startPoint}
      Q ${controlPoint} ${endPoint}
    `}
      fill="none"
      stroke="hotpink"
      strokeWidth={5}
    />
  )
  return (
    <DendogramContainer height={svgHeight}>
      <SvgContainer
        height={svgHeight}
        width="15vw"
        style={{ border: "1px dashed white" }}
      >
        {path}
      </SvgContainer>
    </DendogramContainer>
  )
}

export default DendogramLayer2
