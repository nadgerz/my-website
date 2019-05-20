import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />

      <h1>
        <Link to="/contact">About Me!</Link>
      </h1>
      <p>Code Monkey in Berlin</p>

      <Footer />
    </div>
  )
}

export default AboutPage
