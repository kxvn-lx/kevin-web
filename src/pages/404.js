import React from "react"
import "../styles/index.scss"
import "../styles/index-dark.scss"
import SEO from "../components/seo"

// Import Components
import Header from "../components/header"
import MainAlt from "../components/main-alt"
import Footer from "../components/footer"
import BigEmail from "../components/bigEmail"

const NotFoundPage = () => (
  <>
    <div>
      <SEO
        description="404"
        lang="us"
        title="404"
      />
      <Header />
      <MainAlt
        title="404"
        subtitle=""
        body="The page you are looking for seems to be gone! Perhaps go back and try again?"
      />
      <Footer />
      <BigEmail />
    </div>
  </>
)

export default NotFoundPage
