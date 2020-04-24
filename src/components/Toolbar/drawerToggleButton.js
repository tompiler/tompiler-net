import React from "react"
import { SpringLink } from "../SpringLink"
import SpringBar from "../SpringBar"
import { TransitionState } from "gatsby-plugin-transition-link"
import { useLocation } from "@reach/router"

import "./drawerToggleButton.css"

import { blue } from "../WordSelector/WordSelectorData"

const DrawerToggleButton = props => {
  const location = useLocation()
  return (
    <div
      className="toolbar__logo-container"
      onClick={props.click}
      onKeyDown={props.click}
      role="button"
      tabIndex={0}
    >
      {/* <div className="toggle-button-container">
      <button className="toggle-button">
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
      </button>
    </div> */}
      <div className="toolbar__logo">
        <SpringLink
          className="spring-link"
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
    </div>
  )
}

export default DrawerToggleButton
