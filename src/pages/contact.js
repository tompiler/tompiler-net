import React from "react"
import Layout from "../components/layout"

import TransitionCell from "../components/TransitionCell"

import Contact from "../components/Main/Contact/Contact"

const contact = () => {
  return (
    <Layout name="contact" left={<TransitionCell />}>
      <Contact />
    </Layout>
  )
}

export default contact
