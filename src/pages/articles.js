import React from "react"
import Layout from "../components/layout"

import TransitionCell from "../components/TransitionCell"

import Articles from "../components/Main/Articles/Articles"

const articles = () => {
  return (
    <Layout left={<TransitionCell />}>
      <Articles />
    </Layout>
  )
}

export default articles
