module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  console.log(node)
  console.log(JSON.stringify(node, null, 4))
}
