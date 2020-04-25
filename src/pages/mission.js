import React from "react"
import Layout from "../components/Layout"

import TransitionCell from "../components/Content/TransitionCell"
import Mission from "../components/Content/Mission/Mission"

const mission = () => {
  return (
    <Layout left={<TransitionCell />}>
      <Mission />
    </Layout>
  )
}

export default mission
