import React from "react"

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
    <SEO 
      description = "I'm a multidisciplinary developer and designer, who values aesthetic design and visuals, with amazing performance by default."
      lang = "us"
      title = "Home"
    />
    <Header />
    <Main />
    <Footer />
    <BigEmail />
  </div>
  </>
)

export default IndexPage
