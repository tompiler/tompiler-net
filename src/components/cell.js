import React from "react"
import { SpringLink } from "./SpringLink"
import { animated } from "react-spring"
import cellStyles from "./cell.module.scss"
import { Spring } from "react-spring/renderprops"

const Cell = ({
  linkText,
  word,
  route,
  left,
  top,
  activeColour,
  transitionStatus,
  setHoverAlpha,
  alpha,
  setHoverElement,
  hoverElement,
}) => {
  const mount = ["entering", "entered"].includes(transitionStatus)

  return (
    <>
      <button
        style={{ left: left, top: top }}
        className={cellStyles.button}
        onMouseEnter={() => {
          setHoverElement(word)
          setHoverAlpha({ alpha: 0.7 })
        }}
        onMouseLeave={() => {
          setHoverElement(hoverElement)
          setHoverAlpha({
            alpha: 0,
          })
        }}
      >
        <Spring
          from={{ v: 0 }}
          to={{
            v: mount ? 0.7 : 0,
          }}
          config={{
            mass: 3,
            tension: 400,
            friction: 80,
          }}
        >
          {props => {
            return (
              <div
                style={{
                  backgroundColor:
                    word === route
                      ? `rgba(${activeColour.red}, ${activeColour.green}, ${activeColour.blue}, ${props.v})`
                      : "white",
                  border:
                    word === route
                      ? `1px solid rgba(${activeColour.red}, ${
                          activeColour.green
                        }, ${activeColour.blue}, ${0.3}`
                      : "1px solid white",
                  borderRadius: "3px",
                  boxShadow: "2px 3px 1px rgba(83, 83, 83)",
                }}
              >
                <div>
                  <SpringLink
                    className={cellStyles.springLink}
                    to={`/${word}`}
                    entryLength={0.4}
                    exitLength={0.1}
                    entryDelay={0.05}
                    entryState={word}
                    exitState={word}
                  >
                    {linkText}
                  </SpringLink>
                </div>
              </div>
            )
          }}
        </Spring>
        <div className={cellStyles.glanceParent}>
          <animated.div
            className={cellStyles.glance}
            style={{
              zIndex: 3,
              backgroundColor:
                hoverElement === word
                  ? alpha.interpolate(v => {
                      return `rgba(0,0,0,${v})`
                    })
                  : "",
            }}
          />
        </div>
      </button>
    </>
  )
}

export default Cell
