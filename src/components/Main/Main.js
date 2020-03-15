import React from "react"
import CellSelector from "../CellSelector/CellSelector"

const Main = () => {
  return (
    <div className="parent">
      <div className="container-left">
        <CellSelector />
      </div>
      <div className="container-right"></div>
    </div>
  )
}

export default Main
