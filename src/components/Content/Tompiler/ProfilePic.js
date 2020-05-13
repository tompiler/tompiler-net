import React from "react"

import Img from "gatsby-image"
import { ProfilePicWrapper } from "./ProfilePicWrapper"
import { useStaticQuery, graphql } from "gatsby"

export const FeatureImage = () => {
  const data = useStaticQuery(graphql`
    query TompilerProfilePic {
      file(relativePath: { eq: "img/self.jpg" }) {
        childImageSharp {
          fluid(quality: 100, jpegQuality: 100, sizes: "800px") {
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
