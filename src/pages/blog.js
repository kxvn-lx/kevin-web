import React from "react"

import "../styles/index.scss"
import "../styles/index-dark.scss"
import SEO from "../components/seo"

// Import Components
import Header from "../components/header"
import BlogHome from "../components/blog/blog"
import Footer from "../components/footer"
import BigEmail from "../components/bigEmail"

const BlogPage = () => (
  <>
  <div>
    <SEO 
      description = "A collection of blogs that I occasionally dumps my writing."
      lang = "us"
      title = "Blog"
    />
    <Header />
    <BlogHome />
    <Footer />
    <BigEmail />
  </div>
  </>
)

export default BlogPage
