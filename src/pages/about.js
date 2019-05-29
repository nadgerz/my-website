import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me!</h1>
      <p>
        I am a frontend/backend developer living and working in Berlin, Germany.
      </p>
      <br />
      <p>
        My early career was predominantly backend;
        C/Java/python/Sybase/PostgreSQL/postgis, running on various *nix
        systems, but in recent years I have been pivoting to frontend languages
        and tooling, (React, TypeScript, Jest, ...) just because the pace of
        change and invention there is more exciting to me.
      </p>
      <br />
      <p>
        That said, I haven't totally let go of the backend world. I am enjoying
        learning Go(lang), mongodb, Swift, Node.js, Electron and all that DevOps
        goodness, with Docker, Kubernetes, Travis CI and friends.
      </p>
      <br />
      <p>
        My wish (hope?) is to work in a small to medium sized team where I can
        continue to learn and contribute to projects/applications using any (or
        all!) of the above.
      </p>
      <br />
      <p>TL;DR - Ha! You did! This is at the end.</p>
      <p>
        Life is short... coding is fun, but it is REALLY fun as part of a team.
      </p>
    </Layout>
  )
}

export default AboutPage
