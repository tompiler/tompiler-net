import React from "react"

import "./drawerToggleButton.css"

const drawerToggleButton = props => (
  <div
    className="toolbar__logo-container"
    onClick={props.click}
    onKeyDown={props.click}
    role="button"
    tabIndex={0}
  >
    <div className="toggle-button-container">
      <button className="toggle-button">
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
      </button>
    </div>
    <div className="toolbar__logo">tompiler</div>
  </div>
)

export default drawerToggleButton
