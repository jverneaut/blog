import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"

export default ({ data }) => {
  const { markdownRemark: post } = data
  const { html } = post

  return (
    <Layout title={post.frontmatter.title}>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
    </Layout>
  )
}

export const query = graphql`
  query($filename: String!) {
    markdownRemark(fileAbsolutePath: { eq: $filename }) {
      html
      frontmatter {
        title
      }
    }
  }
`
