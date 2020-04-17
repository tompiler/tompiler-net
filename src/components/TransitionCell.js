import React from "react"

import CellSelector from "./CellSelector/CellSelector"
import { TransitionState } from "gatsby-plugin-transition-link"

const TransitionCell = ({ route }) => {
  return (
    <TransitionState>
      {({ mount, transitionStatus, exit, entry }) => (
        <CellSelector
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
