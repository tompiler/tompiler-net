import React from "react"

import "./drawerToggleButton.css"

const drawerToggleButton = props => (
  <div className="toggle-button-container">
    <button className="toggle-button">
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  </div>
)

export default drawerToggleButton
