import React from "react"
import Layout from "../components/Layout"

import TransitionCell from "../components/Content/TransitionCell"

import Articles from "../components/Content/Articles/Articles"

const articles = () => {
  return (
    <Layout left={<TransitionCell />}>
      <Articles />
    </Layout>
  )
}

export default articles
