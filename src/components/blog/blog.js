import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import "../blog/blog.scss"
import "../../styles/index.scss"

// Components
import Emoji from "../emoji"

const BlogHome = ({ data }) => {
  return (
    <>
      <div className="main container">
        <h1 className="page-title">
          <Emoji symbol="📔" label="notes" /> Blog
        </h1>

        {data.allMarkdownRemark.edges.map(blog => (
          // The contents
          <Link to={blog.node.frontmatter.path}>
            <div key={blog.node.id} className="blog-wrapper">
            <h5 className="blog-date">{blog.node.frontmatter.date}</h5>
            <h1>
              {blog.node.frontmatter.title}
            </h1>
            <div className="tags-wrapper">
              <p>
                {blog.node.frontmatter.tags.map(tag => (
                  <span>{tag}</span>
                ))}
              </p>
            </div>
          </div>
          </Link>
          
        ))}
      </div>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}){
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                tags
                id
              }
            }
          }
        }
      }
    `}
    render={data => <BlogHome data={data} {...props} />}
  />
)
