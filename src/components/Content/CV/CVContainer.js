import React from "react"
import { useSpring, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

const ContentContainer = styled(animated.div)`
  display: block;
  text-align: center;
  position: absolute;
  height: 93vh;
  top: 5vh;
  left: 12vw;
  width: 100vw;
  z-index: 0;
  display: flex;
  /* align-items: ${props => (props.mobile ? "stretch" : "center")}; */

  @media ${props => props.theme.breakpoints.md} {
    height: 85vh;
    top: 14vh;
    left: 0vw;
    display: block;
  }
`

const CVContainer = ({ mount, location, children }) => {
  const route = location.pathname.substr(1)

  const windowSize = useWindowSize()
  const mobile = windowSize.width < 650 ? true : false
  // spring for page transitions
  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: mount && route === "cv" ? 1 : 0
    },
    config: {
      mass: 1,
      tension: 120,
      friction: 15
    }
  })

  return (
    <ContentContainer
      mobile={mobile ? 1 : 0}
      style={{ opacity: opacityProps.opacity }}
    >
      {children}
    </ContentContainer>
  )
}

export default CVContainer
