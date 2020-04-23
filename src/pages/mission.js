import React from "react"
import Layout from "../components/layout"

import TransitionCell from "../components/TransitionCell"
import Mission from "../components/Main/Mission/Mission"

const mission = () => {
  return (
    <Layout left={<TransitionCell />}>
      <Mission />
    </Layout>
  )
}

export default mission
