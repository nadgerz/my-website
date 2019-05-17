import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>
        <Link to="/contact">About Me!</Link>
      </h1>
      <p>Code Monkey in Berlin</p>
    </div>
  )
}

export default AboutPage
