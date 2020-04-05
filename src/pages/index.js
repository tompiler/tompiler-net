import React from "react"
import App from "./App"
import "../styles/index.scss"

// import ContentContainer from "../components/Main/ContentContainer/ContentContainer"
// import Contact from "../components/Main/Contact/Contact"
// import Mission from "../components/Main/Mission/Mission"
// import Tompiler from "../components/Main/Tompiler/Tompiler"
// import Articles from "../components/Main/Articles/Articles"
// import Tutorials from "../components/Main/Tutorials/Tutorials"

import Tompiler from "./tompiler"
import Mission from "./mission"
import CV from "./cv"
import Articles from "./articles"
import Tutorials from "./tutorials"

const IndexPage = () => {
  return (
    <App>
      <Tompiler path="/" exact />
      <CV path="/cv" />
      <Mission path="/mission" />
      <Tutorials path="/tutorials" />
      <Articles path="/articles" />
    </App>
  )
}

export default IndexPage
