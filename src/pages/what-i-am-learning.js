import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const WhatIAmLearningPage = () => {
  return (
    <Layout>
      <Head title="What I Am Learning" />

      <h1>What I Am Learning right now...</h1>

      <ul>
        <li>
          <h2>Languages/Frameworks/Libraries</h2>
          <ul>
            <li>React</li>
            <li>React-Native</li>
            <li>Go</li>
            <li>Node.js</li>
            <li>TypeScript</li>
          </ul>
        </li>

        <li>
          <h2>Tools</h2>
          <ul>
            <li>Docker</li>
            <li>Jest</li>
          </ul>
        </li>
      </ul>

      <h1>What's up next...</h1>
      <ul>
        <li>
          <h2>Languages/Frameworks/Libraries</h2>
          <ul>
            <li>Flutter/Dart</li>
            <li>Kotlin</li>
            <li>Swift</li>
          </ul>
        </li>

        <li>
          <h2>Tools</h2>
          <ul>
            <li>CI/CD</li>
            <li />
          </ul>
        </li>
      </ul>
    </Layout>
  )
}

export default WhatIAmLearningPage
