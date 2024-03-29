const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")
//   // 1. Get path to template
//   // 2. Get markdown data
//   // 3. Create new pages

//   const res = await graphql(`
//     query {
//       allMarkdownRemark(filter: { fields: { slug: { eq: "react" } } }) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     createPage({
//       path: `/blog/${edge.node.fields.slug}`,
//       context: {
//         sluggfefef: edge.node.fields.slug,
//       },
//       component: blogTemplate,
//     })
//   })
// }
