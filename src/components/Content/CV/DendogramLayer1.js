import styled from "styled-components"

const SkillCategoryDendogramContainer = styled("div")`
  display: inline-block;
  width: 14vw;
  height: 89vh;
  margin-top: 3vh;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "50px")};
  left: ${props => (props.mobile ? "10%" : "24vw")};
  /* border: 1px dashed lightpink; */
`

export { SkillCategoryDendogramContainer }
