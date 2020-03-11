import React from "react"

import { Link, graphql } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({ data, pageContext }) => (
  <Layout>
    <SEO title="Posts" />
    <div>{
      data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <h1>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h1>
          <p>{node.frontmatter.description}</p>
          <time>{node.frontmatter.date}</time>
        </article>
      ))
    }</div>
    <ul>{
      Array.from({ length: pageContext.numPages }).map((_, i) => (
        <li>
          <Link key={i + 1} to={`/${i + 1}`}>{i + 1}</Link>
        </li>
      ))
    }</ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            description
            date
          }
        }
      }
    }
  }
`;
