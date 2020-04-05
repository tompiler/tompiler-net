import React from "react"
import { Spring, Transition } from "react-spring/renderprops"
import { TransitionState } from "gatsby-plugin-transition-link"
import layoutStyles from "./layout.module.scss"

const MySpring = ({ text }) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      const mount = ["entering", "entered"].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length
      // console.log(transitionStatus, mount, exit, entry)

      return (
        <Spring
          from={{ opacity: mount ? 1 : 0 }}
          to={{
            // transform: `translateY(${mount ? 0 : "100px"})`,
            opacity: mount ? 1 : 0,
          }}
          config={{
            duration: seconds * 1000,
          }}
        >
          {props => <div style={props}>{text}</div>}
        </Spring>
      )
    }}
  </TransitionState>
)

export { MySpring }
