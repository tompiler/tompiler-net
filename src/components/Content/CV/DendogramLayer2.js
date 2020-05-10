import styled from "styled-components"

const SkillItemDendogramContainer = styled("div")`
  display: inline-block;
  width: 14vw;
  height: 89vh;
  margin-top: 3vh;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "55px")};
  left: ${props => (props.mobile ? "10%" : "45vw")};
  /* border: 1px dashed lightpink; */
`

export { SkillItemDendogramContainer }
