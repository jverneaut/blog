const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fileAbsolutePath
        }
      }
    }
  `)

  const template = path.resolve("./src/templates/article.js")

  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach(post => {
    const slug = post.fileAbsolutePath
      .split("/")
      .reverse()[0]
      .split(".md")[0]

    createPage({
      component: template,
      slug: slug,
      path: "/" + slug,
      context: { filename: post.fileAbsolutePath },
    })
  })
}
