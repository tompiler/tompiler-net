import React from "react"

import styled from "styled-components"

const FooterContainer = styled("div")`
  position: absolute;
  top: 95vh;
  /* left: 2px; */
  left: 1vw;
  width: 100%;
  font-size: 0.8em;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>Thomas Lynch </div>
      <div>© Copyright 2020. </div>
    </FooterContainer>
  )
}

export default Footer
