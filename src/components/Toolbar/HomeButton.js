import React from "react"
import { SpringLink } from "../SpringLink"
import SpringBar from "../SpringBar"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"

import homeButtonStyles from "./homeButton.module.scss"

import { blue } from "../WordSelector/WordSelectorData"

const DrawerToggleButton = () => {
  const location = useLocation()
  return (
    <div className={homeButtonStyles.toolbarLogo}>
      <SpringLink
        className={homeButtonStyles.springLink}
        to={"/tompiler"}
        exitLength={0.6}
        entryLength={0.8}
        entryDelay={0.6}
        entryState={"tompiler"}
        exitState={"tompiler"}
      >
        tompiler
      </SpringLink>
      <TransitionState>
        {props => (
          <SpringBar
            {...props}
            to={"tompiler"}
            location={location}
            barColour={blue}
          />
        )}
      </TransitionState>
    </div>
  )
}

export default DrawerToggleButton
