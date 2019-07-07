import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <h1>How to find me...</h1>
      <p>
        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          stephen.a.ingram@gmail.com
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/stephen-ingram-3078aa19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
