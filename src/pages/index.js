import React from "react"
import App from "../components/App"

import Tompiler from "./tompiler"
import Mission from "./mission"
import Contact from "./contact"
import CV from "./cv"
import Articles from "./articles"
import Tutorials from "./tutorials"

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <App>
      <Tompiler path="/" exact />
      <Contact path="/contact" />
      <CV path="/cv" />
      <Mission path="/mission" />
      <Tutorials path="/tutorials" />
      <Articles path="/articles" />
    </App>
  )
}

export default IndexPage
