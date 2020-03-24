import React from "react"

import DrawerToggleButton from "../SideDrawer/drawerToggleButton"
import "./toolbar.css"

const Toolbar = ({ drawerClickHandler, routeHandler }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <DrawerToggleButton click={drawerClickHandler} />
      <div className="toolbar-gap"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <button
              className="toolbar__button"
              onClick={() => routeHandler("cv")}
              onKeyDown={() => routeHandler("cv")}
            >
              cv
            </button>
          </li>
          <li>
            <button
              className="toolbar__button"
              onClick={() => routeHandler("tutorials")}
              onKeyDown={() => routeHandler("tutorials")}
            >
              tutorials
            </button>
          </li>
          <li>
            <button
              className="toolbar__button"
              onClick={() => routeHandler("articles")}
              onKeyDown={() => routeHandler("articles")}
            >
              articles
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
