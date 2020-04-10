import React from "react"
// import { Link } from "gatsby"
import DrawerToggleButton from "../SideDrawer/drawerToggleButton"
import "./toolbar.css"

import { SpringLink } from "../SpringLink"
// import TransitionLink from "gatsby-plugin-transition-link"

const Toolbar = ({ setSideDrawer, routeHandler }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <DrawerToggleButton click={setSideDrawer} />
      <div className="toolbar-gap"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <SpringLink to="/tompiler" exitLength={1} entryLength={1}>
              home
            </SpringLink>
          </li>
          <li>
            <SpringLink to="/cv" exitLength={1} entryLength={1}>
              cv
            </SpringLink>
          </li>
          <li>
            <SpringLink to="/mission" exitLength={1} entryLength={1}>
              mission
            </SpringLink>
          </li>
          <li>
            <SpringLink to="/articles" exitLength={1} entryLength={1}>
              articles
            </SpringLink>
          </li>
          <li>
            <SpringLink to="/tutorials" exitLength={1} entryLength={1}>
              tutorials
            </SpringLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
