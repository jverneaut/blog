import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../Layout';
import { Disqus } from 'gatsby-plugin-disqus';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { html, frontmatter, tableOfContents } = post;
  const { title, date } = frontmatter;

  const disqusConfig = {
    identifier: post.id,
    title: post.title,
  };

  return (
    <Layout title={post.frontmatter.title} slug={post.frontmatter.path}>
      <span className="article__date">
        {moment(date).format('D MMMM YYYY')}
      </span>
      <article
        dangerouslySetInnerHTML={{
          __html: `<h1>${title}</h1>${tableOfContents}` + html,
        }}
      ></article>
      <Disqus config={disqusConfig} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      id
      tableOfContents(pathToSlugField: "frontmatter.path")
      frontmatter {
        title
        date
        path
      }
    }
  }
`;
