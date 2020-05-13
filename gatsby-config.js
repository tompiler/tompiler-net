/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Tompiler Data Blog",
    description: "A personal site for blogging about data",
    url: "https://tompiler.net",
    image: "/img/self.jpg",
    twitterUsername: "@tompiler",
    author: "Thomas Lynch"
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
    // {
    //   resolve: "gatsby-plugin-google-fonts",
    //   options: {
    //     fonts: [
    //       "Montserrat sans-serif",
    //       "Open Sans sans-serif:200,300,400,500,600,700",
    //       "Quicksand, sans-serif:100",
    //       "Crimson Text, serif",
    //       "source sans pro:200,300,400,400i,700",
    //     ],
    //     display: "swap",
    //   },
    // },
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
    "gatsby-plugin-sharp",
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
