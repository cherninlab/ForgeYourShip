import "./styles.css";

import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import { initTelegramMiniApp } from "./telegram";

type VersionId = "v1" | "v2" | "v3" | "v4" | "v5";

type VersionDefinition = {
	id: VersionId;
	name: string;
	icon: string;
	balance: string;
	income: string;
	level: string;
	combo: string;
	cipher: string;
	friends: string;
	boosts: Array<{ label: string; value: string }>;
};

const versions: VersionDefinition[] = [
	{
		id: "v1",
		name: "Tap Bridge",
		icon: "⚡",
		balance: "4,872,229",
		income: "+128K / hour",
		level: "Hangar Lv. 29",
		combo: "3 / 3",
		cipher: "Ready",
		friends: "+12%",
		boosts: [
			{ label: "Thrusters", value: "210K" },
			{ label: "Core", value: "480K" },
			{ label: "Radar", value: "90K" },
		],
	},
	{
		id: "v2",
		name: "Boss Tap",
		icon: "☄",
		balance: "8,104,910",
		income: "+241K / hour",
		level: "Boss Rank 12",
		combo: "2 / 3",
		cipher: "Live",
		friends: "+18%",
		boosts: [
			{ label: "Damage", value: "380K" },
			{ label: "Shield", value: "520K" },
			{ label: "Drone", value: "140K" },
		],
	},
	{
		id: "v3",
		name: "Forge Tap",
		icon: "🛠",
		balance: "6,390,700",
		income: "+176K / hour",
		level: "Forge Lv. 17",
		combo: "Ready",
		cipher: "1 left",
		friends: "+9%",
		boosts: [
			{ label: "Module", value: "310K" },
			{ label: "Hull", value: "280K" },
			{ label: "AI", value: "640K" },
		],
	},
	{
		id: "v4",
		name: "Planet Tap",
		icon: "🌍",
		balance: "11,084,500",
		income: "+330K / hour",
		level: "Raid Zone D-9",
		combo: "4 / 4",
		cipher: "Open",
		friends: "+24%",
		boosts: [
			{ label: "Raid", value: "900K" },
			{ label: "Orbit", value: "410K" },
			{ label: "Loot", value: "260K" },
		],
	},
	{
		id: "v5",
		name: "Clan Tap",
		icon: "👑",
		balance: "14,230,880",
		income: "+522K / hour",
		level: "Clan Rank Diamond",
		combo: "Ready",
		cipher: "Epic",
		friends: "+31%",
		boosts: [
			{ label: "Tribute", value: "1.2M" },
			{ label: "Vault", value: "770K" },
			{ label: "Banner", value: "390K" },
		],
	},
];

function GameArt({ version }: { version: VersionDefinition }) {
	switch (version.id) {
		case "v1":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<circle cx="210" cy="210" r="150" className="ring-line" />
					<circle cx="210" cy="210" r="110" className="ring-line soft" />
					<path d="M120 220 L210 90 L300 220 L210 340 Z" className="shape-solid" />
					<path d="M155 220 L210 145 L265 220 L210 292 Z" className="shape-cut" />
					<circle cx="130" cy="150" r="8" className="spark" />
					<circle cx="290" cy="175" r="10" className="spark" />
					<circle cx="170" cy="320" r="9" className="spark" />
				</svg>
			);
		case "v2":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<circle cx="210" cy="210" r="160" className="ring-line warning" />
					<circle cx="210" cy="210" r="94" className="boss-core" />
					<path d="M150 165 L270 165 L315 210 L270 255 L150 255 L105 210 Z" className="boss-shell" />
					<path d="M155 122 L210 74 L265 122" className="boss-horn" />
					<path d="M155 298 L210 346 L265 298" className="boss-horn" />
					<circle cx="180" cy="210" r="10" className="spark" />
					<circle cx="240" cy="210" r="10" className="spark" />
				</svg>
			);
		case "v3":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<rect x="120" y="85" width="180" height="250" rx="34" className="forge-frame" />
					<path d="M160 270 L210 135 L260 270" className="shape-solid" />
					<circle cx="210" cy="55" r="16" className="forge-node" />
					<circle cx="100" cy="155" r="16" className="forge-node" />
					<circle cx="320" cy="155" r="16" className="forge-node" />
					<circle cx="100" cy="270" r="16" className="forge-node" />
					<circle cx="320" cy="270" r="16" className="forge-node" />
					<circle cx="210" cy="365" r="16" className="forge-node" />
				</svg>
			);
		case "v4":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<defs>
						<radialGradient id="planet-gradient" cx="35%" cy="30%" r="70%">
							<stop offset="0%" stopColor="#d7fff2" />
							<stop offset="48%" stopColor="#70f1cb" />
							<stop offset="100%" stopColor="#4a8fff" />
						</radialGradient>
					</defs>
					<circle cx="210" cy="210" r="120" fill="url(#planet-gradient)" />
					<ellipse cx="210" cy="210" rx="165" ry="54" className="ring-line teal" />
					<path d="M160 150 C195 128 260 128 290 162 C260 190 194 190 162 168 Z" className="planet-mark" />
					<path d="M175 245 C224 220 276 234 296 274 C248 292 200 292 172 266 Z" className="planet-mark soft" />
					<circle cx="74" cy="210" r="14" className="teal-fill" />
					<circle cx="346" cy="210" r="14" className="teal-fill" />
				</svg>
			);
		case "v5":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<defs>
						<linearGradient id="crown-grad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#89ddff" />
							<stop offset="100%" stopColor="#ff62d1" />
						</linearGradient>
					</defs>
					<circle cx="210" cy="198" r="154" className="ring-line pink" />
					<path d="M135 264 L154 142 L194 190 L210 126 L226 190 L266 142 L285 264 Z" fill="url(#crown-grad)" />
					<rect x="145" y="264" width="130" height="28" rx="14" className="crown-base" />
					<circle cx="154" cy="132" r="13" className="pink-fill" />
					<circle cx="210" cy="110" r="13" className="pink-fill" />
					<circle cx="266" cy="132" r="13" className="pink-fill" />
				</svg>
			);
	}
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
				balance: currentVersion.balance,
				income: currentVersion.income,
				totalVersions: versions.length,
				coordinateSystem: "UI-only screen, top-left origin for layout",
			});

		(window as Window & { advanceTime?: (ms: number) => void }).advanceTime = () => undefined;
	}, [activeVersion, currentVersion, environment, startParam, viewer]);

	return (
		<div className={`app-shell theme-${currentVersion.id}`}>
			<div className="top-safe-area" aria-hidden="true" />

			<div className="screen-wrap">
				<section className="phone-shell">
					<header className="topbar">
						<div className="profile-pill">
							<div className="avatar-pill">A</div>
							<div>
								<span className="tiny-label">Pilot</span>
								<strong>{viewer}</strong>
							</div>
						</div>

						<div className="topbar-meta">
							<span>{currentVersion.level}</span>
							<span>{environment}</span>
						</div>
					</header>

					<div className="balance-block">
						<p className="tiny-label">Ship coins</p>
						<h1>{currentVersion.balance}</h1>
						<div className="income-pill">{currentVersion.income}</div>
					</div>

					<div className="tap-zone">
						<div className="tap-aura" aria-hidden="true" />
						<GameArt version={currentVersion} />
						<div className="tap-core-copy">
							<span className="tiny-label">{currentVersion.name}</span>
							<strong>TAP</strong>
						</div>
						<div className="side-badge side-badge-left">combo {currentVersion.combo}</div>
						<div className="side-badge side-badge-right">cipher {currentVersion.cipher}</div>
						<div className="side-badge side-badge-bottom">friends {currentVersion.friends}</div>
					</div>

					<div className="boost-row">
						{currentVersion.boosts.map((boost) => (
							<button type="button" key={boost.label} className="boost-pill">
								<span>{boost.label}</span>
								<strong>{boost.value}</strong>
							</button>
						))}
					</div>

					<div className="quick-row">
						<div className="quick-card active">
							<span className="tiny-label">Daily combo</span>
							<strong>{currentVersion.combo}</strong>
						</div>
						<div className="quick-card">
							<span className="tiny-label">Cipher</span>
							<strong>{currentVersion.cipher}</strong>
						</div>
						<div className="quick-card">
							<span className="tiny-label">Start</span>
							<strong>{startParam}</strong>
						</div>
					</div>
				</section>

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
