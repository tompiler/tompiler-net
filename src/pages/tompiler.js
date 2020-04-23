import React from "react"
import Layout from "../components/layout"

// import tompilerStyles from "../styles/tompiler.module.scss"
import TransitionCell from "../components/TransitionCell"
import Tompiler from "../components/Main/Tompiler/Tompiler"

const tompiler = () => {
  return (
    <Layout name="tompiler" left={<TransitionCell />}>
      <Tompiler />
    </Layout>
  )
}

export default tompiler
