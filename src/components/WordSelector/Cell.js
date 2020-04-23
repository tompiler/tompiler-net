import React from "react"
import { SpringLink } from "../SpringLink"
import { animated } from "react-spring"
import cellStyles from "./cell.module.scss"
import { Spring } from "react-spring/renderprops"
import { useLocation } from "@reach/router"

const Cell = ({
  linkText,
  word,
  word2,
  route,
  left,
  top,
  activeColour,
  activeColour2,
  transitionStatus,
  setHoverAlpha,
  alpha,
  setHoverElement,
  hoverElement,
}) => {
  const mount = ["entering", "entered"].includes(transitionStatus)
  const route2 = word2 === route ? true : false

  // const location = useLocation()

  return (
    <>
      <Spring
        from={{ v: 0 }}
        to={{
          v: mount && route2 ? activeColour2.a : mount ? activeColour.a : 0,
        }}
        config={{
          mass: 1,
          tension: 300,
          friction: 40,
        }}
      >
        {props => {
          return (
            <animated.button
              style={{
                left: left,
                top: top,
              }}
              className={cellStyles.button}
              onMouseEnter={() => {
                setHoverElement(word)
                setHoverAlpha({ alpha: 0.9 })
              }}
              onMouseLeave={() => {
                setHoverElement(hoverElement)
                setHoverAlpha({
                  alpha: 0,
                })
              }}
            >
              <animated.div
                style={{
                  width: "2vw",
                  height: "5.7vh",
                  backgroundColor:
                    word === route
                      ? `rgba(${activeColour.red}, ${activeColour.green}, ${activeColour.blue}, ${props.v})`
                      : word2 === route
                      ? `rgba(${activeColour2.red}, ${activeColour2.green}, ${activeColour2.blue}, ${props.v})`
                      : "white",
                  borderRadius: "3px",
                  boxShadow: "2px 3px 1px rgba(83, 83, 83)",
                }}
              >
                <div>
                  <SpringLink
                    className={cellStyles.springLink}
                    to={`/${word}`}
                    exitLength={0.8}
                    entryLength={0.8}
                    entryDelay={0.8}
                    entryState={word}
                    exitState={word}
                  >
                    {linkText}
                  </SpringLink>
                </div>
              </animated.div>

              {/* <div className={cellStyles.glanceParent}>
          <animated.div
            className={cellStyles.glance}
            style={
              {
                // zIndex: 3,
                // backgroundColor:
                //   hoverElement === word || hoverElement === word2
                //     ? alpha.interpolate(v => {
                //         return `rgba(0,0,0,${v})`
                //       })
                //     : "",
              }
            }
          />
        </div> */}
            </animated.button>
          )
        }}
      </Spring>
    </>
  )
}

export default Cell
