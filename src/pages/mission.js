import React from "react"
import Layout from "../components/layout"

import TransitionCell from "../components/TransitionCell"
import Mission from "../components/Main/Mission/Mission"

const mission = props => {
  const pathName =
    props.location.pathname.substr(1) === ""
      ? "tompiler"
      : props.location.pathname.substr(1)
  return (
    <Layout {...props} left={<TransitionCell route={pathName} />}>
      <Mission />
    </Layout>
  )
}

export default mission
