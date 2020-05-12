import styled from "styled-components"

const ProfilePicWrapper = styled("div")`
  /* position: relative; */
  margin: 2vh 0;
  display: block;
  /* position: absolute; */
  /* margin: 0 auto; */
  /* left: 0; */
  /* top: 20vh; */
  width: 100%;
  height: auto;
  /* height: 100%; */
  /* line-height: 1.6; */
  /* background: red; */

  background: ${props => props.theme.color};
  border-radius: 5px;
  /* background-image: url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40); */
  background-size: cover;
  background-position: center center;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
  /* transition: box-shadow 0.5s; */
  /* will-change: transform; */
  border: ${props => `5px solid ${props.theme.tompiler.border}`};
`

export { ProfilePicWrapper }
