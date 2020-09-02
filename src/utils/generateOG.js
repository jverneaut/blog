const puppeteer = require('puppeteer');

class OGGenerator {
  constructor() {
    this.browser = null;
  }

  async init() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
  }

  generateHTML(title) {
    return `<h1>${title}</h1>`;
  }

  async generate(title, path) {
    this.page.setContent(this.generateHTML(title));
    await this.page.screenshot({ path });
  }
}

module.exports = OGGenerator;
