import React from "react"
import Layout from "../components/layout"

// import tompilerStyles from "../styles/tompiler.module.scss"
import TransitionCell from "../components/TransitionCell"

const Tompiler = props => {
  const pathName =
    props.location.pathname.substr(1) === ""
      ? "tompiler"
      : props.location.pathname.substr(1)
  return (
    <Layout {...props} left={<TransitionCell {...props} route={pathName} />} />
  )
}

export default Tompiler
