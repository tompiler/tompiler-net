import React from "react"
import Layout from "../components/layout"

import TransitionCell from "../components/TransitionCell"

import Contact from "../components/Main/Contact/Contact"

const contact = props => {
  const pathName =
    props.location.pathname.substr(1) === ""
      ? "tompiler"
      : props.location.pathname.substr(1)
  return (
    <Layout {...props} left={<TransitionCell route={pathName} />}>
      <Contact />
    </Layout>
  )
}

export default contact
