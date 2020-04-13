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
          {/* <div className={layoutStyles.containerContent}> */}
          {/* <div className={layoutStyles.linkContainer}> */}
          {/* <MySpring text={props.left} /> */}
          <div>{props.left}</div>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className={layoutStyles.containerRight}>
          <div>
            <div className={layoutStyles.containerRightNested}>
              <div className={layoutStyles.headerPositionFixed}>
                <div className={layoutStyles.headerContainer}>
                  <RightHeaderSpring pathname={pathName} />
                </div>
              </div>
              <div className={layoutStyles.contentContainer}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
