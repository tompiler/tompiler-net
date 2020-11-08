import styled from "styled-components"

const ProfilePicWrapper = styled("div")`
  margin: 1vh auto;
  display: block;
  width: 75%;
  height: auto;
  background: ${props => props.theme.color};
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  border: ${props => `5px solid ${props.theme.tompiler.border}`};

  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
  }
`

export { ProfilePicWrapper }
