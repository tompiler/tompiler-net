import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { useLocation } from "@reach/router"

import Word from "./Word"

const WordSelector = ({ mount, transitionStatus, exit, entry }) => {
  const [{ alpha }, setHoverAlpha] = useSpring(() => ({
    alpha: 0,
    config: {
      mass: 1,
      tension: 270,
      friction: 40,
    },
  }))

  const [hoverElement, setHoverElement] = useState(null)

  const location = useLocation()
  const route = location.pathname.substr(1)

  const [{ cvFade, transform }, setCvFade] = useSpring(() => ({
    cvFade: route === "cv" ? 0 : 1,
    transform: "translateX(-20vw)",
    config: {
      mass: 1,
      tension: 120,
      friction: 15,
    },
    // delay: 3000,
  }))

  // // entering cv
  // if (location.pathname.substr(1) === "cv" && route !== "cv") {
  //   console.log("cv entering")
  //   setCvFade({
  //     cvFade: 0,
  //     transform: `translateX(-50vw)`,
  //   })
  // }

  // // exiting cv
  // if (location.pathname.substr(1) !== "cv" && route === "cv") {
  //   console.log(
  //     "cv exiting",
  //     location.pathname.substr(1),
  //     route,
  //     transitionStatus
  //   )
  //   setCvFade({
  //     cvFade: 1,
  //     transform: `translateX(-20vw)`,
  //   })
  // }

  return (
    route !== "cv" && (
      <animated.div style={{ opacity: cvFade, transform: transform }}>
        <Word
          word="tompiler"
          route={route}
          transitionStatus={transitionStatus}
          setHoverAlpha={setHoverAlpha}
          alpha={alpha}
          setHoverElement={setHoverElement}
          hoverElement={hoverElement}
        />
        <Word
          word="tutorials"
          route={route}
          transitionStatus={transitionStatus}
          setHoverAlpha={setHoverAlpha}
          alpha={alpha}
          setHoverElement={setHoverElement}
          hoverElement={hoverElement}
        />
        <Word
          word="contact"
          route={route}
          transitionStatus={transitionStatus}
          setHoverAlpha={setHoverAlpha}
          alpha={alpha}
          setHoverElement={setHoverElement}
          hoverElement={hoverElement}
        />
        <Word
          word="articles"
          route={route}
          transitionStatus={transitionStatus}
          setHoverAlpha={setHoverAlpha}
          alpha={alpha}
          setHoverElement={setHoverElement}
          hoverElement={hoverElement}
        />
        <Word
          word="mission"
          route={route}
          transitionStatus={transitionStatus}
          setHoverAlpha={setHoverAlpha}
          alpha={alpha}
          setHoverElement={setHoverElement}
          hoverElement={hoverElement}
        />
        <Word
          word="cv"
          route={route}
          transitionStatus={transitionStatus}
          setHoverAlpha={setHoverAlpha}
          alpha={alpha}
          setHoverElement={setHoverElement}
          hoverElement={hoverElement}
        />
      </animated.div>
    )
  )
}

export default WordSelector
