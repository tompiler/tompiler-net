import { animated } from "react-spring"

import styled from "styled-components"

const SkillItemContainer = styled("div")`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 51%;
  height: 100%;
  width: 8%;
  /* border: 1px dashed lightpink; */

  @media ${props => props.theme.breakpoints.md} {
    left: 10%;
  }
`

const InnerSkillItemContainer = styled("div")`
  display: flex;
  justify-content: left;
  position: absolute;
  top: ${props => props.top + "vh"};
  margin-left: 5%;
  width: 95%;
  text-align: center;
  /* border: 1px dashed black; */
`

const SkillItem = styled(animated.div)`
  display: flex;
  font-family: "Open Sans";
  font-size: 0.87rem;
  font-weight: ${props =>
    props.hover === "true" || props.selected === "true" ? 600 : 400};
  color: ${props =>
    props.hover === "true" || props.selected === "true"
      ? props.theme.cv.hover
      : props.theme.cv.color};
`

export { SkillItemContainer, InnerSkillItemContainer, SkillItem }
