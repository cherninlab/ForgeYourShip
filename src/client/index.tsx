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
	icon: string;
	balance: string;
	income: string;
	level: string;
	combo: string;
	cipher: string;
	friends: string;
	hook: string;
	subtitle: string;
	cta: string;
	secondary: string;
	boosts: Array<{ label: string; value: string }>;
};

const versions: VersionDefinition[] = [
	{
		id: "v1",
		name: "Tap Bridge",
		nav: "Bridge",
		icon: "⚡",
		balance: "4,872,229",
		income: "+128K / hour",
		level: "Hangar Lv. 29",
		combo: "3 / 3",
		cipher: "Ready",
		friends: "+12%",
		hook: "Core loop live",
		subtitle: "Tap, claim, and stack ship coins fast.",
		cta: "Tap ship",
		secondary: "Claim combo",
		boosts: [
			{ label: "Thrusters", value: "210K" },
			{ label: "Core", value: "480K" },
			{ label: "Radar", value: "90K" },
		],
	},
	{
		id: "v2",
		name: "Boss Arena",
		nav: "Boss",
		icon: "☄",
		balance: "8,104,910",
		income: "+241K / hour",
		level: "Boss Rank 12",
		combo: "2 / 3",
		cipher: "Live",
		friends: "+18%",
		hook: "World boss engaged",
		subtitle: "Burn boss HP to unlock instant loot drops.",
		cta: "Strike boss",
		secondary: "Boost damage",
		boosts: [
			{ label: "Damage", value: "380K" },
			{ label: "Shield", value: "520K" },
			{ label: "Drone", value: "140K" },
		],
	},
	{
		id: "v3",
		name: "Forge Dock",
		nav: "Forge",
		icon: "🛠",
		balance: "6,390,700",
		income: "+176K / hour",
		level: "Forge Lv. 17",
		combo: "Ready",
		cipher: "1 left",
		friends: "+9%",
		hook: "Transformation bay",
		subtitle: "Upgrade parts and visibly evolve the ship.",
		cta: "Forge part",
		secondary: "Install module",
		boosts: [
			{ label: "Module", value: "310K" },
			{ label: "Hull", value: "280K" },
			{ label: "AI", value: "640K" },
		],
	},
	{
		id: "v4",
		name: "Raid Map",
		nav: "Raid",
		icon: "🌍",
		balance: "11,084,500",
		income: "+330K / hour",
		level: "Raid Zone D-9",
		combo: "4 / 4",
		cipher: "Open",
		friends: "+24%",
		hook: "Route is hot",
		subtitle: "Push through sectors and chain raid rewards.",
		cta: "Launch raid",
		secondary: "Open route",
		boosts: [
			{ label: "Raid", value: "900K" },
			{ label: "Orbit", value: "410K" },
			{ label: "Loot", value: "260K" },
		],
	},
	{
		id: "v5",
		name: "Clan Citadel",
		nav: "Clan",
		icon: "👑",
		balance: "14,230,880",
		income: "+522K / hour",
		level: "Clan Rank Diamond",
		combo: "Ready",
		cipher: "Epic",
		friends: "+31%",
		hook: "Clan prestige up",
		subtitle: "Show your flagship, tribute, and rank.",
		cta: "Collect tribute",
		secondary: "Rally clan",
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
				<svg viewBox="0 0 420 420" className="hero-svg hero-svg-boss" aria-hidden="true">
					<defs>
						<linearGradient id="ship-v2" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#ffe6a2" />
							<stop offset="100%" stopColor="#ff9d3c" />
						</linearGradient>
					</defs>
					<circle cx="210" cy="210" r="164" className="ring-line warning" />
					<path d="M86 210 L158 128 H262 L334 210 L262 292 H158 Z" fill="url(#ship-v2)" />
					<path d="M154 130 L210 84 L266 130" className="ship-stroke warning-stroke" />
					<path d="M154 290 L210 336 L266 290" className="ship-stroke warning-stroke" />
					<circle cx="178" cy="210" r="11" className="spark" />
					<circle cx="242" cy="210" r="11" className="spark" />
					<circle cx="210" cy="210" r="74" className="boss-core" />
				</svg>
			);
		case "v3":
			return (
				<svg viewBox="0 0 420 420" className="hero-svg hero-svg-forge" aria-hidden="true">
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
				<svg viewBox="0 0 420 420" className="hero-svg hero-svg-raid" aria-hidden="true">
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
				<svg viewBox="0 0 420 420" className="hero-svg hero-svg-clan" aria-hidden="true">
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

function TopBar({
	viewer,
	environment,
	level,
	hook,
}: {
	viewer: string;
	environment: string;
	level: string;
	hook: string;
}) {
	return (
		<header className="topbar">
			<div className="profile-pill">
				<div className="avatar-pill">A</div>
				<div>
					<span className="tiny-label">Pilot</span>
					<strong>{viewer}</strong>
				</div>
			</div>

			<div className="topbar-meta">
				<span>{level}</span>
				<span>{hook}</span>
				<span>{environment}</span>
			</div>
		</header>
	);
}

function StatsRow({ version }: { version: VersionDefinition }) {
	return (
		<div className="status-strip">
			<div className="status-pill">
				<span>Daily combo</span>
				<strong>{version.combo}</strong>
			</div>
			<div className="status-pill">
				<span>Cipher</span>
				<strong>{version.cipher}</strong>
			</div>
			<div className="status-pill">
				<span>Friends</span>
				<strong>{version.friends}</strong>
			</div>
		</div>
	);
}

function BalanceHero({ version }: { version: VersionDefinition }) {
	return (
		<div className="balance-block">
			<p className="tiny-label">Ship coins</p>
			<h1>{version.balance}</h1>
			<div className="income-pill">{version.income}</div>
		</div>
	);
}

function TapBursts({ bursts }: { bursts: TapBurst[] }) {
	return (
		<>
			{bursts.map((burst) => (
				<span
					key={burst.id}
					className="tap-burst"
					style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
				>
					+1
				</span>
			))}
		</>
	);
}

function BridgeScreen({
	version,
	tapCount,
	bursts,
	onTap,
	startParam,
}: {
	version: VersionDefinition;
	tapCount: number;
	bursts: TapBurst[];
	onTap: () => void;
	startParam: string;
}) {
	return (
		<section className="screen screen-bridge">
			<BalanceHero version={version} />
			<StatsRow version={version} />

			<div className="bridge-hero">
				<div className="tap-aura" aria-hidden="true" />
				<button type="button" className="tap-button" onClick={onTap} aria-label="Tap spaceship">
					<ShipIllustration version={version} />
				</button>
				<div className="side-badge side-badge-left">combo {version.combo}</div>
				<div className="side-badge side-badge-right">cipher {version.cipher}</div>
				<div className="side-badge side-badge-bottom">streak {tapCount}</div>
				<TapBursts bursts={bursts} />
			</div>

			<div className="hero-copy">
				<strong>{version.cta}</strong>
				<p>{version.subtitle}</p>
			</div>

			<div className="boost-row">
				{version.boosts.map((boost) => (
					<button type="button" key={boost.label} className="boost-pill">
						<span>{boost.label}</span>
						<strong>{boost.value}</strong>
					</button>
				))}
			</div>

			<div className="bridge-task-bar">
				<span className="tiny-label">Task</span>
				<strong>{version.secondary}</strong>
				<span>{startParam}</span>
			</div>
		</section>
	);
}

function BossScreen({
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
		<section className="screen screen-boss">
			<div className="boss-header-card">
				<div>
					<span className="tiny-label">Boss HP</span>
					<strong>Solar Tyrant 78%</strong>
				</div>
				<div className="boss-timer">04:12 left</div>
			</div>
			<div className="hp-track" aria-hidden="true">
				<span className="hp-fill" style={{ width: "78%" }} />
			</div>

			<div className="boss-stage">
				<div className="boss-stage-copy">
					<p className="tiny-label">Raid reward</p>
					<h1>{version.balance}</h1>
					<div className="income-pill">{version.income}</div>
				</div>

				<button type="button" className="tap-button boss-tap-button" onClick={onTap} aria-label="Strike boss with spaceship">
					<ShipIllustration version={version} />
					<div className="boss-blast boss-blast-left" />
					<div className="boss-blast boss-blast-right" />
				</button>

				<div className="boss-markers">
					<div className="status-pill">
						<span>Hits</span>
						<strong>{tapCount}</strong>
					</div>
					<div className="status-pill">
						<span>Shield</span>
						<strong>{version.boosts[1]?.value}</strong>
					</div>
					<div className="status-pill">
						<span>Squad</span>
						<strong>{version.friends}</strong>
					</div>
				</div>

				<TapBursts bursts={bursts} />
			</div>

			<div className="boss-actions">
				<button type="button" className="action-card action-card-primary">
					<span className="tiny-label">Action</span>
					<strong>{version.cta}</strong>
				</button>
				<button type="button" className="action-card">
					<span className="tiny-label">Boost</span>
					<strong>{version.secondary}</strong>
				</button>
			</div>
		</section>
	);
}

function ForgeScreen({
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
		<section className="screen screen-forge">
			<div className="forge-header">
				<div>
					<p className="tiny-label">Evolution</p>
					<h1>{version.balance}</h1>
				</div>
				<div className="forge-meter-card">
					<span className="tiny-label">Next form</span>
					<strong>82%</strong>
				</div>
			</div>

			<div className="forge-stage">
				<div className="forge-node-card forge-node-card-top">
					<span>Core</span>
					<strong>{version.boosts[1]?.value}</strong>
				</div>
				<div className="forge-node-card forge-node-card-left">
					<span>Hull</span>
					<strong>{version.boosts[0]?.value}</strong>
				</div>
				<div className="forge-node-card forge-node-card-right">
					<span>AI</span>
					<strong>{version.boosts[2]?.value}</strong>
				</div>
				<button type="button" className="tap-button forge-tap-button" onClick={onTap} aria-label="Forge spaceship">
					<ShipIllustration version={version} />
				</button>
				<div className="forge-base">streak {tapCount}</div>
				<TapBursts bursts={bursts} />
			</div>

			<div className="forge-blueprints">
				<div className="blueprint-card active">
					<span className="tiny-label">Blueprint</span>
					<strong>Nova wings</strong>
					<p>Install for +26% yield.</p>
				</div>
				<div className="blueprint-card">
					<span className="tiny-label">Queue</span>
					<strong>{version.cipher}</strong>
					<p>One timed forge slot is waiting.</p>
				</div>
			</div>

			<div className="forge-actions">
				<button type="button" className="action-card action-card-primary">
					<span className="tiny-label">Forge</span>
					<strong>{version.cta}</strong>
				</button>
				<button type="button" className="action-card">
					<span className="tiny-label">Install</span>
					<strong>{version.secondary}</strong>
				</button>
			</div>
		</section>
	);
}

function RaidScreen({
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
		<section className="screen screen-raid">
			<div className="raid-header">
				<div>
					<p className="tiny-label">Live route</p>
					<h1>{version.balance}</h1>
				</div>
				<div className="income-pill">{version.income}</div>
			</div>

			<div className="raid-map-card">
				<div className="route-line" aria-hidden="true" />
				<div className="route-node route-node-top">
					<span>Gate</span>
					<strong>{version.combo}</strong>
				</div>
				<div className="route-node route-node-mid">
					<span>Loot</span>
					<strong>{version.boosts[2]?.value}</strong>
				</div>
				<div className="route-node route-node-bottom">
					<span>Boss</span>
					<strong>{version.cipher}</strong>
				</div>
				<button type="button" className="tap-button raid-tap-button" onClick={onTap} aria-label="Launch raid with spaceship">
					<ShipIllustration version={version} />
				</button>
				<div className="route-streak">raids {tapCount}</div>
				<TapBursts bursts={bursts} />
			</div>

			<div className="raid-footer-grid">
				<div className="raid-card active">
					<span className="tiny-label">Mission</span>
					<strong>{version.cta}</strong>
					<p>{version.subtitle}</p>
				</div>
				<div className="raid-card">
					<span className="tiny-label">Squad bonus</span>
					<strong>{version.friends}</strong>
					<p>Invite allies for faster clears.</p>
				</div>
			</div>
		</section>
	);
}

function ClanScreen({
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
		<section className="screen screen-clan">
			<div className="clan-banner">
				<div>
					<p className="tiny-label">Clan Rank Diamond</p>
					<h1>{version.balance}</h1>
				</div>
				<div className="clan-medal">#03</div>
			</div>

			<div className="clan-stage">
				<div className="clan-pedestal" aria-hidden="true" />
				<button type="button" className="tap-button clan-tap-button" onClick={onTap} aria-label="Collect clan tribute from spaceship">
					<ShipIllustration version={version} />
				</button>
				<div className="clan-tribute">
					<span className="tiny-label">Tribute vault</span>
					<strong>{version.boosts[0]?.value}</strong>
				</div>
				<div className="clan-streak">tribute taps {tapCount}</div>
				<TapBursts bursts={bursts} />
			</div>

			<div className="clan-rail">
				<div className="clan-chip">
					<span>Combo</span>
					<strong>{version.combo}</strong>
				</div>
				<div className="clan-chip">
					<span>Cipher</span>
					<strong>{version.cipher}</strong>
				</div>
				<div className="clan-chip">
					<span>Friends</span>
					<strong>{version.friends}</strong>
				</div>
			</div>

			<div className="clan-actions">
				<button type="button" className="action-card action-card-primary">
					<span className="tiny-label">Collect</span>
					<strong>{version.cta}</strong>
				</button>
				<button type="button" className="action-card">
					<span className="tiny-label">Social</span>
					<strong>{version.secondary}</strong>
				</button>
			</div>
		</section>
	);
}

function renderScreen(
	version: VersionDefinition,
	tapCount: number,
	bursts: TapBurst[],
	onTap: () => void,
	startParam: string,
) {
	switch (version.id) {
		case "v1":
			return <BridgeScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} startParam={startParam} />;
		case "v2":
			return <BossScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
		case "v3":
			return <ForgeScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
		case "v4":
			return <RaidScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
		case "v5":
			return <ClanScreen version={version} tapCount={tapCount} bursts={bursts} onTap={onTap} />;
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
				y: 34 + Math.round(Math.random() * 24),
			},
		]);
	}

	return (
		<div className={`app-shell theme-${currentVersion.id}`}>
			<div className="top-safe-area" aria-hidden="true" />

			<div className="screen-wrap">
				<section className="phone-shell">
					<TopBar
						viewer={viewer}
						environment={environment}
						level={currentVersion.level}
						hook={currentVersion.hook}
					/>
					{renderScreen(currentVersion, tapCount, bursts, tapShip, startParam)}
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
							<span className="dock-label">{version.nav}</span>
						</button>
					);
				})}
			</nav>
		</div>
	);
}

createRoot(document.getElementById("root")!).render(<App />);
