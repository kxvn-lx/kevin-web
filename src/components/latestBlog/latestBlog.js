import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import "../blog/blog.scss"
import "../../styles/index.scss"
import "../LatestBlog/LatestBlog.scss"

const LatestBlog = ({ data }) => {
  return (
    <>
      {data.allMarkdownRemark.edges.map(blog => (
        // The contents
        <div key={blog.node.id} className="blog-wrapper latest-blog-wrapper">
          <h5 className="blog-date">Latest | {blog.node.frontmatter.date}</h5>
          <h1>
            <Link to={blog.node.frontmatter.path}>
              {blog.node.frontmatter.title}
            </Link>
          </h1>
          <div className="tags-wrapper">
            <p>
              {blog.node.frontmatter.tags.map(tag => (
                <span>{tag}</span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1
        ) {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                tags
              }
            }
          }
        }
      }
    `}
    render={data => <LatestBlog data={data} {...props} />}
  />
)