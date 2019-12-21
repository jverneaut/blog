const path = require('path');
const utils = require('./src/utils');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fileAbsolutePath
        }
      }
    }
  `);

  const articleTemplate = path.resolve('./src/templates/article.js');
  const definitionTemplate = path.resolve('./src/templates/definition.js');

  const posts = result.data.allMarkdownRemark.nodes;

  posts.filter(utils.isArticle).forEach(post => {
    const slug = post.fileAbsolutePath
      .split('/')
      .reverse()[0]
      .split('.md')[0];

    createPage({
      component: articleTemplate,
      slug: slug,
      path: '/' + slug,
      context: { filename: post.fileAbsolutePath },
    });
  });

  posts.filter(utils.isDefinition).forEach(post => {
    const slug = post.fileAbsolutePath
      .split('/')
      .reverse()[0]
      .split('.md')[0];

    createPage({
      component: definitionTemplate,
      slug: slug,
      path: '/definitions/' + slug,
      context: { filename: post.fileAbsolutePath },
    });
  });
};
