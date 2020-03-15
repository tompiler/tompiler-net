import React from "react"

import DrawerToggleButton from "../SideDrawer/drawerToggleButton"
import "./toolbar.css"

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <DrawerToggleButton click={props.drawerClickHandler} />
      <div className="toolbar-gap"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">articles</a>
          </li>
          <li>
            <a href="/">tutorials</a>
          </li>
          <li>
            <a href="/">cv</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
