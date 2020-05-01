import React from "react"
import Layout from "../components/Layout"

import TransitionCell from "../components/Content/TransitionCell"
import Aims from "../components/Content/Aims/Aims"

const aims = () => {
  return (
    <Layout left={<TransitionCell />}>
      <Aims />
    </Layout>
  )
}

export default aims
