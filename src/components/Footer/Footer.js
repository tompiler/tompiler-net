import React from "react"

import styled from "styled-components"

const FooterContainer = styled("div")`
  position: absolute;
  top: 97vh;
  /* left: 2px; */
  /* left: 1vw; */
  width: 100%;
  font-size: 0.6em;
  text-align: center;

  @media ${props => props.theme.breakpoints.desktopmd} {
    top: 96vh;
  }

  @media ${props => props.theme.breakpoints.desktopsm} {
    top: 96vh;
    text-align: left;
  }

  @media ${props => props.theme.breakpoints.lg} {
    top: 96vh;
    text-align: left;
  }

  @media ${props => props.theme.breakpoints.md} {
    display: none;
    text-align: left;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>Thomas Lynch </div>
      <div>© Copyright 2021. </div>
    </FooterContainer>
  )
}

export default Footer
