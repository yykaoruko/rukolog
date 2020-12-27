import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./index.module.scss"
import { formatDate } from "../../helpers/date"

const Posts = ({ posts }) => (
  <div className={Styles.posts}>
    {posts.map(({ node }) => (
      <article key={node.id} className={Styles.posts__post}>
        <h1 className={Styles.posts__post__heading}>
          <Link to={`/posts/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h1>
        <p className={Styles.posts__post__date}>
          {formatDate(node.frontmatter.date)}
        </p>
        <p className={Styles.posts__post__description}>
          {node.frontmatter.description}
        </p>
        <ul className={Styles.posts__post__tags}>
          {node.frontmatter.tags.map(tag => (
            <li key={tag} className={Styles.posts__post__tags__tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
)

Posts.propTypes = {
  posts: PropTypes.array,
}

Posts.defaultProps = {
  posts: [],
}

export default Posts
