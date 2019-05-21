import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

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
      <h1>My Blog!</h1>

      <ol className={blogStyles.post}>
        {data.allMarkdownRemark.edges.map(edge => {
          const node = edge.node
          const { title, date } = node.frontmatter
          const { slug } = node.fields

          return (
            <li key={slug} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
