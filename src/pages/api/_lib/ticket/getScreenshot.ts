import { ScreenshotOptions } from 'puppeteer-core';

import getPage from '../chromium';

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
