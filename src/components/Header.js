import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div className="container">
    <div className="header">
      <Link to="/" className="logo">
        Julien Verneaut
      </Link>
      <div className="nav">
        <Link className="nav__item" to="/">
          Archive
        </Link>
      </div>
    </div>
  </div>
)

export default Header
