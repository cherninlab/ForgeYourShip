# Astroship Telegram Mini App Setup

This document explains how to run Astroship as a Telegram Mini App in production, develop it locally, and validate it with Playwright.

## BotFather Setup

Use BotFather in production because the Telegram test environment is not working reliably on your machine.

Core BotFather flow:

1. Create or reuse your bot with `/newbot`
2. Create the Mini App with `/newapp`
3. Set the production HTTPS URL as the Mini App URL
4. Optionally use `/setmenubutton` to expose Astroship from the bot chat menu

## Recommended Mini App Metadata

### App title

`Astroship`

### Short description

`Build and evolve your own starship in a shared Telegram galaxy.`

### Full description

`Astroship is a Telegram Mini App prototype for a spaceship progression game focused on visible ship transformation, captain identity, and social competition. Upgrade your vessel, shape its silhouette, and prepare for a shared galaxy of fleets, rankings, and prestige.`

### Menu button text

`Open Astroship`

### Suggested start parameter

`launch`

## Production Mini App URL

Set this to the deployed Cloudflare Workers URL for Astroship.

`https://astroship.cherninlab.workers.dev`

## Local Development

Start the local app:

```bash
pnpm dev
```

Or bind explicitly to the standard local Mini App port:

```bash
pnpm exec wrangler dev --ip 127.0.0.1 --port 8787
```

Local app URL:

`http://127.0.0.1:8787`

The Telegram Mini Apps docs note that production BotFather links must use HTTPS, while local development often starts from a local or tunneled URL. For production, always use the deployed Cloudflare URL.

Sources:
- [Test Environment](https://docs.telegram-mini-apps.com/platform/test-environment)
- [Debugging](https://docs.telegram-mini-apps.com/platform/debugging)
- [Creating New App](https://docs.telegram-mini-apps.com/platform/creating-new-app)
- [Getting App Link](https://docs.telegram-mini-apps.com/platform/getting-app-link)

## Debugging In Telegram Desktop Beta

Telegram Mini Apps debugging guide:

1. Install Telegram Desktop Beta
2. Open `Settings > Advanced`
3. Open `Experimental settings`
4. Enable `Enable webview inspecting`
5. Open Astroship inside Telegram
6. Right-click inside the Mini App and choose `Inspect`

## Local Playwright Test Suite

Install Playwright browser binaries:

```bash
pnpm exec playwright install chromium
```

If your `C:` drive is tight on space, store Playwright browsers on another drive first:

```bash
$env:PLAYWRIGHT_BROWSERS_PATH="E:\playwright-browsers"
pnpm exec playwright install chromium
```

Run the end-to-end suite:

```bash
pnpm test:e2e
```

This suite mocks `window.Telegram.WebApp` and verifies that Astroship boots with Telegram Mini App context against the local Wrangler server.

## Secrets

Do not commit Telegram tokens to the repository.

For local-only secrets, use an ignored file such as:

- `.dev.vars`
- `.env.local`

Suggested local variables for future server-side Telegram work:

```dotenv
TELEGRAM_BOT_TOKEN=your_token_here
TELEGRAM_BOT_USERNAME=your_bot_username_here
```
