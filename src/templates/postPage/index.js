import React from "react"

import { Link, graphql } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PostPage = ({ data }) => (
  <Layout>
    <SEO title="Post" />
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <time>{data.markdownRemark.frontmatter.date}</time>
      <p>{data.markdownRemark.frontmatter.tags}</p>
      <p>{data.markdownRemark.frontmatter.slug}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
    <Link to="/">Back to the home</Link>
  </Layout>
)

export default PostPage

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        date
        tags
        slug
      }
      html
    }
  }
`;
