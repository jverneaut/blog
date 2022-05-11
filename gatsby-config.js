module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://blog.julienverneaut.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: `https://blog.julienverneaut.com`,
        graphQLQuery: `
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                html
                frontmatter {
                  title
                  date
                  path
                }
              }
            }
          }
        }`,
        serializeFeed: results =>
          results.data.allMarkdownRemark.edges.map(({ node }) => {
            return {
              path: '/' + node.frontmatter.path,
              title: node.frontmatter.title,
              created: node.frontmatter.date,
              html: node.html,
            };
          }),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          `gatsby-remark-embed-gist`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                table: 'article-table',
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto Mono`],
        display: `swap`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `blog-julien-verneaut`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-crisp-chat`,
      options: {
        websiteId: `5a133305-3328-41f8-bc2a-813281983174`,
        enableDuringDevelop: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/favicon.svg`,
      },
    },
  ],
};
