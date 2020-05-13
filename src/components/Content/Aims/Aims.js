import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

const AimsItem = styled("div")`
  display: inline-block;
  width: 75%;
  height: auto;
  text-align: justify;
  color: ${props => props.theme.color};
  line-height: 1.6;
  font-size: 0.9em;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.75em;
    width: 90%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 0.6em;
    width: 90%;
  }
`

const Aims = () => {
  const data = useStaticQuery(graphql`
    query AimsQuery {
      markdownRemark(fields: { slug: { eq: "aims" } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `)
  return (
    <AimsItem>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      <p>{data.markdownRemark.frontmatter.date}</p>
    </AimsItem>
  )
}

export default Aims
