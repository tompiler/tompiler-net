import React from "react"
import Layout from "../components/layout"

import TransitionCell from "../components/TransitionCell"
import Tutorials from "../components/Main/Tutorials/Tutorials"

const tutorials = props => {
  const pathName =
    props.location.pathname.substr(1) === ""
      ? "tompiler"
      : props.location.pathname.substr(1)
  return (
    <Layout {...props} left={<TransitionCell {...props} route={pathName} />}>
      <Tutorials />
    </Layout>
  )
}

export default tutorials
