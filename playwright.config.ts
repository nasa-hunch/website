import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build && pnpm exec dotenv node build',
		port: 3000,
		reuseExistingServer: true
	},
	reporter: 'html',
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
