import React from "react"
import App from "../components/App"

import Tompiler from "./tompiler"
import Aims from "./aims"
import Contact from "./contact"
import CV from "./cv"
import Articles from "./articles"
import Tutorials from "./tutorials"

const IndexPage = () => {
  return (
    <>
      <Tompiler path="/" exact />
      <App>
        <Contact path="/contact" />
        <CV path="/cv" />
        <Aims path="/aims" />
        <Tutorials path="/tutorials" />
        <Articles path="/articles" />
      </App>
    </>
  )
}

export default IndexPage
