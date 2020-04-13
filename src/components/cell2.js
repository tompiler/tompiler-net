import React from "react"

import { SpringLink } from "./SpringLink"
import { animated } from "react-spring"
import cellStyles from "./cell.module.scss"

const Cell = props => {
  // const props
  // console.log(props.to, props.setClickedWord)
  return (
    <>
      <button
        style={{ ...props }}
        className={cellStyles.button}
        onClick={() => {
          // console.log("Clicked:", props.to)
          props.setClickedWord(props.to)
        }}
      >
        <animated.div
          style={{
            backgroundColor: props.backgroundColor,
            border: `1px solid ${props.backgroundColor}`,
            borderRadius: "3px",
            boxShadow: "2px 3px 2px rgba(83, 83, 83)",
          }}
          onMouseEnter={() => {
            props.setHoverElement(props.to)
            props.setHover({ alpha: 0.7 })
            // console.log(props.clickedWord, props.to)
          }}
          onMouseLeave={() => {
            // console.log(props.clickedWord)
            props.setHoverElement(props.hoverElement)
            props.setHover({
              alpha: 0,
            })
            // console.log(props.clickedWord, props.to)
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
