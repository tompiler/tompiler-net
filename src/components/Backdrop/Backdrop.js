import React from "react"

import "./Backdrop.css"

const Backdrop = props => {
  return (
    <button
      className="backdrop"
      onClick={props.click}
      onKeyDown={props.click}
    />
  )
}

export default Backdrop
