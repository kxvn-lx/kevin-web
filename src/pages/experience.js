import React from "react"

import "../styles/index.scss"
import "../styles/index-dark.scss"
import SEO from "../components/seo"

// Import Components
import Header from "../components/header"
import Main from "../components/experience/experience"
import Footer from "../components/footer"
import BigEmail from "../components/bigEmail"

const ExperiencePage = () => (
  <>
  <div>
    <SEO 
      description = "See my experiences over the years."
      lang = "us"
      title = "Experience"
    />
    <Header/>
    <Main />
    <Footer />
    <BigEmail />
  </div>
  </>
)

export default ExperiencePage
