import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <h1>
        <Link to="/contact">About Me!</Link>
      </h1>
      <p>Code Monkey in Berlin</p>

      <Footer />
    </div>
  )
}

export default AboutPage
