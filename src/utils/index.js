const isArticle = post => post.fileAbsolutePath.split('/').includes('articles');

const isDefinition = post =>
  post.fileAbsolutePath.split('/').includes('definitions');

module.exports = {
  isArticle,
  isDefinition,
};
