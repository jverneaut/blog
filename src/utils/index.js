const isArticle = post =>
  post.fileAbsolutePath.split('/').reverse()[1] === 'articles';

const isDefinition = post =>
  post.fileAbsolutePath.split('/').reverse()[1] === 'definitions';

module.exports = {
  isArticle,
  isDefinition,
};
