import React from "react"
import { animated } from "react-spring"

import styled from "styled-components"

import data from "./links"

const SkillCategoryContainer = styled("div")`
  display: inline-block;
  position: fixed;
  left: ${props => (props.mobile ? "10%" : "40vw")};
  height: ${props => props.height + "vh"};
  width: 8vw;
  border: 1px dashed lightpink;
`

const InnerSkillCategoryContainer = styled("div")`
  display: flex;
  justify-content: center;
  position: absolute;
  top: ${props => props.top + "vh"};
  height: ${props => props.height / 20 + "px"};
  width: 8vw;
  /* border: 1px dashed lightgrey; */
`

const Skill = styled(animated.div)`
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-size: 1rem;
`

const SkillCategory = ({
  open,
  mobile,
  svgHeight,
  innerSvgHeight,
  lineLength,
  circleRadius,
  padding,
}) => {
  var skills = []
  const skillCategories = Object.values(data.skillCategories)
  skillCategories.forEach(skillCategory => {
    skills.push(
      <InnerSkillCategoryContainer height={svgHeight} top={skillCategory.vh}>
        <Skill style={{ opacity: 1 }}>{skillCategory.name}</Skill>
      </InnerSkillCategoryContainer>
    )
  })

  return (
    <SkillCategoryContainer height={svgHeight}>
      {skills}
      {/* <InnerSkillCategoryContainer height={svgHeight} top={5}>
        <Skill style={{ opacity: 1 }}>Cloud Services</Skill>
      </InnerSkillCategoryContainer>
      <InnerSkillCategoryContainer height={svgHeight} top={20}>
        <Skill style={{ opacity: 1 }}>Python</Skill>
      </InnerSkillCategoryContainer>
      <InnerSkillCategoryContainer height={svgHeight} top={85}>
        <Skill style={{ opacity: 1 }}>Web Development</Skill>
      </InnerSkillCategoryContainer> */}
    </SkillCategoryContainer>
  )
}

export default SkillCategory
