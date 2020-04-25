import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import transitionCellStyles from "./transitionCell.module.scss"
import useWindowSize from "../useWindowSize"

const SpringBar = ({ mount, entry, to, location, barColour }) => {
  const windowSize = useWindowSize()

  const props = useSpring({
    from: { width: 0 },
    to: {
      width:
        mount &&
        entry.state.entryState === undefined &&
        location.pathname.substr(1) === to
          ? 40
          : mount && entry.state.entryState === to
          ? 40
          : 0,
    },
    config: {
      //   duration: 1000,
      mass: 1,
      tension: 450,
      friction: 55,
    },
  })

  return (
    <div
      className={
        windowSize.width > 650
          ? transitionCellStyles.barContainer
          : transitionCellStyles.barContainerMobile
      }
    >
      <animated.div
        className={
          windowSize.width > 650
            ? transitionCellStyles.bar
            : transitionCellStyles.barMobile
        }
        style={{
          width: props.width.interpolate(x => x + "px"),
          height: "3px",
          background: `rgba(${barColour.red},${barColour.green},${barColour.blue},${barColour.a})`,
        }}
      ></animated.div>
    </div>
  )
}

export default SpringBar
