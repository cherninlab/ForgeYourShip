import "./styles.css";

import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import { initTelegramMiniApp } from "./telegram";

type VersionId = "v1" | "v2" | "v3" | "v4" | "v5";

type VersionDefinition = {
	id: VersionId;
	label: string;
	name: string;
	signature: string;
	summary: string;
};

const versions: VersionDefinition[] = [
	{
		id: "v1",
		label: "Version 01",
		name: "Mission Brief",
		signature: "Narrative hero",
		summary: "Story-led onboarding with readiness steps and a premium launch moment.",
	},
	{
		id: "v2",
		label: "Version 02",
		name: "Command Deck",
		signature: "Tactical dashboard",
		summary: "An operator UI with side rails, system modules, and scan-first hierarchy.",
	},
	{
		id: "v3",
		label: "Version 03",
		name: "Orbit Planner",
		signature: "Journey builder",
		summary: "A route-planning layout built around destinations, rewards, and travel flow.",
	},
	{
		id: "v4",
		label: "Version 04",
		name: "Captain Concierge",
		signature: "Conversational onboarding",
		summary: "A guided first page that feels like a premium assistant inside Telegram.",
	},
	{
		id: "v5",
		label: "Version 05",
		name: "Season Zero Drop",
		signature: "Live-event storefront",
		summary: "A launch-day experience with countdowns, reward track, and social proof.",
	},
];

function PlaceholderArt({
	title,
	caption,
	eyebrow = "Illustration area",
	className = "",
}: {
	title: string;
	caption: string;
	eyebrow?: string;
	className?: string;
}) {
	return (
		<div className={`art-placeholder ${className}`.trim()}>
			<div className="art-grid" aria-hidden="true" />
			<div className="art-glow art-glow-a" aria-hidden="true" />
			<div className="art-glow art-glow-b" aria-hidden="true" />
			<div className="art-frame">
				<p className="section-tag">{eyebrow}</p>
				<strong>{title}</strong>
				<p>{caption}</p>
			</div>
		</div>
	);
}

function IconSlots({ count = 4, compact = false }: { count?: number; compact?: boolean }) {
	return (
		<div
			className={`icon-slots${compact ? " compact" : ""}`}
			aria-label="Icon placeholders"
		>
			{Array.from({ length: count }).map((_, index) => (
				<div className="icon-slot" key={index}>
					<span>Icon</span>
				</div>
			))}
		</div>
	);
}

function MissionBrief({
	viewer,
	environment,
	startParam,
}: {
	viewer: string;
	environment: string;
	startParam: string;
}) {
	const steps = [
		{ title: "Choose identity", body: "Pilot alias, house style, and your visible first impression." },
		{ title: "Preview your ship", body: "Reserve a dramatic hero visual without needing final art yet." },
		{ title: "Launch socially", body: "Open with squad energy, leaderboard tension, and immediate momentum." },
	];

	return (
		<section className="version-stage mission-stage">
			<div className="mission-copy">
				<p className="section-tag">Version 01 · Narrative hero</p>
				<h1>Open Astroship like a cinematic mission briefing.</h1>
				<p className="lede">
					A bold first impression for new players: high-status copy, guided setup, and
					a big hero zone that can later accept real illustration.
				</p>
				<div className="cta-row">
					<button type="button" className="btn btn-primary">Begin enlistment</button>
					<button type="button" className="btn btn-secondary">Watch teaser</button>
				</div>
				<div className="chip-list">
					<span>Immersive story</span>
					<span>Clear onboarding</span>
					<span>High-status tone</span>
				</div>
				<div className="mission-steps">
					{steps.map((step, index) => (
						<article className="step-card" key={step.title}>
							<span className="step-index">0{index + 1}</span>
							<div>
								<strong>{step.title}</strong>
								<p>{step.body}</p>
							</div>
						</article>
					))}
				</div>
			</div>

			<div className="mission-side">
				<div className="status-panel">
					<div>
						<span>Viewer</span>
						<strong>{viewer}</strong>
					</div>
					<div>
						<span>Runtime</span>
						<strong>{environment}</strong>
					</div>
					<div>
						<span>Entry code</span>
						<strong>{startParam}</strong>
					</div>
				</div>
				<PlaceholderArt
					title="Hero ship key visual"
					caption="Reserve this for a dramatic mothership illustration, cinematic nebula, or season splash."
				/>
				<div className="signal-card">
					<p className="section-tag">Why it feels different</p>
					<ul>
						<li>Designed like a trailer poster, not a dashboard.</li>
						<li>Uses story beats instead of modules as the main structure.</li>
						<li>Best fit for premium first-time wow.</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

function CommandDeck({ viewer, environment }: { viewer: string; environment: string }) {
	const systems = [
		["Bridge readiness", "94%"],
		["Squad signal", "online"],
		["Shipyard queue", "3 hulls"],
		["Live event", "14m left"],
	];

	return (
		<section className="version-stage command-stage">
			<aside className="command-sidebar">
				<p className="section-tag">Version 02 · Tactical dashboard</p>
				<h1>Make the first page feel like the captain already owns a console.</h1>
				<nav className="command-nav" aria-label="Command sections">
					<button type="button" className="command-nav-item active">Overview</button>
					<button type="button" className="command-nav-item">Fleet status</button>
					<button type="button" className="command-nav-item">Battle log</button>
					<button type="button" className="command-nav-item">Squad comms</button>
				</nav>
				<div className="sidebar-meter">
					<span>Operator</span>
					<strong>{viewer}</strong>
				</div>
			</aside>

			<div className="command-main">
				<div className="command-toolbar">
					<div>
						<p className="section-tag">Control room</p>
						<strong>Fast scan, sharp hierarchy, instant action.</strong>
					</div>
					<div className="toolbar-actions">
						<button type="button" className="btn btn-secondary">Inspect build</button>
						<button type="button" className="btn btn-primary">Open bridge</button>
					</div>
				</div>

				<div className="command-board">
					<div className="radar-display">
						<div className="radar-core">
							<span>Docking lane</span>
							<strong>Sector A-17</strong>
						</div>
						<div className="radar-card radar-card-a">Recruit drop</div>
						<div className="radar-card radar-card-b">PvP ladder</div>
						<div className="radar-card radar-card-c">Alliance tasks</div>
					</div>

					<div className="systems-grid">
						{systems.map(([label, value]) => (
							<div className="system-tile" key={label}>
								<span>{label}</span>
								<strong>{value}</strong>
							</div>
						))}
					</div>
				</div>
			</div>

			<aside className="command-feed">
				<div className="feed-card">
					<p className="section-tag">Environment</p>
					<strong>{environment}</strong>
					<p>Ideal when the product should feel operational from second one.</p>
				</div>
				<div className="feed-card">
					<p className="section-tag">Activity feed</p>
					<ul className="feed-list">
						<li>12:04 · Founder slot reopened</li>
						<li>12:09 · Fleet slot reserved</li>
						<li>12:13 · New squad invite waiting</li>
					</ul>
				</div>
				<div className="feed-card">
					<p className="section-tag">Utility rail</p>
					<IconSlots compact />
				</div>
			</aside>
		</section>
	);
}

function OrbitPlanner({
	viewer,
	startParam,
}: {
	viewer: string;
	startParam: string;
}) {
	const stops = [
		{ title: "Claim origin world", body: "Select a faction fantasy before any hard commitment." },
		{ title: "Map your launch route", body: "Preview rewards, rivals, and social momentum before entering." },
		{ title: "Invite a wingmate", body: "Turn the very first screen into a co-op trigger, not a dead end." },
	];

	return (
		<section className="version-stage orbit-stage">
			<div className="orbit-headline">
				<p className="section-tag">Version 03 · Journey builder</p>
				<h1>Frame the first page as a destination planner, not a static hero.</h1>
				<p className="lede">
					This version sells the fantasy of going somewhere: destinations, travel path,
					reward preview, and elegant route selection.
				</p>
			</div>

			<div className="orbit-visual">
				<div className="orbit-ring" aria-hidden="true" />
				<div className="orbit-core-card">
					<span>Reserved route</span>
					<strong>Founder path</strong>
					<small>entry: {startParam}</small>
				</div>
				<PlaceholderArt
					title="Floating destination artwork"
					caption="Use for a planet scene, orbital ship render, or layered atmospheric concept."
					className="orbit-art"
				/>
			</div>

			<div className="orbit-itinerary">
				{stops.map((stop, index) => (
					<article key={stop.title} className="itinerary-card">
						<span className="step-index">0{index + 1}</span>
						<div>
							<strong>{stop.title}</strong>
							<p>{stop.body}</p>
						</div>
					</article>
				))}
			</div>

			<div className="orbit-dock">
				<div>
					<p className="section-tag">For {viewer}</p>
					<strong>Ideal if Astroship should feel like a premium expedition.</strong>
				</div>
				<div className="cta-row">
					<button type="button" className="btn btn-primary">Plot route</button>
					<button type="button" className="btn btn-secondary">Review worlds</button>
				</div>
			</div>
		</section>
	);
}

function CaptainConcierge({
	viewer,
	environment,
}: {
	viewer: string;
	environment: string;
}) {
	return (
		<section className="version-stage concierge-stage">
			<div className="concierge-header">
				<div>
					<p className="section-tag">Version 04 · Conversational onboarding</p>
					<h1>Let the first page feel like a premium concierge inside Telegram.</h1>
				</div>
				<div className="presence-card">
					<span>Session</span>
					<strong>{environment}</strong>
				</div>
			</div>

			<div className="concierge-chat">
				<div className="chat-bubble assistant">
					<p className="section-tag">Astra concierge</p>
					<strong>Welcome back, {viewer}.</strong>
					<p>I can set up your ship identity, recommend a squad, or open today’s live event.</p>
				</div>
				<div className="chat-bubble user">
					<strong>I want the fastest path into the game.</strong>
				</div>
				<div className="chat-bubble assistant">
					<p>I’d start with your founder identity, then jump straight into the first ranked loop.</p>
					<div className="chip-list">
						<span>Founder setup</span>
						<span>Ranked intro</span>
						<span>Join a squad</span>
					</div>
				</div>
			</div>

			<div className="concierge-side">
				<div className="profile-card">
					<p className="section-tag">Recommended for you</p>
					<strong>Competitive social opener</strong>
					<p>Great when the app should feel personal, guided, and instantly helpful.</p>
				</div>
				<PlaceholderArt
					title="Assistant or ship portrait"
					caption="This area can later hold an AI guide, captain portrait, or stylized ship reveal."
				/>
				<IconSlots compact />
			</div>

			<div className="action-sheet">
				<div>
					<p className="section-tag">Next actions</p>
					<strong>Use a guided sheet instead of a classic hero CTA row.</strong>
				</div>
				<div className="action-sheet-buttons">
					<button type="button" className="btn btn-primary">Get my setup</button>
					<button type="button" className="btn btn-secondary">See squad options</button>
					<button type="button" className="btn btn-secondary">Skip to event</button>
				</div>
			</div>
		</section>
	);
}

function SeasonZeroDrop({
	viewer,
	environment,
}: {
	viewer: string;
	environment: string;
}) {
	const rewards = ["Nameplate", "Founder hull", "Signal banner", "VIP slot"];

	return (
		<section className="version-stage drop-stage">
			<div className="drop-banner">
				<div>
					<p className="section-tag">Version 05 · Live-event storefront</p>
					<h1>Launch the game like an event drop, not a plain homepage.</h1>
					<p className="lede">
						Countdown energy, premium bundles, reward track, and community proof — made
						to convert attention fast while still looking high-end.
					</p>
				</div>
				<div className="countdown-card">
					<span>Season zero opens</span>
					<strong>14 : 28 : 52</strong>
					<small>{viewer} · {environment}</small>
				</div>
			</div>

			<div className="drop-grid">
				<div className="reward-track">
					<p className="section-tag">Reward path</p>
					{rewards.map((reward, index) => (
						<div className="reward-row" key={reward}>
							<span>Tier 0{index + 1}</span>
							<strong>{reward}</strong>
						</div>
					))}
				</div>

				<div className="drop-visual">
					<PlaceholderArt
						title="Launch bundle artwork"
						caption="Perfect slot for pack art, season poster, or flagship skin reveal."
					/>
				</div>

				<div className="offer-column">
					<div className="offer-card hot">
						<p className="section-tag">Founder pack</p>
						<strong>Best for first-session conversion</strong>
						<p>Feature the premium edition with a strong CTA and a clean value ladder.</p>
					</div>
					<div className="offer-card">
						<p className="section-tag">Proof</p>
						<strong>2.4k pilots waiting</strong>
						<p>Social validation is front-and-center instead of hidden below the fold.</p>
					</div>
					<div className="cta-column">
						<button type="button" className="btn btn-primary">Claim founder pack</button>
						<button type="button" className="btn btn-secondary">Compare editions</button>
					</div>
				</div>
			</div>
		</section>
	);
}

function VersionShowcase({
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
	switch (version.id) {
		case "v1":
			return <MissionBrief viewer={viewer} environment={environment} startParam={startParam} />;
		case "v2":
			return <CommandDeck viewer={viewer} environment={environment} />;
		case "v3":
			return <OrbitPlanner viewer={viewer} startParam={startParam} />;
		case "v4":
			return <CaptainConcierge viewer={viewer} environment={environment} />;
		case "v5":
			return <SeasonZeroDrop viewer={viewer} environment={environment} />;
	}
}

function App() {
	const [environment, setEnvironment] = useState("Browser");
	const [viewer, setViewer] = useState("Guest pilot");
	const [startParam, setStartParam] = useState("none");
	const [activeVersion, setActiveVersion] = useState<VersionId>("v1");

	useEffect(() => {
		const webApp = initTelegramMiniApp();
		if (!webApp) {
			return;
		}

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
			});

		(window as Window & {
			advanceTime?: (ms: number) => void;
		}).advanceTime = () => undefined;
	}, [activeVersion, currentVersion.name, environment, startParam, viewer]);

	return (
		<div className={`app-shell theme-${currentVersion.id}`}>
			<div className="top-safe-area" aria-hidden="true" />
			<div className="app-frame">
				<header className="app-header">
					<div>
						<p className="micro-label">Astroship · UX laboratory</p>
						<h2>Five actually different first-page directions.</h2>
						<p className="header-copy">
							These versions now differ by structure, interaction model, and information
							hierarchy — not just color.
						</p>
					</div>

					<div className="runtime-pills" aria-label="Runtime information">
						<span>{viewer}</span>
						<span>{environment}</span>
						<span>start: {startParam}</span>
					</div>
				</header>

				<section className="selector-panel">
					<div className="selector-copy">
						<p className="section-tag">Version selector</p>
						<h3>Switch between five very different UI/UX concepts.</h3>
						<p>
							Story opener, command dashboard, route planner, concierge flow, and live
							season drop — all in one prototype.
						</p>
					</div>

					<div className="selector-grid" role="tablist" aria-label="Landing page versions">
						{versions.map((version) => {
							const isActive = version.id === activeVersion;
							return (
								<button
									key={version.id}
									type="button"
									className={`selector-card${isActive ? " is-active" : ""}`}
									onClick={() => setActiveVersion(version.id)}
									role="tab"
									aria-selected={isActive}
								>
									<p>{version.label}</p>
									<strong>{version.name}</strong>
									<span>{version.signature}</span>
									<small>{version.summary}</small>
								</button>
							);
						})}
					</div>
				</section>

				<VersionShowcase
					version={currentVersion}
					viewer={viewer}
					environment={environment}
					startParam={startParam}
				/>
			</div>
		</div>
	);
}

createRoot(document.getElementById("root")!).render(<App />);
