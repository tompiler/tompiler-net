import styled from "styled-components"

const ProfilePicWrapper = styled("div")`
  margin: 2vh 0;
  display: block;
  width: 100%;
  height: auto;
  background: ${props => props.theme.color};
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  border: ${props => `5px solid ${props.theme.tompiler.border}`};
`

export { ProfilePicWrapper }
