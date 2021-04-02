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
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
            excerpt
          }
          next {
            frontmatter {
              path
              title
            }
            excerpt
          }
        }
      }
    }
  `);

  const articleTemplate = path.resolve('./src/templates/article.js');

  const posts = result.data.allMarkdownRemark.edges;

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
            post.node.frontmatter.title,
            'public/' + post.node.frontmatter.path + '.jpg'
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
      slug: post.node.frontmatter.path,
      path: '/' + post.node.frontmatter.path,
      context: {
        slug: post.node.frontmatter.path,
        previous: post.previous || null,
        next: post.next || null,
      },
    });
  });
};
