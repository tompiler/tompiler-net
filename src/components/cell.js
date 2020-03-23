import React from "react"
import cellStyles from "./cell.module.scss"

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
          heading.direction === "across"
            ? heading.left + position * 2.5 + "vw"
            : heading.left + "vw",
        top:
          heading.direction === "down"
            ? heading.top + position * 6.2 + "vh"
            : heading.top + "vh",
      }}
    >
      <button
        className={cellStyles.button}
        style={{
          backgroundColor: colour,
          border: colour === "white" ? "1px solid #cccccc" : "none",
        }}
        onMouseEnter={() => onMouseEnter(heading.word)}
        onMouseLeave={() => onMouseLeave(heading.word)}
        onClick={() => routeHandler(heading.word)}
        onKeyDown={() => routeHandler(heading.word)}
      >
        {text}
      </button>
    </div>
  )
}

export default Cell
