import React from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import "../styles/main.scss"

const Layout = props => (
  <main>
    <Header />
    <div className="container">{props.children}</div>
    <Footer />
  </main>
)

export default Layout
