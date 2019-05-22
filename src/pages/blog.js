import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { isNullOrUndefined } from "util"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  // console.log(contentfulData)
  // let filteredArray = data.allMarkdownRemark.edges.filter(edge => {
  //   return !isNullOrUndefined(edge.node.fields)
  // })

  let filteredArray = contentfulData.allContentfulBlogPost.edges.filter(
    edge => {
      return !isNullOrUndefined(edge.node.title)
    }
  )

  return (
    <Layout>
      <h1>My Blog!</h1>

      <ol className={blogStyles.post}>
        {filteredArray.map(edge => {
          const node = edge.node
          const { title, publishDate, slug } = node

          return (
            <li key={slug} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
