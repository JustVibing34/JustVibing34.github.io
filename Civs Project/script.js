/* =============================================
   THE WAR OF THE BLACK TIDE — GAME SCRIPT
   ============================================= */

// ─── STAT DEFINITIONS ───────────────────────
const STAT_DEFS = [
  { key: 'capitalStability',    label: 'Capital Stability',    type: 'good' },
  { key: 'colonyLoyalty',       label: 'Colony Loyalty',       type: 'good' },
  { key: 'militaryReadiness',   label: 'Military Readiness',   type: 'good' },
  { key: 'economicBalance',     label: 'Economic Balance',     type: 'good' },
  { key: 'religiousTension',    label: 'Religious Tension',    type: 'bad'  },
  { key: 'publicTrust',         label: 'Public Trust',         type: 'good' },
  { key: 'medicalCapacity',     label: 'Medical Capacity',     type: 'good' },
  { key: 'foreignThreat',       label: 'Foreign Threat',       type: 'bad'  },
  { key: 'councilSupport',      label: 'Council Support',      type: 'good' },
  { key: 'rebelRadicalization', label: 'Rebel Radicalization', type: 'bad'  },
];

const INITIAL_STATS = {
  capitalStability:    65,
  colonyLoyalty:       55,
  militaryReadiness:   60,
  economicBalance:     60,
  religiousTension:    45,
  publicTrust:         60,
  medicalCapacity:     55,
  foreignThreat:       50,
  councilSupport:      60,
  rebelRadicalization: 30,
};

// ─── SCENE DATA ─────────────────────────────
const SCENES = [
  // ── SCENE 1 ──────────────────────────────
  {
    act:      'ACT I — THE BREAKING',
    progress: '1 / 7',
    title:    "The Storm's Legacy",
    body: [
      'Three weeks since the Black Tide Storm made landfall at Veyra. The harbor district is still submerged. Grain stores are destroyed. Sixty percent of Veyra\'s olive groves — the colony\'s primary tribute commodity — are gone. Governor Dresh Fael sends word by fast courier: <strong>Veyra cannot pay tribute</strong>. Not this season. Perhaps not next.',
      'From the watchtower at Cape Dros, the signal fires burn red: thirty Marenic warships have been spotted on the horizon. They are not attacking. They are <em>waiting</em>.',
      'The imperial council meets in emergency session. They are watching you — the Crisis Strategist who rose through merit, not blood, to sit at this table. Some of them believe you will crack. Prove them wrong.',
    ],
    choices: [
      {
        letter: 'A',
        label:  'Dispatch an imperial envoy and medical teams to Veyra immediately.',
        tip:    'Project stability and good faith. The empire cares for its colonies.',
        consequence: 'The envoy reaches Veyra in three days. Governor Fael weeps publicly when imperial doctors enter the flooded hospital. For now, Veyra\'s leaders hold back the most radical voices. Maren watches — but does not move.',
        changes: { colonyLoyalty: 10, publicTrust: 8, medicalCapacity: -5, militaryReadiness: -5, councilSupport: -5 },
      },
      {
        letter: 'B',
        label:  'Mobilize the imperial fleet — show Maren these waters are not negotiable.',
        tip:    'Strength first. An empire that hesitates invites invasion.',
        consequence: 'Imperial warships move out of Aurelion\'s harbor in formation. The Marenic fleet holds position but does not retreat. In Veyra, word of the fleet spreads fear and anger in equal measure. The colonists wonder if the ships are coming to help them — or to collect.',
        changes: { militaryReadiness: 12, foreignThreat: -8, economicBalance: -8, councilSupport: 8, colonyLoyalty: -8 },
      },
      {
        letter: 'C',
        label:  'Issue an Imperial Emergency Decree — suspend Veyra\'s tribute pending full assessment.',
        tip:    'Protect Veyra\'s loyalty before Maren can offer what you refuse to.',
        consequence: 'The decree is read aloud in Veyra\'s central square and met with cautious relief. Two northern colonies immediately send letters requesting similar suspensions for minor grievances. The council is displeased.',
        changes: { colonyLoyalty: 15, publicTrust: 10, economicBalance: -12, councilSupport: -10, rebelRadicalization: -8 },
      },
      {
        letter: 'D',
        label:  'Dispatch an audit commission. Verify Veyra\'s claims before committing imperial resources.',
        tip:    'Due diligence. Generosity without verification invites exploitation.',
        consequence: 'The commission departs. In Veyra, the wait is read as cold indifference. Governor Fael\'s moderating influence weakens as radical voices ask why the empire sends accountants instead of food. The Marenic ships are still on the horizon.',
        changes: { councilSupport: 8, colonyLoyalty: -12, religiousTension: 8, rebelRadicalization: 10, publicTrust: -5 },
      },
    ],
  },

  // ── SCENE 2 ──────────────────────────────
  {
    act:      'ACT I — THE BREAKING',
    progress: '2 / 7',
    title:    'Accounting for Ruin',
    body: [
      'The reports are in. Veyra lost 60% of its harvest, three hospitals flooded beyond use, and fourteen thousand civilians displaced. Governor Fael formally requests a <strong>two-year tribute postponement</strong>. He is measured and deferential in his phrasing. His deputy, Savra Olan — a firebrand from Veyra\'s marginalized faith — is not at the meeting. That absence worries your analysts.',
      'The council is split. Finance Minister Caeldris argues that a postponement sets a precedent every colony will exploit. Admiral Vath says Veyra\'s harbor is too strategically important to alienate. High Priest Orryn — representing the dominant faith — says nothing. <em>His silence costs something too.</em>',
      'You have the emperor\'s ear. What you recommend will be implemented.',
    ],
    choices: [
      {
        letter: 'A',
        label:  'Grant the full postponement and send emergency grain, timber, and medicine.',
        tip:    'Compassionate and costly. It buys genuine loyalty rather than grudging compliance.',
        consequence: 'The shipments arrive ahead of schedule. Savra Olan helps distribute supplies alongside imperial doctors — the image is noticed by every Veyran who witnesses it. Governor Fael sends a personal letter of gratitude. Minister Caeldris demands emergency budget cuts elsewhere.',
        changes: { colonyLoyalty: 18, publicTrust: 12, rebelRadicalization: -12, economicBalance: -15, medicalCapacity: -8, councilSupport: -8 },
      },
      {
        letter: 'B',
        label:  'Reduce tribute by 60% for two years. Require Veyra to host an imperial garrison in return.',
        tip:    'A negotiated compromise. Keeps both leverage and goodwill — imperfectly.',
        consequence: 'Fael accepts reluctantly. The garrison is resented by locals but tolerated. Savra Olan calls it an occupation wrapped in charity. The council approves — the arrangement at least preserves imperial presence in the harbor.',
        changes: { colonyLoyalty: 5, militaryReadiness: 8, councilSupport: 12, religiousTension: 8, rebelRadicalization: 5, economicBalance: -6 },
      },
      {
        letter: 'C',
        label:  "Maintain the quota. Grant a three-month extension — but the empire's coffers are not a charity.",
        tip:    'Hard line. Signals strength to the council and other colonies, but at great cost to Veyra.',
        consequence: 'Fael\'s response arrives within a week. It is not an acknowledgment. It is a warning: the people of Veyra are beginning to listen to voices that promise what the empire will not give. Savra Olan\'s following doubles in ten days.',
        changes: { councilSupport: 15, economicBalance: 5, colonyLoyalty: -20, rebelRadicalization: 20, religiousTension: 12, publicTrust: -10 },
      },
      {
        letter: 'D',
        label:  'Offer Veyra a new long-term colonial compact — reduced tribute permanently in exchange for expanded imperial investment.',
        tip:    'Systemic reform. Transform the relationship, not just the moment.',
        consequence: 'The proposal takes weeks to draft. In the interim, Maren moves two ships closer to shore. But when the compact is announced, it is welcomed across half the empire\'s colonies. Minister Caeldris resigns in protest. You must now manage the council without her.',
        changes: { colonyLoyalty: 20, publicTrust: 15, economicBalance: -10, councilSupport: -15, rebelRadicalization: -10, foreignThreat: 5 },
      },
    ],
  },

  // ── SCENE 3 ──────────────────────────────
  {
    act:      'ACT II — THE RATION',
    progress: '3 / 7',
    title:    'The Weight of One Ward',
    body: [
      'Veyra\'s central hospital holds 400 beds. It now holds 1,100 people. Fever spreads through the outer wards. The imperial medical team — twelve doctors, three surgeons — has enough medicine to treat perhaps 300 serious cases. In the queue are soldiers, imperial administrators, Veyran civilians, and priests of the marginalized faith who arrived with their own sick.',
      'Healer Tessyn, who leads the local Veyran faith community, approaches your envoy. She has <strong>120 trained healers</strong> ready to work. Her methods differ from imperial medicine, but her mortality rates in the outer villages are comparable to your doctors. She asks to be integrated into the response. She asks, also, for <em>official recognition of her guild\'s medical authority</em>.',
      'The imperial doctors are uncomfortable. The council will be watching what you decide here.',
    ],
    choices: [
      {
        letter: 'A',
        label:  "Distribute supplies only through imperial medical teams. Tessyn's healers may assist but receive no formal recognition.",
        tip:    'Maintain the imperial standard. Efficiency and consistency over politics.',
        consequence: 'The hospital is more organized but still overwhelmed. Tessyn\'s healers work in the margins — quiet, effective, excluded. A pamphlet begins circulating: <em>The empire treats our bodies but not our dignity.</em>',
        changes: { medicalCapacity: 8, religiousTension: 15, colonyLoyalty: -8, rebelRadicalization: 10, councilSupport: 5 },
      },
      {
        letter: 'B',
        label:  "Formally integrate Tessyn's healers and grant provisional guild recognition.",
        tip:    'Pragmatic and symbolic. Save more lives. Build more goodwill.',
        consequence: 'The combined team saves 47 additional lives in the first week by the triage coordinator\'s estimate. High Priest Orryn in Aurelion lodges a formal complaint. The council is divided. In Veyra, Tessyn quietly becomes the most trusted voice in the colony.',
        changes: { medicalCapacity: 18, colonyLoyalty: 15, religiousTension: -10, rebelRadicalization: -12, councilSupport: -10, publicTrust: 10 },
      },
      {
        letter: 'C',
        label:  'Triage by military rank and imperial status first — then civilians.',
        tip:    'Protect imperial assets and fighting capacity. Cold, but strategically defensible.',
        consequence: 'Your garrison recovers faster. But imperial officials are seen cutting past dying civilians in the queue. The story reaches Aurelion within a week. Public outrage is swift. Savra Olan reads the dispatches aloud in the market square.',
        changes: { militaryReadiness: 10, medicalCapacity: 5, publicTrust: -18, colonyLoyalty: -15, rebelRadicalization: 18, religiousTension: 10 },
      },
      {
        letter: 'D',
        label:  'Strict medical triage — treat by severity only, regardless of faith, rank, or origin.',
        tip:    'Ethically neutral. No favoritism. Full transparency.',
        consequence: 'A Veyran elder, a Marenic trader, and an imperial soldier are treated in the same ward on the same day. The symbolic power is not lost on anyone. It is the least controversial decision you have made — but the council demands to know why you did not prioritize the garrison.',
        changes: { publicTrust: 15, colonyLoyalty: 10, medicalCapacity: 10, religiousTension: -5, councilSupport: -5, militaryReadiness: -3 },
      },
    ],
  },

  // ── SCENE 4 ──────────────────────────────
  {
    act:      'ACT II — THE RATION',
    progress: '4 / 7',
    title:    'The Weight of Prayers',
    body: [
      'Savra Olan holds a public assembly. She claims, with documentation, that imperial aid shipments have consistently prioritized communities that follow the dominant faith. Her numbers are not invented. They are not wrong.',
      'High Priest Orryn responds from Aurelion, calling her claims <em>"sedition dressed in theology."</em> He demands the imperial government suppress the movement and arrest its leaders.',
      'In Veyra\'s temple district, three minor skirmishes have broken out between faith communities. No deaths yet. The Marenic emissary has reportedly been seen attending one of Tessyn\'s open ceremonies.',
    ],
    choices: [
      {
        letter: 'A',
        label:  'Suppress the Veyran religious movement — arrest Savra Olan on charges of sedition.',
        tip:    'Satisfy the dominant faith. Silence the immediate crisis. Create a martyr.',
        consequence: 'Olan is arrested at dawn. By noon, the crowds outside the jail are larger than any assembly she ever called. Governor Fael requests emergency military reinforcement. Every moderate voice in Veyra goes quiet.',
        changes: { councilSupport: 15, religiousTension: 25, rebelRadicalization: 25, colonyLoyalty: -20, publicTrust: -12, capitalStability: -8 },
      },
      {
        letter: 'B',
        label:  'Issue an Imperial Edict protecting the rights of all recognized religions in Iliatania.',
        tip:    'Structural reform. Long overdue. Will infuriate the dominant faith\'s hierarchy.',
        consequence: 'The Edict is signed. High Priest Orryn refuses to attend the next three council sessions. In Veyra, Tessyn reads the edict aloud in the central square. It is the first time in her memory an imperial document has named her faith without calling it a deviation. Olan drops the sharpest edges of her rhetoric — for now.',
        changes: { religiousTension: -20, colonyLoyalty: 15, rebelRadicalization: -15, publicTrust: 12, councilSupport: -18, capitalStability: 5 },
      },
      {
        letter: 'C',
        label:  'Negotiate privately with both Orryn and Olan — make no public statement.',
        tip:    'Buy time without commitment. Keep both sides partially satisfied and fully suspicious.',
        consequence: 'Both leaders leave the private meetings claiming partial victory. Neither trusts you. The edict is delayed. Olan continues her assemblies. Orryn continues his complaints. The situation neither improves nor collapses — yet.',
        changes: { religiousTension: -5, councilSupport: 5, colonyLoyalty: 5, rebelRadicalization: 5, publicTrust: -5 },
      },
      {
        letter: 'D',
        label:  'Commission a public imperial inquiry into equal aid distribution across religious communities.',
        tip:    'Acknowledge the problem formally. Take the political risk of truth.',
        consequence: 'The inquiry is welcomed by Olan and condemned by Orryn. The process takes forty days. Its preliminary findings confirm unequal distribution. In Veyra, the crisis stabilizes slightly — people tend to trust a system that examines itself.',
        changes: { publicTrust: 18, religiousTension: -12, colonyLoyalty: 12, rebelRadicalization: -10, councilSupport: -12, economicBalance: -5 },
      },
    ],
  },

  // ── SCENE 5 ──────────────────────────────
  {
    act:      "ACT III — THE OFFER",
    progress: '5 / 7',
    title:    "The Empire's Promise",
    body: [
      "A Marenic emissary, Ambassador Crevath, arrives in Veyra's half-flooded port with a formal offer in a sealed letter. The letter reaches you before Governor Fael even opens it. Your intelligence network is, at least, still functional.",
      "Maren's offer: No tribute. Full religious freedom for all communities. Immediate reconstruction funding from Maren's treasury — more than Iliatania has sent in three years combined. In exchange: <strong>Veyra's harbor becomes a Marenic naval base</strong>. The colony becomes a Marenic protectorate, not an Iliatanian one.",
      'You have seventy-two hours before Fael must respond. Crevath is charismatic, patient, and well-funded. Savra Olan has already granted him a private audience.',
    ],
    choices: [
      {
        letter: 'A',
        label:  "Intercept and expel Crevath. Declare Maren's presence in Veyra an act of aggression.",
        tip:    'Draw the line. Risk war. Remove the option of capitulation.',
        consequence: 'Crevath is escorted out under armed guard. The Marenic fleet moves four leagues closer to shore. The declaration of aggression is read across the empire: bold, decisive, possibly premature. Governor Fael privately calls it a death sentence for diplomacy.',
        changes: { foreignThreat: 20, militaryReadiness: 5, councilSupport: 10, colonyLoyalty: -10, economicBalance: -8, capitalStability: -5 },
      },
      {
        letter: 'B',
        label:  "Allow the negotiations — monitor them and use what you learn to prepare a counter-strategy.",
        tip:    'Gather intelligence. Buy time. Let Maren reveal the depth of their ambition.',
        consequence: "Crevath and Fael meet three times. Your embedded agent records everything. The offer is real and fully funded. Maren wants the harbor more than they want war — which means they might accept the right counter-offer. Time is running short.",
        changes: { foreignThreat: 5, councilSupport: -8, colonyLoyalty: 5, militaryReadiness: 5, capitalStability: -3 },
      },
      {
        letter: 'C',
        label:  "Make Veyra a counter-offer: meet all their demands if they publicly reject Maren.",
        tip:    'Outbid the enemy. It will cost the empire — but so will losing the harbor.',
        consequence: "The counter-offer reaches Fael hours before his deadline with Crevath. He takes twelve hours to respond. He accepts — with conditions. Veyra will reject Maren if the empire guarantees the religious edict, the tribute reform, and a new hospital within two years. Your credibility is now on the line.",
        changes: { colonyLoyalty: 20, foreignThreat: -10, economicBalance: -18, councilSupport: -12, publicTrust: 10, rebelRadicalization: -8 },
      },
      {
        letter: 'D',
        label:  "Warn Governor Fael: accepting Maren's offer constitutes treason. Veyra will be treated accordingly.",
        tip:    'The blunt instrument. Destroys goodwill, but may prevent defection.',
        consequence: "Fael does not respond for four days. When he does, it is not to you — it is to the emperor directly. He says the Crisis Strategist has offered Veyra a choice between starvation and war, while Maren offers reconstruction. He asks whether Iliatania's loyalty runs both directions.",
        changes: { colonyLoyalty: -25, councilSupport: 8, rebelRadicalization: 20, foreignThreat: 8, publicTrust: -15, religiousTension: 10 },
      },
    ],
  },

  // ── SCENE 6 ──────────────────────────────
  {
    act:      'ACT III — THE OFFER',
    progress: '6 / 7',
    title:    'Iron Water',
    body: [
      "Sixteen Marenic warships have established a loose blockade across Veyra's harbor mouth. Imperial trade vessels are turned back without violence — for now. Veyra's fishing fleet cannot reach its grounds. The harbor economy is dying by degrees.",
      "Admiral Vath presents the military council's position: <em>break the blockade by force or accept that Maren controls Veyra's lifeline.</em> The council is divided between those who want war and those who believe a naval battle risks destroying Iliatania's most important trade harbor in its own waters.",
      "Your secret supply routes through the interior are still open — barely. And somewhere beneath all this, Savra Olan is meeting with Crevath again.",
    ],
    choices: [
      {
        letter: 'A',
        label:  'Launch a full naval assault. Break the blockade by force and drive Maren from Veyran waters.',
        tip:    'Decisive. Expensive. If it succeeds, imperial dominance is reasserted. If it fails, the harbor is lost.',
        consequence: 'The battle lasts six hours. Imperial ships are faster, but Maren\'s are better armed. The blockade breaks — at the cost of four imperial vessels and 340 sailors. Maren retreats but does not withdraw from the region. The harbor is open but scorched.',
        changes: { militaryReadiness: -15, foreignThreat: -15, economicBalance: -15, capitalStability: 5, councilSupport: 10, colonyLoyalty: 8 },
      },
      {
        letter: 'B',
        label:  'Negotiate a joint maritime agreement — cede partial patrol rights to Maren in exchange for lifting the blockade.',
        tip:    'Diplomacy at a cost. Maren gains a foothold, but the harbor survives and trade resumes.',
        consequence: 'The agreement is signed in private. The blockade lifts. Maren now patrols a zone outside the harbor under an "anti-piracy" provision. The council calls it a humiliation. Admiral Vath resigns. The harbor reopens tentatively.',
        changes: { foreignThreat: -5, economicBalance: 10, councilSupport: -18, militaryReadiness: -8, colonyLoyalty: 8, capitalStability: -8 },
      },
      {
        letter: 'C',
        label:  'Maintain the secret supply routes and hold position — sustain Veyra while diplomatic pressure builds.',
        tip:    'Neither escalate nor concede. Buy time. Hope Maren blinks first.',
        consequence: 'The supply routes hold for eleven days before Maren scouts discover one and close it. Veyra endures, but barely. The time bought no breakthrough. The blockade continues. Olan\'s meetings with Crevath are now nightly.',
        changes: { colonyLoyalty: -5, economicBalance: -10, foreignThreat: 5, rebelRadicalization: 10, militaryReadiness: 3 },
      },
      {
        letter: 'D',
        label:  'Arm and commission Veyran fishermen as an irregular militia — let Veyra resist the blockade itself.',
        tip:    'Local resistance. Builds Veyran pride and fighting capacity. Consequences are unpredictable.',
        consequence: 'The Veyran militia intercepts two Marenic patrol boats at night. Both sides suffer casualties. Maren lodges a formal protest, calling it piracy. In Veyra, the resistance becomes a symbol — but it places every Veyran sailor in the line of fire.',
        changes: { colonyLoyalty: 15, militaryReadiness: 5, foreignThreat: 10, rebelRadicalization: -5, economicBalance: -8, publicTrust: 8 },
      },
    ],
  },

  // ── SCENE 7 (FINAL) ─────────────────────
  {
    act:      'ACT IV — THE SHAPE OF DOMINION',
    progress: '7 / 7',
    title:    'The Shape of Dominion',
    isFinal:  true,
    body: [
      "It has come to this. Maren's fleet holds position outside Veyra's harbor. Governor Fael is in his office and has not slept in three days. Savra Olan is preparing a public statement. The imperial council has given you one hour to present your recommendation to the emperor.",
      "Veyra's loyalty is fractured. The empire's economy is strained. The dominant faith presses for order. The marginalized faith presses for recognition. The military wants a clear engagement. And the harbor — <em>Veyra's harbor</em> — sits at the center of everything.",
      "This is your decision. It will be recorded in the Imperial Archive. It will be judged by generations who cannot know what this room felt like tonight.",
    ],
    choices: [
      {
        letter: 'A',
        label:  'Crush the resistance. Send the full imperial army. Reassert complete control over Veyra by force.',
        tip:    'The iron solution. Veyra obeys. Everything else adjusts accordingly.',
        consequence: 'The order is given. Veyra is occupied within ten days. Fael is removed. Olan is imprisoned. The empire holds — through fear. The harbor is secured. The cost in blood and trust will be tallied for years.',
        changes: { militaryReadiness: 15, capitalStability: 10, colonyLoyalty: -30, rebelRadicalization: -20, religiousTension: 20, publicTrust: -20, councilSupport: 15 },
        flag: 'crush',
      },
      {
        letter: 'B',
        label:  'Reform the system. Announce a new colonial compact — no tribute during disaster years, religious equality guaranteed, imperial investment in exchange for continued sovereignty.',
        tip:    'The long game. If it holds, Veyra becomes a model. If the council fractures, it collapses.',
        consequence: 'The emperor approves the compact. The council splinters. Olan does not call it enough — but stops calling for independence. Fael signs. The Marenic emissary returns home without a deal. The harbor stays Iliatanian.',
        changes: { colonyLoyalty: 25, publicTrust: 20, religiousTension: -20, economicBalance: -12, councilSupport: -15, foreignThreat: -12, rebelRadicalization: -20 },
        flag: 'reform',
      },
      {
        letter: 'C',
        label:  "Military defense without reform. Drive out Maren, then enforce the old system once the threat is gone.",
        tip:    'Security first, politics later. Assumes the colony stabilizes once the external threat is removed.',
        consequence: 'The fleet engages. Maren withdraws — their gamble failed. The old system is restored. But Olan\'s followers remain, and the conditions that drove them are unchanged. The harbor is secured. The underlying crisis is deferred.',
        changes: { militaryReadiness: -15, foreignThreat: -20, colonyLoyalty: -10, rebelRadicalization: 10, economicBalance: -12, councilSupport: 12 },
        flag: 'defend',
      },
      {
        letter: 'D',
        label:  "Grant Veyra partial autonomy — special colonial status, self-governance, no tribute. An ally, not a subject.",
        tip:    'Transform the relationship. Veyra chooses Iliatania freely — or not at all.',
        consequence: 'The declaration is read in Veyra\'s square. Fael embraces it. Olan calls it insufficient — but concedes it is a beginning. Maren withdraws, their offer undercut. Three minor colonies immediately petition for similar status.',
        changes: { colonyLoyalty: 30, foreignThreat: -15, religiousTension: -15, councilSupport: -25, economicBalance: -10, publicTrust: 15, rebelRadicalization: -25 },
        flag: 'autonomy',
      },
      {
        letter: 'E',
        label:  "Sabotage Veyra's harbor. Deny it to Maren entirely. Accept the strategic loss — destroy what cannot be held.",
        tip:    'The scorched-earth calculation. Maren gains nothing. Veyra loses everything. The empire survives this crisis and earns a new one.',
        consequence: 'Imperial engineers work through the night. By morning, the harbor\'s deep-water channels are blocked, the docks partially destroyed. Maren\'s fleet has nowhere to berth. Veyra\'s economy collapses overnight. It will take a decade to rebuild.',
        changes: { foreignThreat: -25, economicBalance: -25, colonyLoyalty: -35, rebelRadicalization: 30, publicTrust: -25, militaryReadiness: 5, capitalStability: -10 },
        flag: 'sabotage',
      },
    ],
  },
];

// ─── ENDING DATA ─────────────────────────────
const ENDINGS = {
  united_dominion: {
    title:    'The United Dominion',
    subtitle: 'Reform holds the empire together.',
    symbol:   '◆',
    body: [
      "You remade what needed remaking. The compact between Iliatania and its colonies is rewritten, not merely mended. Veyra receives imperial investment, religious protections, and a voice in its own governance. Governor Fael ratifies the new agreement. Savra Olan, for the first time in years, is not leading a protest.",
      "Maren's fleet withdraws over three weeks, their offer undercut by a stronger one: the loyalty of a people who chose to stay. The council is fractured but functional. Three junior ministers — younger, less entrenched — rise to fill the vacated seats.",
      "History will call this the Compact Period. It is not perfect. The empire's finances will need years to recover. But the harbor is Iliatanian, and the people of Veyra are not prisoners of the arrangement. That is something new. Something that may hold.",
    ],
  },
  iron_dominion: {
    title:    'The Iron Dominion',
    subtitle: 'The empire is saved. So is its cruelty.',
    symbol:   '&#9876;',
    body: [
      "Veyra is subdued. Maren withdraws when the full weight of the imperial military makes clear there is nothing left to negotiate for. The harbor is secured. The tribute system stands. Order has been restored — that word doing a great deal of work.",
      "The cost: Governor Fael is removed. Savra Olan and twelve of her lieutenants are imprisoned on sedition charges. The marginalized faith is formally restricted in Veyra for five years. The medical crisis is managed under garrison authority.",
      "Other colonies receive the message. Iliatania is not afraid to use force. The next generation of colonial governors will be chosen for loyalty, not competence. The empire survives. Whether it deserves to is a question your successors will inherit.",
    ],
  },
  marenic_foothold: {
    title:    'The Marenic Foothold',
    subtitle: 'The harbor is lost. So is the precedent.',
    symbol:   '&#9672;',
    body: [
      "Ambassador Crevath's offer was simply better. Maren promised what Iliatania withheld — freedom from tribute, religious recognition, immediate reconstruction. Governor Fael, pragmatic to the last, chose survival over loyalty when loyalty offered nothing.",
      "Veyra formally petitions for protectorate status under Maren. The imperial council declares it illegal. No fleet is sent — the calculus of war is not favorable. Maren's ships move into the harbor without firing a shot.",
      "The harbor is gone. Two smaller colonies, watching, request renegotiation of their own tribute arrangements. The empire is not collapsing — but it has discovered the cost of treating loyalty as a certainty rather than a covenant it must continually earn.",
    ],
  },
  burning_harbor: {
    title:    'The Burning Harbor',
    subtitle: 'What cannot be held is denied to all.',
    symbol:   '&#9711;',
    body: [
      "The engineers worked through the night. By dawn, the harbor that built Veyra's economy for three centuries was unusable for deep-water vessels. Maren's fleet, arriving to claim their prize, found rubble and blocked channels.",
      "What followed was not war — it was something worse. Maren withdrew, their investment destroyed. Veyra's fishing families, merchants, and dockworkers looked at what remained and understood: the empire had chosen to deny them a future rather than risk sharing one.",
      "Iliatania survived the Marenic threat. It may not survive what Veyra remembers. In the archives, the decision is recorded without embellishment. Future crisis strategists will read it and understand that some victories are almost indistinguishable from losses.",
    ],
  },
  free_coast: {
    title:    'The Free Coast Alliance',
    subtitle: 'An ally, not a subject. A different kind of empire.',
    symbol:   '&#9671;',
    body: [
      "The proclamation of Veyra's autonomous status is a departure from Iliatanian doctrine. Colonies are not supposed to choose — they are supposed to belong. But the empire chose differently this time, and Veyra, given the choice, chose to remain.",
      "Maren's emissary departed within a week of the announcement. There was nothing left to offer. The harbor is self-governed but open to imperial trade. Savra Olan runs for Veyra's new local council. Governor Fael, who expected to be removed, is asked to stay.",
      "Three other colonies have petitioned for similar arrangements. The council is alarmed. The empire you leave behind is looser, more negotiated, more uncertain — and arguably more durable for it. The covenant between state and colony is, at last, a covenant.",
    ],
  },
  collapse: {
    title:    'Collapse of the Covenant',
    subtitle: 'The system broke before anyone admitted it was breaking.',
    symbol:   '&#10022;',
    body: [
      "It did not happen at once. It rarely does. The tribute system fractured first — Veyra's refusal, once unpunished, was noted by every colony that had ever paid under duress. The medical crisis, mismanaged or delayed, spread beyond Veyra's borders. Three coastal towns reported fever within a month.",
      "Maren did not need to conquer Iliatania. They simply needed to wait. The empire's credibility — its promise of protection in exchange for tribute — had been demonstrated hollow. When Veyra formally broke from the empire, twelve months after the storm, six other territories were already in quiet negotiation with foreign powers.",
      "The capital, Aurelion, remains. The empire, in its original form, does not. What comes next will be called many things by many scholars. You, who held the role of Crisis Strategist at the moment of breaking, are among the first to understand that the covenant between a state and those it governs is not destroyed by rebellion. It is destroyed by the long accumulation of things left unsaid and unkept.",
    ],
  },
};

// ─── GAME STATE ──────────────────────────────
let gameState = {
  sceneIndex: 0,
  stats: { ...INITIAL_STATS },
  finalFlag: null,
};

// ─── ENDING CALCULATOR ───────────────────────
function calculateEnding() {
  const s = gameState.stats;
  const flag = gameState.finalFlag;

  // Catastrophic collapse overrides everything
  if (s.capitalStability < 25 && s.foreignThreat > 70)          return 'collapse';
  if (s.colonyLoyalty < 20   && s.rebelRadicalization > 75)      return 'collapse';

  // Marenic takeover
  if (s.foreignThreat > 80)                                      return 'marenic_foothold';
  if (s.colonyLoyalty < 22   && s.foreignThreat > 62)            return 'marenic_foothold';

  switch (flag) {
    case 'crush':
      if (s.militaryReadiness >= 55 && s.capitalStability >= 42) return 'iron_dominion';
      if (s.capitalStability < 38)                               return 'collapse';
      return 'burning_harbor';

    case 'reform':
      if (s.colonyLoyalty >= 52 && s.councilSupport >= 32)       return 'united_dominion';
      if (s.colonyLoyalty >= 42)                                  return 'free_coast';
      if (s.foreignThreat >= 58)                                  return 'marenic_foothold';
      return 'collapse';

    case 'defend':
      if (s.militaryReadiness >= 50) {
        if (s.colonyLoyalty >= 48) return 'united_dominion';
        return 'iron_dominion';
      }
      return 'burning_harbor';

    case 'autonomy':
      if (s.colonyLoyalty >= 48 && s.foreignThreat < 62)         return 'free_coast';
      if (s.foreignThreat >= 62)                                  return 'marenic_foothold';
      return 'free_coast';

    case 'sabotage':
      return 'burning_harbor';

    default:
      return 'collapse';
  }
}

// ─── CLAMP ───────────────────────────────────
function clamp(v) { return Math.max(0, Math.min(100, v)); }

// ─── BAR COLOR ───────────────────────────────
function barColor(key, value) {
  const def = STAT_DEFS.find(d => d.key === key);
  if (!def) return 'bar-green';
  if (def.type === 'good') {
    if (value >= 60) return 'bar-green';
    if (value >= 35) return 'bar-amber';
    return 'bar-red';
  } else {
    if (value <= 35) return 'bar-green';
    if (value <= 62) return 'bar-amber';
    return 'bar-red';
  }
}

// ─── RENDER STATS LIST ───────────────────────
function renderStats() {
  const list = document.getElementById('stats-list');
  list.innerHTML = '';
  STAT_DEFS.forEach(def => {
    const val = gameState.stats[def.key];
    const color = barColor(def.key, val);
    const item = document.createElement('div');
    item.className = 'stat-item';
    item.id = 'stat-item-' + def.key;
    item.innerHTML = `
      <div class="stat-row">
        <span class="stat-name">${def.label}</span>
        <span class="stat-val" id="stat-val-${def.key}">${val}<span class="stat-delta" id="stat-delta-${def.key}"></span></span>
      </div>
      <div class="bar-track">
        <div class="bar-fill ${color}" id="bar-${def.key}" style="width:${val}%"></div>
      </div>
    `;
    list.appendChild(item);
  });
}

// ─── ANIMATE STAT CHANGES ────────────────────
function animateStats(changes) {
  STAT_DEFS.forEach(def => {
    const delta = changes[def.key];
    if (!delta) return;

    const newVal  = clamp(gameState.stats[def.key]);
    const bar     = document.getElementById('bar-' + def.key);
    const valEl   = document.getElementById('stat-val-' + def.key);
    const deltaEl = document.getElementById('stat-delta-' + def.key);

    if (bar)     bar.style.width = newVal + '%';
    if (bar)     bar.className = 'bar-fill ' + barColor(def.key, newVal);
    if (valEl)   valEl.childNodes[0].textContent = newVal;
    if (deltaEl) {
      deltaEl.textContent = (delta > 0 ? ' +' : ' ') + delta;
      deltaEl.className   = 'stat-delta show ' + (delta > 0 ? 'pos' : 'neg');
      setTimeout(() => {
        deltaEl.classList.remove('show');
      }, 2800);
    }
  });
}

// ─── RENDER SCENE ────────────────────────────
function renderScene() {
  const scene = SCENES[gameState.sceneIndex];
  const card  = document.getElementById('scene-card');

  // Fade out then back in
  card.style.opacity = '0';
  card.style.transform = 'translateY(10px)';

  setTimeout(() => {
    document.getElementById('scene-act').textContent   = scene.act;
    document.getElementById('scene-prog').textContent  = scene.progress;
    document.getElementById('scene-title').textContent = scene.title;

    document.getElementById('scene-body').innerHTML =
      scene.body.map(p => `<p>${p}</p>`).join('');

    document.getElementById('consequence').classList.add('hidden');
    document.getElementById('continue-btn').classList.add('hidden');

    renderChoices(scene);

    card.style.opacity   = '1';
    card.style.transform = 'translateY(0)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 180);
}

// ─── RENDER CHOICES ──────────────────────────
function renderChoices(scene) {
  const container = document.getElementById('choices');
  container.innerHTML = '';

  scene.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `
      <span class="choice-letter">Option ${choice.letter}</span>
      <span class="choice-label">${choice.label}</span>
      <span class="choice-tip">${choice.tip}</span>
    `;
    btn.addEventListener('click', () => handleChoice(choice, btn, scene));
    container.appendChild(btn);
  });
}

// ─── HANDLE CHOICE ───────────────────────────
function handleChoice(choice, clickedBtn, scene) {
  // Lock all buttons
  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    b.classList.remove('chosen');
  });
  clickedBtn.classList.add('chosen');
  clickedBtn.disabled = false;

  // Apply stat changes
  const changes = choice.changes || {};
  Object.keys(changes).forEach(key => {
    gameState.stats[key] = clamp(gameState.stats[key] + changes[key]);
  });

  // Record final flag
  if (scene.isFinal && choice.flag) {
    gameState.finalFlag = choice.flag;
  }

  // Animate stats
  animateStats(changes);

  // Build consequence chips
  const chips = Object.entries(changes)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .map(([key, delta]) => {
      const def  = STAT_DEFS.find(d => d.key === key);
      const sign = delta > 0 ? '+' : '';
      const cls  = delta > 0 ? 'chip-pos' : 'chip-neg';
      return `<span class="chip ${cls}">${def ? def.label : key} ${sign}${delta}</span>`;
    }).join('');

  // Show consequence
  const consEl   = document.getElementById('consequence');
  const textEl   = document.getElementById('consequence-text');
  const chipsEl  = document.getElementById('consequence-chips');

  textEl.textContent  = choice.consequence;
  chipsEl.innerHTML   = chips;
  consEl.classList.remove('hidden');

  // Scroll consequence into view
  setTimeout(() => consEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);

  // Show continue button
  const continueBtn = document.getElementById('continue-btn');
  continueBtn.classList.remove('hidden');

  if (scene.isFinal) {
    continueBtn.textContent = 'View the Outcome ➜';
    continueBtn.onclick = showEnding;
  } else {
    continueBtn.textContent = 'Proceed to Next Scene ➜';
    continueBtn.onclick = nextScene;
  }
}

// ─── NEXT SCENE ──────────────────────────────
function nextScene() {
  gameState.sceneIndex++;
  renderScene();
}

// ─── SHOW ENDING ─────────────────────────────
function showEnding() {
  const endingKey = calculateEnding();
  const ending    = ENDINGS[endingKey];
  const s         = gameState.stats;

  document.getElementById('ending-symbol').innerHTML  = ending.symbol;
  document.getElementById('ending-title').textContent  = ending.title;
  document.getElementById('ending-subtitle').textContent = ending.subtitle;
  document.getElementById('ending-body').innerHTML =
    ending.body.map(p => `<p>${p}</p>`).join('');

  // Final stat grid
  const grid = document.getElementById('ending-stat-grid');
  grid.innerHTML = '';
  STAT_DEFS.forEach(def => {
    const val = s[def.key];
    let cls = 'good';
    if (def.type === 'good') {
      if (val < 35) cls = 'bad';
      else if (val < 60) cls = 'mid';
    } else {
      if (val > 62) cls = 'bad';
      else if (val > 38) cls = 'mid';
    }
    const item = document.createElement('div');
    item.className = 'esg-item';
    item.innerHTML = `
      <span class="esg-name">${def.label}</span>
      <span class="esg-val ${cls}">${val}</span>
    `;
    grid.appendChild(item);
  });

  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('ending-screen').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── RESTART ─────────────────────────────────
function restartGame() {
  gameState = {
    sceneIndex: 0,
    stats: { ...INITIAL_STATS },
    finalFlag: null,
  };
  document.getElementById('ending-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
  renderStats();
  renderScene();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── INIT ────────────────────────────────────
document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('title-screen').style.opacity    = '0';
  document.getElementById('title-screen').style.transition = 'opacity 0.6s';
  setTimeout(() => {
    document.getElementById('title-screen').classList.add('hidden');
    showCutscene('opening', () => {
      document.getElementById('game-screen').classList.remove('hidden');
      renderStats();
      renderScene();
    });
  }, 600);
});

// ─── CUTSCENE SYSTEM ─────────────────────────

// Panel sequence data
const CUTSCENE_DATA = {
  opening: [
    {
      scene: 'aurelion-night',
      location: 'Aurelion — Capital of Iliatania',
      text: 'The empire sleeps. Its harbor walls stretch unbroken into the sea. Tonight, the lamps of Aurelion burn in every tower — the empire at the height of its power, unaware of what moves toward it from the south.',
    },
    {
      scene: 'storm-hits',
      location: 'Veyra Colony — The Black Tide Storm',
      text: 'Eighty leagues south, the storm arrives without warning. The Black Tide is not one storm. It is every storm at once. The harbor district of Veyra is consumed in four hours. When it recedes, what remains is not a city. It is a question.',
    },
    {
      scene: 'veyra-ruins',
      location: 'Veyra — The Morning After',
      text: 'Dawn finds the harbor half-swallowed. Governor Dresh Fael stands at the waterline of what was Veyra\'s market district. He does not move for a long time. Then he turns and walks to the courier station. The message to Aurelion is three lines.',
    },
    {
      scene: 'marenic-fleet',
      location: 'The Meridian Sea — 40 Leagues from Veyra',
      text: 'Thirty warships. The Marenic Empire has been waiting for exactly this kind of moment. They do not advance. They do not retreat. They hold position on the horizon like a threat that has not yet decided to become a fact.',
    },
    {
      scene: 'council-chamber',
      location: 'Aurelion — The Imperial War Council',
      text: 'The dispatch reaches the capital in eighteen hours. By the next morning, you are at the table. The emperor\'s council studies you — the strategist who rose without noble blood. No one says it aloud, but the question hangs in the air: can you hold an empire together?',
    },
  ],
  act3: [
    {
      scene: 'emissary-dock',
      location: 'Veyra Harbor — Under Marenic Watch',
      text: 'Ambassador Crevath arrives on a private vessel, flying a white flag above Maren\'s crimson. He carries reconstruction gold in one hand and the promise of freedom in the other. He steps off the boat and looks at the ruins. He smiles like a man who has been patient for a very long time.',
    },
    {
      scene: 'secret-meeting',
      location: 'Veyra — Under Lantern Light',
      text: 'By night, Crevath meets with Savra Olan. Two people who want the same outcome for entirely different reasons. Your intelligence agent watches through a cracked shutter. What passes between them takes two hours. The notes fill four pages.',
    },
    {
      scene: 'blockade-shore',
      location: 'Cape Dros — Northern Shore of Veyra',
      text: 'The blockade is a physical fact now. Sixteen iron hulls in a line across the harbor mouth. A Veyran fisherman stands at the cliff\'s edge at dawn and counts the ships. He counts them every morning. He has not gone out to sea in eleven days.',
    },
  ],
};

// Scene HTML templates
function CS_SCENE(id) {
  const scenes = {

    'aurelion-night': `
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 90% 70% at 50% 100%, rgba(20,45,120,0.22) 0%, transparent 55%), linear-gradient(190deg, #020307 0%, #04071a 40%, #08102a 100%);"></div>
      <div id="cs-sf" style="position:absolute;top:0;left:0;width:1px;height:1px;"></div>
      <div style="position:absolute;bottom:26%;left:0;right:0;height:16%;background:radial-gradient(ellipse 65% 100% at 50% 100%, rgba(45,70,160,0.13) 0%, transparent 100%);"></div>
      <div style="position:absolute;bottom:26%;left:5%;width:3%;height:20%;background:#050710;"></div>
      <div style="position:absolute;bottom:26%;left:9%;width:5%;height:13%;background:#060810;"></div>
      <div style="position:absolute;bottom:26%;left:15%;width:4%;height:26%;background:#050810;"></div>
      <div style="position:absolute;bottom:26%;left:20%;width:6%;height:17%;background:#060910;"></div>
      <div style="position:absolute;bottom:42%;left:34%;width:9%;height:9%;background:#050810;border-radius:50% 50% 0 0;"></div>
      <div style="position:absolute;bottom:26%;left:33%;width:11%;height:16%;background:#050810;"></div>
      <div style="position:absolute;bottom:50%;left:38.2%;width:0.9%;height:6%;background:#040710;"></div>
      <div style="position:absolute;bottom:26%;left:45%;width:5%;height:22%;background:#050810;"></div>
      <div style="position:absolute;bottom:26%;left:51%;width:4%;height:12%;background:#060910;"></div>
      <div style="position:absolute;bottom:26%;left:56%;width:6%;height:21%;background:#050810;"></div>
      <div style="position:absolute;bottom:26%;left:63%;width:3%;height:14%;background:#060910;"></div>
      <div style="position:absolute;bottom:26%;left:67%;width:8%;height:12%;background:#060910;"></div>
      <div style="position:absolute;bottom:26%;left:76%;width:4%;height:24%;background:#050810;"></div>
      <div style="position:absolute;bottom:26%;left:81%;width:5%;height:15%;background:#060910;"></div>
      <div style="position:absolute;bottom:26%;left:87%;width:5%;height:16%;background:#050810;"></div>
      <div style="position:absolute;bottom:26%;left:93%;width:5%;height:11%;background:#060910;"></div>
      <div style="position:absolute;bottom:30%;left:16%;width:3px;height:4px;background:#d4a020;opacity:0.65;box-shadow:0 0 4px rgba(212,160,32,0.5);"></div>
      <div style="position:absolute;bottom:27%;left:21%;width:3px;height:4px;background:#c89018;opacity:0.5;box-shadow:0 0 4px rgba(200,144,24,0.4);"></div>
      <div style="position:absolute;bottom:34%;left:35%;width:3px;height:4px;background:#d4a020;opacity:0.7;box-shadow:0 0 4px rgba(212,160,32,0.5);"></div>
      <div style="position:absolute;bottom:30%;left:47%;width:3px;height:4px;background:#d0a020;opacity:0.6;box-shadow:0 0 4px rgba(208,160,32,0.45);"></div>
      <div style="position:absolute;bottom:35%;left:58%;width:3px;height:4px;background:#d4a020;opacity:0.65;box-shadow:0 0 4px rgba(212,160,32,0.5);"></div>
      <div style="position:absolute;bottom:32%;left:77%;width:3px;height:4px;background:#c89018;opacity:0.55;box-shadow:0 0 4px rgba(200,144,24,0.4);"></div>
      <div style="position:absolute;bottom:36%;left:79%;width:3px;height:4px;background:#d4a020;opacity:0.6;box-shadow:0 0 4px rgba(212,160,32,0.45);"></div>
      <div style="position:absolute;bottom:24%;left:0;width:100%;height:3.5%;background:#040710;border-top:1px solid #0c1230;"></div>
      <div style="position:absolute;bottom:26%;left:2%;width:2%;height:32%;background:#040710;border-radius:1px 1px 0 0;"></div>
      <div style="position:absolute;bottom:56%;left:1.5%;width:3%;height:4%;background:#040710;border-radius:3px 3px 0 0;"></div>
      <div style="position:absolute;bottom:58.5%;left:2.1%;width:1.8%;height:2%;background:#e8d060;border-radius:50%;box-shadow:0 0 14px 7px rgba(230,205,70,0.35),0 0 28px 14px rgba(200,170,40,0.14);animation:cs-pulse 2.2s ease-in-out infinite;"></div>
      <div class="cs-beam-anim" style="position:absolute;bottom:59.5%;left:3.9%;width:33%;height:1.8%;background:linear-gradient(to right,rgba(220,200,75,0.16),transparent);transform-origin:left center;border-radius:0 50% 50% 0;"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:26%;background:linear-gradient(180deg,#09132a 0%,#060c1e 50%,#040918 100%);"></div>
      <div class="cs-shimmer-layer" style="height:26%;"></div>
      <svg style="position:absolute;bottom:25%;right:11%;width:3.8%;height:24%;" viewBox="0 0 42 125" fill="none">
        <ellipse cx="21" cy="10" rx="9" ry="10" fill="#030508"/>
        <path d="M12 19 Q6 68 3 122 L39 122 Q36 68 30 19 Z" fill="#040610"/>
        <path d="M12 19 Q0 48 0 78 L9 76 Q11 54 14 30 Z" fill="#030508"/>
        <path d="M30 19 Q42 48 42 78 L33 76 Q31 54 28 30 Z" fill="#030508"/>
        <path d="M14 40 Q4 54 3 65" stroke="#030508" stroke-width="5" stroke-linecap="round"/>
        <path d="M28 40 Q38 54 39 65" stroke="#030508" stroke-width="5" stroke-linecap="round"/>
        <rect x="0" y="61" width="9" height="11" rx="1" fill="#0c1328" opacity="0.85"/>
      </svg>`,

    'storm-hits': `
      <div style="position:absolute;inset:0;background:linear-gradient(190deg,#06020e 0%,#0e0514 25%,#180a1e 55%,#0c0410 100%);"></div>
      <div style="position:absolute;top:0;left:0;width:100%;height:65%;background:radial-gradient(ellipse 130% 85% at 25% 0%,rgba(50,18,70,0.82) 0%,transparent 55%),radial-gradient(ellipse 90% 65% at 75% 5%,rgba(38,12,55,0.65) 0%,transparent 50%);"></div>
      <div class="cs-rain"></div>
      <div class="cs-rain" style="opacity:0.5;animation-delay:-0.22s;transform:rotate(3deg) scale(1.08);"></div>
      <div class="cs-lightning-overlay"></div>
      <svg style="position:absolute;top:6%;left:46%;width:7%;height:32%;opacity:0.65;" viewBox="0 0 40 120" fill="none">
        <polygon points="28,0 7,55 22,55 11,120 40,48 24,48" fill="white" opacity="0.55"/>
      </svg>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:33%;background:linear-gradient(0deg,#05080e 0%,#08101e 55%,#0a1225 100%);"></div>
      <div class="cs-wave-band-fast" style="position:absolute;bottom:30%;left:0;width:200%;height:8%;background:repeating-linear-gradient(90deg,transparent 0,transparent 35px,rgba(80,110,160,0.06) 37px,transparent 39px);"></div>
      <div style="position:absolute;bottom:30%;left:10%;width:8%;height:26%;background:#060810;"></div>
      <div style="position:absolute;bottom:54%;left:11%;width:6%;height:4.5%;background:#060810;border-radius:2px 2px 0 0;"></div>
      <div style="position:absolute;bottom:30%;left:24%;width:7%;height:22%;background:#05070e;transform:rotate(-2.5deg);transform-origin:bottom left;"></div>
      <div style="position:absolute;bottom:51%;left:27%;width:3%;height:2.5%;background:#05070e;transform:rotate(14deg);"></div>
      <div style="position:absolute;bottom:30%;left:35%;width:9%;height:23%;background:#060810;"></div>
      <div style="position:absolute;bottom:30%;left:48%;width:7%;height:19%;background:#050710;transform:rotate(3.5deg);transform-origin:bottom right;"></div>
      <div style="position:absolute;bottom:30%;left:59%;width:30%;height:3.5%;background:#040610;"></div>
      <div style="position:absolute;bottom:30%;left:61%;width:2%;height:10%;background:#040610;"></div>
      <div style="position:absolute;bottom:30%;left:78%;width:2%;height:9%;background:#040610;transform:rotate(11deg);"></div>
      <div style="position:absolute;bottom:30%;left:88%;width:2%;height:11%;background:#040610;"></div>`,

    'veyra-ruins': `
      <div style="position:absolute;inset:0;background:linear-gradient(190deg,#1a0c07 0%,#3e2008 18%,#702e0a 32%,#a86028 48%,#c48035 62%,#a06025 72%,#3d1e08 85%,#0d0808 100%);"></div>
      <div style="position:absolute;top:42%;left:0;width:100%;height:22%;background:linear-gradient(180deg,transparent,rgba(130,75,20,0.07),transparent);"></div>
      <div style="position:absolute;bottom:30%;left:0;width:100%;height:12%;background:linear-gradient(0deg,rgba(160,130,80,0.1) 0%,transparent 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:34%;background:linear-gradient(0deg,#060c14 0%,#0a1424 42%,#0d1a30 72%,#10203c 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:34%;background:linear-gradient(0deg,transparent,rgba(90,45,10,0.07) 60%,rgba(140,65,15,0.05) 100%);"></div>
      <div class="cs-shimmer-layer" style="height:34%;"></div>
      <div style="position:absolute;bottom:32%;left:7%;width:9%;height:24%;background:#0a0c12;"></div>
      <div style="position:absolute;bottom:54%;left:8%;width:3%;height:9%;background:#090b11;"></div>
      <div style="position:absolute;bottom:44%;left:9.5%;width:4%;height:5%;background:#050710;"></div>
      <div style="position:absolute;bottom:32%;left:21%;width:6%;height:32%;background:#090c12;"></div>
      <div style="position:absolute;bottom:48%;left:23%;width:0.8px;height:14%;background:#050810;transform:rotate(2deg);"></div>
      <div style="position:absolute;bottom:32%;left:31%;width:14%;height:8%;background:#0a0c12;border-radius:3px 3px 0 0;clip-path:polygon(0% 0%,38% 0%,38% 100%,62% 100%,62% 0%,100% 0%,100% 55%,62% 100%,38% 100%,0% 55%);"></div>
      <div style="position:absolute;bottom:32%;left:50%;width:7%;height:19%;background:#09090e;"></div>
      <div style="position:absolute;bottom:32%;left:61%;width:1.5%;height:14%;background:#080a10;"></div>
      <div style="position:absolute;bottom:32%;left:66%;width:1.5%;height:9%;background:#080a10;transform:rotate(5deg);"></div>
      <div style="position:absolute;bottom:32%;left:71%;width:1.5%;height:16%;background:#080a10;"></div>
      <div style="position:absolute;bottom:32%;left:79%;width:8%;height:13%;background:#0a0c14;opacity:0.65;"></div>
      <div style="position:absolute;bottom:32%;left:88%;width:6%;height:17%;background:#090b12;opacity:0.55;"></div>
      <div style="position:absolute;bottom:31.5%;left:0;width:25%;height:2.5%;background:#0a0c14;"></div>
      <svg style="position:absolute;bottom:32%;left:16%;width:3.2%;height:22%;" viewBox="0 0 36 112" fill="none">
        <ellipse cx="18" cy="9" rx="8.5" ry="9" fill="#07090e"/>
        <path d="M10 17 Q6 62 4 110 L32 110 Q30 62 26 17 Z" fill="#080a12"/>
        <path d="M11 25 Q1 40 0 56" stroke="#07090e" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M25 25 Q35 40 36 56" stroke="#07090e" stroke-width="4.5" stroke-linecap="round"/>
      </svg>
      <div style="position:absolute;bottom:48%;left:7%;width:4%;height:12%;background:linear-gradient(0deg,rgba(90,60,30,0.07) 0%,transparent 100%);"></div>`,

    'marenic-fleet': `
      <div style="position:absolute;inset:0;background:linear-gradient(190deg,#080c14 0%,#0e162a 28%,#14203e 58%,#101828 78%,#0a1020 100%);"></div>
      <div style="position:absolute;top:0;left:0;width:100%;height:58%;background:radial-gradient(ellipse 120% 80% at 18% 0%,rgba(20,30,58,0.68) 0%,transparent 55%),radial-gradient(ellipse 90% 68% at 82% 5%,rgba(15,24,48,0.55) 0%,transparent 50%);"></div>
      <div style="position:absolute;top:46%;left:0;width:100%;height:7%;background:linear-gradient(0deg,transparent,rgba(28,42,80,0.18),transparent);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:52%;background:linear-gradient(0deg,#050a14 0%,#09122a 42%,#0d1a3a 80%,#0f1e42 100%);"></div>
      <div class="cs-shimmer-layer" style="height:52%;opacity:0.35;"></div>
      <div class="cs-wave-band" style="position:absolute;bottom:49%;left:0;width:200%;height:6%;background:repeating-linear-gradient(90deg,transparent 0,transparent 42px,rgba(70,100,160,0.05) 44px,transparent 46px);"></div>
      <svg style="position:absolute;bottom:52%;left:3%;width:9%;opacity:0.42;" viewBox="0 0 120 68" fill="none">
        <path d="M5 44 Q60 53 115 44 L108 65 Q60 72 12 65 Z" fill="#080c18"/><line x1="36" y1="44" x2="36" y2="7" stroke="#080c18" stroke-width="2.5"/><line x1="70" y1="44" x2="70" y2="2" stroke="#080c18" stroke-width="2.5"/>
        <polygon points="36,9 56,20 36,42" fill="#0d1430"/><polygon points="70,4 96,17 70,41" fill="#0d1430"/>
      </svg>
      <svg style="position:absolute;bottom:52%;left:17%;width:10%;opacity:0.55;" viewBox="0 0 120 68" fill="none">
        <path d="M5 44 Q60 53 115 44 L108 65 Q60 72 12 65 Z" fill="#07090f"/><line x1="36" y1="44" x2="36" y2="7" stroke="#07090f" stroke-width="2.5"/><line x1="70" y1="44" x2="70" y2="2" stroke="#07090f" stroke-width="2.5"/>
        <polygon points="36,9 56,20 36,42" fill="#0b1225"/><polygon points="70,4 96,17 70,41" fill="#0b1225"/>
      </svg>
      <svg style="position:absolute;bottom:51%;left:32%;width:12%;opacity:0.7;" viewBox="0 0 140 78" fill="none">
        <path d="M5 50 Q70 60 135 50 L126 74 Q70 82 14 74 Z" fill="#060910"/><line x1="40" y1="50" x2="40" y2="9" stroke="#060910" stroke-width="3"/><line x1="80" y1="50" x2="80" y2="3" stroke="#060910" stroke-width="3"/>
        <polygon points="40,11 62,24 40,48" fill="#0a1322"/><polygon points="80,5 110,20 80,47" fill="#0a1322"/>
        <line x1="126" y1="48" x2="148" y2="34" stroke="#060910" stroke-width="2"/>
      </svg>
      <svg style="position:absolute;bottom:50%;left:50%;width:15%;opacity:0.82;" viewBox="0 0 170 88" fill="none">
        <path d="M6 56 Q85 68 164 56 L154 82 Q85 92 16 82 Z" fill="#050810"/><line x1="50" y1="56" x2="50" y2="10" stroke="#050810" stroke-width="3.5"/><line x1="98" y1="56" x2="98" y2="3" stroke="#050810" stroke-width="3.5"/><line x1="140" y1="54" x2="140" y2="17" stroke="#050810" stroke-width="3"/>
        <polygon points="50,12 80,27 50,54" fill="#091020"/><polygon points="98,5 134,24 98,53" fill="#091020"/><polygon points="140,19 162,31 140,52" fill="#091020"/>
        <polygon points="50,12 78,18 50,27" fill="#440a0a" opacity="0.95"/>
        <line x1="154" y1="54" x2="178" y2="38" stroke="#050810" stroke-width="2.5"/>
      </svg>
      <svg style="position:absolute;bottom:43%;left:58%;width:28%;" viewBox="0 0 270 122" fill="none">
        <path d="M8 78 Q135 96 262 78 L250 110 Q135 124 20 110 Z" fill="#040810"/>
        <path d="M250 110 Q264 108 270 100 L262 78 Z" fill="#030710"/>
        <line x1="82" y1="78" x2="82" y2="18" stroke="#040810" stroke-width="4"/><line x1="155" y1="78" x2="155" y2="7" stroke="#040810" stroke-width="4"/><line x1="215" y1="76" x2="215" y2="30" stroke="#040810" stroke-width="3"/>
        <polygon points="82,20 126,40 82,75" fill="#09101e"/><polygon points="155,9 206,34 155,75" fill="#09101e"/><polygon points="215,32 246,48 215,73" fill="#09101e"/>
        <polygon points="82,20 120,27 82,38" fill="#560c0c" opacity="0.95"/>
        <line x1="8" y1="76" x2="-14" y2="55" stroke="#040810" stroke-width="3"/>
        <ellipse cx="138" cy="72" rx="6" ry="6" fill="#03050e"/>
        <rect x="133" y="77" width="10" height="20" rx="2" fill="#03050e"/>
      </svg>`,

    'council-chamber': `
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 75% 65% at 50% 48%,#13100a 0%,#070608 52%,#030304 100%);"></div>
      <div style="position:absolute;top:12%;left:5%;width:22%;height:40%;background:radial-gradient(ellipse at 0% 50%,rgba(205,135,28,0.14) 0%,transparent 68%);"></div>
      <div style="position:absolute;top:12%;right:5%;width:22%;height:40%;background:radial-gradient(ellipse at 100% 50%,rgba(205,135,28,0.11) 0%,transparent 68%);"></div>
      <div style="position:absolute;top:4%;left:22%;width:56%;height:34%;background:radial-gradient(ellipse at 50% 0%,rgba(165,115,22,0.09) 0%,transparent 58%);"></div>
      <div style="position:absolute;top:15%;left:8%;width:1.5%;height:9%;background:#1c1005;border-radius:1px;"></div>
      <div style="position:absolute;top:13%;left:7.5%;width:2.2%;height:3.5%;background:#180d04;border-radius:2px;"></div>
      <div style="position:absolute;top:11.5%;left:7.8%;width:1.8%;height:2.5%;background:#f09020;border-radius:50%;box-shadow:0 0 16px 9px rgba(225,145,20,0.38),0 0 32px 16px rgba(195,115,10,0.16);animation:cs-pulse 1.9s ease-in-out infinite;"></div>
      <div style="position:absolute;top:15%;right:8%;width:1.5%;height:9%;background:#1c1005;border-radius:1px;"></div>
      <div style="position:absolute;top:13%;right:7.5%;width:2.2%;height:3.5%;background:#180d04;border-radius:2px;"></div>
      <div style="position:absolute;top:11.5%;right:7.8%;width:1.8%;height:2.5%;background:#f09020;border-radius:50%;box-shadow:0 0 16px 9px rgba(225,145,20,0.38),0 0 32px 16px rgba(195,115,10,0.16);animation:cs-pulse 1.9s ease-in-out 0.4s infinite;"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:26%;background:linear-gradient(0deg,#050404 0%,#090705 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:26%;background:linear-gradient(90deg,transparent 19.8%,rgba(255,255,255,0.015) 20%,transparent 20.2%) 0 0/20% 100%;"></div>
      <div style="position:absolute;bottom:25%;left:11%;width:78%;height:4.5%;background:#111006;border-top:1px solid #221c08;border-radius:2px;box-shadow:0 6px 24px rgba(0,0,0,0.9);"></div>
      <div style="position:absolute;bottom:21%;left:11%;width:78%;height:4%;background:#0e0d04;border-radius:0 0 2px 2px;"></div>
      <svg style="position:absolute;bottom:28%;left:12%;width:5%;height:17%;" viewBox="0 0 48 88" fill="none"><ellipse cx="24" cy="9" rx="8" ry="9" fill="#0a0806"/><path d="M16 17 Q12 55 11 86 L37 86 Q36 55 32 17 Z" fill="#0c0a07"/><path d="M17 25 Q7 34 6 48" stroke="#0a0806" stroke-width="4.5"/><path d="M31 25 Q41 34 42 48" stroke="#0a0806" stroke-width="4.5"/></svg>
      <svg style="position:absolute;bottom:28%;left:22%;width:5%;height:17%;" viewBox="0 0 48 88" fill="none"><ellipse cx="24" cy="9" rx="8" ry="9" fill="#090705"/><path d="M16 17 Q12 55 11 86 L37 86 Q36 55 32 17 Z" fill="#0b0906"/><path d="M17 25 Q9 32 11 44" stroke="#090705" stroke-width="4.5"/><path d="M31 25 Q39 32 37 44" stroke="#090705" stroke-width="4.5"/></svg>
      <svg style="position:absolute;bottom:28%;left:33%;width:5%;height:16%;" viewBox="0 0 48 88" fill="none"><ellipse cx="24" cy="9" rx="8" ry="9" fill="#0a0806"/><path d="M16 17 Q12 55 11 86 L37 86 Q36 55 32 17 Z" fill="#0c0a07"/><path d="M17 25 Q3 33 1 48" stroke="#0a0806" stroke-width="4.5"/><path d="M31 25 Q45 33 47 48" stroke="#0a0806" stroke-width="4.5"/></svg>
      <svg style="position:absolute;bottom:28%;left:44%;width:5%;height:17%;" viewBox="0 0 48 88" fill="none"><ellipse cx="24" cy="9" rx="8" ry="9" fill="#090705"/><path d="M16 17 Q12 55 11 86 L37 86 Q36 55 32 17 Z" fill="#0b0906"/><path d="M17 25 Q6 37 6 50" stroke="#090705" stroke-width="4.5"/><path d="M31 25 Q42 37 42 50" stroke="#090705" stroke-width="4.5"/></svg>
      <svg style="position:absolute;bottom:28%;left:55%;width:5%;height:17%;" viewBox="0 0 48 88" fill="none"><ellipse cx="24" cy="9" rx="8" ry="9" fill="#0a0806"/><path d="M16 17 Q12 55 11 86 L37 86 Q36 55 32 17 Z" fill="#0c0a07"/><path d="M17 25 Q7 34 6 48" stroke="#0a0806" stroke-width="4.5"/><path d="M31 25 Q41 34 42 48" stroke="#0a0806" stroke-width="4.5"/></svg>
      <svg style="position:absolute;bottom:28%;left:66%;width:5%;height:20%;" viewBox="0 0 48 100" fill="none"><rect x="16" y="0" width="16" height="12" rx="1" fill="#0a0806"/><ellipse cx="24" cy="17" rx="9" ry="9" fill="#0a0806"/><path d="M15 25 Q11 62 10 98 L38 98 Q37 62 33 25 Z" fill="#0c0a07"/><path d="M16 33 Q7 43 6 55" stroke="#0a0806" stroke-width="4.5"/><path d="M32 33 Q41 43 42 55" stroke="#0a0806" stroke-width="4.5"/></svg>
      <div style="position:absolute;bottom:28%;left:38%;width:20%;height:1.5%;background:#17130a;border-radius:1px;opacity:0.8;"></div>
      <svg style="position:absolute;bottom:24%;left:3%;width:6%;height:30%;" viewBox="0 0 56 148" fill="none">
        <ellipse cx="28" cy="11" rx="11" ry="12" fill="#080a0e"/>
        <path d="M17 22 Q10 80 7 145 L49 145 Q46 80 39 22 Z" fill="#0a0c12"/>
        <path d="M18 34 Q3 52 0 72" stroke="#080a0e" stroke-width="6" stroke-linecap="round"/>
        <path d="M38 34 Q53 52 56 72" stroke="#080a0e" stroke-width="6" stroke-linecap="round"/>
        <path d="M38 34 Q54 40 58 37" stroke="#080a0e" stroke-width="5.5" stroke-linecap="round"/>
      </svg>
      <div style="position:absolute;top:8%;left:40%;width:20%;height:22%;background:radial-gradient(circle,rgba(90,65,14,0.07) 0%,transparent 68%);border:1px solid rgba(90,65,14,0.1);border-radius:50%;"></div>`,

    'emissary-dock': `
      <div style="position:absolute;inset:0;background:linear-gradient(190deg,#080410 0%,#180608 15%,#3c1008 28%,#721e0a 42%,#a83010 55%,#721e0a 66%,#3c1008 78%,#0a0510 100%);"></div>
      <div style="position:absolute;bottom:36%;left:42%;width:16%;height:10%;background:radial-gradient(circle,rgba(225,125,18,0.85) 0%,rgba(200,85,10,0.5) 38%,transparent 68%);"></div>
      <div style="position:absolute;bottom:33%;left:0;width:100%;height:11%;background:linear-gradient(0deg,rgba(185,82,14,0.22) 0%,rgba(205,100,18,0.14) 50%,transparent 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:36%;background:linear-gradient(0deg,#060a10 0%,#0a1018 42%,#10182c 70%,#14203c 100%);"></div>
      <div style="position:absolute;bottom:0;left:28%;width:38%;height:36%;background:linear-gradient(0deg,transparent,rgba(125,52,10,0.1) 58%,rgba(185,82,14,0.07) 100%);"></div>
      <div class="cs-shimmer-layer cs-shimmer-warm" style="height:36%;opacity:0.5;"></div>
      <div style="position:absolute;bottom:34%;left:18%;width:58%;height:4%;background:#07090e;"></div>
      <div style="position:absolute;bottom:34%;left:22%;width:1.8%;height:8%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:30%;width:1.8%;height:7%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:38%;width:1.8%;height:9%;background:#05070c;transform:rotate(-2.5deg);"></div>
      <div style="position:absolute;bottom:34%;left:52%;width:1.8%;height:8%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:60%;width:1.8%;height:7%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:68%;width:1.8%;height:9%;background:#05070c;"></div>
      <div style="position:absolute;bottom:28%;left:43%;width:2.5%;height:7%;background:#07090e;transform:rotate(-42deg);transform-origin:top right;"></div>
      <div style="position:absolute;bottom:36%;left:64%;width:8%;height:14%;background:#07080c;opacity:0.78;"></div>
      <div style="position:absolute;bottom:36%;left:73%;width:5%;height:9%;background:#060710;opacity:0.58;"></div>
      <div style="position:absolute;bottom:36%;left:79%;width:7%;height:12%;background:#07080c;opacity:0.48;"></div>
      <svg style="position:absolute;bottom:35%;left:3%;width:15%;height:11%;" viewBox="0 0 165 58" fill="none">
        <path d="M4 36 Q82 46 161 36 L152 54 Q82 61 13 54 Z" fill="#050609"/><line x1="54" y1="36" x2="54" y2="6" stroke="#050609" stroke-width="3"/><line x1="94" y1="36" x2="94" y2="1" stroke="#050609" stroke-width="3"/>
        <polygon points="54,8 78,18 54,34" fill="#0a1020"/><polygon points="94,3 122,16 94,34" fill="#0a1020"/>
        <polygon points="54,8 80,14 54,20" fill="#ddd8c0" opacity="0.82"/>
      </svg>
      <svg style="position:absolute;bottom:36%;left:36%;width:4.5%;height:24%;" viewBox="0 0 46 115" fill="none">
        <ellipse cx="23" cy="10" rx="9" ry="10" fill="#05060a"/>
        <path d="M14 19 Q9 64 7 112 L39 112 Q37 64 32 19 Z" fill="#06070c"/>
        <path d="M14 19 Q3 48 2 73 L10 74 Q12 54 16 30 Z" fill="#04050a"/>
        <path d="M32 19 Q43 48 44 73 L36 74 Q34 54 30 30 Z" fill="#04050a"/>
        <path d="M32 32 Q48 37 52 33" stroke="#05060a" stroke-width="4.5" stroke-linecap="round"/>
        <rect x="48" y="29" width="11" height="14" rx="2" fill="#110f08" opacity="0.92"/>
        <path d="M16 98 L13 112" stroke="#05060a" stroke-width="5" stroke-linecap="round"/>
        <path d="M28 97 L32 112" stroke="#05060a" stroke-width="5" stroke-linecap="round"/>
      </svg>
      <svg style="position:absolute;bottom:36%;left:62%;width:3.2%;height:21%;" viewBox="0 0 36 105" fill="none">
        <ellipse cx="18" cy="9" rx="7.5" ry="8.5" fill="#06080d"/>
        <path d="M11 16 Q7 57 6 102 L30 102 Q29 57 25 16 Z" fill="#07090e"/>
        <path d="M11 23 Q2 35 2 50" stroke="#06080d" stroke-width="4" stroke-linecap="round"/>
        <path d="M25 23 Q34 35 34 50" stroke="#06080d" stroke-width="4" stroke-linecap="round"/>
        <line x1="33" y1="6" x2="35" y2="102" stroke="#06080d" stroke-width="2.8"/>
        <polygon points="31,6 35,6 33,1" fill="#06080d"/>
      </svg>`,

    'secret-meeting': `
      <div style="position:absolute;inset:0;background:#020205;"></div>
      <div style="position:absolute;top:28%;left:42%;width:16%;height:20%;background:radial-gradient(ellipse,rgba(225,170,28,0.92) 0%,rgba(200,135,18,0.58) 18%,rgba(165,95,10,0.22) 42%,rgba(105,58,5,0.07) 62%,transparent 78%);animation:cs-pulse 2.8s ease-in-out infinite;"></div>
      <div style="position:absolute;bottom:22%;left:28%;width:44%;height:20%;background:radial-gradient(ellipse at 50% 0%,rgba(145,95,14,0.13) 0%,transparent 68%);"></div>
      <div style="position:absolute;top:0;left:30%;width:40%;height:28%;background:radial-gradient(ellipse at 50% 100%,rgba(120,82,10,0.07) 0%,transparent 58%);"></div>
      <div style="position:absolute;top:0;left:0;width:9%;height:100%;background:linear-gradient(90deg,#010103,transparent);"></div>
      <div style="position:absolute;top:0;right:0;width:9%;height:100%;background:linear-gradient(270deg,#010103,transparent);"></div>
      <div style="position:absolute;top:28%;left:46.5%;width:7%;height:9%;background:#1c1205;border:1px solid #2e1e08;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,0.8);"></div>
      <div style="position:absolute;top:29.5%;left:48.5%;width:3%;height:4.5%;background:radial-gradient(circle,#f8d040 0%,#e89020 52%,transparent 72%);border-radius:50% 50% 30% 30%;animation:cs-flicker 0.9s ease-in-out infinite;"></div>
      <div style="position:absolute;top:20%;left:49.7%;width:0.5%;height:9.5%;background:#100a04;"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:28%;background:linear-gradient(0deg,#020204 0%,#050406 100%);"></div>
      <div style="position:absolute;bottom:24%;left:30%;width:40%;height:3.5%;background:#0e0b06;border-top:1px solid #1a1408;"></div>
      <div style="position:absolute;bottom:21%;left:30%;width:40%;height:3%;background:#0a0804;"></div>
      <div style="position:absolute;bottom:25.5%;left:46%;width:2.5%;height:3.5%;background:#0c0a06;border-radius:1px;"></div>
      <svg style="position:absolute;bottom:23%;left:13%;width:8%;height:33%;" viewBox="0 0 72 155" fill="none">
        <path d="M14 0 Q36 6 58 0 Q63 26 58 37 Q46 44 36 44 Q26 44 14 37 Q9 26 14 0 Z" fill="#09090e"/>
        <ellipse cx="36" cy="26" rx="13" ry="14" fill="#050810"/>
        <path d="M14 40 Q7 94 5 152 L67 152 Q65 94 58 40 Z" fill="#080a0f"/>
        <path d="M14 40 Q0 72 0 104 L13 102 Q16 76 19 54 Z" fill="#070910"/>
        <path d="M58 56 Q83 70 92 72" stroke="#080a0f" stroke-width="7.5" stroke-linecap="round"/>
        <ellipse cx="93" cy="74" rx="7" ry="4.5" fill="#080a0f"/>
      </svg>
      <svg style="position:absolute;bottom:23%;right:11%;width:8%;height:35%;" viewBox="0 0 72 160" fill="none">
        <ellipse cx="36" cy="12" rx="13" ry="14" fill="#07080c"/>
        <path d="M23 25 Q17 94 14 158 L58 158 Q55 94 49 25 Z" fill="#07080c"/>
        <path d="M36 25 L26 44 L36 40 Z" fill="#050810" opacity="0.85"/>
        <path d="M36 25 L46 44 L36 40 Z" fill="#050810" opacity="0.85"/>
        <path d="M23 36 Q10 50 8 65" stroke="#07080c" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M49 36 Q60 50 60 65" stroke="#07080c" stroke-width="6.5" stroke-linecap="round"/>
        <rect x="55" y="57" width="13" height="19" rx="2" fill="#120f08"/>
        <line x1="57" y1="62" x2="66" y2="62" stroke="#1e1a0e" stroke-width="1.2"/>
        <line x1="57" y1="66" x2="66" y2="66" stroke="#1e1a0e" stroke-width="1.2"/>
      </svg>
      <div style="position:absolute;bottom:0;left:8%;width:20%;height:23%;background:linear-gradient(135deg,rgba(0,0,0,0.45) 0%,transparent 58%);transform:skewX(-18deg);"></div>
      <div style="position:absolute;bottom:0;right:8%;width:20%;height:23%;background:linear-gradient(225deg,rgba(0,0,0,0.45) 0%,transparent 58%);transform:skewX(18deg);"></div>`,

    'blockade-shore': `
      <div style="position:absolute;inset:0;background:linear-gradient(190deg,#040710 0%,#070c18 22%,#0c1630 48%,#101a38 62%,#0c1428 78%,#07101e 100%);"></div>
      <div style="position:absolute;bottom:38%;right:0;width:45%;height:22%;background:radial-gradient(ellipse 80% 50% at 100% 50%,rgba(26,46,105,0.18) 0%,transparent 68%);"></div>
      <div id="cs-sf" style="position:absolute;top:0;left:0;width:1px;height:1px;opacity:0.45;"></div>
      <div style="position:absolute;bottom:37%;left:0;width:100%;height:10%;background:linear-gradient(0deg,rgba(38,58,105,0.14) 0%,transparent 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:40%;background:linear-gradient(0deg,#040810 0%,#080e1c 46%,#0c1428 80%,#0e1a32 100%);"></div>
      <div class="cs-shimmer-layer" style="height:40%;opacity:0.28;"></div>
      <div style="position:absolute;bottom:0;left:0;width:30%;height:62%;background:#030408;clip-path:polygon(0% 100%,0% 28%,9% 18%,18% 13%,24% 22%,29% 16%,30% 100%);"></div>
      <div style="position:absolute;bottom:38%;left:5%;width:22%;height:16%;background:linear-gradient(135deg,rgba(12,16,24,0.55) 0%,transparent 50%);"></div>
      <svg style="position:absolute;bottom:56%;left:16%;width:4%;height:20%;" viewBox="0 0 40 98" fill="none">
        <ellipse cx="20" cy="9" rx="8.5" ry="9" fill="#030408"/>
        <path d="M12 17 Q8 57 7 96 L33 96 Q32 57 28 17 Z" fill="#030408"/>
        <path d="M12 17 Q-7 42 -9 67 L4 65 Q8 46 14 30 Z" fill="#020307"/>
        <path d="M28 17 Q42 36 43 57 L34 56 Q32 42 29 30 Z" fill="#020307"/>
        <path d="M12 29 Q1 39 -1 52" stroke="#030408" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M28 26 Q38 21 40 19" stroke="#030408" stroke-width="4" stroke-linecap="round"/>
        <path d="M38 19 Q44 18 46 19" stroke="#030408" stroke-width="3" stroke-linecap="round"/>
      </svg>
      <div style="position:absolute;bottom:57%;left:0;width:30%;height:1.2%;background:#050810;"></div>
      <svg style="position:absolute;bottom:40.5%;left:20%;width:8%;opacity:0.6;" viewBox="0 0 105 58" fill="none">
        <path d="M3 36 Q52 46 102 36 L95 54 Q52 60 10 54 Z" fill="#06090e"/><line x1="28" y1="36" x2="28" y2="8" stroke="#06090e" stroke-width="2.5"/><line x1="60" y1="36" x2="60" y2="3" stroke="#06090e" stroke-width="2.5"/>
        <polygon points="28,10 47,20 28,34" fill="#0a1020"/><polygon points="60,5 84,17 60,34" fill="#0a1020"/>
      </svg>
      <svg style="position:absolute;bottom:40%;left:32%;width:9%;opacity:0.7;" viewBox="0 0 115 62" fill="none">
        <path d="M4 42 Q57 52 110 42 L103 59 Q57 66 11 59 Z" fill="#050810"/><line x1="32" y1="42" x2="32" y2="8" stroke="#050810" stroke-width="3"/><line x1="68" y1="42" x2="68" y2="3" stroke="#050810" stroke-width="3"/>
        <polygon points="32,10 53,22 32,40" fill="#090e1c"/><polygon points="68,5 92,20 68,40" fill="#090e1c"/>
      </svg>
      <svg style="position:absolute;bottom:39.5%;left:44%;width:13%;opacity:0.82;" viewBox="0 0 155 74" fill="none">
        <path d="M5 52 Q77 63 150 52 L140 70 Q77 78 15 70 Z" fill="#050810"/><line x1="46" y1="52" x2="46" y2="10" stroke="#050810" stroke-width="3.5"/><line x1="92" y1="52" x2="92" y2="3" stroke="#050810" stroke-width="3.5"/><line x1="130" y1="52" x2="130" y2="18" stroke="#050810" stroke-width="3"/>
        <polygon points="46,12 72,26 46,50" fill="#090e1c"/><polygon points="92,5 124,22 92,50" fill="#090e1c"/>
        <polygon points="46,12 72,18 46,26" fill="#440a0a" opacity="0.92"/>
      </svg>
      <svg style="position:absolute;bottom:40%;left:60%;width:9%;opacity:0.68;" viewBox="0 0 115 62" fill="none">
        <path d="M4 42 Q57 52 110 42 L103 59 Q57 66 11 59 Z" fill="#050810"/><line x1="32" y1="42" x2="32" y2="8" stroke="#050810" stroke-width="3"/><line x1="68" y1="42" x2="68" y2="3" stroke="#050810" stroke-width="3"/>
        <polygon points="32,10 53,22 32,40" fill="#090e1c"/><polygon points="68,5 92,20 68,40" fill="#090e1c"/>
      </svg>
      <svg style="position:absolute;bottom:40.5%;left:72%;width:8%;opacity:0.52;" viewBox="0 0 105 58" fill="none">
        <path d="M3 36 Q52 46 102 36 L95 54 Q52 60 10 54 Z" fill="#06090e"/><line x1="28" y1="36" x2="28" y2="8" stroke="#06090e" stroke-width="2.5"/><line x1="60" y1="36" x2="60" y2="3" stroke="#06090e" stroke-width="2.5"/>
        <polygon points="28,10 47,20 28,34" fill="#0a1020"/><polygon points="60,5 84,17 60,34" fill="#0a1020"/>
      </svg>
      <svg style="position:absolute;bottom:41%;left:83%;width:7%;opacity:0.38;" viewBox="0 0 95 54" fill="none">
        <path d="M3 34 Q47 42 92 34 L86 50 Q47 56 9 50 Z" fill="#07090e"/><line x1="26" y1="34" x2="26" y2="8" stroke="#07090e" stroke-width="2"/><line x1="55" y1="34" x2="55" y2="3" stroke="#07090e" stroke-width="2"/>
        <polygon points="26,10 42,18 26,32" fill="#0b1020"/><polygon points="55,5 74,15 55,32" fill="#0b1020"/>
      </svg>`,
  };

  return scenes[id] || '<div style="position:absolute;inset:0;background:#030507;"></div>';
}

// Cutscene state
let csState = {
  active:    false,
  id:        null,
  panelIdx:  0,
  onComplete: null,
  typeTimer: null,
  ready:     false,
};

function showCutscene(id, onComplete) {
  const panels = CUTSCENE_DATA[id];
  if (!panels || !panels.length) { onComplete && onComplete(); return; }

  csState = { active: true, id, panelIdx: 0, onComplete, typeTimer: null, ready: false };

  const el = document.getElementById('cutscene');
  el.classList.remove('hidden');

  document.getElementById('cs-skip-btn').onclick = (e) => {
    e.stopPropagation();
    endCutscene();
  };

  document.getElementById('cs-art').addEventListener('click', handleCSClick);

  csLoadPanel(0);
}

function handleCSClick() {
  if (!csState.active) return;
  const panels = CUTSCENE_DATA[csState.id];
  const panel  = panels[csState.panelIdx];

  if (!csState.ready) {
    // Finish typewriter instantly
    clearTimeout(csState.typeTimer);
    document.getElementById('cs-narration').textContent = panel.text;
    csState.ready = true;
    showCSHint();
    return;
  }

  csState.panelIdx++;
  if (csState.panelIdx >= panels.length) {
    endCutscene();
  } else {
    csLoadPanel(csState.panelIdx);
  }
}

function csLoadPanel(idx) {
  const panels = CUTSCENE_DATA[csState.id];
  const panel  = panels[idx];

  csState.ready = false;
  hideCSHint();

  const art = document.getElementById('cs-art');
  art.classList.add('cs-fading');

  csDots(panels.length, idx);

  setTimeout(() => {
    art.innerHTML = CS_SCENE(panel.scene);

    // Starfield for night scenes
    const sf = art.querySelector('#cs-sf');
    if (sf) {
      const stars = [];
      for (let i = 0; i < 72; i++) {
        const x   = Math.random() * window.innerWidth;
        const y   = Math.random() * (window.innerHeight * 0.44);
        const op  = Math.random() > 0.62 ? 0.9 : 0.5;
        const sz  = Math.random() > 0.88 ? 2 : 1;
        stars.push(`${Math.round(x)}px ${Math.round(y)}px 0 ${sz}px rgba(255,255,255,${op})`);
      }
      sf.style.cssText += ';position:absolute;width:1px;height:1px;box-shadow:' + stars.join(',');
    }

    art.classList.remove('cs-fading');

    document.getElementById('cs-location').textContent  = panel.location;
    document.getElementById('cs-narration').textContent = '';

    csTypeText(panel.text, 28, () => {
      csState.ready = true;
      showCSHint();
    });
  }, 540);
}

function csTypeText(text, speed, onDone) {
  const el = document.getElementById('cs-narration');
  el.textContent = '';
  let i = 0;
  function tick() {
    if (i >= text.length) { onDone && onDone(); return; }
    el.textContent += text[i++];
    csState.typeTimer = setTimeout(tick, speed);
  }
  tick();
}

function csDots(total, active) {
  const el = document.getElementById('cs-dots');
  el.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'cs-dot' + (i === active ? ' cs-dot-active' : '');
    el.appendChild(d);
  }
}

function showCSHint() { document.getElementById('cs-hint').classList.add('show'); }
function hideCSHint() { document.getElementById('cs-hint').classList.remove('show'); }

function endCutscene() {
  clearTimeout(csState.typeTimer);
  const el = document.getElementById('cutscene');
  el.classList.add('hidden');
  document.getElementById('cs-art').removeEventListener('click', handleCSClick);
  csState.active = false;
  csState.onComplete && csState.onComplete();
}

// Override nextScene to insert Act III cutscene before scene index 4
// (This declaration is hoisted and shadows the earlier nextScene definition)
function nextScene() { // eslint-disable-line no-redeclare
  gameState.sceneIndex++;
  if (gameState.sceneIndex === 4) {
    document.getElementById('game-screen').classList.add('hidden');
    showCutscene('act3', () => {
      document.getElementById('game-screen').classList.remove('hidden');
      renderScene();
    });
  } else {
    renderScene();
  }
}
