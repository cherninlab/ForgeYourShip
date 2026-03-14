type TelegramUser = {
	id: number;
	first_name?: string;
	last_name?: string;
	username?: string;
	language_code?: string;
};

type SafeAreaInset = {
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
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
	viewportHeight?: number;
	viewportStableHeight?: number;
	safeAreaInset?: SafeAreaInset;
	contentSafeAreaInset?: SafeAreaInset;
	ready?: () => void;
	expand?: () => void;
	setHeaderColor?: (color: string) => void;
	setBackgroundColor?: (color: string) => void;
	setBottomBarColor?: (color: string) => void;
	onEvent?: (event: string, handler: (...args: unknown[]) => void) => void;
	offEvent?: (event: string, handler: (...args: unknown[]) => void) => void;
	HapticFeedback?: {
		impactOccurred?: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => void;
		notificationOccurred?: (type: "error" | "success" | "warning") => void;
		selectionChanged?: () => void;
	};
};

declare global {
	interface Window {
		Telegram?: {
			WebApp?: TelegramWebApp;
		};
	}
}

function applyViewportVars(webApp: TelegramWebApp) {
	const root = document.documentElement;
	const stableHeight = webApp.viewportStableHeight ?? webApp.viewportHeight;
	if (stableHeight) {
		root.style.setProperty("--app-height", `${stableHeight}px`);
	}

	const safe = webApp.contentSafeAreaInset ?? webApp.safeAreaInset;
	if (safe) {
		root.style.setProperty("--app-safe-top", `${safe.top ?? 0}px`);
		root.style.setProperty("--app-safe-bottom", `${safe.bottom ?? 0}px`);
		root.style.setProperty("--app-safe-left", `${safe.left ?? 0}px`);
		root.style.setProperty("--app-safe-right", `${safe.right ?? 0}px`);
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
	webApp.setBottomBarColor?.("#08111f");
	applyViewportVars(webApp);

	const syncViewport = () => applyViewportVars(webApp);
	webApp.onEvent?.("viewportChanged", syncViewport);
	webApp.onEvent?.("safeAreaChanged", syncViewport);
	webApp.onEvent?.("contentSafeAreaChanged", syncViewport);

	return webApp;
}

export function triggerSelectionHaptic() {
	getTelegramWebApp()?.HapticFeedback?.selectionChanged?.();
}

export function triggerTapHaptic() {
	getTelegramWebApp()?.HapticFeedback?.impactOccurred?.("soft");
}
