import { animated } from "react-spring"
import styled from "styled-components"

const SkillCategoryContainer = styled("div")`
  display: inline-block;
  position: fixed;
  left: ${props => (props.mobile ? "10%" : "42vw")};
  height: ${props => props.height + "vh"};
  width: 4vw;
  /* border: 1px dashed lightpink; */
`

const InnerSkillCategoryContainer = styled("div")`
  display: flex;
  justify-content: center;
  position: absolute;
  top: ${props => props.top + "vh"};
  height: ${props => props.height / 20 + "px"};
  width: 4vw;
  text-align: center;
  /* border: 1px dashed lightgrey; */
`

const SkillCategory = styled(animated.div)`
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-size: 1rem;
  font-weight: ${props => (props.hover === "true" ? 500 : 400)};
  color: ${props => (props.hover === "true" ? "#fafafa" : props.theme.color)};
`

export { SkillCategoryContainer, InnerSkillCategoryContainer, SkillCategory }
