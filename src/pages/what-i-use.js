import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const WhatIUsePage = () => {
  return (
    <Layout>
      <Head title="WhatIUse" />

      <h1>What I Use...</h1>

      <li>
        <h2>Languages/Frameworks/Libraries</h2>
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
          <li>React</li>
          <li>Go</li>
          <li>Node.js</li>
        </ul>
      </li>

      <li>
        <h2>Editors/IDEs</h2>
        <ul>
          <li>vim</li>
          <li>WebStorm</li>
          <li>IntelliJ</li>
        </ul>
      </li>

      <li>
        <h2>Tools</h2>
        <ul>
          <li>Docker</li>
          <li>Jest</li>
          <li>Prettier</li>
          <li>ESLint</li>
        </ul>
      </li>

      <li>
        <h2>Databases</h2>
        <ul>
          <li>PostgreSQL</li>
          <li>mongodb</li>
        </ul>
      </li>
    </Layout>
  )
}

export default WhatIUsePage
