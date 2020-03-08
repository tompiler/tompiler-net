import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeadingBlocks from "../components/HeadingBlocks"
import Toolbar from "../components/Toolbar/Toolbar"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <div className="App">
      <Toolbar />
      <main>
        <HeadingBlocks />
      </main>
    </div>
  )
}

export default IndexPage
