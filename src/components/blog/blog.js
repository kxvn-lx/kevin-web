import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import "../blog/blog.scss"
import "../../styles/index.scss"

// Components
import FeaturedBlog from "../featuredBlog/featuredBlog"

const BlogHome = ({ data }) => {
  return (
    <>
      <div className="main container">
        <h1 className="page-title">Blog</h1>
        
        <FeaturedBlog />

        {data.allMarkdownRemark.edges.map(blog => (

          // The contents
          <div key={blog.node.id} className="blog-wrapper">
            <h5 className="blog-date">{blog.node.frontmatter.date}</h5>
            <h1>
              <Link to={blog.node.frontmatter.path}>
                {blog.node.frontmatter.title}
              </Link>
            </h1>
            <div className="tags-wrapper">
              <p>
                {blog.node.frontmatter.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </p>
            </div>
          </div>

        ))}
      </div>
    </>
  )
}



export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark (
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: {featured: {eq: "0"}}
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                tags
                featured
              }
            }
          }
        }
      }
    `}
    render={data => <BlogHome data={data} {...props} />}
  />
)
