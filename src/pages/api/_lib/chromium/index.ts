import chromium from 'chrome-aws-lambda';
import { Browser, LaunchOptions, Page } from 'puppeteer-core';

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

export default async function getPage(): Promise<Page> {
  if (_page) return _page;

  const page = await (await lauchChromium()).newPage();

  _page = page;

  return page;
}
