import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>My Blog.</h1>

      {data.allMarkdownRemark.edges.map(node => {
        const frontmatter = node.node.frontmatter

        return (
          <ol>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.date}</p>
          </ol>
        )
      })}
    </Layout>
  )
}

export default BlogPage
