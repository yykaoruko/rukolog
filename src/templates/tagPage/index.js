import React from "react"

import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Posts from "../../components/posts"
import Styles from "./index.module.scss"

const IndexPage = ({ data, pageContext }) => (
  <Layout>
    <SEO
      description={`#${pageContext.tag} に関する投稿一覧です。`}
      title={`#${pageContext.tag}`}
    />
    <div className={Styles.posts}>
      <h2 className={Styles.posts__heading}>
        <span className={Styles.posts__heading__text}># {pageContext.tag}</span>
      </h2>
      <Posts posts={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
