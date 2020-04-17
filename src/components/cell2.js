import React from "react"

import { SpringLink } from "./SpringLink"
import { animated, useSpring } from "react-spring"
import cellStyles from "./cell.module.scss"
import { Spring } from "react-spring/renderprops"

const Cell = props => {
  const mount = ["entering", "entered"].includes(props.transitionStatus)

  return (
    <>
      <button
        style={{ ...props }}
        className={cellStyles.button}
        onClick={() => {
          props.setFadeOut({ fadeOut: 0 })
          props.setFadeIn({ fadeOut: 0.7 })
        }}
      >
        <Spring
          from={{ v: 0 }}
          to={{
            v: mount ? 0.7 : 0,
          }}
          config={{
            // duration: 3000,
            mass: 3,
            tension: 400,
            friction: 80,
          }}
        >
          {propss => {
            return (
              <div
                style={{
                  backgroundColor:
                    props.to === props.route
                      ? `rgba(${props.activeColour.red}, ${props.activeColour.green}, ${props.activeColour.blue}, ${propss.v})`
                      : "white",
                  border: `1px solid ${props.backgroundColor}`,
                  borderRadius: "3px",
                  boxShadow: "2px 3px 2px rgba(83, 83, 83)",
                }}
                onMouseEnter={() => {
                  props.setHoverElement(props.to)
                  props.setHover({ alpha: 0.7 })
                }}
                onMouseLeave={() => {
                  props.setHoverElement(props.hoverElement)
                  props.setHover({
                    alpha: 0,
                  })
                }}
              >
                <div>
                  <SpringLink
                    className={cellStyles.springLink}
                    to={`/${props.to}`}
                    entryState={props.to}
                    exitState={props.to}
                  >
                    {props.linkText}
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
                props.hoverElement === props.to
                  ? props.alpha.interpolate(v => {
                      return `rgba(${props.linkText === "b" ? 255 : 0}, ${
                        props.linkText === "b" ? 0 : 128
                      }, ${props.linkText === "b" ? 0 : 1}, ${v})`
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
