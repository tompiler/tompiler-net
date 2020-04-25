import React from "react"
import Layout from "../components/Layout"

// import tompilerStyles from "../styles/tompiler.module.scss"
import TransitionCell from "../components/Content/TransitionCell"
import Tompiler from "../components/Content/Tompiler/Tompiler"

const tompiler = () => {
  return (
    <Layout name="tompiler" left={<TransitionCell />}>
      <Tompiler />
    </Layout>
  )
}

export default tompiler
