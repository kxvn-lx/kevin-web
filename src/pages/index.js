import React from "react"

import "../styles/index.scss"
import "../styles/index-dark.scss"
import SEO from "../components/seo"

// Import Components
import Header from "../components/header"
import Main from "../components/home/main"
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
    <Header logoHidden="hidden" bgColor="transparent"/>
    <Main />
    <Footer />
    <BigEmail />
  </div>
  </>
)

export default IndexPage
