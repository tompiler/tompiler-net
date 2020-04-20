import React from "react"

import Toolbar from "../components/Toolbar/Toolbar"
import layoutStyles from "./layout.module.scss"

// import { MySpring } from "./MySpring"
import { RightHeaderSpring } from "./RightHeaderSpring"

const Layout = props => {
  const pathName =
    props.location.pathname.substr(1) === ""
      ? "tompiler"
      : props.location.pathname.substr(1)
  return (
    <>
      <Toolbar />
      <div className={layoutStyles.parent}>
        <div className={layoutStyles.containerLeft}>
          <div className={layoutStyles.containerContent}>
            {pathName !== "cv" ? (
              <div className={layoutStyles.linkContainer}>{props.left}</div>
            ) : (
              <div>Hello</div>
            )}
          </div>
        </div>
        <div className={layoutStyles.containerRight}>
          <div>
            <RightHeaderSpring pathName={pathName}>
              {props.children}
            </RightHeaderSpring>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
