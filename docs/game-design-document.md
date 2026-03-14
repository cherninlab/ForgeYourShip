# Game Design Document

## Working Title: Astroship

Telegram spaceship progression, customization, and social competition game.

## Proprietary Notice

**This document is proprietary and not open source.**

It is intended for internal planning, alignment, and production preparation for the Astroship project.

## 1. Executive Summary

**Astroship** is a Telegram-first live-service spaceship progression game built around a simple but powerful fantasy:

**Every upgrade physically transforms your ship.**

Unlike idle games built around abstract stats, parody finance, or invisible power, this game turns progression into visible identity. Players begin with a modest starter vessel and gradually evolve it into a fast interceptor, a brutal warship, a massive industrial cargo hauler, an elite exploration vessel, a luxury command yacht, or a hybrid build reflecting their choices.

The core emotional hook is not just growth. It is **ownership**.

The player should feel:

- this is **my ship**
- it looks different because of **my decisions**
- other players can **see** that difference
- I want to keep upgrading because I want to **complete my ship**

The game takes inspiration from high-retention Telegram progression loops and dashboard-heavy upgrade UX, but replaces crypto themes with a stronger sci-fi fantasy centered on ship evolution, cockpit immersion, fleets, leaderboards, community recognition, and seasonal transformation fantasies.

## 2. High Concept

### Core fantasy

You are the captain of a customizable starship in a competitive shared galaxy. You upgrade systems, run missions, join fleets, climb leaderboards, unlock new ship classes, and shape both the exterior and interior of your vessel. Every meaningful investment changes the appearance of your ship.

### Player fantasy promise

- Build a ship that feels unique
- See your upgrades immediately reflected visually
- Choose a path and become known for it
- Show your ship to other players
- Compete alone and as part of a fleet
- Collect rare seasonal ship identities and prestige items

### Genre blend

- Telegram idle / progression game
- ship customization and collection game
- social prestige and leaderboard game
- light live-service management game

### Non-goals

This is **not**:

- a crypto parody game
- a realistic flight sim
- a deep 4X strategy game
- a hard PvP combat sim
- an economy game built around financial satire

## 3. Product Pillars

### Pillar 1: Visible Transformation

Every major upgrade should have a visible ship impact. The player should constantly ask: **what will my ship look like next?**

### Pillar 2: Identity Over Abstraction

The ship is not a stat sheet. It is a visual self-portrait, a collectible object, and a social status symbol.

### Pillar 3: Simple Actions, Deep Attachment

The moment-to-moment gameplay must remain accessible and fast, but the long-term attachment to the ship should be deep.

### Pillar 4: Social Display Drives Retention

Inspection, fleets, rankings, public showcases, and comparison loops are essential. Prestige matters only if people can see it.

### Pillar 5: Monetization Through Aspiration

The game monetizes primarily through identity, acceleration, collection, and status visibility, not raw mandatory power.

## 4. Platform and Audience

### Platform

- Telegram Mini App first
- Potential web companion later
- Optional mobile wrapper later if justified

### Audience

Primary:

- Telegram users familiar with progression games
- players who enjoy customization and collection
- players who like visible status and community competition

Secondary:

- sci-fi enthusiasts
- spaceship fantasy fans
- players who enjoy expressive, prestige-driven cosmetic progression
- social or guild-based live-service players

### Session model

- short frequent sessions: 1 to 5 minutes
- medium management sessions: 5 to 15 minutes
- event or social sessions: 10 to 20 minutes

### Desired emotional outcomes

- ownership
- curiosity
- pride
- aspiration
- belonging
- recognition

## 5. Core Loop

### Primary loop

1. Open game
2. Collect generated resources or rewards
3. Spend on upgrades, modules, missions, or research
4. Watch ship change visually
5. Increase power, rank, and unlock paths
6. Compare with other ships or fleets
7. Return for next visible milestone

### Core loop statement

**Collect -> Upgrade -> Transform -> Compare -> Return**

### Secondary loops

- complete missions for targeted materials
- progress research trees for new ship component families
- unlock cockpit improvements for immersion and bonuses
- enter seasonal events for exclusive sets
- contribute to fleet objectives for shared prestige

### Long-term loop

Starter ship -> specialization path -> class evolution -> collection expansion -> prestige identity -> seasonal reinvention

## 6. Core Game Structure

The game is organized around two major ship pages and several supporting systems.

### 6.1 Exterior Page: Hangar

Functions:

- display full exterior ship
- show ship name, class, power, rank, faction or fleet identity
- show visible module changes
- access exterior upgrades
- showcase cosmetic changes
- open player inspection view

Player fantasy:
**this is my ship from the outside**

### 6.2 Interior Page: Cockpit

Functions:

- display cockpit or bridge interior
- show command systems and crew improvements
- support interior-specific progression and cosmetic layers
- convey prestige and attachment from within

Player fantasy:
**this is the command space I built**

### 6.3 Supporting Tabs

- Missions
- Research
- Fleet
- Leaderboards
- Dockyard / Store
- Events
- Profile / Achievements

## 7. Game World and Tone

### Tone

- aspirational sci-fi
- premium, stylish, slightly operatic
- clean visual progression
- accessible but not childish
- mysterious universe with status, exploration, and rivalry

### Universe framing

The galaxy is built around fleets, trade lanes, salvage zones, conflict sectors, ancient relic sites, racing routes, industrial worlds, and elite command hubs. Players are independent captains or fleet members rising through reputation and ship development.

### Narrative approach

Narrative is light, modular, and seasonal. The core attachment is to the ship, not to a long linear story. Lore exists to contextualize factions, events, and prestige collections.

## 8. Player Fantasy Archetypes

These are player-expression lanes rather than rigid classes.

- **Interceptor Captain**: fast, sleek, aggressive, high-thrust builds
- **Warship Commander**: heavy armor, weaponized silhouette, intimidating prestige
- **Industrial Hauler**: cargo expansion, external containers, rugged utility style
- **Deep Explorer**: sensors, dishes, elegant long-range silhouette, relic hunter theme
- **Luxury Captain**: prestige materials, elite bridge, ceremonial styling, premium presentation
- **Hybrid Specialist**: balanced but visually distinct builds mixing multiple directions

These archetypes drive progression, content, offers, social comparison, and seasonal content.

## 9. Main Progression Systems

### 9.1 Ship Progression

Each ship has:

- hull class
- core systems
- specialization tendencies
- appearance layers
- power score
- prestige score
- module slots

The player grows by upgrading systems that affect both function and appearance.

### 9.2 Captain Progression

The account-level profile tracks:

- captain level
- reputation
- fleet contribution
- seasonal standing
- achievements
- unlocked collections

### 9.3 Research Progression

Research unlocks:

- new module families
- new hull branches
- new appearance parts
- better mission outcomes
- new passive systems
- advanced cockpit options

### 9.4 Collection Progression

Players build permanent collection progress via:

- owned ships
- hull families unlocked
- cockpit themes unlocked
- seasonal set pieces
- faction rewards
- trophies and relic displays

## 10. Resources and Currencies

### Soft currencies

**Credits**

- primary base currency
- used for common upgrades and actions

**Alloys**

- hull, armor, structural systems

**Fuel Cells**

- engines, missions, travel systems

**Data Cores**

- research, sensors, navigation, AI systems

**Plasma Units**

- advanced systems, weapons, shields

### Hard currency

**Stellar Shards**

- premium currency
- used for cosmetics, convenience, premium track, certain store items, limited-time content

### Social or prestige currencies

**Fleet Reputation**

- earned through group activity
- used for fleet-unlocked content and social progression

**Season Tokens**

- event-specific limited currency
- used in seasonal vault

### Currency principles

- no more than one global hard currency at launch
- keep event currencies temporary and contextual
- every premium purchase should map to visible identity or useful convenience
- do not make hard currency feel like a tax on normal play

## 11. System Categories and Visual Effects

Every major category should affect both gameplay and appearance.

### 11.1 Engines

Gameplay:

- speed
- mission turnaround
- energy efficiency
- boost-related bonuses

Visual changes:

- thruster size
- exhaust shape
- glow intensity
- rear silhouette
- stabilizers and fins

### 11.2 Hull

Gameplay:

- durability
- cargo base capacity
- slot count
- structural efficiency

Visual changes:

- body mass
- armor plate geometry
- hull segmentation
- material finish
- frame profile

### 11.3 Shields

Gameplay:

- defense
- regeneration
- hazard resistance

Visual changes:

- shield emitters
- glow nodes
- energy arcs
- ring-like protective structures

### 11.4 Weapons

Gameplay:

- combat performance
- event damage output
- intimidation score in some social contexts

Visual changes:

- turrets
- cannons
- missile pods
- weapon ports
- reinforced combat plating

### 11.5 Cargo

Gameplay:

- passive income scale
- mission yield
- storage limits

Visual changes:

- containers
- side modules
- loading ramps
- external support arms
- industrial bulkiness

### 11.6 Navigation / Sensors

Gameplay:

- exploration success
- rare discovery rates
- improved mission choices

Visual changes:

- radar dishes
- sensor fins
- antenna arrays
- nose profile changes
- scan lighting elements

### 11.7 Crew / Cockpit

Gameplay:

- automation
- efficiency bonuses
- passive generation boosts
- command bonuses

Visual interior changes:

- upgraded captain chair
- dashboard complexity
- panoramic windows
- AI assistants
- bridge screens and holograms
- crew stations

### 11.8 Luxury / Prestige

Gameplay:

- mostly cosmetic or social
- may add minor reputation bonuses or showcase multipliers

Visual changes:

- premium trim
- lighting style
- ceremonial wings or fins
- polished materials
- nameplate embellishments
- elite hangar presentation

## 12. Ship Visual Generation System

This is the heart of the product.

### 12.1 Design goal

Enable thousands of coherent ship outcomes without generating ugly chaos.

### 12.2 Principle

Use a **modular controlled synthesis system**, not pure randomness.

### 12.3 Ship assembly layers

- hull base
- nose or cockpit exterior shell
- wings or fins
- engine family
- cargo attachments
- weapon mounts
- shield hardware
- sensor hardware
- side modules
- paint or material treatment
- decal package
- lighting package
- prestige ornaments

### 12.4 Ship families

Launch should include a manageable set such as:

- Scout
- Interceptor
- Frigate
- Hauler
- Explorer
- Command Yacht
- Warframe

Each family has:

- silhouette rules
- valid attachment rules
- cockpit constraints
- visual style grammar

### 12.5 Coherency rules

- only allow compatible part pairings
- maintain silhouette harmony
- scale attachments relative to hull tier
- theme parts by visual family
- enforce side-profile readability
- avoid overstacking modules on small ships
- control color and material pairings

### 12.6 Transformation milestones

Important upgrades should trigger visible milestones, such as:

- engine tier jump adds new thruster family
- shield tier unlock adds emitter ring
- cargo tier unlock adds side pods
- cockpit tier unlock changes canopy or bridge line
- research milestone unlocks new wing architecture

### 12.7 Rarity and uniqueness

Rare parts should be:

- visually distinct
- instantly recognizable
- tied to events, factions, or seasons
- appropriate to the fantasy lane

### 12.8 Exterior and interior synchronization

Exterior and interior should reflect each other where possible.

Examples:

- high-end command bridge outside corresponds to panoramic bridge inside
- industrial cargo exterior corresponds to utilitarian control panels inside
- luxury exterior corresponds to premium materials and lighting inside

## 13. Ship Classes and Ownership Model

### 13.1 Starter ship

Every player begins with a modest base vessel, visually underdeveloped but not embarrassing. It must have enough style to create attachment, but enough limitations to make transformation meaningful.

### 13.2 Owning multiple ships

Players can unlock multiple ships over time for:

- experimentation with build fantasies
- seasonal collection goals
- class specialization
- monetization opportunities for dock slots and ship packs

### 13.3 Active ship vs reserve ships

- one ship designated as active flagship
- other ships stored in dock
- reserve ships can be showcased in collection view

### 13.4 Ship switching

Players can switch the active ship for:

- social flex
- event requirements
- mission optimization
- seasonal challenge participation

### 13.5 Ship naming

Naming is important for attachment. Players should name ships early.

## 14. Gameplay Actions and Session Activities

### Quick session actions

- collect passive resources
- claim mission rewards
- start a new build
- buy 1 to 3 upgrades
- inspect ship transformation
- vote or react to fleetmate ships
- claim daily reward

### Medium session actions

- optimize build path
- run several missions
- manage cockpit improvements
- browse store or dockyard
- compare on leaderboards
- contribute to fleet goals

### Longer engagement actions

- seasonal event participation
- complete collection milestones
- fleet coordination
- rebuild ship identity around a new fantasy path

## 15. Missions System

Missions provide targeted goals, resource sinks, and fantasy context.

### Mission categories

**Trade Runs**

- reward credits and cargo-related items
- stronger for cargo builds

**Salvage Expeditions**

- reward alloys, rare parts, relic fragments
- stronger for explorer and utility builds

**Combat Contracts**

- reward plasma, combat prestige, event score
- stronger for weaponized ships

**Survey Missions**

- reward data cores and research boosts
- stronger for sensor builds

**Diplomatic / Prestige Runs**

- reward reputation, luxury items, showcase assets
- stronger for prestige builds

### Mission structure

- mostly timer-based, menu-driven, low-friction
- outcomes influenced by ship specialization
- optional risk or reward variants
- occasional mini decision nodes or modifiers

### Mission presentation

Mission cards should feel premium and thematic, not spreadsheet-like. Each mission should reinforce the captain fantasy.

## 16. Cockpit / Interior System

The cockpit is not just cosmetic. It strengthens emotional attachment and creates an additional monetization and progression space.

### Interior layers

- captain seat
- dashboard core
- main display or holo map
- side stations
- AI module
- wall materials and trim
- ambient lighting
- trophy or relic display
- crew occupancy feel
- panoramic window or canopy style

### Interior progression goals

- give players a second major attachment surface
- create a contrast to exterior flex
- support more intimate prestige and collection content
- deepen identity beyond silhouette alone

### Interior gameplay tie-ins

- better cockpit modules improve mission automation
- AI systems boost passive income or analysis
- crew stations unlock support bonuses
- trophy displays support social profile prestige

## 17. Social Systems

Social design is mandatory for this product. Prestige only matters if it is visible.

### 17.1 Player Inspection

Inspection shows:

- exterior ship view
- interior preview
- ship class and power
- specialization summary
- notable rare parts
- fleet affiliation
- badges or trophies
- reactions received

### 17.2 Reactions and Appreciation

Players can react to ships with curated responses, such as:

- Clean Build
- Beast
- Speed Demon
- Industrial Monster
- Elegant Bridge
- Legendary

This is safer and more thematic than unrestricted comments.

### 17.3 Friends and invite loop

Players can invite friends for:

- starter bonuses
- fleet growth
- co-op events
- ship visitation or comparison

### 17.4 Public showcase surfaces

- leaderboard entries
- profile cards
- fleet dock view
- ship of the day or week
- event winner pages

## 18. Fleet System

Fleets are guild-like social groups and an important long-term retention layer.

### Fleet goals

- create belonging
- create cooperative progression
- create social proof for prestige
- create recurring group events

### Fleet functions

- join or create a fleet
- fleet emblem and colors
- fleet dock or shared showcase space
- fleet chat hooks via Telegram context
- co-op contribution events
- shared unlock progression
- fleet leaderboard

### Fleet progression elements

- fleet level
- fleet reputation
- fleet projects
- shared hangar prestige items
- officer roles and titles

### Fleet projects

Examples:

- build fleet station level
- unlock fleet parade bay
- unlock shared emblem effects
- unlock weekly fleet mission bonus
- unlock faction-themed showcase decorations

### Fleet events

- cooperative salvage rush
- sector domination event
- fleet construction race
- class-restricted fleet challenge
- seasonal faction war

## 19. Leaderboards and Competition

Leaderboards should reflect multiple fantasies, not only one top power score.

### Core leaderboards

- total power score
- prestige score
- growth this week
- top interceptor
- top warship
- top explorer
- top cargo ship
- top cockpit prestige
- top fleet contribution
- fleet ranking

### Design principles

- multiple categories allow more players to matter
- seasonal refresh avoids permanent winner lock-in
- visible ship thumbnails improve emotional impact
- rewards should be prestige-forward, not pure power inflation

### Competitive tone

Competition should feel aspirational and aesthetic, not toxic. The game is about being recognized for the ship you built.

## 20. Events and Live Operations

Live ops are essential for long-term retention and monetization.

### Event types

**Seasonal Transformations**
New full-fantasy collection sets with pass rewards and limited store items.

**Fleet Events**
Group contribution, standings, social rewards.

**Build Challenges**
Create the best ship under a specific theme or restriction.

**Salvage Rush**
Resource-focused limited event with exploration flavor.

**Boss Encounter / Sector Threat**
Global damage or contribution event themed around a threat.

**Festival of Captains**
Prestige celebration event focused on visibility, voting, and showcase.

### Live ops cadence suggestion

- daily tasks
- weekly fleet or community objectives
- monthly themed mini-event
- 6 to 8 week major season

### Seasonal themes examples

- Imperial Armada
- Deep Void Salvagers
- Neon Racing League
- Holy Machine Order
- Corporate Security Fleet
- Ancient Xenotech Discoverers

Each season should include:

- one exterior identity set
- one cockpit theme
- one prestige effect
- one social flex item
- one collectible chain

## 21. Meta Progression and Retention Systems

### Daily systems

- daily login reward
- daily missions
- daily ship check-in or maintenance reward
- rotating featured build challenge

### Weekly systems

- weekly fleet target
- weekly leaderboard snapshot rewards
- weekly premium store refresh

### Long-term systems

- ship collection milestones
- achievement chains
- prestige achievements
- faction loyalty arcs
- multi-ship mastery rewards

### Retention goal

The player should always have:

- one short-term target
- one medium-term visible transformation target
- one long-term identity goal

## 22. UI / UX Design

### Product direction

The UI should borrow the strong retention qualities of Telegram dashboard games while feeling more premium, clean, and sci-fi.

### Key UX principles

- ship image must remain central
- upgrades should feel tactile and immediate
- before and after transformation must be obvious
- navigation should be simple and thumb-friendly
- important actions should never be buried
- social visibility should be integrated, not siloed

### Suggested bottom navigation

- Hangar
- Cockpit
- Missions
- Fleet
- Dockyard

Secondary navigation or overlays:

- Leaderboards
- Events
- Profile
- Inbox
- Store details

### Hangar screen elements

- large ship hero render
- power and prestige display
- major upgrade categories
- current build path emphasis
- visible transformation prompts
- recent changes indicator

### Cockpit screen elements

- large interior hero render
- crew, AI, and control modules
- command bonuses
- decor and trophy slots

### Mission screen elements

- card-based mission list
- completion timers
- specialization advantage indicators
- quick-start actions

### Inspection UI

- large ship view first
- rare parts highlighted
- badges and reactions visible
- interior preview one tap away

## 23. Art Direction

### Visual style

- premium sci-fi with high readability
- elegant silhouettes
- visually distinct ship families
- restrained but strong FX
- modular detail that reads clearly on mobile

### Exterior art goals

- every ship should be recognizable in thumbnail form
- specialization should be visible at a glance
- rare parts should feel aspirational but not visually messy

### Interior art goals

- cockpit should feel premium, intimate, and collectible
- status should be visible through lighting, materials, windows, and AI presence

### Material families

- industrial worn
- military matte
- explorer ceramic or composite
- prestige polished metal
- ceremonial ornate trim
- corporate luxury finish

### FX philosophy

FX should communicate importance:

- engine flames
- shield pulses
- sensor scans
- launch effects
- prestige lighting

Avoid overwhelming the screen.

## 24. Audio Direction

Even on Telegram, audio identity matters when used selectively.

### Audio goals

- satisfying upgrade feedback
- distinct ship identity cues
- premium feel for unlocks and prestige moments

### Audio categories

- engine hum variations by build
- cockpit ambience
- upgrade stingers
- mission completion stingers
- fleet event fanfare
- seasonal theme motifs

Audio should be optional and lightweight.

## 25. Monetization Design

### Core monetization thesis

Sell identity, acceleration, and status visibility around a ship players already care about.

### Monetization layers

#### 1. Low-friction repeat spend

- extra mission slot for limited time
- expedited fabrication
- salvage sweep
- repaint token
- limited convenience packs

#### 2. Mid-tier aspiration packs

Fantasy-based bundles such as:

- Interceptor Pack
- Warship Pack
- Explorer Pack
- Luxury Captain Pack
- Industrial Cargo Pack

Each includes:

- themed cosmetic parts
- some Stellar Shards
- useful accelerator
- exclusive visual effect or badge

#### 3. Recurring spend

- Season Pass
- potential later Captain Membership

#### 4. Prestige spend

- legendary hull skins
- launch sequences
- elite hangars
- inspection frames
- premium bridge AI avatar
- limited collector editions

### Core monetization rule

**Never sell abstract value when visible transformation can sell the same economics better.**

### Offer design rule

Use contextual offers tied to player behavior.

Examples:

- after 3 engine upgrades: Interceptor Conversion Offer
- after joining fleet: Fleet Colors Pack
- after first leaderboard appearance: Showcase Hangar Offer
- after cockpit tier 2: Command Bridge Pack

### First purchase design

The first purchase should come after the player has named the ship, made a visible transformation, and seen better ships.

### Free/pay balance

Free players must still be able to build attractive ships. Paying players should build more extraordinary, faster, and more visible ships.

## 26. Store Information Architecture

### Dockyard

- hulls
- engine families
- wing kits
- structural silhouettes

### Cockpit Atelier

- bridge themes
- chairs
- dashboards
- AI assistants
- lighting sets

### Arsenal & Systems

- weapon skins
- shield effects
- sensor visuals
- utility styling

### Hangar Prestige

- showcase hangars
- launch sequences
- inspection frames
- display rooms

### Seasonal Vault

- event-limited sets
- commemorative rewards
- special collections

The store should feel like an extension of ship-building fantasy, not a currency warehouse.

## 27. Content Architecture

To scale efficiently, content should be modular.

### Content units

- hull family
- part family
- material set
- cockpit theme
- FX package
- badge or nameplate pack
- mission theme
- seasonal event layer

### Launch content target example

- 5 to 7 hull families
- 4 to 6 major specialization categories
- 3 cockpit progression tiers per family
- 6 to 10 mission archetypes
- 2 launch event structures
- 1 initial season

### Long-term content pipeline

Most content post-launch should be combinational, themed, and prestige-oriented rather than requiring entirely new gameplay systems.

## 28. Economy Design Principles

### Economy goals

- reward frequent return sessions
- allow meaningful visible progress daily
- preserve aspiration over weeks and months
- avoid dead-end resource gluts
- support contextual monetization without pressure spikes

### Economic pacing

Early game:

- frequent visual upgrades
- rapid attachment building
- clear first fantasy lane

Mid game:

- specialization decisions
- targeted mission grinding
- first social competition relevance

Late game:

- prestige optimization
- collection completion
- seasonal reinvention
- multi-ship ownership

### Anti-frustration principles

- do not hard-wall visual progression too early
- do not delay visible upgrades excessively
- offer targeted, understandable goals
- allow players to see upcoming transformations

## 29. Onboarding

Onboarding must prove the central fantasy quickly.

### Opening flow

1. Introduce starter ship
2. Name the ship
3. Choose a broad fantasy preference or starter path
4. Perform first visible upgrade
5. Show before and after transformation clearly
6. Unlock first mission
7. Show another player or example elite ship
8. Surface a personalized starter offer only after attachment exists

### First session goals

The player must understand:

- the ship changes visually
- my choices matter
- there are cooler ships I can become
- other players will see my ship

If this lands, retention potential rises sharply.

## 30. Technical Product Considerations

### Telegram constraints

- fast load times
- lightweight UI
- scalable asset delivery
- responsive layouts
- efficient caching for modular ship visuals

### Ship rendering approaches

Options:

1. layered 2D composition
2. pre-rendered modular 3D captured to 2D sprites
3. hybrid assembly with server-side composition

Recommended early direction:

- modular layered 2D or 2.5D presentation for speed and control
- consistent part sockets and style guides
- precomputed thumbnails for social and leaderboard contexts

### Data model essentials

- ship instance
- owned parts
- equipped parts
- module levels
- appearance state
- interior state
- collection state
- seasonal entitlements
- fleet state

## 31. Telemetry and KPIs

### Core KPIs

- D1, D7, D30 retention
- session count per day
- average session duration
- upgrade frequency per session
- first visible transformation completion rate
- ship naming completion rate
- fleet join rate
- first purchase conversion
- payer conversion by fantasy lane
- inspection views per DAU
- reaction usage rate
- season pass conversion

### Diagnostic metrics

- time until first visible change
- most or least chosen fantasy lane
- drop-off before ship attachment
- offer acceptance by context trigger
- hangar vs cockpit engagement ratio
- social visibility impact on spend

### North star proxy

**Players who complete 3 visible ship transformations in the first 48 hours**

This is a strong indicator of attachment formation.

## 32. Live Balance Risks

### Risk: ship outcomes become ugly

Mitigation:

- strict visual compatibility rules
- curated part families
- preview before equip

### Risk: monetization overwhelms fantasy

Mitigation:

- contextual offers only
- limited simultaneous store noise
- fantasy-first presentation

### Risk: progression feels too abstract

Mitigation:

- frequent visual changes
- clear milestone previews
- transformation timeline UI

### Risk: social layer is too thin

Mitigation:

- build inspection and showcase early
- support fleet presence from near launch

### Risk: every player converges to same best build

Mitigation:

- multiple leaderboard categories
- fantasy-based content diversity
- cosmetic prestige value independent of pure stats

## 33. MVP Scope Recommendation

### Must-have for MVP

- starter ship
- exterior hangar page
- visible transformation system for key categories
- at least 3 meaningful specialization directions
- basic mission loop
- basic resource economy
- player profile and ship name
- player inspection
- leaderboard v1
- store v1 with starter pack and 2 to 3 fantasy bundles

### Strongly recommended for MVP+

- cockpit page v1
- fleet system v1
- first season or event
- social reactions
- rare parts and collections

### Can come later

- advanced fleet station systems
- gifting
- parade mode
- high-end showcase rooms
- complex seasonal narrative arcs

## 34. First 90 Days Live-Service Plan

### Launch window

- focus on onboarding, attachment, first purchases, first social comparison

### Month 1

- tune first transformation pacing
- improve inspection and leaderboard clarity
- release first small build event

### Month 2

- launch first full season
- add more contextual offer logic
- expand cockpit depth

### Month 3

- add fleet event depth
- release one high-visibility prestige collection
- refine fantasy segmentation in offers and content

## 35. Future Expansion Opportunities

- faction alignment systems
- legendary multi-part transformation quests
- cross-fleet diplomacy or rivalry
- limited cooperative boss sectors
- ship museum or historical collection room
- more elaborate cockpit crew personalities
- dockyard trading of certain non-power cosmetics
- shareable build cards for viral spread

## 36. Design Principles Summary

When in doubt, prioritize the following:

1. **The ship must matter emotionally**
2. **Progress must be visible**
3. **The player's choices must shape identity**
4. **Social visibility must reinforce aspiration**
5. **Monetization must feel like completing fantasy, not buying permission**
6. **Complexity should support attachment, never replace it**

## 37. One-Sentence Product Definition

**Astroship is a Telegram live-service spaceship progression game where every upgrade visibly transforms your ship, your cockpit, and your social identity in a shared competitive galaxy.**

## 38. Final Creative Benchmark

The game succeeds if players say:

- "Look at my ship."
- "I want my next upgrade because it will change the silhouette."
- "That fleet has amazing builds."
- "This season's ship set is incredible."
- "I spent because I wanted to complete my captain fantasy."

If players only say "number goes up," the game is underdelivering.

If players say "this ship feels like mine," the game is working.
