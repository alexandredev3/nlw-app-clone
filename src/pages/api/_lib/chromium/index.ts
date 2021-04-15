import chromium from 'chrome-aws-lambda';
import {
  Browser,
  LaunchOptions,
  Page,
  ScreenshotOptions,
} from 'puppeteer-core';

import getOptions from './chromiumOptions';

let _page: Page;
let _browser: Browser;

async function lauchChromium(options?: LaunchOptions): Promise<Browser> {
  if (_browser) return _browser;

  const chromiumOptions = await getOptions(options);

  const browser = await chromium.puppeteer.launch(chromiumOptions);

  _browser = browser;

  return browser;
}

async function getPage() {
  if (_page) return _page;

  const page = await (await lauchChromium()).newPage();

  _page = page;

  return page;
}

export default async function getScreenshot(
  html: string,
  options: ScreenshotOptions
): Promise<string | void | Buffer> {
  const page = await getPage();

  await page.setViewport({ width: 1280, height: 630 });
  await page.setContent(html);

  const screenshot = await page.screenshot(options);

  return screenshot;
}
