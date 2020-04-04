import React from "react"
import contentContainerStyles from "./contentcontainer.module.scss"

const ContentContainer = props => {
  console.log("ContentProps", props)
  return (
    props.route !== "cv" && (
      <div>
        <div className={contentContainerStyles.containerRightNested}>
          <div className={contentContainerStyles.headerPositionFixed}>
            <div className={contentContainerStyles.headerContainer}>
              <h1 className={contentContainerStyles.title}>{props.route}</h1>
            </div>
          </div>
          <div className={contentContainerStyles.contentContainer}>
            {props.children}
          </div>
        </div>
      </div>
    )
  )
}

export default ContentContainer
