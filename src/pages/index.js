import React, { useState } from "react"
import App from "./App"

import Tompiler from "./tompiler"
import Mission from "./mission"
import Contact from "./contact"
import CV from "./cv"
import Articles from "./articles"
import Tutorials from "./tutorials"

import { Router, Location } from "@reach/router"

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Router className="router">
      <Tompiler path="/" exact />
      <Contact path="/contact" />
      <CV path="/cv" />
      <Mission path="/mission" />
      <Tutorials path="/tutorials" />
      <Articles path="/articles" />
    </Router>
  )
}

export default IndexPage
