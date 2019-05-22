import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

// export const query = graphql`
//   query bySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query bySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
    }
  }
`
const Blog = props => {
  const { title, publishDate } = props.data.contentfulBlogPost
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishDate}</p>
    </Layout>
  )
}

export default Blog
