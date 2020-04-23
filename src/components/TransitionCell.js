import React, { useEffect, useRef, useState } from "react"

import { useSpring, animated } from "react-spring"
import useMeasure from "./useMeasure"

import WordSelector from "./WordSelector/WordSelector"
import { TransitionState } from "gatsby-plugin-transition-link"
import { SpringLink } from "./SpringLink"

import { useLocation } from "@reach/router"

import transitionCellStyles from "./transitionCell.module.scss"

const TransitionCell = () => {
  const location = useLocation()
  const route = location.pathname.substr(1)

  // const [open, toggle] = useState(false)
  // const [bind, { width }] = useMeasure()
  // const props = useSpring({ width: open ? width : 0 })

  return (
    <TransitionState>
      {({ mount, transitionStatus, exit, entry }) => (
        // <WordSelector
        //   transitionStatus={transitionStatus}
        //   exit={exit}
        //   entry={entry}
        //   mount={mount}
        // />

        // console.log("Hello")
        <>
          <div className={transitionCellStyles.link}>
            <SpringLink
              className={transitionCellStyles.springLink}
              to={`/tompiler`}
              exitLength={0.5}
              entryLength={0.5}
              entryDelay={0.5}
              entryState={"tompiler"}
              exitState={location.pathname === "/" ? "tompiler" : route}
            >
              {"tompiler"}
            </SpringLink>
          </div>
          <div></div>
          <div className={transitionCellStyles.link}>
            <SpringLink
              className={transitionCellStyles.springLink}
              to={`/contact`}
              exitLength={0.5}
              entryLength={0.5}
              entryDelay={0.5}
              entryState={"contact"}
              exitState={location.pathname === "/" ? "tompiler" : route}
            >
              {"contact"}
            </SpringLink>
          </div>
        </>
      )}
    </TransitionState>
  )
}

export default TransitionCell
