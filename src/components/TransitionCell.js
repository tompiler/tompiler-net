import React, { useEffect, useRef, useState } from "react"
import { useSpring, animated } from "react-spring"

import WordSelector from "./WordSelector/WordSelector"
import { TransitionState } from "gatsby-plugin-transition-link"

const TransitionCell = ({ route }) => {
  return (
    <TransitionState>
      {({ mount, transitionStatus, exit, entry }) => (
        <WordSelector
          transitionStatus={transitionStatus}
          exit={exit}
          entry={entry}
          route={route}
          mount={mount}
        />
      )}
    </TransitionState>
  )
}

export default TransitionCell
