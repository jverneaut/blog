import React from 'react';
import { graphql, Link } from 'gatsby';
import moment from 'moment';

import Layout from '../Layout';

export default ({ data }) => {
  const { allMarkdownRemark: posts } = data;

  return (
    <Layout title="Accueil">
      <div className="post-list">
        {posts.nodes.map(post => {
          return (
            <Link
              className="post-list__item"
              to={'/' + post.frontmatter.path}
              key={post.frontmatter.path}
            >
              <h2 className="post-list__title">{post.frontmatter.title}</h2>
              <p>{post.excerpt}</p>
              <span className="post-list__date">
                {moment(post.frontmatter.date).format('D MMMM YYYY')}
              </span>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          date
          path
        }
      }
    }
  }
`;
