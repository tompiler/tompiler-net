import React from "react"
import { useSpring, animated } from "react-spring"

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
    <animated.div style={{ fontSize: "43px", opacity: props.opacity }}>
      {children}
    </animated.div>
  )
}

export default CV
