import styled from "styled-components"

const SkillCategoryDendogramContainer = styled("div")`
  display: inline-block;
  width: 16%;
  height: 100%;
  margin-top: 3vh;
  position: absolute;
  top: 0%;
  left: 12%;
  /* border: 1px dashed lightpink; */

  @media ${props => props.theme.breakpoints.md} {
    top: 15%;
    left: 10%;
  }
`

export { SkillCategoryDendogramContainer }
