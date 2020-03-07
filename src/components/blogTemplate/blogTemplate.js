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

export default function blogTemplate({ data }) {
  const blog = data.markdownRemark

  return (
    <>
      {/* <div>
        <Link to="/blog">Back</Link>
        <hr />

        <h1>{blog.frontmatter.title}</h1>
        <h4>
          Posted by {blog.frontmatter.author} on {blog.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </div> */}

      <SEO
        description="I'm a multidisciplinary developer and designer, who values aesthetic design and visuals, with amazing performance by default."
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
              {blog.frontmatter.tags.map((tag, index) => (
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
        author
        date
        tags
      }
    }
  }
`
