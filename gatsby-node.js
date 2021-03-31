const path = require('path');
const OGGenerator = require('./src/utils/generateOG');

let ogGenerator;
if (process.env.NODE_ENV !== 'development') {
  ogGenerator = new OGGenerator();
  ogGenerator.init();
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            path
          }
        }
      }
    }
  `);

  const articleTemplate = path.resolve('./src/templates/article.js');

  const posts = result.data.allMarkdownRemark.nodes;

  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  const sequentiallyExecuting = promises => {
    let promise = Promise.resolve();
    promises.forEach(task => {
      promise = promise.then(data => {
        return task;
      });
    });

    return promise;
  };

  // Generate OG Images
  sequentiallyExecuting(
    posts.map(post => {
      if (process.env.NODE_ENV !== 'development') {
        return new Promise(async resolve => {
          await ogGenerator.generate(
            post.frontmatter.title,
            'public/' + post.frontmatter.path + '.jpg'
          );
          resolve();
        });
      } else {
        return;
      }
    })
  );

  posts.forEach(async post => {
    createPage({
      component: articleTemplate,
      slug: post.frontmatter.path,
      path: '/' + post.frontmatter.path,
      context: { slug: post.frontmatter.path },
    });
  });
};
