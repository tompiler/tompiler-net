import React from "react"
// import { Link } from "gatsby"
import DrawerToggleButton from "./drawerToggleButton"
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
            <SpringLink
              to="/articles"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"articles"}
              exitState={"articles"}
            >
              articles
            </SpringLink>
          </li>
          <li>
            <SpringLink
              to="/tutorials"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"tutorials"}
              exitState={"tutorials"}
            >
              tutorials
            </SpringLink>
          </li>
          <li>
            <SpringLink
              to="/contact"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"contact"}
              exitState={"contact"}
            >
              contact
            </SpringLink>
          </li>
          <li style={{ padding: 0 }}>
            <SpringLink
              to="/cv"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"cv"}
              exitState={"cv"}
            >
              cv
            </SpringLink>
          </li>
          <li>
            <SpringLink
              to="/mission"
              exitLength={0.8}
              entryLength={0.8}
              entryDelay={0.8}
              entryState={"mission"}
              exitState={"mission"}
            >
              mission
            </SpringLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
