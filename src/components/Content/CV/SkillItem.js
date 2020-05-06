import { animated } from "react-spring"

import styled from "styled-components"

const SkillItemContainer = styled("div")`
  display: inline-block;
  position: fixed;
  left: ${props => (props.mobile ? "10%" : "58vw")};
  height: 92vh;
  width: 8vw;
  /* border: 1px dashed lightpink; */
`

const InnerSkillItemContainer = styled("div")`
  display: flex;
  justify-content: left;
  position: absolute;
  top: ${props => props.top + "vh"};
  margin-left: 0.5vw;
  width: 8vw;
  text-align: center;
  /* border: 1px dashed black; */
`

const SkillItem = styled(animated.div)`
  display: flex;
  font-family: "Open Sans";
  font-size: 0.9rem;
  font-weight: ${props => (props.hover === "true" ? 600 : 400)};
  color: ${props =>
    props.hover === "true" ? props.theme.cv.hover : props.theme.cv.color};
`

export { SkillItemContainer, InnerSkillItemContainer, SkillItem }

// const SkillItems = ({
//   open,
//   mobile,
//   svgHeight,
//   innerSvgHeight,
//   lineLength,
//   circleRadius,
//   padding,
// }) => {
//   return (
//     <SkillItemContainer height={svgHeight}>
//       <InnerSkillItemContainer height={svgHeight} top={5}>
//         <Skill style={{ opacity: 1 }}>EC2</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={8}>
//         <Skill style={{ opacity: 1 }}>EMR</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={11}>
//         <Skill style={{ opacity: 1 }}>Glue</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={18}>
//         <Skill style={{ opacity: 1 }}>Pandas</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={21}>
//         <Skill style={{ opacity: 1 }}>NumPy</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={24}>
//         <Skill style={{ opacity: 1 }}>matplotlib</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={29}>
//         <Skill style={{ opacity: 1 }}>sklearn</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={32}>
//         <Skill style={{ opacity: 1 }}>Selenium</Skill>
//       </InnerSkillItemContainer>
//       <InnerSkillItemContainer height={svgHeight} top={35}>
//         <Skill style={{ opacity: 1 }}>ArcGIS</Skill>
//       </InnerSkillItemContainer>
//     </SkillItemContainer>
//   )
// }

// export default SkillItems
