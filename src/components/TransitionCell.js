import React from "react"

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
        />
      )}
    </TransitionState>
  )
}

export default TransitionCell
