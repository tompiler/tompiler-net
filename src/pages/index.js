import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm tom, a technologist living in london.</h2>
      <h2>This is a place to keep the things I make. </h2>
      <ul>
        <li>Articles</li>
        <li>Tutorials</li>
      </ul>
      <br></br>
      <p>
        Have a question? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
