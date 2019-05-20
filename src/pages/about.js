import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>
        <Link to="/contact">About Me!</Link>
      </h1>
      <p>Code Monkey in Berlin</p>
    </Layout>
  )
}

export default AboutPage
