import React from "react"

import Toolbar from "../components/Toolbar/Toolbar"
import layoutStyles from "./layout.module.scss"

// import { MySpring } from "./MySpring"
import { RightHeaderSpring } from "./RightHeaderSpring"

const Layout = props => {
  return (
    <>
      <Toolbar />
      <div className={layoutStyles.parent}>
        <div className={layoutStyles.containerLeft}>
          <div className={layoutStyles.containerContent}>
            <div className={layoutStyles.linkContainer}>{props.left}</div>
          </div>
        </div>
        <div className={layoutStyles.containerRight}>
          <div>
            <RightHeaderSpring name={props.name}>
              {props.children}
            </RightHeaderSpring>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
