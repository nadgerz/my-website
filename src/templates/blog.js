import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/"
import Layout from "../components/layout"

export const query = graphql`
  query bySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
const Blog = props => {
  const { title, publishDate, body } = props.data.contentfulBlogPost

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishDate}</p>
      {documentToReactComponents(body.json)}
    </Layout>
  )
}

export default Blog
