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
      <p>
        I am a Front-end/Back-end developer living and working in Berlin,
        Germany.
      </p>
      <br /> <br />
      <p>
        My early career was predominantly backend; Java/Sybase/Postgre, running
        on various *nix systems, but in recent years I have been pivoting to
        frontend languages and tooling, (React, TypeScript, Jest, ...) just
        because the pace of change and invention there is more exciting for me.
      </p>
      <br /> <br />
      <p>
        That said, I haven't totally let go of the backend world. I am enjoying
        learning Go(lang), mongodb, Swift and all that DevOps goodness, with
        Docker, Kubernetes, Travis CI and friends.
      </p>
      <br /> <br />
      <p>
        My wish (hope?) is to work in a asmall to medium sized team where i can
        continue to learn and contribute to projects/applications using any (or
        all!) of the above.
      </p>
    </Layout>
  )
}

export default AboutPage
