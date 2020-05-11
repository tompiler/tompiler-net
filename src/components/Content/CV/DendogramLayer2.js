import styled from "styled-components"

const SkillItemDendogramContainer = styled("div")`
  display: inline-block;
  width: 16%;
  height: 97%;
  margin-top: 3vh;
  position: absolute;
  top: ${props => (props.mobile ? "15%" : "0%")};
  left: ${props => (props.mobile ? "10%" : "35%")};
  border: 1px dashed lightpink;
`

export { SkillItemDendogramContainer }
