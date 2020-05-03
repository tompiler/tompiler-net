import React, { useState } from "react"
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

  const [open, toggle] = useState(false)

  const opacityLineProps = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: open ? 1 : 0,
    },
    config: {
      //   duration: 1000,
      mass: 1,
      tension: 120,
      friction: 15,
    },
  })
  const lineProps = useSpring({ to: { y: open ? 500 : 10 }, from: { y: 10 } })

  const opacityProps = useSpring({
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
      <button onClick={() => toggle(!open)}>TOGGLE ME</button>
      <animated.div style={{ fontSize: "43px", opacity: opacityProps.opacity }}>
        <div>Hello</div>
        <animated.svg
          height="600"
          width="100"
          // strokeDashoffset={lineProps.x}
        >
          <g>
            <rect height="600" width="100" fill="#636774"></rect>
            <animated.line
              x1="50"
              y1="10"
              x2="50"
              y2={lineProps.y}
              stroke="#d4cac1"
              strokeWidth="2"
              // style={{ opacity: opacityLineProps.opacity }}
            />
          </g>
        </animated.svg>
      </animated.div>
    </ContentContainer>
  )
}

export default CV
