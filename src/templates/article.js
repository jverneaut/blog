import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../Layout';
import { isDefinition } from '../utils';
import { Disqus } from 'gatsby-plugin-disqus';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { html, frontmatter } = post;
  const { title, date } = frontmatter;

  const { allMarkdownRemark: posts } = data;
  const definitions = posts.nodes.filter(isDefinition);
  console.log(definitions);

  const disqusConfig = {
    identifier: post.id,
    title: post.title,
  };

  return (
    <Layout title={post.frontmatter.title}>
      <span className="article__date">
        {moment(date).format('D MMMM YYYY')}
      </span>

      <article
        dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1>` + html }}
      ></article>
      <Disqus config={disqusConfig} />
    </Layout>
  );
};

export const query = graphql`
  query($filename: String!) {
    markdownRemark(fileAbsolutePath: { eq: $filename }) {
      html
      id
      frontmatter {
        title
        date
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
        }
      }
    }
  }
`;
