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

  console.clear()
  console.log(data)
  console.log(typeof data)

  return (
    <Layout>
      <h1>My Blog.</h1>
      <p>Posts will show up here later on.</p>
      {data.allMarkdownRemark.edges.map(node => {
        console.log(node)
        console.table(node)
        console.log(typeof node)
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
