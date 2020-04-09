import React, { useEffect } from "react"
import cellStyles from "./cell.module.scss"
import { Spring, animated, interpolate, config } from "react-spring/renderprops"
import { SpringLink } from "./SpringLink"
import useHover from "./useHover"

const Cell = ({
  heading,
  text,
  position,
  colour,
  route,
  hoverWord,
  setHoverWord,
}) => {
  // console.log(colour, heading.colour.substr(0, 15))

  let alpha
  if (heading.word === route) {
    alpha = heading.colour.a
  } else if (heading.word2 === route) {
    alpha = heading.colour2.a
  } else {
    alpha = 1
  }

  // const [hoverRef, isHovered] = useHover()

  // setHoverWord(heading.word)

  //   return (
  //     <div ref={hoverRef}>
  //       {isHovered ? '😁' : '☹️'}
  //     </div>
  //   );
  // }

  return (
    <Spring
      native
      from={{
        o: 1,
      }}
      to={{
        o: 1,
      }}
      // config={{ duration: hoverWord ? 250 : 0 }}
    >
      {({ o }) => (
        <animated.div
          className={cellStyles.cell}
          onMouseEnter={() => setHoverWord(heading.word)}
          onMouseLeave={() => setHoverWord(null)}
          style={{
            left:
              heading.direction === "across"
                ? heading.left + position * 2.5 + "vw"
                : heading.left + "vw",
            top:
              heading.direction === "down"
                ? heading.top + position * 6.2 + "vh"
                : heading.top + "vh",
            backgroundColor:
              hoverWord === heading.word
                ? `rgba(${heading.colour.red}, ${heading.colour.green}, ${heading.colour.blue}, ${heading.colour.a}`
                : hoverWord === heading.word2
                ? `rgba(${heading.colour2.red}, ${heading.colour2.green}, ${heading.colour2.blue}, ${heading.colour2.a}`
                : heading.word === route
                ? `rgba(${heading.colour.red}, ${heading.colour.green}, ${heading.colour.blue}, ${heading.colour.a})`
                : // )
                heading.word2 === route //|| hoverWord === heading.word2
                ? // ? o.interpolate(
                  //     o =>
                  `rgba(${heading.colour2.red}, ${heading.colour2.green}, ${heading.colour2.blue}, ${heading.colour2.a})`
                : // )
                  "white",
            transition:
              heading.word === hoverWord || heading.word2 === hoverWord
                ? "background-color 300ms linear"
                : "none",
          }}
        >
          <SpringLink
            className={cellStyles.springLink}
            to={`/${heading.word}`}
            exitLength={1}
            entryLength={1}
          >
            {text}
          </SpringLink>
        </animated.div>
      )}
    </Spring>
  )
}

export default Cell
