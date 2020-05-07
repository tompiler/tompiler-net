import { animated } from "react-spring"
import styled from "styled-components"

const SkillCategoryContainer = styled("div")`
  display: inline-block;
  position: fixed;
  left: ${props => (props.mobile ? "10%" : "38vw")};
  height: 92vh;
  width: 6vw;
  /* border: 1px dashed lightpink; */
`

const InnerSkillCategoryContainer = styled("div")`
  display: flex;
  justify-content: center;
  position: absolute;
  top: ${props => props.top + "vh"};
  /* height: 5vh; */
  align-items: center;

  width: 6vw;
  text-align: center;
  /* border: 1px dashed lightgrey; */
`

const SkillCategory = styled(animated.div)`
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-size: 0.95rem;
  font-weight: ${props =>
    props.hover === "true" || props.selected === "true" ? 600 : 400};
  color: ${props =>
    props.hover === "true" || props.selected === "true"
      ? props.theme.cv.hover
      : props.theme.cv.color};
`

export { SkillCategoryContainer, InnerSkillCategoryContainer, SkillCategory }
