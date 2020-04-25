import React from "react"

// import WordSelector from "./WordSelector/WordSelector"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"

import MobileLink from "./MobileLink"

import {
  orange,
  green,
  fuschia,
  goldenrod,
  purple,
} from "../WordSelector/WordSelectorData"

const TransitionCell = () => {
  const location = useLocation()
  return (
    <TransitionState>
      {props => (
        // <WordSelector
        //   transitionStatus={transitionStatus}
        //   exit={exit}
        //   entry={entry}
        //   mount={mount}
        // />
        <>
          <MobileLink
            {...props}
            to={"mission"}
            location={location}
            barColour={purple}
          />
          <MobileLink
            {...props}
            to={"articles"}
            location={location}
            barColour={fuschia}
          />
          <MobileLink
            {...props}
            to={"tutorials"}
            location={location}
            barColour={orange}
          />
          <MobileLink
            {...props}
            to={"contact"}
            location={location}
            barColour={green}
          />
          <MobileLink
            {...props}
            to={"cv"}
            location={location}
            barColour={goldenrod}
          />
        </>
      )}
    </TransitionState>
  )
}

export default TransitionCell
