import React from "react"
import { Spring } from "react-spring/renderprops"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"
import contentStyles from "./content.module.scss"
import useWindowSize from "../useWindowSize"

const Content = ({ children, name }) => {
  const location = useLocation()
  const route = location.pathname.substr(1)
  const windowSize = useWindowSize()

  // const [firstURL, setFirstURL] = useState(
  //   location.pathname === "/" ? "tompiler" : location.pathname.substr(1)
  // )

  const firstURL = location.pathname === "/" ? "tompiler" : route

  return (
    <TransitionState>
      {({ mount, transitionStatus, exit, entry }) => {
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
              opacity: mount ? 1 : 0,
            }}
            config={{
              mass: 1,
              tension: 120,
              friction: 15,
            }}
          >
            {props => {
              return (
                <>
                  <div
                    className={
                      windowSize.width > 650
                        ? contentStyles.headerContainer
                        : contentStyles.headerContainerMobile
                    }
                  >
                    {windowSize.width > 650 && (
                      <div
                        className={contentStyles.title}
                        style={{
                          opacity: props.opacity,
                        }}
                      >
                        {header}
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      className={contentStyles.contentContainer}
                      style={{
                        opacity: props.opacity,
                      }}
                    >
                      {children}
                    </div>
                  </div>
                </>
              )
            }}
          </Spring>
        )
      }}
    </TransitionState>
  )
}

export { Content }
