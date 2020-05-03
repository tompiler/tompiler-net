import React from "react"
import { useSpring, animated } from "react-spring"

import styled from "styled-components"

const ContentContainer = styled("div")`
  display: block;
  position: fixed;
  top: ${props => (props.mobile ? "105px" : "80px")};
  left: ${props => (props.mobile ? "10%" : "15%")};
  width: ${props => (props.mobile ? "80%" : "80%")};
  height: 100vh;
  text-align: center;
`

const CV = ({ mount, transitionStatus, exit, entry, location, children }) => {
  const route = location.pathname.substr(1)
  const props = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: mount && route === "cv" ? 1 : 0,
    },
    config: {
      //   duration: 1000,
      mass: 1,
      tension: 120,
      friction: 15,
    },
  })

  return (
    <ContentContainer>
      <animated.div style={{ fontSize: "43px", opacity: props.opacity }}>
        <div>Hello</div>
      </animated.div>
    </ContentContainer>
  )
}

export default CV
