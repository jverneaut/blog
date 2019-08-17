import React from "react"
import { graphql, Link } from "gatsby"
import moment from "moment"

import Layout from "../Layout"

export default ({ data }) => {
  const { allMarkdownRemark: posts } = data

  return (
    <Layout title="Accueil">
      <div className="post-list">
        {posts.nodes.map(post => {
          const slug = post.fileAbsolutePath
            .split("/")
            .reverse()[0]
            .split(".md")[0]

          return (
            <Link className="post-list__item" to={"/" + slug} key={slug}>
              <h2 className="post-list__title">{post.frontmatter.title}</h2>
              <span className="post-list__date">
                {moment(post.frontmatter.date)
                  .fromNow()
                  .split("")
                  .map((letter, index) =>
                    index === 0 ? letter.toUpperCase() : letter
                  )
                  .join("")}
              </span>
              <p className="post-list__excerpt">{post.excerpt}</p>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fileAbsolutePath
        excerpt
        frontmatter {
          title
          date
        }
      }
    }
  }
`
