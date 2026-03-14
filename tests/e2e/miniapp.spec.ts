import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.route("https://telegram.org/js/telegram-web-app.js", async (route) => {
		await route.fulfill({
			status: 200,
			contentType: "application/javascript",
			body: "",
		});
	});

	await page.addInitScript(() => {
		window.Telegram = {
			WebApp: {
				platform: "tdesktop",
				version: "8.0",
				colorScheme: "dark",
				initData:
					"query_id=test-query&user=%7B%22id%22%3A1%2C%22first_name%22%3A%22Codex%22%2C%22username%22%3A%22astroship_dev%22%7D&auth_date=0&hash=test",
				initDataUnsafe: {
					start_param: "playwright",
					user: {
						id: 1,
						first_name: "Codex",
						username: "astroship_dev",
					},
				},
				ready: () => undefined,
				expand: () => undefined,
				setHeaderColor: () => undefined,
				setBackgroundColor: () => undefined,
			},
		};
	});
});

test("boots with version selector and Telegram Mini App context", async ({ page }) => {
	await page.goto("/");

	await expect(page.getByRole("heading", { name: "Five actually different first-page directions." })).toBeVisible();
	await expect(page.getByLabel("Runtime information").getByText("astroship_dev")).toBeVisible();
	await expect(page.getByText("start: playwright")).toBeVisible();
	await expect(page.getByRole("tab", { name: /Version 01/i })).toHaveAttribute("aria-selected", "true");
	await expect(page.getByRole("heading", { name: /Open Astroship like a cinematic mission briefing/i })).toBeVisible();
});

test("switches to another landing page version", async ({ page }) => {
	await page.goto("/");

	await page.getByRole("tab", { name: /Version 05/i }).click();
	await expect(page.getByRole("tab", { name: /Version 05/i })).toHaveAttribute("aria-selected", "true");
	await expect(page.getByRole("heading", { name: /Launch the game like an event drop/i })).toBeVisible();
	await expect(page.getByText("Season zero opens")).toBeVisible();
});

