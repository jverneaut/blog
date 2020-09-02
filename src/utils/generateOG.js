const puppeteer = require('puppeteer');

class OGGenerator {
  constructor() {
    this.browser = null;
  }

  async init() {
    this.browser = await puppeteer.launch();
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
            margin: 0;
            padding: 0;
          }

          body {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3vw;
            box-sizing: border-box;
          }

          h1 {
            font-size: 92px;
            font-weight: bold;
          }

          div {
            display: block;
            content: '';
            height: 6px;
            width: 132px;
            background: #4263eb;
            margin: 40px 0;
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
    const page = await this.browser.newPage();
    page.setViewport({ width: 1200, height: 1200 });
    await page.setContent(this.generateHTML(title));
    await page.screenshot({ path });
    await page.close();
  }
}

module.exports = OGGenerator;
