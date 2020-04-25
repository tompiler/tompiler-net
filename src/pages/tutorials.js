import React from "react"
import Layout from "../components/Layout"

import TransitionCell from "../components/Content/TransitionCell"
import Tutorials from "../components/Content/Tutorials/Tutorials"

const tutorials = props => {
  return (
    <Layout left={<TransitionCell />}>
      <Tutorials />
    </Layout>
  )
}

export default tutorials
