import chromium from 'chrome-aws-lambda';
import {
  BrowserConnectOptions,
  BrowserLaunchArgumentOptions,
  LaunchOptions,
} from 'puppeteer-core';

type LaunchChromiumOptions = LaunchOptions &
  BrowserLaunchArgumentOptions &
  BrowserConnectOptions;

type Options = LaunchChromiumOptions & {
  args: string[];
};

// eslint-disable-next-line prefer-destructuring
const NODE_ENV = process.env.NODE_ENV;

const chromeExecPaths = {
  win32: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
};

const execPath = chromeExecPaths[process.platform];

const getOptions = async (
  launchOptions: LaunchChromiumOptions
): Promise<Options> => {
  let options: Options;

  const isDev = NODE_ENV === 'development';

  if (isDev) {
    const developmentOptions: Options = {
      args: [],
      executablePath: execPath,
      headless: true,
      ...launchOptions,
    };

    options = developmentOptions;
  } else {
    const productionOptions: Options = {
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ...launchOptions,
    };

    options = productionOptions;
  }

  return options;
};

export default getOptions;
