import React from "react"
import contentContainerStyles from "./contentcontainer.module.scss"

const ContentContainer = props => {
  const contactChildClass =
    props.route === "contact" ? "" : contentContainerStyles.contentContainer
  return (
    <div>
      <div className={contentContainerStyles.headerContainer}>
        <h1 className={contentContainerStyles.title}>{props.route}</h1>
      </div>
      <div className={contactChildClass}>{props.children}</div>
    </div>
  )
}

export default ContentContainer
