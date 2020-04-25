import React from "react"

import Toolbar from "./Toolbar/Toolbar"
import layoutStyles from "./layout.module.scss"

import useWindowSize from "./useWindowSize"

import { Content } from "./Content/Content"

const Layout = props => {
  const windowSize = useWindowSize()

  return (
    <>
      <Toolbar />
      <div>
        <div
          className={
            windowSize.width > 650
              ? layoutStyles.containerLeft
              : layoutStyles.containerTopMobile
          }
        >
          <div className={layoutStyles.containerContent}>
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
        <div
          className={
            windowSize.width > 650
              ? layoutStyles.containerRight
              : layoutStyles.containerRightMobile
          }
        >
          <Content name={props.name}>{props.children}</Content>
        </div>
      </div>
    </>
  )
}

export default Layout
