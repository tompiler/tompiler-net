import React from "react"
import tutorialStyles from "./tutorials.module.scss"

const Tutorials = () => {
  return (
    <div>
      <div className={tutorialStyles.headerContainer}>
        <h1 className={tutorialStyles.title}>tutorials</h1>
      </div>
      <div className={tutorialStyles.tutorialsContainer}></div>
    </div>
  )
}

export default Tutorials
