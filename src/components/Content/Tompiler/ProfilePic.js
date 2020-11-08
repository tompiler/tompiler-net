import React from "react"

import Img from "gatsby-image"
import { ProfilePicWrapper } from "./ProfilePicWrapper"
import { useStaticQuery, graphql } from "gatsby"

export const FeatureImage = () => {
  const data = useStaticQuery(graphql`
    query TompilerProfilePic {
      file(relativePath: { eq: "img/self.jpg" }) {
        childImageSharp {
          fluid(quality: 50, jpegQuality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ProfilePicWrapper>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt={"A picture of tompiler"}
      />
    </ProfilePicWrapper>
  )
}
