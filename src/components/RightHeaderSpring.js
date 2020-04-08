import React from "react"
import { Spring, config } from "react-spring/renderprops"
import { TransitionState } from "gatsby-plugin-transition-link"
import layoutStyles from "./layout.module.scss"

const RightHeaderSpring = ({ pathname }) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      const mount = ["entering", "entered"].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length
      // console.log(transitionStatus, mount, exit, entry)

      return (
        <Spring
          to={{
            opacity: mount ? 1 : 0,
          }}
          config={{
            mass: 20,
            tension: 200,
            friction: 40,
          }}
        >
          {props => (
            <div className={layoutStyles.title} style={props}>
              {pathname}
            </div>
          )}
        </Spring>
      )
    }}
  </TransitionState>
)

export { RightHeaderSpring }
