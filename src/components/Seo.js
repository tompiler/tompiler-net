import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = image || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image

        const metaKeywords = keywords || ["gatsby blog"]

        return (
          <Helmet
            title={title}
            meta={[
              { name: "description", content: metaDescription },
              { property: "og:title", content: metaTitle },
              { property: "og:description", content: metaDescription },
              { property: "og:type", content: "website" },
              { property: "og:url", content: metaUrl },
              { property: "twitter:card", content: "summary_large_image" },
              { property: "twitter:creator", content: metaAuthor },
              { property: "twitter:title", content: metaTitle },
              { property: "twitter:description", content: metaDescription },
              { property: "twitter:image", content: metaImage }
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? { name: "keywords", content: metaKeywords.join(`, `) }
                : []
            )}
          />
        )
      }}
    />
  )
}

export default Seo

const detailsQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
