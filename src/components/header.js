import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav>
      <p>
        <Link to="/">Home</Link>
      </p>{" "}
      <p>
        <Link to="/blog">Blog</Link>
      </p>{" "}
      <p>
        <Link to="/contact">Contact</Link>
      </p>{" "}
      <p>
        <Link to="/about">About</Link>
      </p>{" "}
    </nav>
  )
}

export default Header
