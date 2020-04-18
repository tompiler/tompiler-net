import React, { useState } from "react"
import { useSpring } from "react-spring"

import Word from "./Word"

const WordSelector = ({ transitionStatus, exit, entry, route }) => {
  const [{ alpha }, setHoverAlpha] = useSpring(() => ({
    alpha: 0,
    config: {
      mass: 1,
      tension: 270,
      friction: 40,
    },
  }))

  const [hoverElement, setHoverElement] = useState(null)

  return (
    <div>
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
    </div>
  )
}

export default WordSelector
