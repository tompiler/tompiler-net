import React from "react"
import cellStyles from "./cell.module.scss"
// import {
//   Spring,
//   Transition,
//   animated,
//   interpolate,
//   config,
// } from "react-spring/renderprops"
import { SpringLink } from "./SpringLink"
// import useHover from "./useHover"
import { useSpring, animated } from "react-spring"

const Cell = ({ heading, text, position, colour, route }) => {
  // console.log(colour, heading.colour.substr(0, 15))

  // let alpha
  // if (heading.word === route) {
  //   alpha = heading.colour.a
  // } else if (heading.word2 === route) {
  //   alpha = heading.colour2.a
  // } else {
  //   alpha = 1
  // }

  // const [hoverRef, isHovered] = useHover()

  // setHoverWord(heading.word)

  //   return (
  //     <div ref={hoverRef}>
  //       {isHovered ? '😁' : '☹️'}
  //     </div>
  //   );
  // }

  const [{ backgroundColourA }, set] = useSpring(() => ({
    backgroundColourA: 0,
  }))

  const positions = {
    left:
      heading.direction === "across"
        ? heading.left + position * 2.5 + "vw"
        : heading.left + "vw",
    top:
      heading.direction === "down"
        ? heading.top + position * 6.2 + "vh"
        : heading.top + "vh",
  }

  const link = (
    <SpringLink
      className={cellStyles.springLink}
      to={`/${heading.word}`}
      exitLength={1}
      entryLength={1}
    >
      {text}
    </SpringLink>
  )

  return (
    <div
      className={cellStyles.button}
      style={{ ...positions }}
      onMouseEnter={() => set({ y: 100, backgroundColourA: heading.colour.a })}
      onMouseLeave={() => set({ y: -100, backgroundColourA: 0 })}
      role="button"
      tabIndex={0}
    >
      <div style={{ zIndex: 5, position: "relative" }}>
        <animated.span className={cellStyles.span}>{link}</animated.span>
      </div>
      <div style={{ position: "relative", zIndex: 3 }}>
        <animated.div
          style={{
            backgroundColor: backgroundColourA.interpolate(
              v =>
                `rgba(${heading.colour.red}, ${heading.colour.green}, ${heading.colour.blue}, ${v})`
            ),
          }}
          className={cellStyles.glance}
        />
      </div>
    </div>
    // <Spring
    //   native
    //   from={{
    //     o: 1,
    //   }}
    //   to={{
    //     o: 0,
    //   }}
    //   // config={{ duration: hoverWord ? 250 : 0 }}
    // >
    //   {({ o }) => (
    //     <animated.div
    //       className={cellStyles.cell}
    //       onMouseEnter={() => setHoverWord(heading.word)}
    //       onMouseLeave={() => setHoverWord(null)}
    //       style={{
    //         left:
    //           heading.direction === "across"
    //             ? heading.left + position * 2.5 + "vw"
    //             : heading.left + "vw",
    //         top:
    //           heading.direction === "down"
    //             ? heading.top + position * 6.2 + "vh"
    //             : heading.top + "vh",
    //         backgroundColor:
    //           hoverWord === heading.word
    //             ? `rgba(${heading.colour.red}, ${heading.colour.green}, ${heading.colour.blue}, ${o}`
    //             : hoverWord === heading.word2
    //             ? `rgba(${heading.colour2.red}, ${heading.colour2.green}, ${heading.colour2.blue}, ${o}`
    //             : heading.word === route
    //             ? `rgba(${heading.colour.red}, ${heading.colour.green}, ${heading.colour.blue}, ${o})`
    //             : // )
    //             heading.word2 === route //|| hoverWord === heading.word2
    //             ? // ? o.interpolate(
    //               //     o =>
    //               `rgba(${heading.colour2.red}, ${heading.colour2.green}, ${heading.colour2.blue}, ${o})`
    //             : // )
    //               "white",
    //         transition:
    //           heading.word === hoverWord || heading.word2 === hoverWord
    //             ? "background-color 300ms linear"
    //             : "none",
    //       }}
    //     >
    //       <SpringLink
    //         className={cellStyles.springLink}
    //         to={`/${heading.word}`}
    //         exitLength={1}
    //         entryLength={1}
    //       >
    //         {text}
    //       </SpringLink>
    //     </animated.div>
    //   )}
    // </Spring>
  )
}

export default Cell
