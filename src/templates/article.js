import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../Layout';
import { Disqus } from 'gatsby-plugin-disqus';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { html, frontmatter, fileAbsolutePath } = post;
  const { title, date } = frontmatter;

  const slug = fileAbsolutePath
    .split('/')
    .reverse()[0]
    .split('.md')[0];

  const disqusConfig = {
    identifier: post.id,
    title: post.title,
  };

  return (
    <Layout title={post.frontmatter.title} slug={slug}>
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
      fileAbsolutePath
      html
      id
      frontmatter {
        title
        date
      }
    }
  }
`;
