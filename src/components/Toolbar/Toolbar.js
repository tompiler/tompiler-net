import React from "react"
import HomeButton from "./HomeButton"
import toolbarStyles from "./toolbar.module.scss"

// import { SpringLink } from "../SpringLink"
import useWindowSize from "../useWindowSize"

const Toolbar = () => {
  const windowSize = useWindowSize()

  return (
    <header className={toolbarStyles.toolbar}>
      <nav
        className={
          windowSize.width > 650
            ? toolbarStyles.navigation
            : toolbarStyles.navigationMobile
        }
      >
        <HomeButton />
        {/* <div className="toolbar-gap"></div> */}
        {/* <div className="toolbar_navigation-items">
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
      </div> */}
      </nav>
    </header>
  )
}

export default Toolbar
