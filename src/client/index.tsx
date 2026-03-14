import "./styles.css";

import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import { initTelegramMiniApp, triggerSelectionHaptic, triggerTapHaptic } from "./telegram";

type VersionId = "v1" | "v2" | "v3" | "v4" | "v5";
type TapBurst = { id: number; x: number; y: number };

type VersionDefinition = {
	id: VersionId;
	name: string;
	nav: string;
	balanceLabel: string;
	balance: string;
	income: string;
	level: string;
	hook: string;
	cards: Array<{ label: string; value: string }>;
};

const versions: VersionDefinition[] = [
	{
		id: "v1",
		name: "Salvage Ship",
		nav: "Ship",
		balanceLabel: "Salvage balance",
		balance: "4,872,229",
		income: "+128K / hour",
		level: "Hangar Lv. 29",
		hook: "Main salvage rig online",
		cards: [
			{ label: "Thrust", value: "210K" },
			{ label: "Core", value: "480K" },
			{ label: "Scan", value: "90K" },
		],
	},
	{
		id: "v2",
		name: "Mission Strike",
		nav: "Mission",
		balanceLabel: "Strike bounty",
		balance: "8,104,910",
		income: "+241K / hour",
		level: "Boss Rank 12",
		hook: "Bounty live in sector D-9",
		cards: [
			{ label: "Bounty", value: "380K" },
			{ label: "Timer", value: "04:12" },
			{ label: "Squad", value: "+18%" },
		],
	},
	{
		id: "v3",
		name: "Upgrade Bay",
		nav: "Upgrade",
		balanceLabel: "Upgrade budget",
		balance: "6,390,700",
		income: "+176K / hour",
		level: "Forge Lv. 17",
		hook: "Transformation bay synced",
		cards: [
			{ label: "Hull", value: "310K" },
			{ label: "Core", value: "280K" },
			{ label: "AI", value: "640K" },
		],
	},
	{
		id: "v4",
		name: "Galaxy Route",
		nav: "Galaxy",
		balanceLabel: "Route reserve",
		balance: "11,084,500",
		income: "+330K / hour",
		level: "Raid Zone D-9",
		hook: "Jump corridor open",
		cards: [
			{ label: "Route", value: "Vega" },
			{ label: "Jump", value: "Ready" },
			{ label: "Loot", value: "260K" },
		],
	},
	{
		id: "v5",
		name: "Command Rank",
		nav: "Rank",
		balanceLabel: "Prestige vault",
		balance: "14,230,880",
		income: "+522K / hour",
		level: "Clan Rank Diamond",
		hook: "Citadel prestige rising",
		cards: [
			{ label: "Clan", value: "Diamond" },
			{ label: "Tribute", value: "1.2M" },
			{ label: "Crew", value: "+31%" },
		],
	},
];

function NavGlyph({ name }: { name: string }) {
	switch (name) {
		case "Ship":
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M12 3 17 9l-2 10-3-2-3 2-2-10Z" />
					<path d="M9 13h6" />
				</svg>
			);
		case "Mission":
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<circle cx="12" cy="12" r="7" />
					<circle cx="12" cy="12" r="3" />
					<path d="M12 5v2M19 12h-2M12 19v-2M5 12h2" />
				</svg>
			);
		case "Upgrade":
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M6 7h12M6 12h12M6 17h12" />
					<path d="M9 5v4M15 10v4M12 15v4" />
				</svg>
			);
		case "Galaxy":
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<circle cx="12" cy="12" r="2.5" />
					<ellipse cx="12" cy="12" rx="9" ry="4.5" />
					<path d="M3.5 12a8.5 8.5 0 0 0 17 0" />
				</svg>
			);
		default:
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="m5 18 2-10 5 4 5-4 2 10" />
					<path d="M8 8 12 4l4 4" />
				</svg>
			);
	}
}

function ShuttleIllustration({ version }: { version: VersionDefinition }) {
	return (
		<svg viewBox="0 0 520 360" className={`ship-svg ship-${version.id}`} aria-hidden="true">
			<defs>
				<linearGradient id="hull-main" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#f5ede6" />
					<stop offset="55%" stopColor="#a38f84" />
					<stop offset="100%" stopColor="#6d5f5a" />
				</linearGradient>
				<linearGradient id="hull-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#4e4947" />
					<stop offset="100%" stopColor="#28252a" />
				</linearGradient>
				<linearGradient id="window-glass" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#151c27" />
					<stop offset="100%" stopColor="#06080d" />
				</linearGradient>
				<linearGradient id="engine-glow" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#ffd7a6" />
					<stop offset="45%" stopColor="#ff8d52" />
					<stop offset="100%" stopColor="#fff0d0" stopOpacity="0" />
				</linearGradient>
				<linearGradient id="accent-blue" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#9ee8ff" />
					<stop offset="100%" stopColor="#57a5ff" />
				</linearGradient>
				<linearGradient id="accent-pink" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#ffd2f0" />
					<stop offset="100%" stopColor="#ff5fd7" />
				</linearGradient>
				<filter id="ship-shadow" x="-20%" y="-20%" width="140%" height="160%">
					<feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000000" floodOpacity="0.42" />
				</filter>
			</defs>

			<g filter="url(#ship-shadow)">
				<path d="M88 244 96 170l98-62 144 8 58 38-10 94-86 44-152 8Z" fill="url(#hull-main)" />
				<path d="m298 120 94 34-10 94-84 44 16-92Z" fill="url(#hull-shadow)" opacity="0.9" />
				<path d="m160 144 70-42 70 6-6 34-132 14Z" fill="#cfbeb1" />
				<path d="M104 170 180 122l60 4-8 48-120 14Z" fill="#7f7677" />
				<path d="m118 190 100-12-8 56-118 10Z" fill="#34333b" />
				<path d="m130 182 82-10-7 42-86 8Z" fill="url(#window-glass)" />
				<path d="m318 154 64 20-6 62-58 28 8-52Z" fill="#2e2b31" />
				<path d="m336 168 32 10-4 38-30 14 4-32Z" fill="#151419" />
				<path d="m352 140 34 14 36 22-4 46-38 18 4-64Z" fill="#27242b" />
				<rect x="246" y="78" width="78" height="34" rx="8" fill="#a89a90" />
				<rect x="255" y="84" width="50" height="14" rx="5" fill="#5d5755" />
				<path d="m388 162 36 18 24 6-10 40-36 14z" fill="#1c1b23" />
				<path d="m436 182 44 14-4 28-36 10z" fill="#0f1118" />
				<path d="m448 194 54 14-8 8-44 10z" fill="url(#engine-glow)" />
				<path d="m430 170 42 14-4 22-38 12z" fill="#1b212b" />
				<path d="m408 186 28 8-3 28-25 10z" fill="#252833" />
				<path d="m328 198 38 8-4 32-34 14z" fill="#111217" />
				<path d="M118 244h116l62 34-128 8-80-28Z" fill="#85756e" />
				<path d="m214 168 30-8m-66 66 30-4m156-42 24 8m-28 16 24 8" className="ship-panel-line" />
				<circle cx="454" cy="182" r="10" className="engine-core" />
				<circle cx="428" cy="194" r="8" className="engine-core" />
			</g>

			{version.id === "v2" && (
				<>
					<circle cx="268" cy="184" r="126" className="mission-ring" />
					<path d="M40 186h76" className="mission-beam" />
					<path d="M404 182h76" className="mission-beam" />
				</>
			)}

			{version.id === "v3" && (
				<>
					<rect x="134" y="70" width="252" height="216" rx="34" className="forge-scaffold" />
					<circle cx="154" cy="182" r="12" className="forge-dot" />
					<circle cx="360" cy="164" r="12" className="forge-dot" />
					<circle cx="300" cy="86" r="10" className="forge-dot" />
					<path d="M154 182h-26m232-18h26m-86-78v-26" className="forge-link" />
				</>
			)}

			{version.id === "v4" && (
				<>
					<ellipse cx="248" cy="286" rx="172" ry="34" className="orbit-line" />
					<circle cx="148" cy="278" r="22" className="galaxy-node" />
					<circle cx="366" cy="270" r="18" className="galaxy-node" />
				</>
			)}

			{version.id === "v5" && (
				<>
					<path d="m248 56 18 18 18-18 16 24-34 12-34-12z" fill="url(#accent-pink)" />
					<ellipse cx="252" cy="290" rx="122" ry="22" className="rank-pedestal" />
				</>
			)}

			{version.id === "v1" && (
				<>
					<ellipse cx="250" cy="300" rx="150" ry="26" className="ship-shadow-ellipse" />
					<path d="M64 118 32 92m18 58L18 142" className="ship-star-line" />
				</>
			)}
		</svg>
	);
}

function UtilityBar({ viewer }: { viewer: string }) {
	return (
		<div className="utility-bar">
			<button type="button" className="utility-button utility-button-left" aria-label="Pilot status">
				<span className="utility-dot" />
			</button>
			<div className="utility-center">
				<span className="tiny-copy">Pilot</span>
				<strong>{viewer}</strong>
			</div>
			<button type="button" className="utility-button" aria-label="More actions">
				+
			</button>
		</div>
	);
}

function BalanceHud({ version }: { version: VersionDefinition }) {
	return (
		<div className="balance-hud">
			<div className="balance-frame-line" aria-hidden="true" />
			<p className="tiny-copy">{version.balanceLabel}</p>
			<h1>{version.balance}</h1>
			<div className="income-chip">
				<span>{version.income}</span>
				<button type="button" className="mini-plus" aria-label="Add resources">
					+
				</button>
			</div>
		</div>
	);
}

function FooterCards({ cards }: { cards: VersionDefinition["cards"] }) {
	return (
		<div className="footer-cards">
			{cards.map((card, index) => (
				<div key={card.label} className={`footer-card footer-card-${index + 1}`}>
					<span>{card.label}</span>
					<strong>{card.value}</strong>
				</div>
			))}
		</div>
	);
}

function TapBursts({ bursts }: { bursts: TapBurst[] }) {
	return (
		<>
			{bursts.map((burst) => (
				<span key={burst.id} className="tap-burst" style={{ left: `${burst.x}%`, top: `${burst.y}%` }}>
					+1
				</span>
			))}
		</>
	);
}

function ShipScreen({
	version,
	tapCount,
	bursts,
	onTap,
}: {
	version: VersionDefinition;
	tapCount: number;
	bursts: TapBurst[];
	onTap: () => void;
}) {
	return (
		<section className="variant-screen variant-ship">
			<div className="scene-copy">
				<span>{version.level}</span>
				<strong>{version.hook}</strong>
			</div>
			<button type="button" className="tap-button ship-visual-button" onClick={onTap} aria-label="Tap ship">
				<ShuttleIllustration version={version} />
			</button>
			<div className="tap-chip tap-chip-center">tap ship · streak {tapCount}</div>
			<TapBursts bursts={bursts} />
			<FooterCards cards={version.cards} />
		</section>
	);
}

function MissionScreen({
	version,
	tapCount,
	bursts,
	onTap,
}: {
	version: VersionDefinition;
	tapCount: number;
	bursts: TapBurst[];
	onTap: () => void;
}) {
	return (
		<section className="variant-screen variant-mission">
			<div className="mission-strip">
				<div className="mission-pill">
					<span>Bounty live</span>
					<strong>Solar Tyrant</strong>
				</div>
				<div className="mission-pill mission-pill-right">
					<span>Window</span>
					<strong>04:12 left</strong>
				</div>
			</div>
			<button type="button" className="tap-button ship-visual-button ship-visual-button-compact" onClick={onTap} aria-label="Strike mission target">
				<ShuttleIllustration version={version} />
			</button>
			<div className="mission-actions">
				<div className="mission-card">
					<span>Strike boss</span>
					<strong>{tapCount} hits</strong>
				</div>
				<div className="mission-card mission-card-highlight">
					<span>Boost damage</span>
					<strong>{version.cards[0]?.value}</strong>
				</div>
			</div>
			<FooterCards cards={version.cards} />
			<TapBursts bursts={bursts} />
		</section>
	);
}

function UpgradeScreen({
	version,
	tapCount,
	bursts,
	onTap,
}: {
	version: VersionDefinition;
	tapCount: number;
	bursts: TapBurst[];
	onTap: () => void;
}) {
	return (
		<section className="variant-screen variant-upgrade">
			<div className="upgrade-meter">
				<span>Next form</span>
				<strong>82%</strong>
			</div>
			<div className="upgrade-stage">
				<div className="module-chip module-chip-top">
					<span>Core</span>
					<strong>{version.cards[1]?.value}</strong>
				</div>
				<div className="module-chip module-chip-left">
					<span>Hull</span>
					<strong>{version.cards[0]?.value}</strong>
				</div>
				<div className="module-chip module-chip-right">
					<span>AI</span>
					<strong>{version.cards[2]?.value}</strong>
				</div>
				<button type="button" className="tap-button ship-visual-button ship-visual-button-upgrade" onClick={onTap} aria-label="Install module">
					<ShuttleIllustration version={version} />
				</button>
				<div className="tap-chip tap-chip-center">install module · streak {tapCount}</div>
				<TapBursts bursts={bursts} />
			</div>
			<div className="upgrade-actions">
				<div className="wide-panel wide-panel-active">
					<span>Blueprint</span>
					<strong>Nova Wings</strong>
				</div>
				<div className="wide-panel">
					<span>Queue</span>
					<strong>1 left</strong>
				</div>
			</div>
		</section>
	);
}

function GalaxyScreen({
	version,
	tapCount,
	bursts,
	onTap,
}: {
	version: VersionDefinition;
	tapCount: number;
	bursts: TapBurst[];
	onTap: () => void;
}) {
	return (
		<section className="variant-screen variant-galaxy">
			<div className="galaxy-strip">
				<div className="route-pill">
					<span>Route</span>
					<strong>Vega corridor</strong>
				</div>
				<div className="route-pill">
					<span>Jump</span>
					<strong>Ready now</strong>
				</div>
			</div>
			<button type="button" className="tap-button ship-visual-button ship-visual-button-galaxy" onClick={onTap} aria-label="Launch route">
				<ShuttleIllustration version={version} />
			</button>
			<div className="tap-chip tap-chip-center">launch route · jumps {tapCount}</div>
			<div className="galaxy-panels">
				<div className="wide-panel wide-panel-active">
					<span>Mission</span>
					<strong>Deep Vega</strong>
				</div>
				<div className="wide-panel">
					<span>Loot</span>
					<strong>{version.cards[2]?.value}</strong>
				</div>
			</div>
			<TapBursts bursts={bursts} />
		</section>
	);
}

function RankScreen({
	version,
	tapCount,
	bursts,
	onTap,
}: {
	version: VersionDefinition;
	tapCount: number;
	bursts: TapBurst[];
	onTap: () => void;
}) {
	return (
		<section className="variant-screen variant-rank">
			<div className="rank-banner">
				<span>{version.level}</span>
				<strong>#03 Citadel</strong>
			</div>
			<button type="button" className="tap-button ship-visual-button ship-visual-button-rank" onClick={onTap} aria-label="Collect tribute">
				<ShuttleIllustration version={version} />
			</button>
			<div className="tap-chip tap-chip-center">collect tribute · taps {tapCount}</div>
			<FooterCards cards={version.cards} />
			<div className="rank-panels">
				<div className="wide-panel wide-panel-active">
					<span>Collect tribute</span>
					<strong>{version.cards[1]?.value}</strong>
				</div>
				<div className="wide-panel">
					<span>Rally clan</span>
					<strong>{version.cards[2]?.value}</strong>
				</div>
			</div>
			<TapBursts bursts={bursts} />
		</section>
	);
}

function renderVariant(
	version: VersionDefinition,
	tapCount: number,
	bursts: TapBurst[],
	onTap: () => void,
) {
	switch (version.id) {
		case "v1":
			return <ShipScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
		case "v2":
			return <MissionScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
		case "v3":
			return <UpgradeScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
		case "v4":
			return <GalaxyScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
		case "v5":
			return <RankScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
	}
}

function App() {
	const [environment, setEnvironment] = useState("Browser");
	const [viewer, setViewer] = useState("Guest");
	const [startParam, setStartParam] = useState("none");
	const [activeVersion, setActiveVersion] = useState<VersionId>("v1");
	const [tapCount, setTapCount] = useState(0);
	const [bursts, setBursts] = useState<TapBurst[]>([]);

	useEffect(() => {
		const webApp = initTelegramMiniApp();
		if (!webApp) return;

		setEnvironment(`Telegram ${webApp.platform ?? "Mini App"}`);
		const user = webApp.initDataUnsafe?.user;
		const displayName =
			user?.username ||
			[user?.first_name, user?.last_name].filter(Boolean).join(" ") ||
			"Telegram pilot";
		setViewer(displayName);
		setStartParam(webApp.initDataUnsafe?.start_param || "none");
	}, []);

	const currentVersion = useMemo(
		() => versions.find((version) => version.id === activeVersion) ?? versions[0],
		[activeVersion],
	);

	useEffect(() => {
		(window as Window & {
			render_game_to_text?: () => string;
			advanceTime?: (ms: number) => void;
		}).render_game_to_text = () =>
			JSON.stringify({
				activeVersion,
				versionName: currentVersion.name,
				viewer,
				environment,
				startParam,
				balance: currentVersion.balance,
				income: currentVersion.income,
				tapCount,
				totalVersions: versions.length,
				coordinateSystem: "UI-only screen, top-left origin for layout",
			});

		(window as Window & { advanceTime?: (ms: number) => void }).advanceTime = () => undefined;
	}, [activeVersion, currentVersion, environment, startParam, tapCount, viewer]);

	useEffect(() => {
		if (!bursts.length) return;
		const timer = window.setTimeout(() => {
			setBursts((current) => current.slice(1));
		}, 650);
		return () => window.clearTimeout(timer);
	}, [bursts]);

	function selectVersion(id: VersionId) {
		setActiveVersion(id);
		setTapCount(0);
		setBursts([]);
		triggerSelectionHaptic();
	}

	function tapShip() {
		setTapCount((value) => value + 1);
		triggerTapHaptic();
		setBursts((current) => [
			...current,
			{
				id: Date.now() + Math.round(Math.random() * 1000),
				x: 40 + Math.round(Math.random() * 20),
				y: 34 + Math.round(Math.random() * 22),
			},
		]);
	}

	return (
		<div className={`app-shell theme-${currentVersion.id}`}>
			<div className="top-safe-area" aria-hidden="true" />

			<div className="screen-wrap">
				<section className="phone-shell">
					<UtilityBar viewer={viewer} />
					<BalanceHud version={currentVersion} />
					{renderVariant(currentVersion, tapCount, bursts, tapShip)}
					<div className="screen-meta">
						<span>{environment}</span>
						<span>start {startParam}</span>
					</div>
				</section>
			</div>

			<nav className="design-dock" aria-label="Landing page versions" role="tablist">
				{versions.map((version) => {
					const isActive = version.id === activeVersion;
					return (
						<button
							key={version.id}
							type="button"
							className={`dock-item${isActive ? " is-active" : ""}`}
							onClick={() => selectVersion(version.id)}
							role="tab"
							aria-selected={isActive}
						>
							<span className="dock-icon">
								<NavGlyph name={version.nav} />
							</span>
							<span className="dock-label">{version.nav}</span>
						</button>
					);
				})}
			</nav>
		</div>
	);
}

createRoot(document.getElementById("root")!).render(<App />);
