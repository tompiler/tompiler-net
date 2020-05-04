import React from "react"

import { useSpring, animated } from "react-spring"

import styled from "styled-components"

const SvgContainer = styled(animated.svg)`
  border-bottom: "3px solid white";
`

const DendogramContainer = styled("div")`
  display: inline-block;
  width: 20vw;
  height: 100vh;
`
const Dendogram = ({
  open,
  mobile,
  svgHeight,
  innerSvgHeight,
  lineLength,
  circleRadius,
  padding,
}) => {
  return (
    <DendogramContainer>
      <SvgContainer
        height={svgHeight}
        width="20vw"
        style={{ border: "1px dashed white" }}
      ></SvgContainer>
    </DendogramContainer>
  )
}

export default Dendogram
