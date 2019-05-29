import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <h1>How to find me...</h1>
      <p>
        // eslint-disable-next-line
        <a href="https://gmail.com" target="_blank">
          stephen.a.ingram@gmail.com
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
