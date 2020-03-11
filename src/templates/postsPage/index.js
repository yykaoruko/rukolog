import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Styles from "./index.module.scss"
import { formatDate } from "../../helpers/date"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <div className={Styles.posts}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id} className={Styles.posts__post}>
          <h1 className={Styles.posts__post__heading}>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h1>
          <p className={Styles.posts__post__description}>
            {node.frontmatter.description}
          </p>
          <time className={Styles.posts__post__date}>
            {formatDate(node.frontmatter.date)}
          </time>
          <ul className={Styles.posts__post__tags}>
            {node.frontmatter.tags.map(tag => (
              <li key={tag} className={Styles.posts__post__tags__tag}>
                {tag}
              </li>
            ))}
          </ul>
        </article>
      ))}
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
