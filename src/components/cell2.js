import React from "react"

import { SpringLink } from "./SpringLink"
import { animated } from "react-spring"
import cellStyles from "./cell.module.scss"

const Cell = props => {
  // const props
  return (
    <>
      <button style={{ ...props }} className={cellStyles.button}>
        <animated.div
          style={{
            backgroundColor: props.backgroundColor,
            border: `1px solid ${props.backgroundColor}`,
            borderRadius: "3px",
            boxShadow: "2px 3px 2px rgba(83, 83, 83)",
            // props.alpha.interpolate(v => {
            //   return `2px 3px 2px rgba(83, 83, 83, ${v})`
            // }),
            //
          }}
          onMouseEnter={() => {
            props.setHoverElement(props.to)
            props.setHover({ alpha: 0.7 })
          }}
          onMouseLeave={() => {
            props.setHoverElement(null)
            props.setHover({
              alpha: 0,
            })
          }}
        >
          <div>
            <SpringLink className={cellStyles.springLink} to={`/${props.to}`}>
              {props.linkText}
            </SpringLink>
          </div>
        </animated.div>
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
