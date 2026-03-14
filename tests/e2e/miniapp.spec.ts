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
		const handlers = new Map();
		window.Telegram = {
			WebApp: {
				platform: "tdesktop",
				version: "8.0",
				colorScheme: "dark",
				viewportHeight: 780,
				viewportStableHeight: 760,
				contentSafeAreaInset: { top: 0, bottom: 20, left: 0, right: 0 },
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
				setBottomBarColor: () => undefined,
				onEvent: (name, handler) => handlers.set(name, handler),
				offEvent: (name) => handlers.delete(name),
				HapticFeedback: {
					impactOccurred: () => undefined,
					notificationOccurred: () => undefined,
					selectionChanged: () => undefined,
				},
			},
		};
	});
});

test("boots into portrait game screen with fixed bottom nav", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator(".top-safe-area")).toBeVisible();
	await expect(page.locator(".top-safe-area")).toHaveCSS("height", /100px|1\d\dpx/);
	await expect(page.getByText("4,872,229")).toBeVisible();
	await expect(page.getByText("+128K / hour")).toBeVisible();
	await expect(page.getByText("astroship_dev")).toBeVisible();
	await expect(page.locator(".tap-button")).toBeVisible();
	await expect(page.locator(".design-dock")).toBeVisible();
	await expect(page.locator("html")).toHaveCSS("--app-height", "760px");
});

test("tap interaction updates streak and dock switches versions", async ({ page }) => {
	await page.goto("/");

	await page.locator(".tap-button").click();
	await expect(page.getByText("streak 1")).toBeVisible();

	await page.getByRole("tab", { name: /Clan Tap/i }).click();
	await expect(page.getByRole("tab", { name: /Clan Tap/i })).toHaveAttribute("aria-selected", "true");
	await expect(page.getByText("14,230,880")).toBeVisible();
	await expect(page.getByText("Clan Rank Diamond")).toBeVisible();
});
