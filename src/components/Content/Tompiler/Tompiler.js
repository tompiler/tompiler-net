import React from "react"
import tompilerStyles from "./tompiler.module.scss"
import useWindowSize from "../../useWindowSize"

const Tompiler = () => {
  const windowSize = useWindowSize()

  return (
    <div
      className={
        windowSize.width > 650
          ? tompilerStyles.tompilerItem
          : tompilerStyles.tompilerItemMobile
      }
    >
      Hello, my name is tom. <br />
      <br />
      I'm a software engineer living in London with interests in botany,
      ornithology, and natural history.
      <br />
      <br />
    </div>
  )
}

export default Tompiler
