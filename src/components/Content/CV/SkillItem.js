import React from "react"
import { animated } from "react-spring"

import styled from "styled-components"

const SkillItemContainer = styled("div")`
  display: inline-block;
  /* position: relative; */
  left: ${props => (props.mobile ? "10%" : "20%")};
  height: ${props => props.height + "px"};
  width: 10vw;
  border: 1px dashed lightpink;
`

const InnerSkillItemContainer = styled("div")`
  display: flex;
  justify-content: center;
  position: absolute;
  top: ${props => props.top + "%"};
  height: ${props => props.height / 20 + "px"};
  width: 10vw;
  /* border: 1px dashed lightgrey; */
`

const Skill = styled(animated.div)`
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-size: 1rem;
`

const SkillItems = ({
  open,
  mobile,
  svgHeight,
  innerSvgHeight,
  lineLength,
  circleRadius,
  padding,
}) => {
  return (
    <SkillItemContainer height={svgHeight}>
      <InnerSkillItemContainer height={svgHeight} top={5}>
        <Skill style={{ opacity: 1 }}>EC2</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={8}>
        <Skill style={{ opacity: 1 }}>EMR</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={11}>
        <Skill style={{ opacity: 1 }}>Glue</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={18}>
        <Skill style={{ opacity: 1 }}>Pandas</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={21}>
        <Skill style={{ opacity: 1 }}>NumPy</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={24}>
        <Skill style={{ opacity: 1 }}>matplotlib</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={29}>
        <Skill style={{ opacity: 1 }}>sklearn</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={32}>
        <Skill style={{ opacity: 1 }}>Selenium</Skill>
      </InnerSkillItemContainer>
      <InnerSkillItemContainer height={svgHeight} top={35}>
        <Skill style={{ opacity: 1 }}>ArcGIS</Skill>
      </InnerSkillItemContainer>
    </SkillItemContainer>
  )
}

export default SkillItems
