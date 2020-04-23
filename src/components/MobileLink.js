import React, { useState } from "react"
import transitionCellStyles from "./transitionCell.module.scss"
import { useLocation } from "@reach/router"
// import { useSpring, animated } from "react-spring"
import { Spring, animated } from "react-spring/renderprops"

import useMeasure from "./useMeasure"
import { SpringLink } from "./SpringLink"

const MobileLink = ({ to, mount }) => {
  const location = useLocation()
  const route = location.pathname.substr(1)

  const [open, toggle] = useState(false)
  const [bind, { width }] = useMeasure()
  //   const props = useSpring({
  //     width: open ? width : 0,
  //   })

  return (
    <Spring
      to={{
        opacity: open ? width : 0,
      }}
      config={{
        mass: 1,
        tension: 120,
        friction: 15,
      }}
    >
      {props => {
        return (
          <div className={transitionCellStyles.link}>
            <SpringLink
              className={transitionCellStyles.springLink}
              to={`/${to}`}
              exitLength={0.5}
              entryLength={0.5}
              entryDelay={0.5}
              entryState={to}
              exitState={location.pathname === "/" ? "tompiler" : route}
              onClick={() => toggle(!open)}
            >
              {to}
            </SpringLink>
            <div {...bind} className={transitionCellStyles.main}>
              <animated.div className="fill" style={props} />
            </div>
          </div>
        )
      }}
    </Spring>
  )
}

export default MobileLink
