import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { html, frontmatter } = post;
  const { title } = frontmatter;

  return (
    <Layout title={post.frontmatter.title}>
      <article
        dangerouslySetInnerHTML={{
          __html: `<h1>Définition : ${title}</h1>` + html,
        }}
      ></article>
    </Layout>
  );
};

export const query = graphql`
  query($filename: String!) {
    markdownRemark(fileAbsolutePath: { eq: $filename }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
