import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Hello! I'm tom a.k.a. tompiler. I build technology for a living and I've
        made this website to share some of those things with you.
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
