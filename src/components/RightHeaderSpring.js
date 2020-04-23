import React, { useState } from "react"
import { Spring } from "react-spring/renderprops"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"
import layoutStyles from "./layout.module.scss"

const RightHeaderSpring = ({ children, name }) => {
  const location = useLocation()
  const route = location.pathname.substr(1)

  const [firstURL, setFirstURL] = useState(
    location.pathname === "/" ? "tompiler" : location.pathname.substr(1)
  )

  return (
    <TransitionState>
      {({ transitionStatus, exit, entry }) => {
        const mount = ["entering", "entered"].includes(transitionStatus)

        const header =
          location.pathname === "/" &&
          exit.state.exitState === undefined &&
          entry.state.entryState === undefined
            ? "tompiler"
            : entry.state.entryState === undefined //&&
            ? firstURL
            : entry.state.entryState

        return (
          <Spring
            to={{
              opacity: ["exiting", "exited"].includes(transitionStatus) ? 0 : 1,
            }}
            config={{
              mass: 1,
              tension: 120,
              friction: 15,
            }}
          >
            {props => {
              return (
                <div className={layoutStyles.containerRightNested}>
                  <div className={layoutStyles.headerPositionFixed}>
                    <div className={layoutStyles.headerContainer}>
                      <div
                        className={layoutStyles.title}
                        style={{
                          opacity: props.opacity,
                        }}
                      >
                        {header}
                      </div>
                    </div>
                    <div
                      className={layoutStyles.contentContainer}
                      style={{
                        opacity: props.opacity,
                      }}
                    >
                      {children}
                    </div>
                  </div>
                </div>
              )
            }}
          </Spring>
        )
      }}
    </TransitionState>
  )
}

export { RightHeaderSpring }
