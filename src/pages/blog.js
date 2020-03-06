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
      description = "I'm a multidisciplinary developer and designer, who values aesthetic design and visuals, with amazing performance by default."
      lang = "us"
      title = "Blog"
    />
    <Header logoHidden="" bgColor=""/>
    <BlogHome />
    <Footer />
    <BigEmail />
  </div>
  </>
)

export default BlogPage
