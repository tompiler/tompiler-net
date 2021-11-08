import React from "react"

import useWindowSize from "../../useWindowSize"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

import { FeatureImage } from "./ProfilePic"

const TompilerContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.85em;
    width: 90%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 0.8em;
    width: 90%;
  }
`

const TompilerItem = styled("div")`
  display: block;
  min-height: 16%;
  text-align: center;
  color: ${props => props.theme.color};
  line-height: 1.6;
  font-size: 0.9em;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 0.8em;
  }
`

const Tompiler = () => {
  const windowSize = useWindowSize()

  const data = useStaticQuery(graphql`
    query TompilerQuery {
      markdownRemark(fields: { slug: { eq: "tompiler" } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `)

  return (
    <>
      <TompilerContainer>
        <TompilerItem mobile={windowSize.width < 650 ? true : false}>
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </TompilerItem>
        <FeatureImage />
      </TompilerContainer>
    </>
  )
}

export default Tompiler
