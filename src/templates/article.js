import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import { Link } from 'gatsby';

import Layout from '../Layout';

export default ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { html, frontmatter } = post;
  const { title, date } = frontmatter;

  return (
    <Layout title={post.frontmatter.title} slug={post.frontmatter.path}>
      {post.frontmatter.cover && (
        <div className="post-cover">
          <img src={post.frontmatter.cover.publicURL} alt="" />
        </div>
      )}
      <span className="article__date">
        {moment(date).format('D MMMM YYYY')}
      </span>
      <article
        dangerouslySetInnerHTML={{
          __html: `<h1>${title}</h1>` + html,
        }}
      ></article>
      {pageContext.previous && (
        <Link
          className="post-list__item"
          to={'/' + pageContext.previous.frontmatter.path}
          key={pageContext.previous.frontmatter.path}
        >
          <h2 className="post-list__title">
            {pageContext.previous.frontmatter.title}
          </h2>
          <p>{pageContext.previous.excerpt}</p>
          <span className="post-list__date">
            {moment(pageContext.previous.frontmatter.date).format(
              'D MMMM YYYY'
            )}
          </span>
        </Link>
      )}
      {pageContext.next && (
        <Link
          className="post-list__item"
          to={'/' + pageContext.next.frontmatter.path}
          key={pageContext.next.frontmatter.path}
        >
          <h2 className="post-list__title">
            {pageContext.next.frontmatter.title}
          </h2>
          <p>{pageContext.next.excerpt}</p>
          <span className="post-list__date">
            {moment(pageContext.next.frontmatter.date).format('D MMMM YYYY')}
          </span>
        </Link>
      )}
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
        cover {
          publicURL
        }
      }
    }
  }
`;
