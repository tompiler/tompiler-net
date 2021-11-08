import { animated } from "react-spring"
import styled from "styled-components"

const SkillCategoryContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 28%;
  height: 100%;
  width: 7%;
  /* border: 1px dashed lightpink; */

  @media ${props => props.theme.breakpoints.md} {
    left: 10%;
  }
`

const InnerSkillCategoryContainer = styled("div")`
  display: flex;
  justify-content: center;
  position: absolute;
  top: ${props => props.top + "vh"};
  align-items: center;
  width: 100%;
  text-align: center;
  /* border: 1px dashed lightgrey; */
`

const SkillCategory = styled(animated.div)`
  display: flex;
  margin: 0 1vw;
  align-items: center;
  font-family: "Open Sans";
  font-size: 0.95em;
  font-weight: ${props =>
    props.hover === "true" || props.selected ? 800 : 300};
  color: ${props =>
    props.hover === "true" || props.selected
      ? props.theme.cv.hover
      : props.theme.cv.color};
`

export { SkillCategoryContainer, InnerSkillCategoryContainer, SkillCategory }
