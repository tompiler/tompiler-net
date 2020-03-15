import React from "react"
import cellStyles from "./cell.module.scss"
import { isArray } from "util"

const Cell = ({
  heading,
  text,
  position,
  colour,
  onMouseEnter,
  onMouseLeave,
  routeHandler,
}) => {
  return (
    <div
      className={cellStyles.cell}
      style={{
        left:
          heading.direction == "across"
            ? heading.left + position * 2.5 + "vw"
            : heading.left + "vw",
        top:
          heading.direction == "down"
            ? heading.top + position * 6.2 + "vh"
            : heading.top + "vh",
        backgroundColor: colour,
      }}
      onMouseEnter={() => onMouseEnter(heading.word)}
      onMouseLeave={() => onMouseLeave(heading.word)}
      onClick={() => routeHandler(heading.word)}
    >
      {text}
    </div>
  )
}

export default Cell
