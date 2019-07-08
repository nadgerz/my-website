const path = require('path');
const util = require('util');

// NOTE: For Markdown we were generating the slug, but in Contentful we already have that.

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     if (!util.isNullOrUndefined(node.fileAbsolutePath)) {
//       const slug = path.basename(node.fileAbsolutePath, ".md")

//       createNodeField({
//         node,
//         name: "slug",
//         value: slug,
//       })
//     }
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const edges = result.data.allContentfulBlogPost.edges;

  const filteredArray = edges.filter(edge => {
    return !util.isNullOrUndefined(edge.node.slug);
  });

  // Create blog post pages.
  filteredArray.forEach(edge => {
    const slug = edge.node.slug;

    createPage({
      component: blogPostTemplate,
      path: `/blog/${slug}`,
      context: {
        slug: slug,
      },
    });
  });
};
