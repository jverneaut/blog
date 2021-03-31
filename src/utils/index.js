const isArticle = post => post.fileAbsolutePath.split('/').includes('articles');

module.exports = {
  isArticle,
};
