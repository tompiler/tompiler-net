import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"

// import tompilerStyles from "../styles/tompiler.module.scss"
import CellSelector from "../components/CellSelector/CellSelector"

const Tompiler = props => {
  const pathName =
    props.location.pathname.substr(1) === ""
      ? "tompiler"
      : props.location.pathname.substr(1)
  return (
    <Layout {...props} left={<CellSelector {...props} route={pathName} />} />
  )
}

export default Tompiler
