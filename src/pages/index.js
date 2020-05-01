import React from "react"
import App from "../components/App"

import Tompiler from "./tompiler"
import Aims from "./aims"
import Contact from "./contact"
import CV from "./cv"
import Articles from "./articles"
import Tutorials from "./tutorials"

// import "../styles/index.scss"

// import { ThemeProvider } from "styled-components"
// import { theme } from "../components/theme/theme"
// import { GlobalStyles } from "../components/store/globalStyle"

const IndexPage = () => {
  return (
    <App>
      <Tompiler path="/" exact />
      <Contact path="/contact" />
      <CV path="/cv" />
      <Aims path="/aims" />
      <Tutorials path="/tutorials" />
      <Articles path="/articles" />
    </App>
  )
}

export default IndexPage
