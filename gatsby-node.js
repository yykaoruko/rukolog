/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const tagPage = path.resolve(`./src/templates/tagPage/index.js`)

// Generate post page
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postPage = path.resolve("src/templates/postPage/index.js")
  const markdownQueryResult = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                tags
                date
                slug
              }
            }
          }
        }
      }
    `
  )

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors)
    throw markdownQueryResult.errors
  }

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges

  // generate post page
  postsEdges.forEach((edge, index) => {
    createPage({
      path: `/posts/${edge.node.frontmatter.slug}`,
      component: postPage,
      context: {
        id: edge.node.id,
      },
    })
  })

  // generate posts page to paginate
  const postsPerPage = 12
  const numPages = Math.ceil(postsEdges.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/postsPage/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // generate tag page
  const allTags = postsEdges
    .map(edge => edge.node.frontmatter.tags)
    .reduce((a, c) => {
      return a.concat(c)
    }, [])
  tags = Array.from(new Set(allTags))
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}/`,
      component: tagPage,
      context: {
        tag: tag,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
