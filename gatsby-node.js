const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log(JSON.stringify(node, null, 4))
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log(slug)
  }
}
