import React from "react"
import { SpringLink } from "../SpringLink"

import "./drawerToggleButton.css"

const drawerToggleButton = props => (
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
    </div>
  </div>
)

export default drawerToggleButton
