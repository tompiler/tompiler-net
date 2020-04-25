import React from "react"
import Layout from "../components/Layout"

import TransitionCell from "../components/Content/TransitionCell"

import Contact from "../components/Content/Contact/Contact"

const contact = () => {
  return (
    <Layout name="contact" left={<TransitionCell />}>
      <Contact />
    </Layout>
  )
}

export default contact
