import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />

      <h1>
        <Link to="/contact">About Me!</Link>
      </h1>
      <p>Code Monkey in Berlin</p>
    </Layout>
  )
}

export default AboutPage
