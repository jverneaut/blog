const puppeteer = require('puppeteer');

class OGGenerator {
  constructor() {
    this.browser = null;
  }

  async init() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    this.page.setViewport({ width: 1200, height: 1200 });
  }

  generateHTML(title) {
    return `
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

        <style>
          * {
            font-family: 'Roboto', sans-serif;
            text-align: center;
          }

          body {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10vw;
            box-sizing: border-box;
          }

          h1 {
            font-size: 64px;
            font-weight: bold;
          }

          div {
            display: block;
            content: '';
            height: 4px;
            width: 132px;
            background: #4263eb;
          }

          h2 {
            font-size: 32px;
            font-weight: 400;
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <div></div>
        <h2>Julien VERNEAUT</h2>
      </body>
    </html>
    `;
  }

  async generate(title, path) {
    await this.page.setContent(this.generateHTML(title));
    await this.page.screenshot({ path });
  }
}

module.exports = OGGenerator;
