import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>My Blog.</h1>

      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          const { title, date } = edge.node.frontmatter
          console.log(JSON.stringify(edge, null, 4))

          return (
            <li>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
