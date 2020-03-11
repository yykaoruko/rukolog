import React from "react"

import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Posts from "../../components/posts"
import Styles from "./index.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="ログ" />
    <div className={Styles.posts}>
      <Posts posts={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
            tags
          }
        }
      }
    }
  }
`
