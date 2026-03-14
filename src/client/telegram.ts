type TelegramUser = {
	id: number;
	first_name?: string;
	last_name?: string;
	username?: string;
	language_code?: string;
};

type TelegramWebApp = {
	initData?: string;
	initDataUnsafe?: {
		user?: TelegramUser;
		start_param?: string;
	};
	version?: string;
	platform?: string;
	colorScheme?: "light" | "dark";
	themeParams?: Record<string, string>;
	ready?: () => void;
	expand?: () => void;
	setHeaderColor?: (color: string) => void;
	setBackgroundColor?: (color: string) => void;
};

declare global {
	interface Window {
		Telegram?: {
			WebApp?: TelegramWebApp;
		};
	}
}

export function getTelegramWebApp() {
	return window.Telegram?.WebApp;
}

export function initTelegramMiniApp() {
	const webApp = getTelegramWebApp();
	if (!webApp) {
		return null;
	}

	webApp.ready?.();
	webApp.expand?.();
	webApp.setHeaderColor?.("#08111f");
	webApp.setBackgroundColor?.("#08111f");
	return webApp;
}
