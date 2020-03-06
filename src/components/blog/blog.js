import React from "react"
import { Link } from "gatsby"

// Components
import BigName from "../bigName/bigName.js"
import { StaticQuery, graphql } from "gatsby"

const BlogHome = ({ data }) => {
  return (
    <>
      <div className="main container">
        <BigName name="Latest posts" />

        {data.allMarkdownRemark.edges.map(blog => (
          <div key={blog.node.id}>
            <h3>
              <Link to={blog.node.frontmatter.path}>{blog.node.frontmatter.title}</Link>
            </h3>
            <small>
              Posted by {blog.node.frontmatter.author} on{" "}
              {blog.node.frontmatter.date}
            </small>
            <hr />
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
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                author
                author_email
              }
            }
          }
        }
      }
    `}
    render={data => <BlogHome data={data} {...props} />}
  />
)
