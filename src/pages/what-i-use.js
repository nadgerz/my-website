import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const WhatIUsePage = () => {
  return (
    <Layout>
      <Head title="What I Use" />

      <h1>What I Use...</h1>

      <ul>
        <li>
          <h2>Languages/Frameworks/Libraries</h2>
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>React</li>
            <li>React-Native</li>
            <li>Go(lang)</li>
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
      </ul>
    </Layout>
  )
}

export default WhatIUsePage
