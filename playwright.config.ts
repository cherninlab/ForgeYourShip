import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "./tests/e2e",
	timeout: 30_000,
	use: {
		baseURL: "http://127.0.0.1:8787",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
		video: "retain-on-failure",
		viewport: { width: 390, height: 844 },
		isMobile: true,
		hasTouch: true,
		deviceScaleFactor: 2.75,
		userAgent:
			"Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-A556B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
	},
	projects: [
		{
			name: "galaxy-a55-portrait",
		},
	],
});
