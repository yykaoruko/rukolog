import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import TableOfContents from "../../components/tableOfContents"
import SEO from "../../components/seo"
import Styles from "./index.module.scss"
import { formatDate } from "../../helpers/date"

const PostPage = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <div>
      <div className={Styles.post}>
        <div className={Styles.post__wrap}>
          <h1 className={Styles.post__wrap__heading}>
            {data.markdownRemark.frontmatter.title}
          </h1>
          <time className={Styles.post__wrap__date}>
            {formatDate(data.markdownRemark.frontmatter.date)}
          </time>
          <ul className={Styles.post__wrap__tags}>
            {data.markdownRemark.frontmatter.tags.map(tag => (
              <li key={tag} className={Styles.post__wrap__tags__tag}>
                <Link to={`/tags/${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={Styles.wrap}>
        <TableOfContents contents={data.markdownRemark.tableOfContents} />
        <div
          className={Styles.markdown}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <Link to="/">Back to main page</Link>
      </div>
    </div>
  </Layout>
)

export default PostPage

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
        slug
      }
      html
      tableOfContents(absolute: false, maxDepth: 1)
    }
  }
`
