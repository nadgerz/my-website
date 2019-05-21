import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query bySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const Blog = props => {
  // console.log(JSON.stringify(props, null, 4))
  const markdownRemark = props.data.markdownRemark

  const { title, date } = markdownRemark.frontmatter
  const { html } = markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Blog
