/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "tompiler",
    titleTemplate: "%s",
    description:
      "A personal site for blogging about data and making sense of critical problems affecting humanity at large",
    siteUrl: "https://tompiler.net",
    image: "/img/self.jpg",
    twitterUsername: "@tompiler",
    author: "Thomas Lynch",
    keywords: ["tompiler", "tom lynch", "thomas lynch", "data", "blog"]
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        injectPageProps: false
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-plugin-styled-components"
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Open Sans:300,400,700,800", "Hammersmith One"],
        display: "swap"
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
