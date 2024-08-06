import { devices, PlaywrightTestConfig } from '@playwright/test';

const actionTimeout = 10000; // 10 seconds
const testTimeout = 30000; // 30 seconds

interface TestConfig extends PlaywrightTestConfig {
  baseURL: string;
  defaultTimeout: number;
}

const config: TestConfig = {
  baseURL: 'https://thinking-tester-contact-list.herokuapp.com/',
  defaultTimeout: actionTimeout,
  timeout: testTimeout,
  expect: {
    timeout: actionTimeout,
  },
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      ignoreDefaultArgs: ['--hide-scrollbars'],
    },
  },
  projects: [
    {
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        actionTimeout: actionTimeout,
      },
    },
  ],
};

export default config;
