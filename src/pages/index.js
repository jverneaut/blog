import React from 'react';
import { graphql, Link } from 'gatsby';
import moment from 'moment';

import Layout from '../Layout';

export default ({ data }) => {
  const { allMarkdownRemark: posts } = data;
  const isArticle = post =>
    post.fileAbsolutePath.split('/').reverse()[1] === 'articles';

  return (
    <Layout title="Accueil">
      <div className="post-list">
        {posts.nodes.filter(isArticle).map(post => {
          const slug = post.fileAbsolutePath
            .split('/')
            .reverse()[0]
            .split('.md')[0];

          return (
            <Link className="post-list__item" to={'/' + slug} key={slug}>
              <h2 className="post-list__title">{post.frontmatter.title}</h2>
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
        fileAbsolutePath
        frontmatter {
          title
          date
        }
      }
    }
  }
`;
