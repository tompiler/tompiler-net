import React from "react"
import { useSpring, animated } from "react-spring"

import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

const ContentContainer = styled(animated.div)`
  display: block;
  text-align: center;
  position: absolute;
  height: ${props => (props.mobile ? "82vh" : "93vh")};
  top: ${props => (props.mobile ? "10vh" : "5vh")};
  left: ${props => (props.mobile ? "0vw" : "12vw")};
  width: ${props => (props.mobile ? "100vw" : "100vw")};
  z-index: 0;
  display: ${props => (props.mobile ? "block" : "flex")};
  align-items: ${props => (props.mobile ? "stretch" : "center")};
`

const Container = styled("div")`
  display: block;
  background-color: ${props => props.color};
  height: 50vh;
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
      {/* <Container color="blue" />

      <Container color="green" />
      <Container color="red" /> */}

      {children}
    </ContentContainer>
  )
}

export default CVContainer
