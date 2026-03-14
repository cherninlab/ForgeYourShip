import "./styles.css";

import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import { initTelegramMiniApp } from "./telegram";

type VersionId = "v1" | "v2" | "v3" | "v4" | "v5";

type VersionDefinition = {
	id: VersionId;
	name: string;
	icon: string;
	title: string;
	subtitle: string;
	primaryAction: string;
	secondaryAction: string;
	stats: Array<{ label: string; value: string }>;
	chips: string[];
};

const versions: VersionDefinition[] = [
	{
		id: "v1",
		name: "Fleet Tap",
		icon: "⚡",
		title: "Charge the flagship and launch your first run.",
		subtitle: "Big hero energy, clear tap target, instant progression feel.",
		primaryAction: "Start run",
		secondaryAction: "Upgrade ship",
		stats: [
			{ label: "Power", value: "4.2M" },
			{ label: "Combo", value: "x18" },
			{ label: "Boosters", value: "3 ready" },
		],
		chips: ["Tap core", "Loot burst", "Fast rewards"],
	},
	{
		id: "v2",
		name: "Boss Arena",
		icon: "☄",
		title: "Jump straight into a boss fight home screen.",
		subtitle: "Feels competitive first, with target pressure and damage loops.",
		primaryAction: "Attack boss",
		secondaryAction: "Load skills",
		stats: [
			{ label: "Boss HP", value: "61%" },
			{ label: "Rank", value: "#128" },
			{ label: "Squad", value: "4 online" },
		],
		chips: ["PvE loop", "Damage race", "Event timer"],
	},
	{
		id: "v3",
		name: "Hangar Forge",
		icon: "🛠",
		title: "Make the first page feel like a living upgrade bay.",
		subtitle: "The player sees growth, modules, and build depth before anything else.",
		primaryAction: "Forge module",
		secondaryAction: "Open loadout",
		stats: [
			{ label: "Tier", value: "Mk IV" },
			{ label: "Slots", value: "6 active" },
			{ label: "Queue", value: "2 forging" },
		],
		chips: ["Buildcraft", "Upgrades", "Module chase"],
	},
	{
		id: "v4",
		name: "Galaxy Raid",
		icon: "🌍",
		title: "Open on a raid planet with a destination to conquer.",
		subtitle: "Map-first design makes the game feel alive and event-driven.",
		primaryAction: "Raid planet",
		secondaryAction: "Scout routes",
		stats: [
			{ label: "Sector", value: "D-09" },
			{ label: "Raiders", value: "286" },
			{ label: "Time", value: "22m left" },
		],
		chips: ["Map fantasy", "Event zone", "Co-op pressure"],
	},
	{
		id: "v5",
		name: "Clan Throne",
		icon: "👑",
		title: "Turn the home screen into a social power fantasy.",
		subtitle: "Prestige, clan status, and season rewards dominate the first impression.",
		primaryAction: "Claim throne",
		secondaryAction: "Open clan",
		stats: [
			{ label: "Clan rank", value: "Diamond" },
			{ label: "Season", value: "Zero" },
			{ label: "Tribute", value: "Ready" },
		],
		chips: ["Social flex", "Season loop", "Guild status"],
	},
];

function GameArt({ version }: { version: VersionDefinition }) {
	switch (version.id) {
		case "v1":
			return (
				<svg viewBox="0 0 620 620" className="hero-svg hero-svg-v1" aria-hidden="true">
					<defs>
						<radialGradient id="v1-core" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
							<stop offset="28%" stopColor="#9ae7ff" stopOpacity="0.95" />
							<stop offset="62%" stopColor="#4bb8ff" stopOpacity="0.34" />
							<stop offset="100%" stopColor="#4bb8ff" stopOpacity="0" />
						</radialGradient>
					</defs>
					<circle cx="310" cy="310" r="220" className="orbit-line" />
					<circle cx="310" cy="310" r="168" className="orbit-line faint" />
					<circle cx="310" cy="310" r="94" fill="url(#v1-core)" />
					<path d="M160 325 L310 118 L460 325 L310 515 Z" className="ship-solid" />
					<path d="M205 324 L310 182 L415 324 L310 460 Z" className="ship-cut" />
					<circle cx="178" cy="228" r="11" className="spark" />
					<circle cx="451" cy="257" r="9" className="spark" />
					<circle cx="227" cy="468" r="13" className="spark" />
				</svg>
			);
		case "v2":
			return (
				<svg viewBox="0 0 620 620" className="hero-svg hero-svg-v2" aria-hidden="true">
					<defs>
						<radialGradient id="v2-glow" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#ffd97a" stopOpacity="0.95" />
							<stop offset="45%" stopColor="#ffb24a" stopOpacity="0.45" />
							<stop offset="100%" stopColor="#ff7e2d" stopOpacity="0" />
						</radialGradient>
					</defs>
					<circle cx="310" cy="310" r="205" fill="none" className="orbit-line warning" />
					<circle cx="310" cy="310" r="126" fill="url(#v2-glow)" />
					<circle cx="310" cy="310" r="106" className="boss-core" />
					<path d="M245 240 L375 240 L420 310 L375 380 L245 380 L200 310 Z" className="boss-shell" />
					<path d="M248 204 L310 150 L372 204" className="boss-horn" />
					<path d="M248 416 L310 470 L372 416" className="boss-horn" />
					<circle cx="270" cy="310" r="14" className="spark" />
					<circle cx="350" cy="310" r="14" className="spark" />
				</svg>
			);
		case "v3":
			return (
				<svg viewBox="0 0 620 620" className="hero-svg hero-svg-v3" aria-hidden="true">
					<rect x="160" y="140" width="300" height="340" rx="40" className="forge-frame" />
					<rect x="215" y="190" width="190" height="240" rx="26" className="forge-inner" />
					<path d="M230 390 L310 215 L390 390" className="ship-solid" />
					<circle cx="310" cy="120" r="26" className="forge-node" />
					<circle cx="475" cy="250" r="24" className="forge-node" />
					<circle cx="475" cy="395" r="24" className="forge-node" />
					<circle cx="145" cy="250" r="24" className="forge-node" />
					<circle cx="145" cy="395" r="24" className="forge-node" />
					<circle cx="310" cy="500" r="26" className="forge-node" />
					<path d="M310 120 L310 160 M166 250 L210 250 M410 250 L454 250 M410 395 L454 395 M166 395 L210 395 M310 460 L310 500" className="forge-link" />
				</svg>
			);
		case "v4":
			return (
				<svg viewBox="0 0 620 620" className="hero-svg hero-svg-v4" aria-hidden="true">
					<defs>
						<radialGradient id="planet-core" cx="35%" cy="30%" r="65%">
							<stop offset="0%" stopColor="#d6fff1" stopOpacity="0.95" />
							<stop offset="45%" stopColor="#66e7c2" stopOpacity="0.88" />
							<stop offset="100%" stopColor="#2b7eff" stopOpacity="0.95" />
						</radialGradient>
					</defs>
					<circle cx="310" cy="310" r="165" fill="url(#planet-core)" />
					<ellipse cx="310" cy="310" rx="235" ry="88" className="orbit-line teal" />
					<ellipse cx="310" cy="310" rx="210" ry="64" className="orbit-line faint teal" />
					<path d="M220 250 C250 220, 350 215, 398 260 C360 290, 285 300, 225 278 Z" className="planet-shadow" />
					<path d="M248 355 C294 330, 372 342, 410 388 C362 417, 292 420, 244 392 Z" className="planet-shadow soft" />
					<circle cx="130" cy="310" r="19" className="spark teal-fill" />
					<circle cx="488" cy="310" r="19" className="spark teal-fill" />
				</svg>
			);
		case "v5":
			return (
				<svg viewBox="0 0 620 620" className="hero-svg hero-svg-v5" aria-hidden="true">
					<defs>
						<linearGradient id="crown-glow" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#8be2ff" />
							<stop offset="100%" stopColor="#ff4ac6" />
						</linearGradient>
					</defs>
					<circle cx="310" cy="300" r="208" className="orbit-line pink" />
					<path d="M185 388 L215 215 L285 292 L310 175 L336 292 L405 215 L435 388 Z" className="crown-frame" />
					<path d="M214 388 L240 258 L286 320 L310 234 L334 320 L380 258 L406 388 Z" fill="url(#crown-glow)" fillOpacity="0.9" />
					<rect x="198" y="390" width="224" height="42" rx="18" className="crown-base" />
					<circle cx="215" cy="200" r="16" className="spark pink-fill" />
					<circle cx="310" cy="160" r="16" className="spark pink-fill" />
					<circle cx="405" cy="200" r="16" className="spark pink-fill" />
				</svg>
			);
	}
}

function HomeStage({
	version,
	viewer,
	environment,
	startParam,
}: {
	version: VersionDefinition;
	viewer: string;
	environment: string;
	startParam: string;
}) {
	return (
		<section className={`home-stage stage-${version.id}`}>
			<div className="hud-row">
				<div className="pilot-pill">
					<div className="pilot-avatar">A</div>
					<div>
						<span>Pilot</span>
						<strong>{viewer}</strong>
					</div>
				</div>

				<div className="resource-strip" aria-label="Runtime information">
					{version.stats.map((stat) => (
						<div className="resource-pill" key={stat.label}>
							<span>{stat.label}</span>
							<strong>{stat.value}</strong>
						</div>
					))}
				</div>
			</div>

			<div className="hero-zone">
				<div className="hero-copy-block">
					<p className="mode-kicker">{version.name}</p>
					<h1>{version.title}</h1>
					<p className="hero-subtitle">{version.subtitle}</p>
					<div className="chip-row">
						{version.chips.map((chip) => (
							<span key={chip}>{chip}</span>
						))}
					</div>
				</div>

				<div className="art-zone">
					<div className="art-backdrop" aria-hidden="true" />
					<GameArt version={version} />
					<div className="floating-tag floating-tag-a">{environment}</div>
					<div className="floating-tag floating-tag-b">start: {startParam}</div>
				</div>
			</div>

			<div className="action-row">
				<button type="button" className="action-primary">{version.primaryAction}</button>
				<button type="button" className="action-secondary">{version.secondaryAction}</button>
				<div className="status-line">
					<span>Daily rewards ready</span>
					<strong>Claim in 1 tap</strong>
				</div>
			</div>
		</section>
	);
}

function App() {
	const [environment, setEnvironment] = useState("Browser");
	const [viewer, setViewer] = useState("Guest pilot");
	const [startParam, setStartParam] = useState("none");
	const [activeVersion, setActiveVersion] = useState<VersionId>("v1");

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
				totalVersions: versions.length,
				coordinateSystem: "UI-only screen, top-left origin for layout",
			});

		(window as Window & { advanceTime?: (ms: number) => void }).advanceTime = () => undefined;
	}, [activeVersion, currentVersion.name, environment, startParam, viewer]);

	return (
		<div className={`app-shell theme-${currentVersion.id}`}>
			<div className="top-safe-area" aria-hidden="true" />
			<div className="screen-wrap">
				<HomeStage
					version={currentVersion}
					viewer={viewer}
					environment={environment}
					startParam={startParam}
				/>

				<nav className="design-dock" aria-label="Landing page versions" role="tablist">
					{versions.map((version) => {
						const isActive = version.id === activeVersion;
						return (
							<button
								key={version.id}
								type="button"
								className={`dock-item${isActive ? " is-active" : ""}`}
								onClick={() => setActiveVersion(version.id)}
								role="tab"
								aria-selected={isActive}
							>
								<span className="dock-icon">{version.icon}</span>
								<span className="dock-label">{version.name}</span>
							</button>
						);
					})}
				</nav>
			</div>
		</div>
	);
}

createRoot(document.getElementById("root")!).render(<App />);
