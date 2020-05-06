import styled from "styled-components"

const SkillCategoryDendogramContainer = styled("div")`
  display: inline-block;
  width: 13vw;
  height: 89vh;
  margin-top: 3vh;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "68px")};
  left: ${props => (props.mobile ? "10%" : "25vw")};
`

export { SkillCategoryDendogramContainer }
