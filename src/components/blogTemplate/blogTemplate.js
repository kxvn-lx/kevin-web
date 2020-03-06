import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

export default function blogTemplate({data}) {
    const blog = data.markdownRemark

    return (
        <div>
            <Link to="/blog">Back</Link>
            <hr />

            <h1>{blog.frontmatter.title}</h1>
            <h4>Posted by {blog.frontmatter.author} on {blog.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: blog.html}}/>
        </div>
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
            }
        }
    }
`

