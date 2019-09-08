import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../Layout';

export default ({ data }) => {
  const { allMarkdownRemark: posts } = data;
  const isDefinition = post =>
    post.fileAbsolutePath.split('/').reverse()[1] === 'definitions';

  const definitions = posts.nodes
    .filter(isDefinition)
    .map(post => ({
      slug: post.fileAbsolutePath
        .split('/')
        .reverse()[0]
        .split('.md')[0],
      title: post.frontmatter.title,
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const letters = Array.from(
    new Set(definitions.map(definition => definition.slug[0]))
  );

  return (
    <Layout title="Définitions">
      <div className="definition-list">
        {letters.map(letter => {
          return (
            <div key={letter}>
              <h2 className="definition-list__title">{letter}</h2>
              {definitions
                .filter(definition => definition.slug[0] === letter)
                .map(({ slug, title }) => {
                  return (
                    <Link
                      className="definition-list__item"
                      to={'/definitions/' + slug}
                      key={slug}
                    >
                      <h2 className="definition-list__item-title">{title}</h2>
                    </Link>
                  );
                })}
            </div>
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
        }
      }
    }
  }
`;
