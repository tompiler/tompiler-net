import React, { useEffect, useRef, useState } from "react"
import { Spring, animated } from "react-spring/renderprops"
import useMeasure from "./useMeasure"

import WordSelector from "./WordSelector/WordSelector"
import { TransitionState } from "gatsby-plugin-transition-link"
import { SpringLink } from "./SpringLink"
import SpringBar from "./SpringBar"
import { useLocation } from "@reach/router"

import transitionCellStyles from "./transitionCell.module.scss"

const TransitionCell = () => {
  const location = useLocation()
  const route = location.pathname.substr(1)

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
            <SpringBar mount={mount} transitionStatus={transitionStatus} />
          </div>

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
