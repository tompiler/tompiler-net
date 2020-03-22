import React from "react"
import articleStyles from "./articles.module.scss"

const Articles = () => {
  return (
    <div>
      <div className={articleStyles.headerContainer}>
        <h1 className={articleStyles.title}>articles</h1>
      </div>
      <div className={articleStyles.articleContainer}></div>
    </div>
  )
}

export default Articles
