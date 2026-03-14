import "./styles.css";

import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import { initTelegramMiniApp, triggerSelectionHaptic, triggerTapHaptic } from "./telegram";

type VersionId = "v1" | "v2" | "v3" | "v4" | "v5";

type TapBurst = { id: number; x: number; y: number };

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
		name: "Raid Tap",
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

function ShipIllustration({ version }: { version: VersionDefinition }) {
	switch (version.id) {
		case "v1":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<defs>
						<linearGradient id="ship-v1" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#ffffff" />
							<stop offset="100%" stopColor="#c6dbff" />
						</linearGradient>
					</defs>
					<circle cx="210" cy="210" r="154" className="ring-line" />
					<circle cx="210" cy="210" r="112" className="ring-line soft" />
					<path d="M210 68 L298 205 L210 350 L122 205 Z" fill="url(#ship-v1)" />
					<path d="M210 118 L258 205 L210 286 L162 205 Z" className="ship-cut" />
					<path d="M122 205 L84 182 L109 231 Z" className="wing-fill" />
					<path d="M298 205 L336 182 L311 231 Z" className="wing-fill" />
					<circle cx="122" cy="150" r="8" className="spark" />
					<circle cx="298" cy="170" r="10" className="spark" />
				</svg>
			);
		case "v2":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<defs>
						<linearGradient id="ship-v2" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#ffd980" />
							<stop offset="100%" stopColor="#ff9d3c" />
						</linearGradient>
					</defs>
					<circle cx="210" cy="210" r="160" className="ring-line warning" />
					<path d="M92 210 L158 130 H262 L328 210 L262 290 H158 Z" fill="url(#ship-v2)" />
					<path d="M154 130 L210 82 L266 130" className="ship-stroke warning-stroke" />
					<path d="M154 290 L210 338 L266 290" className="ship-stroke warning-stroke" />
					<circle cx="178" cy="210" r="11" className="spark" />
					<circle cx="242" cy="210" r="11" className="spark" />
					<circle cx="210" cy="210" r="72" className="boss-core" />
				</svg>
			);
		case "v3":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<defs>
						<linearGradient id="ship-v3" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#faffff" />
							<stop offset="100%" stopColor="#c9fff0" />
						</linearGradient>
					</defs>
					<rect x="118" y="90" width="184" height="240" rx="38" className="forge-frame" />
					<path d="M210 86 L270 230 L210 334 L150 230 Z" fill="url(#ship-v3)" />
					<path d="M210 138 L236 230 L210 280 L184 230 Z" className="ship-cut" />
					<circle cx="210" cy="58" r="16" className="forge-node" />
					<circle cx="98" cy="154" r="16" className="forge-node" />
					<circle cx="322" cy="154" r="16" className="forge-node" />
					<circle cx="98" cy="272" r="16" className="forge-node" />
					<circle cx="322" cy="272" r="16" className="forge-node" />
				</svg>
			);
		case "v4":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<defs>
						<radialGradient id="planet-v4" cx="35%" cy="30%" r="70%">
							<stop offset="0%" stopColor="#d7fff2" />
							<stop offset="48%" stopColor="#70f1cb" />
							<stop offset="100%" stopColor="#4a8fff" />
						</radialGradient>
						<linearGradient id="ship-v4" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#ffffff" />
							<stop offset="100%" stopColor="#cde8ff" />
						</linearGradient>
					</defs>
					<circle cx="210" cy="232" r="92" fill="url(#planet-v4)" opacity="0.9" />
					<ellipse cx="210" cy="232" rx="164" ry="48" className="ring-line teal" />
					<path d="M210 86 L274 188 L210 302 L146 188 Z" fill="url(#ship-v4)" />
					<path d="M210 128 L240 188 L210 252 L180 188 Z" className="ship-cut" />
					<path d="M146 188 L112 168 L132 214 Z" className="wing-fill teal-wing" />
					<path d="M274 188 L308 168 L288 214 Z" className="wing-fill teal-wing" />
				</svg>
			);
		case "v5":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg" aria-hidden="true">
					<defs>
						<linearGradient id="ship-v5" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#89ddff" />
							<stop offset="100%" stopColor="#ff62d1" />
						</linearGradient>
					</defs>
					<circle cx="210" cy="198" r="156" className="ring-line pink" />
					<path d="M210 70 L288 198 L210 332 L132 198 Z" fill="url(#ship-v5)" />
					<path d="M210 118 L250 198 L210 274 L170 198 Z" className="ship-cut" />
					<path d="M132 198 L100 154 L136 166 Z" className="pink-fill" />
					<path d="M288 198 L320 154 L284 166 Z" className="pink-fill" />
					<circle cx="164" cy="122" r="12" className="pink-fill" />
					<circle cx="210" cy="92" r="12" className="pink-fill" />
					<circle cx="256" cy="122" r="12" className="pink-fill" />
				</svg>
			);
	}
}

function App() {
	const [environment, setEnvironment] = useState("Browser");
	const [viewer, setViewer] = useState("Guest pilot");
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
		triggerSelectionHaptic();
	}

	function tapShip() {
		setTapCount((value) => value + 1);
		triggerTapHaptic();
		setBursts((current) => [
			...current,
			{
				id: Date.now() + Math.round(Math.random() * 1000),
				x: 42 + Math.round(Math.random() * 16),
				y: 44 + Math.round(Math.random() * 12),
			},
		]);
	}

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

					<div className="status-strip">
						<div className="status-pill"><span>Daily combo</span><strong>{currentVersion.combo}</strong></div>
						<div className="status-pill"><span>Cipher</span><strong>{currentVersion.cipher}</strong></div>
						<div className="status-pill"><span>Friends</span><strong>{currentVersion.friends}</strong></div>
					</div>

					<div className="tap-zone">
						<div className="tap-aura" aria-hidden="true" />
						<button type="button" className="tap-button" onClick={tapShip} aria-label="Tap spaceship">
							<ShipIllustration version={currentVersion} />
						</button>
						<div className="tap-core-copy">
							<span className="tiny-label">{currentVersion.name}</span>
							<strong>TAP</strong>
						</div>
						<div className="side-badge side-badge-left">combo {currentVersion.combo}</div>
						<div className="side-badge side-badge-right">cipher {currentVersion.cipher}</div>
						<div className="side-badge side-badge-bottom">streak {tapCount}</div>
						{bursts.map((burst) => (
							<span
								key={burst.id}
								className="tap-burst"
								style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
							>
								+1
							</span>
						))}
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
							<span className="tiny-label">Task</span>
							<strong>Claim combo</strong>
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
							<span className="dock-icon">{version.icon}</span>
							<span className="dock-label">{version.name}</span>
						</button>
					);
				})}
			</nav>
		</div>
	);
}

createRoot(document.getElementById("root")!).render(<App />);
