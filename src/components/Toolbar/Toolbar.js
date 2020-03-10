import React from "react"

import DrawerToggleButton from "../SideDrawer/drawerToggleButton"
import "./toolbar.css"

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo-container">
        <DrawerToggleButton />
        <div className="toolbar__logo">
          <a href="/">tompiler</a>
        </div>
      </div>
      <div className="toolbar-gap"></div>

      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">cv</a>
          </li>
          <li>
            <a href="/">articles</a>
          </li>
          <li>
            <a href="/">tutorials</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
