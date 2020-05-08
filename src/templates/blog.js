import React from "react"
import { graphql } from "gatsby"
import Layout from "../old/layout"

export const query = graphql`
  query($sluggfefef: String!) {
    markdownRemark(fields: { slug: { eq: $sluggfefef } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        className="boobieblahblah"
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog
