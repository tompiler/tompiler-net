import React from "react"

import Toolbar from "../components/Toolbar/Toolbar"
import layoutStyles from "./layout.module.scss"

import useWindowSize from "./useWindowSize"

// import { MySpring } from "./MySpring"
import { RightHeaderSpring } from "./RightHeaderSpring"

const Layout = props => {
  const windowSize = useWindowSize()

  return (
    <>
      <Toolbar />
      <div className={layoutStyles.parent}>
        <div
          className={
            windowSize.width > 650
              ? layoutStyles.containerLeft
              : layoutStyles.containerTopMobile
          }
        >
          <div
            className={
              windowSize.width > 650
                ? layoutStyles.containerContent
                : layoutStyles.containerContentTopMobile
            }
          >
            <div
              className={
                windowSize.width > 650
                  ? layoutStyles.linkContainer
                  : layoutStyles.linkContainerMobile
              }
            >
              {props.left}
            </div>
          </div>
        </div>
        {/* <div className={layoutStyles.containerRight}>
          <div>
            <RightHeaderSpring name={props.name}>
              {props.children}
            </RightHeaderSpring>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Layout
