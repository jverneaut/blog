import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../Layout';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { html, frontmatter } = post;
  const { title, date } = frontmatter;

  return (
    <Layout title={post.frontmatter.title}>
      <span className="article__date">
        {moment(date).format('D MMMM YYYY')}
      </span>

      <article
        dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1>` + html }}
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
        date
      }
    }
  }
`;
