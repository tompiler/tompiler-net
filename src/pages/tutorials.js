import React from "react"
import Layout from "../components/layout"

import TransitionCell from "../components/TransitionCell"
import Tutorials from "../components/Main/Tutorials/Tutorials"

const tutorials = props => {
  return (
    <Layout left={<TransitionCell />}>
      <Tutorials />
    </Layout>
  )
}

export default tutorials
