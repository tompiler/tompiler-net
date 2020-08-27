import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
        keywords
      }
    }
  }
`

const SEO = ({ title, lang, description, meta, image: metaImage, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    titleTemplate,
    siteUrl,
    twitterUsername,
    defaultDescription,
    keywords
  } = site.siteMetadata

  const metaDescription = description || defaultDescription
  const image = metaImage && metaImage.src ? `${siteUrl}${metaImage.src}` : null

  const canonical = pathname ? `${siteUrl}${pathname}` : null

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "en"
      }}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical
              }
            ]
          : []
      }
      meta={[
        {
          name: "description",
          content: description
        },
        {
          name: "keywords",
          content: keywords.join(",")
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          name: "twitter:site",
          content: siteUrl
        },
        {
          name: "twitter:description",
          content: metaDescription
        },
        {
          property: "twitter:creator",
          content: twitterUsername
        }
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image
                },
                {
                  property: "og:image:width",
                  content: metaImage.width
                },
                {
                  property: "og:image:height",
                  content: metaImage.height
                },
                {
                  name: "twitter:image",
                  context: image
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image"
                }
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary"
                }
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }),
  article: PropTypes.bool,
  pathname: PropTypes.string
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: null,
  description: null,
  image: null,
  article: false
}

export default SEO
