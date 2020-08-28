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
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Open Sans",
            variants: ["300", "400", "600", "700"]
          },
          {
            family: "Hammersmith One",
            variants: ["Regular"]
          }
        ]
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
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              ignoreFileExtensions: []
            }
          }
        ]
      }
    }
  ]
}
