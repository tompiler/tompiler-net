import React from "react"
import cellStyles from "./cell.module.scss"
import { Spring, animated, interpolate, config } from "react-spring/renderprops"
import { SpringLink } from "./SpringLink"

const Cell = ({ heading, text, position, colour, route }) => {
  // console.log(colour, heading.colour.substr(0, 15))

  let alpha
  if (heading.word === route) {
    alpha = heading.colour.a
  } else if (heading.word2 === route) {
    alpha = heading.colour2.a
  } else {
    alpha = 1
  }

  return (
    <Spring native from={{ o: 0 }} to={{ o: alpha }} config={config.default}>
      {({ o }) => (
        <animated.div
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
            // border: colour === "white" ? "1px solid #cccccc" : "none",
            backgroundColor:
              heading.word === route
                ? o.interpolate(
                    o =>
                      `rgba(${heading.colour.red}, ${heading.colour.green}, ${heading.colour.blue}, ${o})`
                  )
                : heading.word2 === route
                ? o.interpolate(
                    o =>
                      `rgba(${heading.colour2.red}, ${heading.colour2.green}, ${heading.colour2.blue}, ${o})`
                  )
                : "white",
            // transition: "background-color 0.3s linear",
          }}
        >
          {/* <button
        className={cellStyles.button}
        style={{
          backgroundColor: colour,
          border: colour === "white" ? "1px solid #cccccc" : "none",
        }}
        onMouseEnter={() => setHovered(heading.word)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setClicked(null)}
        onKeyDown={() => setClicked(null)}
      > */}
          <SpringLink
            className={cellStyles.springLink}
            to={`/${heading.word}`}
            exitLength={1}
            entryLength={1}
          >
            {text}
          </SpringLink>
          {/* </button> */}
        </animated.div>
      )}
    </Spring>
  )
}

export default Cell
