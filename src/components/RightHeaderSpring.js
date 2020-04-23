import React from "react"
import { Spring } from "react-spring/renderprops"
import { TransitionState } from "gatsby-plugin-transition-link"
import layoutStyles from "./layout.module.scss"

const RightHeaderSpring = ({ pathName, children }) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      const mount = ["entering", "entered"].includes(transitionStatus)

      return (
        <Spring
          to={{
            opacity: mount ? 1 : 0,
          }}
          config={{
            // duration: 3000,
            mass: 1,
            tension: 120,
            friction: 15,
          }}
        >
          {props => {
            // console.log("Hello")
            return (
              <div className={layoutStyles.containerRightNested}>
                <div className={layoutStyles.headerPositionFixed}>
                  <div className={layoutStyles.headerContainer}>
                    <div
                      className={layoutStyles.title}
                      style={{
                        opacity: props.opacity,
                        // fontSize:
                        //   `${props.opacity < 0.2 ? 2 : props.opacity * 2.4}` + "vw",
                      }}
                    >
                      {pathName}
                    </div>
                  </div>
                  <div
                    className={layoutStyles.contentContainer}
                    style={{
                      opacity: props.opacity,
                      // fontSize:
                      //   `${props.opacity < 0.2 ? 2 : props.opacity * 2.4}` + "vw",
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

export { RightHeaderSpring }
