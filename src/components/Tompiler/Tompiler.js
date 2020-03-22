import React from "react"
import tompilerStyles from "./tompiler.module.scss"

const Tompiler = () => {
  return (
    <div>
      <div className={tompilerStyles.headerContainer}>
        <h1 className={tompilerStyles.title}>tompiler</h1>
      </div>
      <div className={tompilerStyles.tompilerContainer}>
        <div className={tompilerStyles.tompilerItem}>
          Hello, my name is tom. <br />
          <br />
          I'm a software engineer living in London.
        </div>
      </div>
    </div>
  )
}

export default Tompiler
