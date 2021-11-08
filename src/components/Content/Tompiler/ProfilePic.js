import React from "react"

import { ProfilePicWrapper } from "./ProfilePicWrapper"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const FeatureImage = () => {
  const data = useStaticQuery(graphql`
    query TompilerProfilePic {
      file(relativePath: { eq: "img/self.jpg" }) {
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  const image = getImage(data.file)
  return (
    <ProfilePicWrapper>
      <GatsbyImage image={image} alt={"A picture of tom"} />
    </ProfilePicWrapper>
  )
}
