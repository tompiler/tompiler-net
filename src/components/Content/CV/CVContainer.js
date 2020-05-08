import React from "react"
import { useSpring, animated } from "react-spring"

const CVContainer = ({ mount, location, children }) => {
  const route = location.pathname.substr(1)

  // spring for page transitions
  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: mount && route === "cv" ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 120,
      friction: 15,
    },
  })

  return (
    <animated.div style={{ opacity: opacityProps.opacity }}>
      {children}
    </animated.div>
  )
}

export default CVContainer
