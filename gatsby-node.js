const path = require('path');

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

  const isArticle = post =>
    post.fileAbsolutePath.split('/').reverse()[1] === 'articles';

  const isDefinition = post =>
    post.fileAbsolutePath.split('/').reverse()[1] === 'definitions';

  posts.filter(isArticle).forEach(post => {
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

  posts.filter(isDefinition).forEach(post => {
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
