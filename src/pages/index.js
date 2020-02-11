import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"
import SEO from "../components/seo"

// Import Components
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"
import BigEmail from "../components/bigEmail"

const IndexPage = () => (
  <>
  <div>
    <Header />
    <Main />
    <Footer />
    <BigEmail />
  </div>
  </>
)

export default IndexPage
