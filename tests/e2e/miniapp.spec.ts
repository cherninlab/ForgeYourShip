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

test("boots into game-first home UI with bottom design dock", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator(".top-safe-area")).toBeVisible();
	await expect(page.locator(".top-safe-area")).toHaveCSS("height", /100px|1\d\dpx/);
	await expect(page.getByText("Charge the flagship and launch your first run.")).toBeVisible();
	await expect(page.getByText("astroship_dev")).toBeVisible();
	await expect(page.getByRole("tab", { name: /Fleet Tap/i })).toHaveAttribute("aria-selected", "true");
	await expect(page.locator(".design-dock")).toBeVisible();
});

test("switches concepts from the bottom dock", async ({ page }) => {
	await page.goto("/");

	await page.getByRole("tab", { name: /Clan Throne/i }).click();
	await expect(page.getByRole("tab", { name: /Clan Throne/i })).toHaveAttribute("aria-selected", "true");
	await expect(page.getByText("Turn the home screen into a social power fantasy.")).toBeVisible();
	await expect(page.getByRole("button", { name: /Claim throne/i })).toBeVisible();
});
