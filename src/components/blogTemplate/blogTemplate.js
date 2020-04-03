import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import IosArrowRoundBack from "react-ionicons/lib/IosArrowRoundBack"

// components
import SEO from "../seo"
import Header from "../header"
import BigEmail from "../bigEmail"
import Footer from "../footer"

import "../blog/blog.scss"
import "../blogTemplate/blogTemplate.scss"

export default function blogTemplate({ data }) {
  const blog = data.markdownRemark

  return (
    <>
      <SEO
        description={blog.frontmatter.title} 
        lang="us"
        title="Blog"
      />
      <Header />
      <BigEmail />

      <div className="main container">
        <Link to="/blog" className="icon">
          <IosArrowRoundBack fontSize="3em" />
        </Link>
        <div className="blog-wrapper">
          <h5>{blog.frontmatter.date}</h5>
          <h1>{blog.frontmatter.title}</h1>
          <div className="tags-wrapper">
            <p>
              {blog.frontmatter.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </p>
          </div>
        </div>
        
        <div className="content-wrapper">
            <div dangerouslySetInnerHTML={{ __html: blog.html }} />
          </div>
      </div>

      <Footer />
    </>
  )
}

export const blogQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        tags
      }
    }
  }
`
