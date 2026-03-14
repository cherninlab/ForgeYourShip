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

test("boots into hamster-like game home layout", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator(".top-safe-area")).toBeVisible();
	await expect(page.locator(".top-safe-area")).toHaveCSS("height", /100px|1\d\dpx/);
	await expect(page.getByText("4,872,229")).toBeVisible();
	await expect(page.getByText("+128K / hour")).toBeVisible();
	await expect(page.getByText("astroship_dev")).toBeVisible();
	await expect(page.getByRole("tab", { name: /Tap Bridge/i })).toHaveAttribute("aria-selected", "true");
	await expect(page.locator(".design-dock")).toBeVisible();
});

test("switches concepts from the bottom dock", async ({ page }) => {
	await page.goto("/");

	await page.getByRole("tab", { name: /Clan Tap/i }).click();
	await expect(page.getByRole("tab", { name: /Clan Tap/i })).toHaveAttribute("aria-selected", "true");
	await expect(page.getByText("14,230,880")).toBeVisible();
	await expect(page.getByText("Clan Rank Diamond")).toBeVisible();
});
