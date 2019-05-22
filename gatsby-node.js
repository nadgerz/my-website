const path = require("path")
const util = require("util")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    if (!util.isNullOrUndefined(node.fileAbsolutePath)) {
      // console.log("@@@@@@@@@@@@@")
      // console.log(node.fileAbsolutePath)
      // console.log(JSON.stringify(node, null, 4))
      const slug = path.basename(node.fileAbsolutePath, ".md")
      // console.log(slug)
      // console.log(node.fileAbsolutePath)
      // console.log("@@@@@@@@@@@@@")

      createNodeField({
        node,
        name: "slug",
        value: slug,
      })
    }
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const edges = result.data.allMarkdownRemark.edges
  // console.log(edges.length)

  const filteredArray = edges.filter(edge => {
    return !util.isNullOrUndefined(edge.node.fields)
  })
  // console.log(filteredArray.length)
  // console.log("!!!!!!!")

  // Create blog post pages.
  filteredArray.forEach(edge => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
