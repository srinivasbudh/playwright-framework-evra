import { defineConfig, devices } from '@playwright/test';

// Function to get the appropriate device configuration based on the browser
function getDeviceConfig(browser: string) {
  switch (browser) {
    case 'chromium':
      return devices['Desktop Chrome'];
    case 'firefox':
      return devices['Desktop Firefox'];
    case 'webkit':
      return devices['Desktop Safari'];
    default:
      throw new Error(`Unsupported browser: ${browser}`);
  }
}

export default defineConfig({
  timeout: 60000,
  testDir: './playwright/tests/',
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: [ ["html"], ["github"]],
  use: {
    baseURL: 'https://evra.geophy.com',
    headless: true,
    trace: 'on-first-retry', // Collect trace when retrying the failed test
    screenshot: 'only-on-failure', // Take screenshot only on failure
    video: 'off' // Disable video recording
  },
  projects: [
    {
      name: 'chromium',
      use: { ...getDeviceConfig('chromium') },
    },
  ],
});
