const path = require('path');
const utils = require('./src/utils');
const OGGenerator = require('./src/utils/generateOG');

const ogGenerator = new OGGenerator();
ogGenerator.init();

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const articleTemplate = path.resolve('./src/templates/article.js');
  const definitionTemplate = path.resolve('./src/templates/definition.js');

  const posts = result.data.allMarkdownRemark.nodes;

  // This is ugly, sorry mom & dad
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  // Generate OG Images
  await Promise.all(
    posts.filter(utils.isArticle).map(post => {
      const slug = post.fileAbsolutePath
        .split('/')
        .reverse()[0]
        .split('.md')[0];

      return new Promise(async resolve => {
        await ogGenerator.generate(
          post.frontmatter.title,
          'public/' + slug + '.jpg'
        );
        resolve();
      });
    })
  );

  posts.filter(utils.isArticle).forEach(async post => {
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
