import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import transitionCellStyles from "./transitionCell.module.scss"
import useMeasure from "./useMeasure"

const SpringBar = ({ mount, transitionStatus }) => {
  const props = useSpring({
    from: { width: 0 },
    to: {
      width: mount ? 120 : 0,
    },
    config: {
      //   duration: 1000,
      mass: 1,
      tension: 450,
      friction: 55,
    },
  })

  //   console.log(props.width.value)
  return (
    // <div {...bind} className={transitionCellStyles.main}>
    <animated.div
      //   className={transitionCellStyles.main}
      style={{
        margin: "2vh 0",
        width: props.width.interpolate(x => x + "px"),
        height: "5px",
        background: "black",
        // opacity: props.opacity,
      }}
    ></animated.div>
    // </div>
  )
}

export default SpringBar
