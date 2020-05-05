import { animated } from "react-spring"
import styled from "styled-components"

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
  text-align: center;
  /* border: 1px dashed lightgrey; */
`

const Skill = styled(animated.div)`
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-size: 1rem;
`

export { SkillCategoryContainer, InnerSkillCategoryContainer, Skill }
