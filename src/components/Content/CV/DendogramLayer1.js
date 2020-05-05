import styled from "styled-components"

const DendogramContainer = styled("div")`
  display: inline-block;
  width: 15vw;
  height: ${props => props.height + "vh"};
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "80px")};
  left: ${props => (props.mobile ? "10%" : "25vw")};
`

export { DendogramContainer }
