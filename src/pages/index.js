import React from "react"
import App from "../components/App"

import Tompiler from "./tompiler"
import Aims from "./aims"
import Contact from "./contact"
import CV from "./cv"
import Articles from "./articles"
import Tutorials from "./tutorials"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false /* eslint-disable import/first */

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
