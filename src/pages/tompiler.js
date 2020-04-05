import React from "react"
import Layout from "../components/layout"

import tompilerStyles from "../styles/tompiler.module.scss"

const tompiler = props => {
  return <Layout {...props} left={"This is tompiler"} />
}

export default tompiler
