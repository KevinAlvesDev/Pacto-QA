/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 300000,
  use: {
    headless: true,
  },
};
module.exports = config;
