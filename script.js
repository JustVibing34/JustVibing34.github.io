/* =============================================
   THE WAR OF THE BLACK TIDE — GAME SCRIPT
   ============================================= */

// ─── STAT DEFINITIONS ───────────────────────
const STAT_DEFS = [
  // G — Geography (coastal routes, naval position)
  { key: 'militaryReadiness',   label: 'Coastal Defense',      grapes: 'G', grapesLabel: 'Geography',   type: 'good' },
  { key: 'foreignThreat',       label: 'Foreign Threat',       grapes: 'G', grapesLabel: 'Geography',   type: 'bad'  },
  // R — Religion (faith tensions, marginalized communities)
  { key: 'religiousTension',    label: 'Religious Tension',    grapes: 'R', grapesLabel: 'Religion',    type: 'bad'  },
  // A — Achievement (medical corps, hospitals)
  { key: 'medicalCapacity',     label: 'Medical Capacity',     grapes: 'A', grapesLabel: 'Achievement', type: 'good' },
  // P — Politics (centralized government, council, colonies)
  { key: 'capitalStability',    label: 'Capital Stability',    grapes: 'P', grapesLabel: 'Politics',    type: 'good' },
  { key: 'councilSupport',      label: 'Council Support',      grapes: 'P', grapesLabel: 'Politics',    type: 'good' },
  { key: 'colonyLoyalty',       label: 'Colony Loyalty',       grapes: 'P', grapesLabel: 'Politics',    type: 'good' },
  // E — Economics (trade goods, tribute, harbor revenue)
  { key: 'economicBalance',     label: 'Economic Balance',     grapes: 'E', grapesLabel: 'Economics',   type: 'good' },
  // S — Social (merit class, public trust, radicalization)
  { key: 'publicTrust',         label: 'Public Trust',         grapes: 'S', grapesLabel: 'Social',      type: 'good' },
  { key: 'rebelRadicalization', label: 'Rebel Radicalization', grapes: 'S', grapesLabel: 'Social',      type: 'bad'  },
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
      'Three weeks since the Black Tide Storm made landfall at Veyra. The harbor district is submerged. Grain stores are gone. Sixty percent of the colony\'s olive groves — the primary tribute commodity — are destroyed. Governor Dresh Fael sends word: <strong>Veyra cannot pay tribute</strong>. Not this season. Perhaps not next.',
      'From the watchtower at Cape Dros, signal fires burn red: thirty Marenic warships hold position on the horizon. They are not attacking. They are <em>waiting</em>. The council meets in emergency session. They are watching you — the Strategist who rose without noble blood. Prove them wrong.',
    ],
    lore: [
      { g: 'G', text: 'Veyra\'s deep-water harbor is the empire\'s only large port in a 300-league coastal stretch. The watchtower relay at Cape Dros transmits signals to Aurelion in under two hours via signal-fire chains.' },
      { g: 'E', text: 'Iliatania\'s trade exports include sugarcane, olive oil, leather, weapons, medicine, and timber. Veyra\'s olive harvest alone accounts for 18% of southern tribute revenue.' },
      { g: 'A', text: 'Before the storm, Veyra housed the empire\'s second-largest hospital complex — part of a state-funded medical system established after the Great Fever of 312.' },
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
      {
        letter: 'E',
        label:  'Use the highland supply routes — send aid through the interior roads, invisible to Marenic naval observation.',
        tip:    'Strategic. Veyra receives help without revealing imperial movement to the watching fleet.',
        consequence: 'The highland route is slower but invisible to Marenic scouts. When the first supply wagon arrives in Veyra three days late, it carries more than food — it carries proof that Iliatania knows how to move without being seen. Maren\'s fleet holds position, uncertain what just happened.',
        changes: { colonyLoyalty: 12, publicTrust: 7, medicalCapacity: 6, foreignThreat: -4, economicBalance: -7 },
      },
    ],
    advisors: [
      { name: 'Admiral Vath',       role: 'Fleet Commander',   icon: '⚓', grapes: 'G', dialogue: 'Thirty warships do not wait — they position. Show Maren that entering Iliatanian waters carries a price. Every hour we delay is an hour they read as permission.' },
      { name: 'Min. Caeldris',      role: 'Finance Minister',  icon: '◈', grapes: 'E', dialogue: 'Verify the damage before committing treasury resources. Every coin dispatched without audit is a coin the council cannot trace. Compassion is not the enemy — unverified compassion is.' },
      { name: 'High Priest Orryn',  role: 'Dominant Faith',    icon: '✦', grapes: 'R', dialogue: 'The Temple of the Meridian Sun supports a measured gesture of care for Veyra\'s faithful. But do not let Savra Olan use our mercy as a stage for her movement.' },
    ],
  },

  // ── SCENE 2 ──────────────────────────────
  {
    act:      'ACT I — THE BREAKING',
    progress: '2 / 7',
    title:    'Accounting for Ruin',
    body: [
      'The reports are in: 60% of the harvest gone, three hospitals flooded, fourteen thousand displaced. Governor Fael requests a <strong>two-year tribute postponement</strong> — measured, deferential. His deputy Savra Olan, a firebrand of the marginalized faith, was not at the meeting. <em>That absence worries your analysts.</em>',
      'The council is split. Finance Minister Caeldris warns of precedent. Admiral Vath says the harbor is too vital to alienate. High Priest Orryn says nothing — and his silence costs something too. You have the emperor\'s ear. What you recommend will be implemented.',
    ],
    lore: [
      { g: 'P', text: 'The Imperial Council operates by centralized consensus — the emperor holds final authority, but no major policy survives without council majority. Finance, War, and the High Priest hold the most influence.' },
      { g: 'S', text: 'Iliatania\'s merit system allows talented civilians to rise across class lines. You, the Crisis Strategist, are its product — selected over noble-born candidates by the emperor\'s own hand.' },
      { g: 'E', text: 'Emergency tribute suspensions historically take 2-3 seasons before neighboring colonies request similar treatment. Finance Minister Caeldris has refused three such requests in the past decade.' },
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
      {
        letter: 'E',
        label:  'Accept the postponement, but require Veyra to provide sailors and harbor labor — turning maritime skill into imperial military value instead of coin.',
        tip:    'Creative compromise. Uses what Veyra has rather than what it lacks.',
        consequence: 'Veyra\'s fishermen — with nothing else to offer — receive imperial commissions and rank. Governor Fael calls it the most inventive proposal the empire has ever sent. The arrangement costs tribute but builds the fleet. Minister Caeldris calls it dangerous precedent. Admiral Vath calls it a gift.',
        changes: { colonyLoyalty: 15, militaryReadiness: 10, economicBalance: -8, councilSupport: -5, publicTrust: 8 },
      },
    ],
    advisors: [
      { name: 'Admiral Vath',       role: 'Fleet Commander',   icon: '⚓', grapes: 'G', dialogue: 'Veyra\'s harbor is not a line item. Lose it to Maren\'s offer and we spend a decade trying to reclaim what we handed away. What you spend on the colony now, you recover in strategic positioning.' },
      { name: 'Min. Caeldris',      role: 'Finance Minister',  icon: '◈', grapes: 'E', dialogue: 'A full postponement enters every colony\'s ledger within a week. I can find relief — I cannot find a structure that does not set precedent. Whatever we offer must be bounded, named, and time-limited.' },
      { name: 'High Priest Orryn',  role: 'Dominant Faith',    icon: '✦', grapes: 'R', dialogue: 'Savra Olan\'s absence from this meeting is the most important fact in that report. Whatever you decide today, she is watching and will act on it. Factor her into the calculus.' },
    ],
  },

  // ── SCENE 3 ──────────────────────────────
  {
    act:      'ACT II — THE RATION',
    progress: '3 / 7',
    title:    'The Weight of One Ward',
    body: [
      'Veyra\'s central hospital holds 400 beds. It now holds 1,100 people. Fever spreads through the outer wards. The imperial medical team has medicine for perhaps 300 serious cases. Soldiers, administrators, civilians, and marginalized-faith priests all wait in the same queue.',
      'Healer Tessyn approaches your envoy. She has <strong>120 trained healers</strong> ready to work — with mortality rates comparable to your surgeons. She asks to be integrated. She also asks for <em>official recognition of her guild\'s medical authority</em>. The imperial doctors are uncomfortable. The council will be watching.',
    ],
    lore: [
      { g: 'A', text: 'The Imperial Medical Corps was founded after the Great Fever of 312 and expanded under the current emperor\'s grandmother, who made physician training state-funded. Iliatania\'s epidemic mortality rates are among the lowest in the known world.' },
      { g: 'R', text: 'There is one dominant state faith — the Temple of the Meridian Sun. At least four other communities exist within the empire, granted nominal tolerance but no official status or legal protection.' },
      { g: 'S', text: 'Healer Tessyn\'s guild practices a tradition older than the empire — plant-based, community-embedded, patient-paced. Its documented success in fever cases matches imperial surgery. It simply has no seal.' },
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
      {
        letter: 'E',
        label:  'Designate Veyra\'s hospital an Imperial Medical Center — request reinforcement surgeons from the northern cities and formally expand resources to the crisis.',
        tip:    'Institutional. Elevates the colony\'s status and resources without the religious question.',
        consequence: 'The designation arrives ahead of the surgeons. In Veyra, it is read as a signal that the empire considers the colony worth preserving, not just administering. Tessyn is not invited to the ceremony — but she is working in the wards when the new team arrives, and no one stops her.',
        changes: { medicalCapacity: 20, colonyLoyalty: 12, publicTrust: 10, economicBalance: -10, councilSupport: 5 },
      },
    ],
    advisors: [
      { name: 'Admiral Vath',       role: 'Fleet Commander',   icon: '⚓', grapes: 'G', dialogue: 'Treat the garrison first. A recovered army protects everyone else — including the civilians in the queue. Without military capacity, the hospital becomes irrelevant to the outcome.' },
      { name: 'Min. Caeldris',      role: 'Finance Minister',  icon: '◈', grapes: 'E', dialogue: 'The imperial medical standard exists because consistency saves lives and prevents liability. Integrating outside practitioners without protocol creates chaos in conditions that already have too much of it.' },
      { name: 'Healer Tessyn',      role: 'Guild Leader',      icon: '✚', grapes: 'A', dialogue: 'I am not asking for a monument. I am asking to save the people already dying in the outer ward. My healers are already here. You need only say yes — and the dying stops faster.' },
    ],
  },

  // ── SCENE 4 ──────────────────────────────
  {
    act:      'ACT II — THE RATION',
    progress: '4 / 7',
    title:    'The Weight of Prayers',
    body: [
      'Savra Olan holds a public assembly. Her claim — backed by documentation — is that imperial aid has consistently favored communities of the dominant faith. Her numbers are not invented. They are not wrong.',
      'High Priest Orryn calls it <em>"sedition dressed in theology"</em> and demands arrests. Three skirmishes have broken out in Veyra\'s temple district. No deaths yet. The Marenic emissary has reportedly attended one of Tessyn\'s open ceremonies.',
    ],
    lore: [
      { g: 'R', text: 'The dominant faith controls 42% of charitable institutions in the empire\'s southern colonies. Three historically marginalized faiths — including Tessyn\'s — operate without legal protection in seven of twelve colonies.' },
      { g: 'S', text: 'Savra Olan represents what the merit system was supposed to produce: a gifted organizer who rose through competence. The difference is she was never offered the path upward — so she built her own.' },
      { g: 'G', text: 'Veyra\'s temple district occupies the colony\'s highest ground — built before the harbor, the market, or the garrison. Both faiths built their first structures there. The land itself is disputed history.' },
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
      {
        letter: 'E',
        label:  'Release the preliminary aid distribution data yourself — publicly — before Olan can weaponize it. Take control of the narrative through transparency.',
        tip:    'Bold. Removes Olan\'s most powerful tool: the revelation.',
        consequence: 'By publishing the figures first, you transform a scandal into a disclosure. The data is still damning, but it comes from the empire, not its critics. High Priest Orryn calls you naive. Olan calls you late. The public calls it a beginning. For now, that is enough.',
        changes: { publicTrust: 15, religiousTension: -8, rebelRadicalization: -12, colonyLoyalty: 10, councilSupport: -8 },
      },
    ],
    advisors: [
      { name: 'Admiral Vath',       role: 'Fleet Commander',   icon: '⚓', grapes: 'G', dialogue: 'Religious tensions become military problems faster than anyone anticipates. I have seen it in the eastern colonies. Resolve this before someone turns a torch into a siege, because sieges are expensive.' },
      { name: 'Min. Caeldris',      role: 'Finance Minister',  icon: '◈', grapes: 'E', dialogue: 'Whatever this is, contain it quickly and quietly. Public inquiries cost time and resources we do not have. A private settlement between Orryn and Olan costs far less.' },
      { name: 'High Priest Orryn',  role: 'Dominant Faith',    icon: '✦', grapes: 'R', dialogue: 'Olan\'s assembly is sedition wearing a theological mask. The Temple has served this empire faithfully for generations. That record deserves protection — not scrutiny from an inquiry board.' },
    ],
  },

  // ── SCENE 5 ──────────────────────────────
  {
    act:      "ACT III — THE OFFER",
    progress: '5 / 7',
    title:    "The Empire's Promise",
    body: [
      "Ambassador Crevath arrives in Veyra's half-flooded port. His offer is sealed — but the letter reaches you before Fael opens it. Your intelligence network, at least, still functions.",
      "Maren offers: no tribute, full religious freedom, and immediate reconstruction funding worth more than Iliatania has sent in three years. In exchange: <strong>Veyra's harbor becomes a Marenic naval base</strong>. You have seventy-two hours. Savra Olan has already granted Crevath a private audience.",
    ],
    lore: [
      { g: 'P', text: 'The Marenic Empire governs colonies through appointed satraps, not governors — stronger central control but no colonial consultation. Maren can offer more because it has fewer constraints on its treasury.' },
      { g: 'G', text: 'The Meridian Sea\'s southern corridor — Veyra\'s position — controls access to three regional trade routes. Whoever holds the harbor holds the key to the region\'s maritime economy for the next century.' },
      { g: 'E', text: 'Without Veyra\'s harbor, Iliatanian trade vessels traveling between northern and southern colonies must reroute inland, adding 4-6 days of sailing time per voyage across hundreds of shipments annually.' },
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
      {
        letter: 'E',
        label:  'Brief Governor Fael directly on Crevath\'s intelligence-gathering activities — show him that Maren wants a harbor, not a people.',
        tip:    'Undercuts Maren without military escalation. Uses truth as the weapon.',
        consequence: 'Fael spends six hours reviewing the intelligence before responding. His reply is careful: "The empire has shown me that Maren wants a harbor, not a people. I will need something in return for turning him away." A door has opened. It will cost something to walk through it — but it is open.',
        changes: { foreignThreat: -8, colonyLoyalty: 8, councilSupport: 8, militaryReadiness: 3, publicTrust: 5, economicBalance: -5 },
      },
    ],
    advisors: [
      { name: 'Admiral Vath',       role: 'Fleet Commander',   icon: '⚓', grapes: 'G', dialogue: 'Crevath is not an ambassador — he is a surveyor. Every meeting he holds in Veyra is a map of our vulnerabilities being sent back to Maren. Stop the access or accept the consequences.' },
      { name: 'Min. Caeldris',      role: 'Finance Minister',  icon: '◈', grapes: 'E', dialogue: 'Whatever Iliatania counter-offers must be immediate and concrete. Governor Fael is pragmatic — he will choose whoever makes the better real promise, not the better speech. Substance, not sentiment.' },
      { name: 'High Priest Orryn',  role: 'Dominant Faith',    icon: '✦', grapes: 'R', dialogue: 'Formal religious protections for Veyra\'s communities undercuts Maren\'s strongest argument without costing us the harbor. It may be the least expensive strategic investment available to us right now.' },
    ],
  },

  // ── SCENE 6 ──────────────────────────────
  {
    act:      'ACT III — THE OFFER',
    progress: '6 / 7',
    title:    'Iron Water',
    body: [
      "Sixteen Marenic warships form a loose blockade across Veyra's harbor mouth. Trade vessels are turned back without violence — for now. The fishing fleet hasn't left port in eleven days. The harbor economy is dying by degrees.",
      "Admiral Vath says the choice is simple: <em>break the blockade by force or accept that Maren controls Veyra's lifeline.</em> The council is split between war and surrender. Your secret supply routes through the interior are still open — barely. Savra Olan is meeting with Crevath again.",
    ],
    lore: [
      { g: 'G', text: 'Iliatania\'s highland interior roads — built during the Colonization Period — can move goods between Aurelion and Veyra without passing through any harbor. They are slower, less efficient, and invisible to naval blockades.' },
      { g: 'E', text: 'Veyra\'s diversified economy includes timber, salt processing, olive oil, fishing, and harbor service fees. The blockade kills harbor revenue but does not destroy all sectors immediately — the interior routes buy time.' },
      { g: 'A', text: 'Iliatania\'s naval engineers built the watchtower signal-fire relay system enabling rapid coastal communication. Maren appears to have obtained intelligence about these routes through informants inside the colony.' },
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
      {
        letter: 'E',
        label:  'Close Iliatanian ports to Marenic merchants — impose economic pressure and signal that the blockade will cost Maren commercially, not just militarily.',
        tip:    'Economic warfare without naval confrontation. Leverages the empire\'s trade network.',
        consequence: 'Three Marenic merchant vessels are turned back from Aurelion\'s harbor within the week. Maren\'s trade council sends a formal protest. Within two weeks, Maren begins signaling willingness to negotiate blockade terms. It is not a victory — but it is leverage, and it costs no ships.',
        changes: { economicBalance: -8, foreignThreat: -12, councilSupport: 5, militaryReadiness: 5, colonyLoyalty: 3, publicTrust: 5 },
      },
    ],
    advisors: [
      { name: 'Admiral Vath',       role: 'Fleet Commander',   icon: '⚓', grapes: 'G', dialogue: 'Every day that blockade holds is a day Maren practices controlling our supply lines. I do not recommend patience. I recommend engagement before they grow comfortable in our waters.' },
      { name: 'Min. Caeldris',      role: 'Finance Minister',  icon: '◈', grapes: 'E', dialogue: 'The harbor generates more annual value than any fleet action we could afford. Think about what you are protecting before deciding how to protect it. Destroy the harbor and you win a battle and lose the war.' },
      { name: 'High Priest Orryn',  role: 'Dominant Faith',    icon: '✦', grapes: 'R', dialogue: 'Olan is meeting Crevath nightly. If the blockade continues, you will lose Veyra politically before you lose it militarily. The clock runs in Maren\'s favor, not ours.' },
    ],
  },

  // ── SCENE 7 (FINAL) ─────────────────────
  {
    act:      'ACT IV — THE SHAPE OF DOMINION',
    progress: '7 / 7',
    title:    'The Shape of Dominion',
    isFinal:  true,
    body: [
      "It has come to this. Maren's fleet holds outside Veyra's harbor. Governor Fael has not slept in three days. Savra Olan is preparing a statement. The council has given you one hour to present your recommendation to the emperor.",
      "Veyra's loyalty is fractured. The economy is strained. The dominant faith presses for order. The marginalized faith presses for recognition. The military wants engagement. And the harbor — <em>Veyra's harbor</em> — sits at the center of everything. This decision will be recorded. It will be judged.",
    ],
    lore: [
      { g: 'P', text: 'Iliatania has held its colonial system for 180 years by making loyalty appear inevitable. The moment one colony breaks the norm without consequence, others observe — and begin calculating.' },
      { g: 'S', text: 'Savra Olan\'s movement is not only about religion. It argues that talent and loyalty in the colonies are rewarded only when convenient for the empire — and withheld when they become threatening.' },
      { g: 'E', text: 'Military force creates compliance but generates resentment that compounds for decades. Reform reduces short-term revenue but may stabilize a system that otherwise requires constant garrison maintenance.' },
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
    advisors: [
      { name: 'Admiral Vath',       role: 'Fleet Commander',   icon: '⚓', grapes: 'G', dialogue: 'Whatever you decide — decide now. Delay is the one option that guarantees Maren wins without a fight. I can execute any of these orders. I cannot execute hesitation.' },
      { name: 'Min. Caeldris',      role: 'Finance Minister',  icon: '◈', grapes: 'E', dialogue: 'The empire\'s long-term financial survival requires a functioning harbor at Veyra. Everything else on this table is negotiable. The harbor is not. Keep that truth central to whatever you decide.' },
      { name: 'High Priest Orryn',  role: 'Dominant Faith',    icon: '✦', grapes: 'R', dialogue: 'History judges decisions by their results, not their intentions. The empire has endured for 180 years by being willing to do what is necessary. Whatever is necessary — be willing.' },
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

// ─── SCENE ART PANELS ────────────────────────
const SCENE_ARTS = [

  // 0 — The Storm's Legacy: watchtower, signal fire, Marenic ships on horizon
  `<div style="position:absolute;inset:0;background:linear-gradient(180deg,#06111e 0%,#0c1c30 52%,#091520 100%);">
    <div style="position:absolute;bottom:0;left:0;width:100%;height:44%;background:linear-gradient(0deg,#030c18 0%,#071422 70%,transparent 100%);"></div>
    <div class="cs-shimmer-layer" style="height:44%;opacity:0.15;"></div>
    <div style="position:absolute;bottom:44%;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(50,90,150,0.18),transparent);"></div>
    <svg style="position:absolute;bottom:44.5%;left:40%;width:7%;opacity:0.44;" viewBox="0 0 90 48" fill="none"><path d="M4 30 Q45 38 86 30 L80 44 Q45 50 10 44Z" fill="#060918"/><line x1="28" y1="30" x2="28" y2="6" stroke="#060918" stroke-width="2"/><line x1="55" y1="30" x2="55" y2="2" stroke="#060918" stroke-width="2"/><polygon points="28,8 46,16 28,28" fill="#0a1020"/><polygon points="55,4 76,14 55,28" fill="#0a1020"/><polygon points="28,8 44,12 28,17" fill="#560a0a" opacity="0.88"/></svg>
    <svg style="position:absolute;bottom:45%;left:51%;width:5%;opacity:0.3;" viewBox="0 0 80 42" fill="none"><path d="M3 26 Q40 34 77 26 L72 38 Q40 44 8 38Z" fill="#07091a"/><line x1="24" y1="26" x2="24" y2="5" stroke="#07091a" stroke-width="2"/><line x1="48" y1="26" x2="48" y2="2" stroke="#07091a" stroke-width="2"/><polygon points="24,7 40,14 24,24" fill="#090e1e"/><polygon points="48,4 65,12 48,24" fill="#090e1e"/></svg>
    <svg style="position:absolute;bottom:45.5%;left:60%;width:4%;opacity:0.18;" viewBox="0 0 70 36" fill="none"><path d="M2 22 Q35 30 68 22 L63 34 Q35 38 7 34Z" fill="#07091a"/><line x1="20" y1="22" x2="20" y2="4" stroke="#07091a" stroke-width="1.5"/><line x1="42" y1="22" x2="42" y2="2" stroke="#07091a" stroke-width="1.5"/><polygon points="20,6 33,12 20,20" fill="#0a1020"/><polygon points="42,4 57,10 42,20" fill="#0a1020"/></svg>
    <div style="position:absolute;bottom:42%;left:9%;width:4%;height:34%;background:#040810;"></div>
    <div style="position:absolute;bottom:74%;left:7.5%;width:7%;height:6%;background:#030710;border-radius:1px 1px 0 0;clip-path:polygon(0% 100%,50% 0%,100% 100%);"></div>
    <div style="position:absolute;bottom:79%;left:10.5%;width:2%;height:2%;background:radial-gradient(circle,#f08020 0%,#c04010 55%,transparent 72%);border-radius:50%;box-shadow:0 0 10px 6px rgba(240,120,28,0.52);animation:cs-pulse 1.8s ease-in-out infinite;"></div>
    <div style="position:absolute;bottom:42%;left:0;width:22%;height:3%;background:#030710;border-top:1px solid #0c1428;"></div>
    <div style="position:absolute;bottom:43%;left:3%;width:1.5%;height:5%;background:#04080e;"></div>
    <div style="position:absolute;bottom:43%;left:6.5%;width:1.5%;height:4%;background:#040810;"></div>
    <div style="position:absolute;bottom:42%;left:15%;width:1.5%;height:6%;background:#04080e;"></div>
    <div style="position:absolute;bottom:42%;left:18.5%;width:1.5%;height:5%;background:#040810;"></div>
  </div>`,

  // 1 — Accounting for Ruin: council chamber, torches, figures around table
  `<div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 70% at 50% 55%,#110e07 0%,#070508 52%,#030304 100%);">
    <div style="position:absolute;top:10%;left:6%;width:18%;height:35%;background:radial-gradient(ellipse at 0% 50%,rgba(205,130,25,0.12) 0%,transparent 65%);"></div>
    <div style="position:absolute;top:10%;right:6%;width:18%;height:35%;background:radial-gradient(ellipse at 100% 50%,rgba(205,130,25,0.10) 0%,transparent 65%);"></div>
    <div style="position:absolute;top:15%;left:9%;width:1.4%;height:9%;background:#1a1005;border-radius:1px;"></div>
    <div style="position:absolute;top:13%;left:8.7%;width:2%;height:3%;background:#160d04;border-radius:2px;"></div>
    <div style="position:absolute;top:11.5%;left:9%;width:1.7%;height:2%;background:#f09020;border-radius:50%;box-shadow:0 0 14px 8px rgba(225,140,20,0.38);animation:cs-pulse 2.1s ease-in-out infinite;"></div>
    <div style="position:absolute;top:15%;right:9%;width:1.4%;height:9%;background:#1a1005;border-radius:1px;"></div>
    <div style="position:absolute;top:13%;right:8.7%;width:2%;height:3%;background:#160d04;border-radius:2px;"></div>
    <div style="position:absolute;top:11.5%;right:9%;width:1.7%;height:2%;background:#f09020;border-radius:50%;box-shadow:0 0 14px 8px rgba(225,140,20,0.38);animation:cs-pulse 2.1s ease-in-out 0.45s infinite;"></div>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:28%;background:linear-gradient(0deg,#040404 0%,#080705 100%);"></div>
    <div style="position:absolute;bottom:26%;left:12%;width:76%;height:4.5%;background:#111006;border-top:1px solid #201c08;border-radius:2px;box-shadow:0 6px 18px rgba(0,0,0,0.85);"></div>
    <div style="position:absolute;bottom:22%;left:12%;width:76%;height:4%;background:#0e0d04;border-radius:0 0 2px 2px;"></div>
    <svg style="position:absolute;bottom:29%;left:15%;width:4%;height:16%;" viewBox="0 0 38 72" fill="none"><ellipse cx="19" cy="7.5" rx="6.5" ry="7" fill="#09080a"/><path d="M13 14 Q10 44 9 70 L29 70 Q28 44 25 14Z" fill="#0b090c"/></svg>
    <svg style="position:absolute;bottom:29%;left:27%;width:4%;height:16%;" viewBox="0 0 38 72" fill="none"><ellipse cx="19" cy="7.5" rx="6.5" ry="7" fill="#09080a"/><path d="M13 14 Q10 44 9 70 L29 70 Q28 44 25 14Z" fill="#0b090c"/></svg>
    <svg style="position:absolute;bottom:29%;left:40%;width:4%;height:17%;" viewBox="0 0 38 76" fill="none"><rect x="13" y="0" width="12" height="10" rx="1" fill="#09080a"/><ellipse cx="19" cy="15" rx="7" ry="7.5" fill="#09080a"/><path d="M12 22 Q9 50 8 74 L30 74 Q29 50 26 22Z" fill="#0b090c"/></svg>
    <svg style="position:absolute;bottom:29%;left:54%;width:4%;height:16%;" viewBox="0 0 38 72" fill="none"><ellipse cx="19" cy="7.5" rx="6.5" ry="7" fill="#09080a"/><path d="M13 14 Q10 44 9 70 L29 70 Q28 44 25 14Z" fill="#0b090c"/></svg>
    <svg style="position:absolute;bottom:29%;left:67%;width:4%;height:16%;" viewBox="0 0 38 72" fill="none"><ellipse cx="19" cy="7.5" rx="6.5" ry="7" fill="#09080a"/><path d="M13 14 Q10 44 9 70 L29 70 Q28 44 25 14Z" fill="#0b090c"/></svg>
    <div style="position:absolute;bottom:30%;left:36%;width:28%;height:2%;background:#1c1808;border-radius:1px;opacity:0.7;"></div>
  </div>`,

  // 2 — The Weight of One Ward: hospital, lanterns, beds, doctor
  `<div style="position:absolute;inset:0;background:linear-gradient(180deg,#060507 0%,#0a0809 52%,#060506 100%);">
    <div style="position:absolute;top:0;left:15%;width:70%;height:50%;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(175,108,18,0.09) 0%,transparent 65%);"></div>
    <div style="position:absolute;top:7%;left:21%;width:1.4%;height:2.5%;background:#1a1205;border-radius:2px 2px 4px 4px;"></div>
    <div style="position:absolute;top:4.5%;left:21.3%;width:0.8%;height:3%;background:radial-gradient(circle,#f0b030 0%,#d07010 55%,transparent 72%);border-radius:50%;box-shadow:0 0 12px 7px rgba(220,135,18,0.3);animation:cs-pulse 2.4s ease-in-out infinite;"></div>
    <div style="position:absolute;top:7%;left:49%;width:1.4%;height:2.5%;background:#1a1205;border-radius:2px 2px 4px 4px;"></div>
    <div style="position:absolute;top:4.5%;left:49.3%;width:0.8%;height:3%;background:radial-gradient(circle,#f0b030 0%,#d07010 55%,transparent 72%);border-radius:50%;box-shadow:0 0 12px 7px rgba(220,135,18,0.3);animation:cs-pulse 2.4s ease-in-out 0.7s infinite;"></div>
    <div style="position:absolute;top:7%;left:77%;width:1.4%;height:2.5%;background:#1a1205;border-radius:2px 2px 4px 4px;"></div>
    <div style="position:absolute;top:4.5%;left:77.3%;width:0.8%;height:3%;background:radial-gradient(circle,#f0b030 0%,#d07010 55%,transparent 72%);border-radius:50%;box-shadow:0 0 12px 7px rgba(220,135,18,0.3);animation:cs-pulse 2.4s ease-in-out 1.3s infinite;"></div>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:28%;background:linear-gradient(0deg,#050404 0%,#090807 100%);"></div>
    <div style="position:absolute;bottom:26%;left:3%;width:20%;height:5%;background:#0e0c08;border-radius:1px;border:1px solid #18140a;"></div>
    <div style="position:absolute;bottom:26%;left:26%;width:20%;height:5%;background:#0e0c08;border-radius:1px;border:1px solid #18140a;"></div>
    <div style="position:absolute;bottom:26%;left:50%;width:20%;height:5%;background:#0e0c08;border-radius:1px;border:1px solid #18140a;"></div>
    <div style="position:absolute;bottom:26%;left:73%;width:20%;height:5%;background:#0e0c08;border-radius:1px;border:1px solid #18140a;"></div>
    <div style="position:absolute;bottom:30%;left:4%;width:16%;height:2%;background:#0c0a07;border-radius:2px;opacity:0.75;"></div>
    <div style="position:absolute;bottom:30%;left:27%;width:16%;height:2%;background:#0c0a07;border-radius:2px;opacity:0.75;"></div>
    <div style="position:absolute;bottom:30%;left:51%;width:16%;height:2%;background:#0c0a07;border-radius:2px;opacity:0.75;"></div>
    <svg style="position:absolute;bottom:26%;left:93%;width:4%;height:20%;" viewBox="0 0 34 76" fill="none"><ellipse cx="17" cy="7" rx="6.5" ry="7" fill="#090a0d"/><path d="M10 13 Q7 42 6 74 L28 74 Q27 42 24 13Z" fill="#0b0d10"/><path d="M10 18 Q2 28 2 42" stroke="#090a0d" stroke-width="4" stroke-linecap="round"/><path d="M24 18 Q32 28 32 40" stroke="#090a0d" stroke-width="4" stroke-linecap="round"/></svg>
  </div>`,

  // 3 — The Weight of Prayers: two temple silhouettes, torches, crowd
  `<div style="position:absolute;inset:0;background:linear-gradient(180deg,#050810 0%,#080e1c 52%,#050a12 100%);">
    <div style="position:absolute;top:0;left:28%;width:44%;height:45%;background:radial-gradient(ellipse at 50% 0%,rgba(90,60,140,0.1) 0%,transparent 62%);"></div>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:22%;background:linear-gradient(0deg,#030508 0%,#060a12 100%);"></div>
    <div style="position:absolute;bottom:20%;left:6%;width:24%;height:48%;background:#060810;"></div>
    <div style="position:absolute;bottom:66%;left:4%;width:28%;height:8%;background:#060810;clip-path:polygon(0% 100%,50% 0%,100% 100%);"></div>
    <div style="position:absolute;bottom:20%;left:7.5%;width:1.5%;height:38%;background:#080c12;"></div>
    <div style="position:absolute;bottom:20%;left:12%;width:1.5%;height:38%;background:#080c12;"></div>
    <div style="position:absolute;bottom:20%;left:16%;width:1.5%;height:38%;background:#080c12;"></div>
    <div style="position:absolute;bottom:20%;left:20%;width:1.5%;height:38%;background:#080c12;"></div>
    <div style="position:absolute;bottom:73%;left:16.5%;width:1.5%;height:1.5%;background:radial-gradient(circle,#f09020 0%,#c04010 55%,transparent 72%);border-radius:50%;box-shadow:0 0 10px 6px rgba(240,128,20,0.46);animation:cs-pulse 2s ease-in-out infinite;"></div>
    <div style="position:absolute;bottom:20%;right:8%;width:15%;height:34%;background:#060710;"></div>
    <div style="position:absolute;bottom:52%;right:7%;width:17%;height:6%;background:#060710;clip-path:polygon(0% 100%,50% 0%,100% 100%);"></div>
    <div style="position:absolute;bottom:57%;right:14%;width:1%;height:1%;background:radial-gradient(circle,#e08018 0%,transparent 72%);border-radius:50%;box-shadow:0 0 6px 4px rgba(200,100,20,0.3);animation:cs-pulse 2.3s ease-in-out 0.5s infinite;"></div>
    <div style="position:absolute;bottom:19%;left:30%;width:40%;height:6%;background:#040608;clip-path:ellipse(50% 80% at 50% 100%);opacity:0.8;"></div>
    <div style="position:absolute;bottom:20%;left:32%;width:0.9%;height:11%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:20%;left:36%;width:0.9%;height:13%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:20%;left:40%;width:0.9%;height:10%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:20%;left:44%;width:0.9%;height:14%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:20%;left:48%;width:0.9%;height:11%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:20%;left:52%;width:0.9%;height:12%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:20%;left:56%;width:0.9%;height:9%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:20%;left:60%;width:0.9%;height:13%;background:#040608;border-radius:50% 50% 0 0;"></div>
    <div style="position:absolute;bottom:31%;left:50%;width:0.8%;height:0.8%;background:radial-gradient(circle,#f0a020 0%,transparent 72%);border-radius:50%;box-shadow:0 0 5px 3px rgba(225,138,18,0.32);animation:cs-pulse 2s ease-in-out 0.3s infinite;"></div>
    <div style="position:absolute;bottom:29%;left:42%;width:0.7%;height:0.7%;background:radial-gradient(circle,#e09018 0%,transparent 72%);border-radius:50%;box-shadow:0 0 4px 3px rgba(210,118,18,0.28);animation:cs-pulse 2.2s ease-in-out 0.9s infinite;"></div>
  </div>`,

  // 4 — The Empire's Promise: sunset harbor, emissary ship with white flag
  `<div style="position:absolute;inset:0;background:linear-gradient(190deg,#160808 0%,#3c1408 14%,#7a2a0a 28%,#b04015 42%,#c85020 52%,#a03810 62%,#3c1208 78%,#0a0608 100%);">
    <div style="position:absolute;bottom:38%;left:0;width:100%;height:14%;background:linear-gradient(0deg,rgba(175,78,14,0.18) 0%,transparent 100%);"></div>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:40%;background:linear-gradient(0deg,#060a10 0%,#0a1018 45%,#10182a 70%,#12203a 100%);"></div>
    <div class="cs-shimmer-layer cs-shimmer-warm" style="height:40%;opacity:0.45;"></div>
    <div style="position:absolute;bottom:38%;left:10%;width:64%;height:3.5%;background:#07090e;"></div>
    <div style="position:absolute;bottom:38%;left:16%;width:1.8%;height:7%;background:#06080c;"></div>
    <div style="position:absolute;bottom:38%;left:26%;width:1.8%;height:6%;background:#06080c;"></div>
    <div style="position:absolute;bottom:38%;left:36%;width:1.8%;height:8%;background:#060810;transform:rotate(-2deg);"></div>
    <div style="position:absolute;bottom:38%;left:50%;width:1.8%;height:7%;background:#06080c;"></div>
    <div style="position:absolute;bottom:38%;left:60%;width:1.8%;height:6%;background:#06080c;"></div>
    <svg style="position:absolute;bottom:39%;left:24%;width:20%;" viewBox="0 0 200 90" fill="none"><path d="M8 58 Q100 70 192 58 L182 82 Q100 92 18 82Z" fill="#060a10"/><line x1="60" y1="58" x2="60" y2="10" stroke="#060a10" stroke-width="3.5"/><line x1="115" y1="58" x2="115" y2="3" stroke="#060a10" stroke-width="3.5"/><polygon points="60,12 90,27 60,56" fill="#0a1020"/><polygon points="115,5 152,23 115,56" fill="#0a1020"/><polygon points="60,12 88,18 60,27" fill="#ddd8c8" opacity="0.85"/><line x1="182" y1="60" x2="208" y2="44" stroke="#060a10" stroke-width="2.5"/></svg>
    <div style="position:absolute;bottom:40%;left:62%;width:8%;height:16%;background:#07080c;opacity:0.6;"></div>
    <div style="position:absolute;bottom:40%;left:71%;width:6%;height:11%;background:#06070b;opacity:0.45;"></div>
    <div style="position:absolute;bottom:40%;left:78%;width:9%;height:14%;background:#07080d;opacity:0.38;"></div>
  </div>`,

  // 5 — Iron Water: blockade line, ships across harbor, cliff observer
  `<div style="position:absolute;inset:0;background:linear-gradient(190deg,#040710 0%,#07101e 28%,#0c1830 55%,#0e1c38 68%,#0a1422 100%);">
    <div style="position:absolute;bottom:40%;left:0;width:100%;height:8%;background:linear-gradient(0deg,rgba(38,56,100,0.14) 0%,transparent 100%);"></div>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:42%;background:linear-gradient(0deg,#030810 0%,#070e1c 48%,#0b1628 80%,#0e1c34 100%);"></div>
    <div class="cs-shimmer-layer" style="height:42%;opacity:0.2;"></div>
    <svg style="position:absolute;bottom:43%;left:2%;width:7%;opacity:0.48;" viewBox="0 0 88 50" fill="none"><path d="M3 30 Q44 40 85 30 L79 46 Q44 52 9 46Z" fill="#06091a"/><line x1="24" y1="30" x2="24" y2="5" stroke="#06091a" stroke-width="2.2"/><line x1="55" y1="30" x2="55" y2="2" stroke="#06091a" stroke-width="2.2"/><polygon points="24,7 42,16 24,28" fill="#090d1e"/><polygon points="55,4 76,14 55,28" fill="#090d1e"/></svg>
    <svg style="position:absolute;bottom:43.5%;left:13%;width:9%;opacity:0.62;" viewBox="0 0 105 56" fill="none"><path d="M4 34 Q52 44 101 34 L94 50 Q52 56 10 50Z" fill="#050810"/><line x1="30" y1="34" x2="30" y2="6" stroke="#050810" stroke-width="2.5"/><line x1="62" y1="34" x2="62" y2="2" stroke="#050810" stroke-width="2.5"/><polygon points="30,8 50,18 30,32" fill="#090e1c"/><polygon points="62,4 86,16 62,32" fill="#090e1c"/><polygon points="30,8 48,13 30,19" fill="#560a0a" opacity="0.9"/></svg>
    <svg style="position:absolute;bottom:43%;left:26%;width:13%;opacity:0.8;" viewBox="0 0 145 72" fill="none"><path d="M5 46 Q72 58 140 46 L130 66 Q72 76 15 66Z" fill="#050810"/><line x1="42" y1="46" x2="42" y2="8" stroke="#050810" stroke-width="3.2"/><line x1="86" y1="46" x2="86" y2="3" stroke="#050810" stroke-width="3.2"/><line x1="122" y1="44" x2="122" y2="15" stroke="#050810" stroke-width="2.8"/><polygon points="42,10 68,23 42,44" fill="#090e1c"/><polygon points="86,5 118,20 86,44" fill="#090e1c"/><polygon points="42,10 66,16 42,24" fill="#560a0a" opacity="0.9"/></svg>
    <svg style="position:absolute;bottom:43%;left:43%;width:11%;opacity:0.9;" viewBox="0 0 130 65" fill="none"><path d="M5 42 Q65 53 125 42 L116 60 Q65 68 14 60Z" fill="#050810"/><line x1="38" y1="42" x2="38" y2="7" stroke="#050810" stroke-width="3"/><line x1="78" y1="42" x2="78" y2="2" stroke="#050810" stroke-width="3"/><polygon points="38,9 62,21 38,40" fill="#090e1c"/><polygon points="78,4 108,18 78,40" fill="#090e1c"/><polygon points="38,9 60,14 38,21" fill="#560a0a" opacity="0.9"/></svg>
    <svg style="position:absolute;bottom:43.5%;left:58%;width:9%;opacity:0.68;" viewBox="0 0 105 56" fill="none"><path d="M4 34 Q52 44 101 34 L94 50 Q52 56 10 50Z" fill="#060a18"/><line x1="30" y1="34" x2="30" y2="6" stroke="#060a18" stroke-width="2.5"/><line x1="62" y1="34" x2="62" y2="2" stroke="#060a18" stroke-width="2.5"/><polygon points="30,8 50,18 30,32" fill="#0a0e1c"/><polygon points="62,4 86,16 62,32" fill="#0a0e1c"/></svg>
    <svg style="position:absolute;bottom:44%;left:71%;width:7%;opacity:0.5;" viewBox="0 0 88 50" fill="none"><path d="M3 30 Q44 40 85 30 L79 46 Q44 52 9 46Z" fill="#07091e"/><line x1="24" y1="30" x2="24" y2="5" stroke="#07091e" stroke-width="2"/><line x1="55" y1="30" x2="55" y2="2" stroke="#07091e" stroke-width="2"/><polygon points="24,7 42,16 24,28" fill="#0a0e20"/><polygon points="55,4 76,14 55,28" fill="#0a0e20"/></svg>
    <svg style="position:absolute;bottom:44.5%;left:81%;width:6%;opacity:0.32;" viewBox="0 0 78 44" fill="none"><path d="M2 26 Q39 34 76 26 L70 40 Q39 46 9 40Z" fill="#070a1e"/><line x1="22" y1="26" x2="22" y2="5" stroke="#070a1e" stroke-width="2"/><line x1="48" y1="26" x2="48" y2="2" stroke="#070a1e" stroke-width="2"/><polygon points="22,7 36,13 22,24" fill="#0b0f20"/><polygon points="48,4 65,11 48,24" fill="#0b0f20"/></svg>
    <div style="position:absolute;bottom:0;left:0;width:26%;height:65%;background:#030408;clip-path:polygon(0% 100%,0% 30%,9% 18%,17% 13%,22% 22%,26% 100%);"></div>
    <svg style="position:absolute;bottom:58%;left:12%;width:3%;height:18%;" viewBox="0 0 28 80" fill="none"><ellipse cx="14" cy="6.5" rx="6" ry="6.5" fill="#020308"/><path d="M8 12 Q5 42 4 78 L24 78 Q23 42 20 12Z" fill="#020408"/><path d="M8 17 Q0 26 0 40" stroke="#020308" stroke-width="3.5" stroke-linecap="round"/><path d="M20 17 Q28 26 28 36" stroke="#020308" stroke-width="3.5" stroke-linecap="round"/></svg>
  </div>`,

  // 6 — The Shape of Dominion: grand throne chamber, emperor, columns
  `<div style="position:absolute;inset:0;background:radial-gradient(ellipse 78% 65% at 50% 58%,#120e08 0%,#070508 52%,#030304 100%);">
    <div style="position:absolute;top:0;left:36%;width:28%;height:55%;background:radial-gradient(ellipse at 50% 0%,rgba(185,138,22,0.09) 0%,transparent 65%);"></div>
    <div style="position:absolute;bottom:0;left:4%;width:3%;height:80%;background:#0b0905;border-right:1px solid #141008;"></div>
    <div style="position:absolute;bottom:0;left:13%;width:3%;height:72%;background:#0b0905;border-right:1px solid #141008;"></div>
    <div style="position:absolute;bottom:0;left:80%;width:3%;height:72%;background:#0b0905;border-right:1px solid #141008;"></div>
    <div style="position:absolute;bottom:0;right:4%;width:3%;height:80%;background:#0b0905;border-right:1px solid #141008;"></div>
    <div style="position:absolute;bottom:78%;left:3%;width:5%;height:2%;background:#0f0c06;"></div>
    <div style="position:absolute;bottom:70%;left:12%;width:5%;height:2%;background:#0f0c06;"></div>
    <div style="position:absolute;bottom:70%;left:79%;width:5%;height:2%;background:#0f0c06;"></div>
    <div style="position:absolute;bottom:78%;right:3%;width:5%;height:2%;background:#0f0c06;"></div>
    <div style="position:absolute;bottom:22%;left:34%;width:32%;height:5%;background:#0f0c06;border-top:1px solid #1c1808;border-radius:1px;"></div>
    <div style="position:absolute;bottom:26%;left:36%;width:28%;height:4%;background:#120e08;border-top:1px solid #201a0a;"></div>
    <svg style="position:absolute;bottom:30%;left:42%;width:16%;height:30%;" viewBox="0 0 84 126" fill="none"><rect x="6" y="0" width="72" height="76" rx="2" fill="#0e0b07"/><rect x="0" y="68" width="84" height="6" rx="1" fill="#0c0907"/><polygon points="18,0 42,-12 66,0" fill="#110e08"/><ellipse cx="42" cy="46" rx="11" ry="12" fill="#08080a"/><path d="M31 57 Q26 84 24 124 L60 124 Q58 84 53 57Z" fill="#09090c"/><polygon points="33,35 42,26 51,35" fill="#c9a020" opacity="0.6"/></svg>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:22%;background:linear-gradient(0deg,#040403 0%,#080705 100%);"></div>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:22%;background:linear-gradient(90deg,transparent 24.8%,rgba(255,255,255,0.01) 25%,transparent 25.2%) 0 0/25% 100%;"></div>
    <div style="position:absolute;top:15%;left:20%;width:1.4%;height:9%;background:#1a1005;border-radius:1px;"></div>
    <div style="position:absolute;top:13%;left:19.8%;width:1.8%;height:2.5%;background:#f09020;border-radius:50%;box-shadow:0 0 14px 8px rgba(225,135,20,0.34);animation:cs-pulse 2s ease-in-out infinite;"></div>
    <div style="position:absolute;top:15%;right:20%;width:1.4%;height:9%;background:#1a1005;border-radius:1px;"></div>
    <div style="position:absolute;top:13%;right:19.8%;width:1.8%;height:2.5%;background:#f09020;border-radius:50%;box-shadow:0 0 14px 8px rgba(225,135,20,0.34);animation:cs-pulse 2s ease-in-out 0.5s infinite;"></div>
    <svg style="position:absolute;bottom:22%;left:22%;width:3.5%;height:22%;" viewBox="0 0 30 88" fill="none"><ellipse cx="15" cy="7" rx="6.5" ry="7" fill="#090808"/><path d="M9 13 Q6 46 5 86 L25 86 Q24 46 21 13Z" fill="#0b090a"/><path d="M9 19 Q1 28 1 42" stroke="#090808" stroke-width="4" stroke-linecap="round"/></svg>
    <svg style="position:absolute;bottom:22%;right:22%;width:3.5%;height:20%;" viewBox="0 0 30 80" fill="none"><ellipse cx="15" cy="7" rx="6.5" ry="7" fill="#090808"/><path d="M9 13 Q6 44 5 78 L25 78 Q24 44 21 13Z" fill="#0b090a"/><path d="M21 19 Q29 28 29 42" stroke="#090808" stroke-width="4" stroke-linecap="round"/></svg>
  </div>`,
];

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
  let currentGroup = null;
  STAT_DEFS.forEach(def => {
    if (def.grapes !== currentGroup) {
      currentGroup = def.grapes;
      const gHdr = document.createElement('div');
      gHdr.className = 'stat-group-header';
      gHdr.innerHTML = `<span class="grapes-badge gb-${def.grapes.toLowerCase()}">${def.grapes}</span><span class="stat-group-name">${def.grapesLabel}</span>`;
      list.appendChild(gHdr);
    }
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
    const itemEl = document.getElementById('stat-item-' + def.key);
    if (itemEl) { itemEl.classList.remove('flashing'); void itemEl.offsetWidth; itemEl.classList.add('flashing'); }
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

  card.style.opacity = '0';
  card.style.transform = 'translateY(10px)';

  setTimeout(() => {
    document.getElementById('scene-act').textContent   = scene.act;
    document.getElementById('scene-prog').textContent  = scene.progress;
    document.getElementById('scene-title').textContent = scene.title;
    document.getElementById('scene-body').innerHTML    = scene.body.map(p => `<p>${p}</p>`).join('');

    // Scene art panel
    const artPanel = document.getElementById('scene-art');
    artPanel.innerHTML = SCENE_ARTS[gameState.sceneIndex] || '';

    // Lore section
    const loreSection = document.getElementById('lore-section');
    const loreContent = document.getElementById('lore-content');
    const loreToggle  = document.getElementById('lore-toggle');
    if (scene.lore && scene.lore.length) {
      loreSection.classList.remove('hidden');
      loreContent.classList.add('hidden');
      loreToggle.classList.remove('open');
      loreToggle.innerHTML = '&#8853; Imperial Context';
      loreContent.innerHTML = scene.lore.map(item =>
        `<div class="lore-item"><span class="lore-badge grapes-badge gb-${item.g.toLowerCase()}">${item.g}</span><span>${item.text}</span></div>`
      ).join('');
    } else {
      loreSection.classList.add('hidden');
    }

    renderAdvisors(scene);

    document.getElementById('consequence').classList.add('hidden');
    document.getElementById('continue-btn').classList.add('hidden');

    renderChoices(scene);

    card.style.opacity   = '1';
    card.style.transform = 'translateY(0)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 180);
}

// ─── LORE TOGGLE ─────────────────────────────
function toggleLore() {
  const btn     = document.getElementById('lore-toggle');
  const content = document.getElementById('lore-content');
  if (!btn || !content) return;
  const isOpen = !content.classList.contains('hidden');
  if (isOpen) {
    content.classList.add('hidden');
    btn.classList.remove('open');
    btn.innerHTML = '&#8853; Imperial Context';
  } else {
    content.classList.remove('hidden');
    btn.classList.add('open');
    btn.innerHTML = '&#8854; Imperial Context';
  }
}

// ─── RENDER ADVISORS ─────────────────────────
function renderAdvisors(scene) {
  const section = document.getElementById('advisor-section');
  const row     = document.getElementById('advisor-row');
  if (!scene.advisors || !scene.advisors.length) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');
  row.innerHTML = '';
  scene.advisors.forEach(adv => {
    const card = document.createElement('div');
    card.className = 'advisor-card';
    card.innerHTML = `
      <span class="advisor-badge grapes-badge gb-${adv.grapes.toLowerCase()}">${adv.grapes}</span>
      <div class="advisor-portrait">${adv.icon}</div>
      <div class="advisor-name">${adv.name}</div>
      <div class="advisor-role">${adv.role}</div>
      <button class="advisor-consult-btn">Consult &#9660;</button>
      <div class="advisor-dialogue">"${adv.dialogue}"</div>
    `;
    card.addEventListener('click', () => card.classList.add('consulted'));
    row.appendChild(card);
  });
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
      <div style="position:absolute;inset:0;background:linear-gradient(185deg,#010208 0%,#020616 38%,#050c22 70%,#07102c 100%);"></div>
      <div id="cs-sf" style="position:absolute;top:0;left:0;width:1px;height:1px;"></div>
      <div style="position:absolute;top:6%;right:12%;width:3.5%;padding-top:3.5%;background:radial-gradient(circle at 35% 35%,#eee8d8,#d4cbb8);border-radius:50%;box-shadow:0 0 20px 10px rgba(215,205,175,0.25),0 0 55px 28px rgba(195,185,155,0.1);"></div>
      <div style="position:absolute;top:4%;right:10%;width:7%;padding-top:7%;border-radius:50%;border:1px solid rgba(210,200,170,0.07);box-shadow:inset 0 0 18px rgba(210,200,170,0.04);"></div>
      <div style="position:absolute;bottom:34%;left:22%;width:60%;height:11%;filter:blur(1px);opacity:0.4;">
        <div style="position:absolute;bottom:0;left:3%;width:2.2%;height:55%;background:#050812;"></div>
        <div style="position:absolute;bottom:0;left:8%;width:3.5%;height:35%;background:#040710;"></div>
        <div style="position:absolute;bottom:0;left:14%;width:2.5%;height:72%;background:#050913;"></div>
        <div style="position:absolute;bottom:0;left:20%;width:5%;height:42%;background:#04080f;"></div>
        <div style="position:absolute;bottom:0;left:28%;width:7%;height:58%;background:#050912;border-radius:2px 2px 0 0;"></div>
        <div style="position:absolute;bottom:0;left:37%;width:2.5%;height:75%;background:#040810;"></div>
        <div style="position:absolute;bottom:0;left:42%;width:4%;height:40%;background:#050911;"></div>
        <div style="position:absolute;bottom:0;left:49%;width:3%;height:62%;background:#050912;"></div>
        <div style="position:absolute;bottom:0;left:55%;width:5%;height:44%;background:#040810;"></div>
        <div style="position:absolute;bottom:0;left:63%;width:2.5%;height:68%;background:#050911;"></div>
        <div style="position:absolute;bottom:0;left:69%;width:4%;height:38%;background:#04080f;"></div>
        <div style="position:absolute;bottom:0;left:76%;width:3%;height:52%;background:#050912;"></div>
        <div style="position:absolute;bottom:0;left:83%;width:5%;height:45%;background:#04080f;"></div>
        <div style="position:absolute;top:16%;left:28.5%;width:3px;height:4px;background:#b08010;border-radius:1px;opacity:0.42;"></div>
        <div style="position:absolute;top:9%;left:37.5%;width:3px;height:4px;background:#c49018;border-radius:1px;opacity:0.38;"></div>
        <div style="position:absolute;top:24%;left:50%;width:3px;height:4px;background:#b08010;border-radius:1px;opacity:0.36;"></div>
      </div>
      <div style="position:absolute;bottom:34%;left:0;width:22%;height:16%;">
        <div style="position:absolute;bottom:0;left:10%;width:3%;height:74%;background:#050a16;"></div>
        <div style="position:absolute;bottom:0;left:17%;width:5%;height:52%;background:#040a12;"></div>
        <div style="position:absolute;bottom:0;left:25%;width:4%;height:90%;background:#050b17;"></div>
        <div style="position:absolute;bottom:0;left:33%;width:6%;height:58%;background:#040a13;"></div>
        <div style="position:absolute;top:10%;left:25.5%;width:4px;height:5px;background:#d09018;border-radius:1px;opacity:0.62;box-shadow:0 0 5px 2px rgba(210,144,24,0.3);"></div>
        <div style="position:absolute;top:28%;left:11%;width:4px;height:5px;background:#c08010;border-radius:1px;opacity:0.5;box-shadow:0 0 5px 2px rgba(192,128,16,0.25);"></div>
      </div>
      <div style="position:absolute;bottom:34%;right:0;width:20%;height:14%;">
        <div style="position:absolute;bottom:0;right:10%;width:3.5%;height:68%;background:#050a15;"></div>
        <div style="position:absolute;bottom:0;right:17%;width:4%;height:50%;background:#040910;"></div>
        <div style="position:absolute;bottom:0;right:24%;width:5%;height:84%;background:#050b16;"></div>
        <div style="position:absolute;bottom:0;right:32%;width:3%;height:44%;background:#040910;"></div>
        <div style="position:absolute;top:12%;right:24.5%;width:4px;height:5px;background:#d09018;border-radius:1px;opacity:0.56;box-shadow:0 0 5px 2px rgba(210,144,24,0.28);"></div>
      </div>
      <div style="position:absolute;bottom:34%;left:3.5%;width:2.5%;height:44%;background:linear-gradient(90deg,#04080e,#06091c,#04080e);border-radius:2px 2px 0 0;"></div>
      <div style="position:absolute;bottom:76%;left:3%;width:3.5%;height:5.5%;background:#050a16;border-radius:50% 50% 0 0;"></div>
      <div style="position:absolute;bottom:79%;left:3.6%;width:2.2%;height:2%;background:radial-gradient(circle,#f5e898,#dbb828);border-radius:50%;box-shadow:0 0 18px 9px rgba(240,225,100,0.44),0 0 40px 20px rgba(210,185,50,0.18);animation:cs-pulse 2.3s ease-in-out infinite;"></div>
      <div class="cs-beam-anim" style="position:absolute;bottom:80%;left:5.8%;width:40%;height:1.4%;background:linear-gradient(to right,rgba(240,225,100,0.12),transparent);transform-origin:left center;border-radius:0 50% 50% 0;"></div>
      <div style="position:absolute;bottom:19%;left:0;width:100%;height:16%;background:linear-gradient(0deg,#040810 0%,#060a1a 55%,#070c1e 100%);border-top:1px solid #0d1530;"></div>
      <div style="position:absolute;bottom:34%;left:26%;width:3.5%;height:4%;background:#040810;"></div>
      <div style="position:absolute;bottom:34%;left:31%;width:3.5%;height:4%;background:#050913;"></div>
      <div style="position:absolute;bottom:34%;left:36%;width:3.5%;height:4%;background:#040811;"></div>
      <div style="position:absolute;bottom:34%;left:41%;width:3.5%;height:4%;background:#050912;"></div>
      <div style="position:absolute;bottom:34%;left:46%;width:3.5%;height:4%;background:#040811;"></div>
      <div style="position:absolute;bottom:34%;left:51%;width:3.5%;height:4%;background:#050913;"></div>
      <div style="position:absolute;bottom:34%;left:56%;width:3.5%;height:4%;background:#040810;"></div>
      <div style="position:absolute;bottom:34%;left:61%;width:3.5%;height:4%;background:#050912;"></div>
      <div style="position:absolute;bottom:34%;left:66%;width:3.5%;height:4%;background:#040810;"></div>
      <div style="position:absolute;bottom:34%;left:71%;width:3.5%;height:4%;background:#050913;"></div>
      <div style="position:absolute;bottom:34%;left:76%;width:3.5%;height:4%;background:#040811;"></div>
      <div style="position:absolute;bottom:34%;left:81%;width:3.5%;height:4%;background:#050912;"></div>
      <div style="position:absolute;bottom:34%;left:86%;width:3.5%;height:4%;background:#040810;"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:19%;background:linear-gradient(0deg,#020508 0%,#040a1c 55%,#060f2a 100%);"></div>
      <div class="cs-shimmer-layer" style="height:19%;"></div>
      <div style="position:absolute;bottom:1%;right:9%;width:5%;height:16%;background:radial-gradient(ellipse 50% 100% at 50% 100%,rgba(210,200,170,0.1) 0%,transparent 65%);"></div>
      <svg style="position:absolute;bottom:19%;left:5%;width:9%;height:55%;animation:cs-breathe 5s ease-in-out infinite;" viewBox="0 0 90 210" fill="none">
        <defs>
          <linearGradient id="an-sk" x1="0.25" y1="0" x2="0.75" y2="1"><stop offset="0%" stop-color="#c0b8d8"/><stop offset="40%" stop-color="#908598"/><stop offset="100%" stop-color="#484058"/></linearGradient>
          <linearGradient id="an-arm" x1="0" y1="0" x2="1" y2="0.5"><stop offset="0%" stop-color="#1e2848"/><stop offset="100%" stop-color="#0e1630"/></linearGradient>
          <linearGradient id="an-hlm" x1="0.2" y1="0" x2="0.8" y2="1"><stop offset="0%" stop-color="#283554"/><stop offset="55%" stop-color="#18254a"/><stop offset="100%" stop-color="#0e1835"/></linearGradient>
          <radialGradient id="an-rim" cx="0.15" cy="0.25" r="0.75"><stop offset="0%" stop-color="rgba(195,210,250,0.3)"/><stop offset="100%" stop-color="rgba(195,210,250,0)"/></radialGradient>
        </defs>
        <ellipse cx="45" cy="207" rx="26" ry="5" fill="rgba(0,0,0,0.65)"/>
        <line x1="74" y1="4" x2="74" y2="207" stroke="#1a2438" stroke-width="2.8"/>
        <polygon points="70,4 78,4 74,0" fill="#283a54"/>
        <ellipse cx="34" cy="205" rx="13" ry="5.5" fill="#10101e"/>
        <ellipse cx="58" cy="205" rx="13" ry="5.5" fill="#0e0e1a"/>
        <rect x="26" y="145" width="17" height="62" rx="6" fill="#16203e"/>
        <rect x="50" y="145" width="17" height="62" rx="6" fill="#121c38"/>
        <rect x="27" y="165" width="15" height="9" rx="3" fill="#1e2c4e"/>
        <rect x="51" y="165" width="15" height="9" rx="3" fill="#1a2848"/>
        <path d="M18 76 Q14 145 16 205 L34 205 L34 145 L58 145 L58 205 L76 205 Q78 145 74 76 Z" fill="#16223c"/>
        <path d="M24 76 Q22 112 24 142 L45 142 L68 142 Q70 112 68 76 Q45 70 24 76 Z" fill="#1e2e50"/>
        <path d="M24 78 Q22 108 24 136" stroke="rgba(190,210,250,0.13)" stroke-width="3" fill="none"/>
        <line x1="45" y1="76" x2="45" y2="140" stroke="rgba(30,50,80,0.85)" stroke-width="2"/>
        <rect x="18" y="136" width="56" height="11" rx="2" fill="#141c32"/>
        <rect x="39" y="135" width="14" height="13" rx="2" fill="#c4a028"/>
        <path d="M24 78 Q6 105 4 155 Q18 150 24 136 Q20 112 26 84 Z" fill="#0e1832" opacity="0.92"/>
        <ellipse cx="23" cy="80" rx="11" ry="6.5" fill="#1e2e52"/>
        <ellipse cx="67" cy="80" rx="11" ry="6.5" fill="#1a2a48"/>
        <path d="M12 80 Q23 73 34 80" stroke="#c4a028" stroke-width="1.4" fill="none"/>
        <path d="M56 80 Q67 73 78 80" stroke="#c4a028" stroke-width="1.4" fill="none"/>
        <path d="M20 82 Q10 116 12 144 L24 142 Q24 114 28 86 Z" fill="url(#an-arm)"/>
        <path d="M70 82 Q80 116 78 144 L66 142 Q66 114 62 86 Z" fill="#121e38"/>
        <ellipse cx="76" cy="144" rx="7.5" ry="5.5" fill="url(#an-sk)"/>
        <ellipse cx="17" cy="144" rx="7.5" ry="5.5" fill="url(#an-sk)"/>
        <rect x="39" y="58" width="13" height="20" rx="5" fill="url(#an-sk)"/>
        <ellipse cx="45" cy="40" rx="21" ry="24" fill="url(#an-hlm)"/>
        <path d="M34 20 Q45 12 56 20 L52 16 Q45 10 38 16 Z" fill="#1a2848"/>
        <rect x="43" y="10" width="4" height="12" rx="2" fill="#c4a028"/>
        <rect x="43" y="28" width="4" height="24" rx="2" fill="#18263e"/>
        <path d="M25 36 Q23 56 25 68" stroke="#18263e" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M65 36 Q67 56 65 68" stroke="#18263e" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M24 38 Q45 30 66 38" stroke="#c4a028" stroke-width="1.3" fill="none"/>
        <ellipse cx="45" cy="48" rx="14" ry="16" fill="url(#an-sk)"/>
        <path d="M34 40 Q39 37 44 40" stroke="#2c2840" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <path d="M46 40 Q51 37 56 40" stroke="#2c2840" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <ellipse cx="39" cy="45" rx="4.5" ry="3.5" fill="#d8d0e8"/>
        <ellipse cx="51" cy="45" rx="4.5" ry="3.5" fill="#d8d0e8"/>
        <ellipse cx="39.5" cy="45" rx="2.6" ry="2.8" fill="#2a2840"/>
        <ellipse cx="51.5" cy="45" rx="2.6" ry="2.8" fill="#2a2840"/>
        <ellipse cx="40" cy="45" rx="1.3" ry="1.4" fill="#070610"/>
        <ellipse cx="52" cy="45" rx="1.3" ry="1.4" fill="#070610"/>
        <circle cx="41" cy="43.8" r="0.8" fill="rgba(255,255,255,0.7)"/>
        <circle cx="53" cy="43.8" r="0.8" fill="rgba(255,255,255,0.7)"/>
        <path d="M43 52 Q40 58 38 61 Q44 63 52 61 Q50 58 47 52 Z" fill="rgba(30,20,40,0.2)"/>
        <path d="M38 61 Q44 63 52 61" stroke="rgba(60,40,70,0.5)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M38 66 Q45 64 52 66" stroke="#6c5875" stroke-width="1.9" fill="none" stroke-linecap="round"/>
        <ellipse cx="45" cy="48" rx="14" ry="16" fill="url(#an-rim)" opacity="0.55"/>
        <path d="M24 34 Q22 54 26 68" stroke="rgba(195,210,250,0.18)" stroke-width="2.5" fill="none"/>
      </svg>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 92% 88% at 50% 48%,transparent 42%,rgba(1,2,8,0.72) 100%);pointer-events:none;"></div>`,

    'storm-hits': `
      <div style="position:absolute;inset:0;background:linear-gradient(185deg,#030108 0%,#0a0412 25%,#16071c 52%,#0c0410 80%,#060208 100%);"></div>
      <div style="position:absolute;top:0;left:0;width:100%;height:55%;background:radial-gradient(ellipse 150% 80% at 28% 0%,rgba(55,18,75,0.85) 0%,transparent 52%),radial-gradient(ellipse 100% 65% at 78% 8%,rgba(42,12,58,0.72) 0%,transparent 48%);"></div>
      <div class="cs-rain"></div>
      <div class="cs-rain" style="opacity:0.55;animation-delay:-0.28s;transform:rotate(4deg) scale(1.1);"></div>
      <div class="cs-lightning-overlay"></div>
      <svg style="position:absolute;top:4%;left:62%;width:5%;height:30%;opacity:0.68;" viewBox="0 0 40 125" fill="none"><polygon points="26,0 6,58 20,58 12,125 42,50 26,50" fill="rgba(200,200,255,0.6)"/></svg>
      <div style="position:absolute;bottom:28%;left:0;width:100%;height:18%;">
        <div style="position:absolute;bottom:0;left:5%;width:8%;height:62%;background:#06060c;"></div>
        <div style="position:absolute;bottom:0;left:7%;width:3%;height:88%;background:#050508;transform:rotate(-3deg);transform-origin:bottom left;"></div>
        <div style="position:absolute;bottom:0;left:18%;width:9%;height:52%;background:#060608;"></div>
        <div style="position:absolute;bottom:0;left:30%;width:7%;height:75%;background:#05050a;"></div>
        <div style="position:absolute;bottom:0;left:40%;width:12%;height:48%;background:#060608;border-radius:2px 2px 0 0;"></div>
        <div style="position:absolute;bottom:0;left:55%;width:8%;height:65%;background:#05050a;"></div>
        <div style="position:absolute;bottom:0;left:66%;width:5%;height:42%;background:#060608;"></div>
        <div style="position:absolute;bottom:0;left:75%;width:9%;height:56%;background:#05050a;transform:rotate(2deg);transform-origin:bottom right;"></div>
        <div style="position:absolute;bottom:0;left:86%;width:6%;height:70%;background:#050508;"></div>
      </div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:30%;background:linear-gradient(0deg,#050812 0%,#08101e 52%,#0c162a 80%,#10182e 100%);"></div>
      <div class="cs-wave-band-fast" style="position:absolute;bottom:27%;left:0;width:200%;height:6%;background:repeating-linear-gradient(90deg,transparent 0,transparent 40px,rgba(90,110,160,0.07) 42px,transparent 44px);"></div>
      <svg style="position:absolute;bottom:27%;left:20%;width:13%;height:54%;animation:cs-breathe 3.2s ease-in-out infinite;" viewBox="0 0 105 200" fill="none">
        <defs>
          <linearGradient id="st-sk" x1="0.25" y1="0" x2="0.75" y2="1"><stop offset="0%" stop-color="#a89070"/><stop offset="48%" stop-color="#887058"/><stop offset="100%" stop-color="#503828"/></linearGradient>
          <linearGradient id="st-dr" x1="0.2" y1="0" x2="0.8" y2="1"><stop offset="0%" stop-color="#3c3028"/><stop offset="100%" stop-color="#1e1a12"/></linearGradient>
          <radialGradient id="st-rim" cx="0.85" cy="0.2" r="0.65"><stop offset="0%" stop-color="rgba(200,180,255,0.2)"/><stop offset="100%" stop-color="rgba(200,180,255,0)"/></radialGradient>
        </defs>
        <ellipse cx="46" cy="197" rx="30" ry="5" fill="rgba(0,0,0,0.55)"/>
        <path d="M35 95 Q21 148 17 196 L55 196 L59 178 L67 196 L90 196 Q82 148 73 98 Z" fill="url(#st-dr)"/>
        <path d="M73 98 Q91 132 95 196 L90 196 Q82 148 73 98 Z" fill="#2e2820" opacity="0.75"/>
        <path d="M35 65 Q29 98 35 98 L73 98 Q79 98 73 65 Z" fill="#2c2618"/>
        <path d="M29 65 Q11 78 7 100 L19 106 Q23 88 35 74 Z" fill="#221e12" opacity="0.8"/>
        <path d="M35 68 Q17 88 9 112 L19 118 Q29 96 39 78 Z" fill="#26201a"/>
        <ellipse cx="14" cy="118" rx="8.5" ry="5.5" fill="url(#st-sk)" transform="rotate(-25 14 118)"/>
        <path d="M71 68 Q81 85 79 108 L69 104 Q71 86 63 74 Z" fill="#201a14"/>
        <ellipse cx="75" cy="112" rx="7.5" ry="5" fill="url(#st-sk)" transform="rotate(18 75 112)"/>
        <rect x="45" y="49" width="11" height="18" rx="5" fill="url(#st-sk)"/>
        <ellipse cx="53" cy="35" rx="17" ry="19" fill="url(#st-sk)"/>
        <path d="M36 20 Q53 8 69 16 Q79 22 81 34 Q75 26 66 22 Q53 14 37 22 Z" fill="#180e05"/>
        <path d="M37 22 Q23 14 13 20 Q19 27 13 36" stroke="#1a1006" stroke-width="7" stroke-linecap="round" fill="none"/>
        <path d="M39 20 Q29 12 21 18 Q26 26 19 34" stroke="#160d05" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M68 20 Q85 12 101 10 Q91 20 87 32" stroke="#1a1006" stroke-width="7" stroke-linecap="round" fill="none"/>
        <path d="M71 24 Q89 16 103 16 Q95 26 91 36" stroke="#160c04" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M65 18 Q81 8 97 6" stroke="#1a1006" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.85"/>
        <ellipse cx="36" cy="35" rx="4" ry="5.5" fill="#80603a"/>
        <path d="M43 24 Q50 19 57 22" stroke="#2a1408" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M58 22 Q64 19 69 24" stroke="#2a1408" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <ellipse cx="48" cy="31" rx="5.5" ry="5" fill="#d8c8a0"/>
        <ellipse cx="48.5" cy="31" rx="3.5" ry="4" fill="#3c2010"/>
        <ellipse cx="49" cy="31" rx="1.7" ry="2" fill="#060402"/>
        <circle cx="50.2" cy="29.5" r="1.1" fill="rgba(255,255,255,0.8)"/>
        <path d="M42.5 26.5 Q48 23 53.5 26.5" stroke="#2a1408" stroke-width="1.7" fill="none" stroke-linecap="round"/>
        <path d="M43 35.5 Q48 38 53 35.5" stroke="rgba(70,30,10,0.4)" stroke-width="1" fill="none" stroke-linecap="round"/>
        <ellipse cx="61" cy="31" rx="5.5" ry="5" fill="#d8c8a0"/>
        <ellipse cx="61.5" cy="31" rx="3.5" ry="4" fill="#3c2010"/>
        <ellipse cx="62" cy="31" rx="1.7" ry="2" fill="#060402"/>
        <circle cx="63.2" cy="29.5" r="1.1" fill="rgba(255,255,255,0.8)"/>
        <path d="M55.5 26.5 Q61 23 66.5 26.5" stroke="#2a1408" stroke-width="1.7" fill="none" stroke-linecap="round"/>
        <path d="M51 37 Q48 44 45 47 Q53 49 61 47 Q58 44 55 37 Z" fill="rgba(50,20,5,0.18)"/>
        <path d="M45 47 Q53 49 61 47" stroke="rgba(80,35,10,0.52)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M46 53 Q54 49 62 53 Q59 59 54 61 Q49 59 46 53 Z" fill="#882015"/>
        <path d="M48 55.5 L50 58 M53 54.5 L53 58 M57 55.5 L59 58" stroke="#ccc8b8" stroke-width="1.1" stroke-linecap="round"/>
        <path d="M46 53 Q54 49 62 53" stroke="rgba(0,0,0,0.25)" stroke-width="1" fill="none"/>
        <ellipse cx="53" cy="35" rx="17" ry="19" fill="url(#st-rim)" opacity="0.45"/>
        <ellipse cx="53" cy="35" rx="17" ry="19" fill="rgba(55,35,75,0.2)"/>
      </svg>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 90% 85% at 50% 45%,transparent 38%,rgba(3,1,6,0.78) 100%);pointer-events:none;"></div>`,

    'veyra-ruins': `
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,#1e1008 0%,#3c1c08 18%,#6e2c0a 34%,#a85e24 50%,#c87e32 62%,#a06026 72%,#3a1c08 85%,#0c0606 100%);"></div>
      <div style="position:absolute;top:35%;left:0;width:100%;height:20%;background:linear-gradient(180deg,transparent,rgba(180,100,30,0.07),transparent);"></div>
      <div style="position:absolute;bottom:34%;left:0;right:0;height:5%;background:linear-gradient(0deg,rgba(180,120,40,0.12) 0%,transparent 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:36%;background:linear-gradient(0deg,#060c14 0%,#0a1424 42%,#0d1a30 72%,#101e3a 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:36%;background:linear-gradient(0deg,transparent,rgba(130,70,15,0.07) 60%,rgba(160,80,20,0.05) 100%);"></div>
      <div class="cs-shimmer-layer cs-shimmer-warm" style="height:36%;opacity:0.55;"></div>
      <div style="position:absolute;bottom:34%;left:5%;width:10%;height:26%;background:#0a0c12;"></div>
      <div style="position:absolute;bottom:58%;left:6%;width:3.5%;height:10%;background:#090b11;"></div>
      <div style="position:absolute;bottom:50%;left:8%;width:5%;height:5%;background:#05070f;"></div>
      <div style="position:absolute;bottom:34%;left:20%;width:7%;height:34%;background:#090c13;"></div>
      <div style="position:absolute;bottom:50%;left:22%;width:0.8px;height:16%;background:#050810;transform:rotate(2.5deg);"></div>
      <div style="position:absolute;bottom:34%;left:32%;width:16%;height:9%;background:#0a0c12;border-radius:3px 3px 0 0;clip-path:polygon(0% 0%,38% 0%,38% 100%,62% 100%,62% 0%,100% 0%,100% 55%,62% 100%,38% 100%,0% 55%);"></div>
      <div style="position:absolute;bottom:34%;left:52%;width:8%;height:20%;background:#09090e;"></div>
      <div style="position:absolute;bottom:34%;left:64%;width:1.6%;height:15%;background:#080a10;"></div>
      <div style="position:absolute;bottom:34%;left:69%;width:1.6%;height:10%;background:#080a10;transform:rotate(5deg);"></div>
      <div style="position:absolute;bottom:34%;left:74%;width:1.6%;height:17%;background:#080a10;"></div>
      <div style="position:absolute;bottom:34%;left:82%;width:9%;height:14%;background:#0a0c14;opacity:0.7;"></div>
      <div style="position:absolute;bottom:34%;left:93%;width:6%;height:18%;background:#090b12;opacity:0.58;"></div>
      <svg style="position:absolute;bottom:34%;left:31%;width:12%;height:48%;animation:cs-breathe 6s ease-in-out infinite;" viewBox="0 0 105 185" fill="none">
        <defs>
          <linearGradient id="vr-sk" x1="0.8" y1="0" x2="0.2" y2="1"><stop offset="0%" stop-color="#c87840"/><stop offset="45%" stop-color="#a05828"/><stop offset="100%" stop-color="#5a2e12"/></linearGradient>
          <linearGradient id="vr-ct" x1="0" y1="0" x2="0.5" y2="1"><stop offset="0%" stop-color="#1e2640"/><stop offset="100%" stop-color="#0c1228"/></linearGradient>
          <radialGradient id="vr-dawn" cx="0.9" cy="0.4" r="0.7"><stop offset="0%" stop-color="rgba(220,140,60,0.35)"/><stop offset="100%" stop-color="rgba(220,140,60,0)"/></radialGradient>
        </defs>
        <ellipse cx="52" cy="183" rx="28" ry="5" fill="rgba(0,0,0,0.5)"/>
        <ellipse cx="32" cy="182" rx="13" ry="5" fill="#160e08"/>
        <ellipse cx="56" cy="182" rx="13" ry="5" fill="#120c06"/>
        <rect x="25" y="130" width="16" height="52" rx="6" fill="#16202c"/>
        <rect x="48" y="130" width="16" height="52" rx="6" fill="#121a24"/>
        <path d="M16 70 Q12 132 14 182 L32 182 L32 130 L56 130 L56 182 L74 182 Q76 132 72 70 Z" fill="url(#vr-ct)"/>
        <path d="M22 70 Q20 106 22 128 L52 128 L72 128 Q74 106 72 70 Q52 64 22 70 Z" fill="#202e48"/>
        <path d="M72 72 Q78 104 76 128" stroke="rgba(220,140,60,0.18)" stroke-width="3" fill="none"/>
        <rect x="14" y="122" width="60" height="10" rx="2" fill="#12182a"/>
        <path d="M22 72 Q4 100 2 148 Q16 144 22 128 Q18 106 24 78 Z" fill="#0e1828" opacity="0.9"/>
        <ellipse cx="20" cy="74" rx="12" ry="6.5" fill="#1a2840"/>
        <ellipse cx="68" cy="74" rx="12" ry="6.5" fill="#182440"/>
        <path d="M18 76 Q8 112 10 132 L22 130 Q22 110 26 80 Z" fill="#121e36"/>
        <path d="M70 76 Q80 112 78 132 L66 130 Q66 110 62 80 Z" fill="#0e1830"/>
        <ellipse cx="14" cy="134" rx="8" ry="5.5" fill="url(#vr-sk)"/>
        <ellipse cx="78" cy="134" rx="8" ry="5.5" fill="url(#vr-sk)"/>
        <rect x="43" y="53" width="13" height="19" rx="5" fill="url(#vr-sk)"/>
        <ellipse cx="52" cy="35" rx="17" ry="20" fill="url(#vr-sk)"/>
        <path d="M35 18 Q52 10 68 18 Q65 22 52 20 Q39 22 35 18 Z" fill="#2a1a0a"/>
        <path d="M35 20 Q28 26 28 35 Q28 24 34 20 Z" fill="#2a1a0a"/>
        <path d="M68 20 Q74 26 74 35 Q74 24 68 20 Z" fill="#221608"/>
        <path d="M35 22 Q30 30 30 40" stroke="#2a1a0a" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M68 22 Q72 30 72 40" stroke="#221608" stroke-width="5" stroke-linecap="round" fill="none"/>
        <ellipse cx="35" cy="36" rx="4" ry="5.5" fill="#8a5828"/>
        <path d="M40 27 Q46 24 52 27" stroke="#2c1808" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M53 27 Q58 24 63 27" stroke="#2c1808" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <ellipse cx="44" cy="34" rx="4.5" ry="3.5" fill="#c8a880"/>
        <ellipse cx="57" cy="34" rx="4.5" ry="3.5" fill="#c8a880"/>
        <ellipse cx="44.5" cy="34" rx="2.6" ry="2.8" fill="#3a2010"/>
        <ellipse cx="57.5" cy="34" rx="2.6" ry="2.8" fill="#3a2010"/>
        <ellipse cx="45" cy="34" rx="1.3" ry="1.4" fill="#0a0605"/>
        <ellipse cx="58" cy="34" rx="1.3" ry="1.4" fill="#0a0605"/>
        <circle cx="46" cy="32.8" r="0.9" fill="rgba(255,255,255,0.72)"/>
        <circle cx="59" cy="32.8" r="0.9" fill="rgba(255,255,255,0.72)"/>
        <path d="M50 41 Q47 47 44 50 Q52 52 60 50 Q57 47 54 41 Z" fill="rgba(80,30,8,0.2)"/>
        <path d="M44 50 Q52 52 60 50" stroke="rgba(100,45,12,0.5)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M44 57 Q52 55 60 57" stroke="#8a4820" stroke-width="2" fill="none" stroke-linecap="round"/>
        <ellipse cx="52" cy="35" rx="17" ry="20" fill="url(#vr-dawn)" opacity="0.6"/>
      </svg>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 94% 90% at 50% 50%,transparent 40%,rgba(4,2,2,0.65) 100%);pointer-events:none;"></div>`,

    'marenic-fleet': `
      <div style="position:absolute;inset:0;background:linear-gradient(185deg,#070c14 0%,#0d162a 28%,#12203e 58%,#101828 78%,#080e1c 100%);"></div>
      <div id="cs-sf" style="position:absolute;top:0;left:0;width:1px;height:1px;"></div>
      <div style="position:absolute;top:5%;left:10%;width:4%;padding-top:4%;background:radial-gradient(circle at 38% 38%,#d8d0c0,#b8b0a8);border-radius:50%;box-shadow:0 0 16px 8px rgba(210,200,170,0.2),0 0 45px 22px rgba(190,180,150,0.09);"></div>
      <div style="position:absolute;top:42%;left:0;width:100%;height:8%;background:linear-gradient(0deg,transparent,rgba(28,42,80,0.16),transparent);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:52%;background:linear-gradient(0deg,#04080e 0%,#08102a 42%,#0c1838 80%,#0e1c42 100%);"></div>
      <div class="cs-shimmer-layer" style="height:52%;opacity:0.32;"></div>
      <div class="cs-wave-band" style="position:absolute;bottom:49%;left:0;width:200%;height:6%;background:repeating-linear-gradient(90deg,transparent 0,transparent 42px,rgba(70,100,160,0.05) 44px,transparent 46px);"></div>
      <svg style="position:absolute;bottom:53%;left:4%;width:8%;opacity:0.4;" viewBox="0 0 120 68" fill="none"><path d="M5 44 Q60 53 115 44 L108 65 Q60 72 12 65 Z" fill="#070c18"/><line x1="36" y1="44" x2="36" y2="7" stroke="#070c18" stroke-width="2.5"/><line x1="70" y1="44" x2="70" y2="2" stroke="#070c18" stroke-width="2.5"/><polygon points="36,9 56,20 36,42" fill="#0c1430"/><polygon points="70,4 96,17 70,41" fill="#0c1430"/></svg>
      <svg style="position:absolute;bottom:53%;left:18%;width:10%;opacity:0.52;" viewBox="0 0 120 68" fill="none"><path d="M5 44 Q60 53 115 44 L108 65 Q60 72 12 65 Z" fill="#07090f"/><line x1="36" y1="44" x2="36" y2="7" stroke="#07090f" stroke-width="2.5"/><line x1="70" y1="44" x2="70" y2="2" stroke="#07090f" stroke-width="2.5"/><polygon points="36,9 56,20 36,42" fill="#0b1225"/><polygon points="70,4 96,17 70,41" fill="#0b1225"/></svg>
      <svg style="position:absolute;bottom:52%;left:32%;width:13%;opacity:0.68;" viewBox="0 0 140 78" fill="none"><path d="M5 50 Q70 60 135 50 L126 74 Q70 82 14 74 Z" fill="#060910"/><line x1="40" y1="50" x2="40" y2="9" stroke="#060910" stroke-width="3"/><line x1="80" y1="50" x2="80" y2="3" stroke="#060910" stroke-width="3"/><polygon points="40,11 62,24 40,48" fill="#0a1322"/><polygon points="80,5 110,20 80,47" fill="#0a1322"/></svg>
      <svg style="position:absolute;bottom:51%;left:50%;width:16%;opacity:0.82;" viewBox="0 0 170 88" fill="none"><path d="M6 56 Q85 68 164 56 L154 82 Q85 92 16 82 Z" fill="#050810"/><line x1="50" y1="56" x2="50" y2="10" stroke="#050810" stroke-width="3.5"/><line x1="98" y1="56" x2="98" y2="3" stroke="#050810" stroke-width="3.5"/><line x1="140" y1="54" x2="140" y2="17" stroke="#050810" stroke-width="3"/><polygon points="50,12 80,27 50,54" fill="#091020"/><polygon points="98,5 134,24 98,53" fill="#091020"/><polygon points="50,12 78,18 50,27" fill="#440a0a" opacity="0.95"/></svg>
      <svg style="position:absolute;bottom:44%;left:68%;width:24%;" viewBox="0 0 240 110" fill="none"><path d="M8 74 Q120 90 232 74 L220 104 Q120 114 20 104 Z" fill="#040810"/><line x1="72" y1="74" x2="72" y2="16" stroke="#040810" stroke-width="4"/><line x1="138" y1="74" x2="138" y2="5" stroke="#040810" stroke-width="4"/><line x1="195" y1="72" x2="195" y2="26" stroke="#040810" stroke-width="3.5"/><polygon points="72,18 112,36 72,70" fill="#09101e"/><polygon points="138,7 186,30 138,71" fill="#09101e"/><polygon points="72,18 110,24 72,34" fill="#560c0c" opacity="0.92"/></svg>
      <div style="position:absolute;bottom:0;left:0;width:22%;height:58%;background:#030408;clip-path:polygon(0% 100%,0% 35%,6% 25%,12% 20%,18% 30%,22% 100%);"></div>
      <svg style="position:absolute;bottom:44%;left:12%;width:9%;height:38%;animation:cs-breathe 5.5s ease-in-out infinite;" viewBox="0 0 80 155" fill="none">
        <defs>
          <linearGradient id="mf-sk" x1="0.75" y1="0" x2="0.25" y2="1"><stop offset="0%" stop-color="#9898c0"/><stop offset="45%" stop-color="#787098"/><stop offset="100%" stop-color="#363054"/></linearGradient>
          <linearGradient id="mf-cl" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0%" stop-color="#18243c"/><stop offset="100%" stop-color="#0a1028"/></linearGradient>
          <radialGradient id="mf-moon" cx="0.2" cy="0.3" r="0.65"><stop offset="0%" stop-color="rgba(190,210,255,0.28)"/><stop offset="100%" stop-color="rgba(190,210,255,0)"/></radialGradient>
        </defs>
        <ellipse cx="40" cy="152" rx="22" ry="4.5" fill="rgba(0,0,0,0.6)"/>
        <ellipse cx="28" cy="150" rx="11" ry="4.5" fill="#0e0e18"/>
        <ellipse cx="52" cy="150" rx="11" ry="4.5" fill="#0c0c14"/>
        <rect x="22" y="105" width="13" height="46" rx="5" fill="#12203a"/>
        <rect x="44" y="105" width="13" height="46" rx="5" fill="#0e1c34"/>
        <path d="M14 57 Q11 106 12 150 L28 150 L28 105 L52 105 L52 150 L68 150 Q69 106 66 57 Z" fill="url(#mf-cl)"/>
        <path d="M20 57 Q18 90 20 104 L40 104 L62 104 Q64 90 62 57 Q40 52 20 57 Z" fill="#1a2848"/>
        <path d="M62 59 Q67 88 66 102" stroke="rgba(190,210,255,0.15)" stroke-width="3" fill="none"/>
        <rect x="12" y="98" width="56" height="9" rx="2" fill="#101828"/>
        <path d="M20 59 Q2 80 0 115 Q12 112 20 100 Q16 82 22 64 Z" fill="#0c1830" opacity="0.92"/>
        <ellipse cx="18" cy="62" rx="10" ry="5.5" fill="#162240"/>
        <ellipse cx="62" cy="62" rx="10" ry="5.5" fill="#122040"/>
        <path d="M14 64 Q4 92 6 106 L18 104 Q18 82 22 68 Z" fill="#10203a"/>
        <path d="M64 64 Q74 92 72 106 L60 104 Q60 82 56 68 Z" fill="#0e1c36"/>
        <ellipse cx="10" cy="108" rx="7" ry="5" fill="url(#mf-sk)"/>
        <ellipse cx="70" cy="108" rx="7" ry="5" fill="url(#mf-sk)"/>
        <rect x="35" y="42" width="11" height="17" rx="4" fill="url(#mf-sk)"/>
        <ellipse cx="40" cy="28" rx="16" ry="18" fill="url(#mf-sk)"/>
        <path d="M24 14 Q40 6 56 14 Q52 18 40 16 Q28 18 24 14 Z" fill="#16100a"/>
        <path d="M24 15 Q20 23 20 30" stroke="#16100a" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M56 15 Q60 23 60 30" stroke="#14100a" stroke-width="5" stroke-linecap="round" fill="none"/>
        <ellipse cx="25" cy="29" rx="3.5" ry="5" fill="#706088"/>
        <path d="M30 20 Q36 16 42 19" stroke="#201a28" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <path d="M43 19 Q48 16 53 20" stroke="#201a28" stroke-width="2.1" stroke-linecap="round" fill="none"/>
        <ellipse cx="33" cy="27" rx="4.5" ry="3.5" fill="#c8c0d8"/>
        <ellipse cx="47" cy="27" rx="4.5" ry="3.5" fill="#c8c0d8"/>
        <ellipse cx="33.5" cy="27" rx="2.5" ry="2.7" fill="#24203c"/>
        <ellipse cx="47.5" cy="27" rx="2.5" ry="2.7" fill="#24203c"/>
        <ellipse cx="34" cy="27" rx="1.2" ry="1.3" fill="#060610"/>
        <ellipse cx="48" cy="27" rx="1.2" ry="1.3" fill="#060610"/>
        <circle cx="35" cy="26" r="0.8" fill="rgba(255,255,255,0.68)"/>
        <circle cx="49" cy="26" r="0.8" fill="rgba(255,255,255,0.68)"/>
        <path d="M38 33 Q35 39 32 42 Q40 44 48 42 Q45 39 42 33 Z" fill="rgba(30,20,45,0.2)"/>
        <path d="M32 42 Q40 44 48 42" stroke="rgba(55,35,70,0.5)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M33 47 Q40 45 47 47" stroke="#5a5068" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <ellipse cx="40" cy="28" rx="16" ry="18" fill="url(#mf-moon)" opacity="0.55"/>
      </svg>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 95% 90% at 52% 50%,transparent 42%,rgba(2,3,8,0.75) 100%);pointer-events:none;"></div>`,

    'council-chamber': `
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 70% at 50% 46%,#141008 0%,#07070a 50%,#030305 100%);"></div>
      <div style="position:absolute;top:10%;left:4%;width:24%;height:44%;background:radial-gradient(ellipse at 0% 50%,rgba(215,140,28,0.16) 0%,transparent 65%);"></div>
      <div style="position:absolute;top:10%;right:4%;width:24%;height:44%;background:radial-gradient(ellipse at 100% 50%,rgba(215,140,28,0.13) 0%,transparent 65%);"></div>
      <div style="position:absolute;top:0;left:24%;width:52%;height:35%;background:radial-gradient(ellipse at 50% 0%,rgba(170,120,24,0.1) 0%,transparent 55%);"></div>
      <div style="position:absolute;top:14%;left:7%;width:1.6%;height:10%;background:#1c1005;border-radius:1px;"></div>
      <div style="position:absolute;top:12%;left:6.5%;width:2.4%;height:3.8%;background:#180d04;border-radius:2px;"></div>
      <div style="position:absolute;top:10.5%;left:6.8%;width:2%;height:2.8%;background:#f09020;border-radius:50%;box-shadow:0 0 18px 10px rgba(230,150,20,0.42),0 0 36px 18px rgba(200,120,10,0.18);animation:cs-pulse 1.9s ease-in-out infinite;"></div>
      <div style="position:absolute;top:14%;right:7%;width:1.6%;height:10%;background:#1c1005;border-radius:1px;"></div>
      <div style="position:absolute;top:12%;right:6.5%;width:2.4%;height:3.8%;background:#180d04;border-radius:2px;"></div>
      <div style="position:absolute;top:10.5%;right:6.8%;width:2%;height:2.8%;background:#f09020;border-radius:50%;box-shadow:0 0 18px 10px rgba(230,150,20,0.42),0 0 36px 18px rgba(200,120,10,0.18);animation:cs-pulse 1.9s ease-in-out 0.45s infinite;"></div>
      <div style="position:absolute;top:14%;left:20%;width:1.6%;height:10%;background:#1c1005;border-radius:1px;"></div>
      <div style="position:absolute;top:12%;left:19.5%;width:2.4%;height:3.8%;background:#180d04;border-radius:2px;"></div>
      <div style="position:absolute;top:10.5%;left:19.8%;width:2%;height:2.8%;background:#d07818;border-radius:50%;box-shadow:0 0 16px 9px rgba(215,140,18,0.38),0 0 32px 16px rgba(185,110,10,0.15);animation:cs-pulse 2.3s ease-in-out 0.9s infinite;"></div>
      <div style="position:absolute;top:14%;right:20%;width:1.6%;height:10%;background:#1c1005;border-radius:1px;"></div>
      <div style="position:absolute;top:12%;right:19.5%;width:2.4%;height:3.8%;background:#180d04;border-radius:2px;"></div>
      <div style="position:absolute;top:10.5%;right:19.8%;width:2%;height:2.8%;background:#d07818;border-radius:50%;box-shadow:0 0 16px 9px rgba(215,140,18,0.38),0 0 32px 16px rgba(185,110,10,0.15);animation:cs-pulse 2.3s ease-in-out 1.3s infinite;"></div>
      <div style="position:absolute;top:4%;left:36%;width:28%;height:28%;background:radial-gradient(ellipse at 50% 100%,rgba(90,65,14,0.08) 0%,transparent 62%);border:1px solid rgba(90,65,14,0.09);border-radius:50%;"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:30%;overflow:hidden;">
        <div style="position:absolute;bottom:0;left:-10%;width:120%;height:150%;background:repeating-linear-gradient(90deg,rgba(18,14,6,0.7) 0,rgba(18,14,6,0.7) 1px,transparent 1px,transparent 90px),repeating-linear-gradient(0deg,rgba(18,14,6,0.7) 0,rgba(18,14,6,0.7) 1px,transparent 1px,transparent 90px),#0a0806;transform:perspective(480px) rotateX(64deg);transform-origin:50% 100%;"></div>
      </div>
      <div style="position:absolute;bottom:8%;left:8%;width:84%;height:46%;overflow:hidden;border-radius:30px 30px 0 0;">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,#1a1508 0%,#120e04 38%,#0c0a02 100%);transform:perspective(460px) rotateX(58deg);transform-origin:50% 100%;box-shadow:0 -8px 30px rgba(0,0,0,0.85);border-radius:30px 30px 0 0;"></div>
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,0),rgba(200,160,30,0.04) 60%,rgba(200,160,30,0.07) 100%);pointer-events:none;"></div>
      </div>
      <svg style="position:absolute;bottom:22%;left:8%;width:6%;height:20%;" viewBox="0 0 52 95" fill="none">
        <defs><linearGradient id="cc-sk1" x1="0.2" y1="0" x2="0.8" y2="1"><stop offset="0%" stop-color="#c88040"/><stop offset="45%" stop-color="#a06028"/><stop offset="100%" stop-color="#5a3010"/></linearGradient></defs>
        <ellipse cx="26" cy="93" rx="16" ry="4" fill="rgba(0,0,0,0.55)"/>
        <rect x="16" y="58" width="10" height="34" rx="4" fill="#12182a"/>
        <rect x="28" y="58" width="10" height="34" rx="4" fill="#0e1424"/>
        <path d="M10 28 Q8 60 10 92 L20 92 L20 58 L34 58 L34 92 L44 92 Q46 60 44 28 Z" fill="#161e34"/>
        <path d="M14 28 Q12 44 14 56 L26 56 L40 56 Q42 44 40 28 Q26 24 14 28 Z" fill="#1e2a48"/>
        <path d="M40 30 Q44 44 43 54" stroke="rgba(220,150,30,0.22)" stroke-width="2.5" fill="none"/>
        <ellipse cx="12" cy="58" rx="6" ry="4.5" fill="url(#cc-sk1)"/>
        <ellipse cx="40" cy="58" rx="6" ry="4.5" fill="url(#cc-sk1)"/>
        <rect x="22" y="19" width="8" height="11" rx="3" fill="url(#cc-sk1)"/>
        <ellipse cx="26" cy="12" rx="11" ry="12" fill="url(#cc-sk1)"/>
        <path d="M15 3 Q26 -2 37 3 Q34 7 26 5 Q18 7 15 3 Z" fill="#1c1008"/>
        <path d="M15 4 Q12 10 12 15" stroke="#1c1008" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M37 4 Q40 10 40 15" stroke="#181008" stroke-width="4" stroke-linecap="round" fill="none"/>
        <path d="M18 7 Q22 5 26 7" stroke="#2a1808" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        <path d="M26 7 Q30 5 34 7" stroke="#2a1808" stroke-width="1.7" stroke-linecap="round" fill="none"/>
        <ellipse cx="20" cy="11" rx="3.8" ry="3" fill="#d8c890"/>
        <ellipse cx="32" cy="11" rx="3.8" ry="3" fill="#d8c890"/>
        <ellipse cx="20.5" cy="11" rx="2.2" ry="2.4" fill="#3c2810"/>
        <ellipse cx="32.5" cy="11" rx="2.2" ry="2.4" fill="#3c2810"/>
        <ellipse cx="21" cy="11" rx="1.1" ry="1.2" fill="#080504"/>
        <ellipse cx="33" cy="11" rx="1.1" ry="1.2" fill="#080504"/>
        <circle cx="22" cy="10.2" r="0.7" fill="rgba(255,255,255,0.7)"/>
        <circle cx="34" cy="10.2" r="0.7" fill="rgba(255,255,255,0.7)"/>
        <path d="M37 14 Q34 18 30 21 Q26 23 22 21 Q18 18 15 14" fill="rgba(50,20,5,0.22)"/>
        <path d="M19 21 Q26 23 33 21" stroke="rgba(100,45,12,0.48)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M20 25 Q26 23 32 25" stroke="#8a4820" stroke-width="1.7" fill="none" stroke-linecap="round"/>
      </svg>
      <svg style="position:absolute;bottom:22%;right:6%;width:5.5%;height:18%;" viewBox="0 0 48 88" fill="none">
        <defs><linearGradient id="cc-sk2" x1="0.8" y1="0" x2="0.2" y2="1"><stop offset="0%" stop-color="#c07838"/><stop offset="45%" stop-color="#985820"/><stop offset="100%" stop-color="#542c0e"/></linearGradient></defs>
        <ellipse cx="24" cy="86" rx="14" ry="3.5" fill="rgba(0,0,0,0.5)"/>
        <rect x="14" y="54" width="9" height="31" rx="3.5" fill="#101828"/>
        <rect x="25" y="54" width="9" height="31" rx="3.5" fill="#0c1422"/>
        <path d="M8 26 Q6 56 8 84 L18 84 L18 54 L32 54 L32 84 L42 84 Q44 56 42 26 Z" fill="#141e34"/>
        <path d="M12 26 Q10 40 12 52 L24 52 L38 52 Q40 40 38 26 Q24 22 12 26 Z" fill="#1c2844"/>
        <rect x="8" y="46" width="34" height="8" rx="2" fill="#10182e"/>
        <ellipse cx="8" cy="54" rx="5.5" ry="4" fill="url(#cc-sk2)"/>
        <ellipse cx="38" cy="54" rx="5.5" ry="4" fill="url(#cc-sk2)"/>
        <rect x="20" y="18" width="7" height="10" rx="3" fill="url(#cc-sk2)"/>
        <ellipse cx="24" cy="11" rx="10" ry="11" fill="url(#cc-sk2)"/>
        <path d="M14 3 Q24 -2 34 3 Q31 7 24 5 Q17 7 14 3 Z" fill="#181008"/>
        <path d="M14 4 Q11 9 11 14" stroke="#181008" stroke-width="4" stroke-linecap="round" fill="none"/>
        <path d="M34 4 Q37 9 37 14" stroke="#141008" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M16 7 Q20 5 24 6" stroke="#281408" stroke-width="1.7" stroke-linecap="round" fill="none"/>
        <path d="M24 6 Q28 5 32 7" stroke="#281408" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <ellipse cx="18" cy="10" rx="3.5" ry="2.8" fill="#d4c888"/>
        <ellipse cx="30" cy="10" rx="3.5" ry="2.8" fill="#d4c888"/>
        <ellipse cx="18.5" cy="10" rx="2" ry="2.2" fill="#38240e"/>
        <ellipse cx="30.5" cy="10" rx="2" ry="2.2" fill="#38240e"/>
        <ellipse cx="19" cy="10" rx="1" ry="1.1" fill="#060403"/>
        <ellipse cx="31" cy="10" rx="1" ry="1.1" fill="#060403"/>
        <circle cx="20" cy="9.2" r="0.7" fill="rgba(255,255,255,0.68)"/>
        <circle cx="32" cy="9.2" r="0.7" fill="rgba(255,255,255,0.68)"/>
        <path d="M18 19 Q24 21 30 19" stroke="rgba(95,42,10,0.45)" stroke-width="1.1" fill="none" stroke-linecap="round"/>
        <path d="M19 22 Q24 20 29 22" stroke="#8a4620" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      </svg>
      <svg style="position:absolute;bottom:22%;left:26%;width:4.8%;height:16%;" viewBox="0 0 44 82" fill="none"><ellipse cx="22" cy="9" rx="9" ry="9.5" fill="#090806"/><path d="M14 18 Q10 56 9 80 L35 80 Q34 56 30 18 Z" fill="#0b0a07"/><path d="M15 26 Q6 34 5 48" stroke="#090806" stroke-width="4.5" stroke-linecap="round"/><path d="M29 26 Q38 34 39 48" stroke="#090806" stroke-width="4.5" stroke-linecap="round"/></svg>
      <svg style="position:absolute;bottom:22%;left:38%;width:4.5%;height:15%;" viewBox="0 0 42 78" fill="none"><ellipse cx="21" cy="8.5" rx="8.5" ry="9" fill="#080705"/><path d="M13 17 Q9 52 8 76 L34 76 Q33 52 29 17 Z" fill="#0a0906"/><path d="M13 24 Q1 36 1 50" stroke="#080705" stroke-width="4" stroke-linecap="round"/><path d="M29 24 Q41 36 41 50" stroke="#080705" stroke-width="4" stroke-linecap="round"/></svg>
      <svg style="position:absolute;bottom:22%;left:52%;width:5%;height:17%;" viewBox="0 0 46 84" fill="none"><ellipse cx="23" cy="9" rx="9.5" ry="10" fill="#090806"/><rect x="18" y="0" width="10" height="10" rx="2" fill="#0a0806"/><path d="M14 18 Q10 58 9 82 L37 82 Q36 58 32 18 Z" fill="#0c0a07"/><path d="M15 26 Q4 36 3 52" stroke="#090806" stroke-width="4.5" stroke-linecap="round"/><path d="M31 26 Q42 36 43 52" stroke="#090806" stroke-width="4.5" stroke-linecap="round"/></svg>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 90% 85% at 50% 46%,transparent 38%,rgba(2,1,2,0.8) 100%);pointer-events:none;"></div>`,

    'emissary-dock': `
      <div style="position:absolute;inset:0;background:linear-gradient(185deg,#060210 0%,#150508 14%,#380e06 28%,#6e1a08 42%,#a02c0e 55%,#6e1a08 65%,#380e06 78%,#080410 100%);"></div>
      <div style="position:absolute;bottom:36%;left:40%;width:20%;height:12%;background:radial-gradient(circle,rgba(230,130,20,0.88) 0%,rgba(205,90,12,0.52) 38%,transparent 68%);"></div>
      <div style="position:absolute;bottom:33%;left:0;width:100%;height:12%;background:linear-gradient(0deg,rgba(190,86,16,0.22) 0%,rgba(210,105,20,0.14) 52%,transparent 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:36%;background:linear-gradient(0deg,#060a10 0%,#0a1018 42%,#10182c 70%,#14203c 100%);"></div>
      <div style="position:absolute;bottom:0;left:26%;width:42%;height:36%;background:linear-gradient(0deg,transparent,rgba(130,55,12,0.1) 58%,rgba(190,86,16,0.07) 100%);"></div>
      <div class="cs-shimmer-layer cs-shimmer-warm" style="height:36%;opacity:0.52;"></div>
      <svg style="position:absolute;bottom:36%;left:2%;width:14%;height:10%;" viewBox="0 0 155 58" fill="none"><path d="M4 36 Q77 46 151 36 L142 54 Q77 61 13 54 Z" fill="#050609"/><line x1="50" y1="36" x2="50" y2="6" stroke="#050609" stroke-width="3"/><line x1="90" y1="36" x2="90" y2="1" stroke="#050609" stroke-width="3"/><polygon points="50,8 74,18 50,34" fill="#0a1020"/><polygon points="90,3 118,16 90,34" fill="#0a1020"/><polygon points="50,8 76,14 50,20" fill="#e8e0c0" opacity="0.78"/></svg>
      <div style="position:absolute;bottom:34%;left:16%;width:62%;height:4.2%;background:#07090e;"></div>
      <div style="position:absolute;bottom:34%;left:20%;width:2%;height:9%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:28%;width:2%;height:8%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:36%;width:2%;height:10%;background:#05070c;transform:rotate(-2deg);"></div>
      <div style="position:absolute;bottom:34%;left:50%;width:2%;height:9%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:58%;width:2%;height:8%;background:#05070c;"></div>
      <div style="position:absolute;bottom:34%;left:66%;width:2%;height:10%;background:#05070c;"></div>
      <div style="position:absolute;bottom:28%;left:41%;width:2.8%;height:7.5%;background:#07090e;transform:rotate(-44deg);transform-origin:top right;"></div>
      <div style="position:absolute;bottom:36%;left:63%;width:9%;height:15%;background:#07080c;opacity:0.8;"></div>
      <div style="position:absolute;bottom:36%;left:74%;width:6%;height:10%;background:#06070f;opacity:0.62;"></div>
      <div style="position:absolute;bottom:36%;left:82%;width:8%;height:13%;background:#07080c;opacity:0.5;"></div>
      <svg style="position:absolute;bottom:34%;left:38%;width:13%;height:50%;animation:cs-breathe 5s ease-in-out infinite;" viewBox="0 0 110 190" fill="none">
        <defs>
          <linearGradient id="ed-sk" x1="0.75" y1="0" x2="0.25" y2="1"><stop offset="0%" stop-color="#d87840"/><stop offset="45%" stop-color="#b05822"/><stop offset="100%" stop-color="#682e0e"/></linearGradient>
          <linearGradient id="ed-cl" x1="0" y1="0" x2="0.5" y2="1"><stop offset="0%" stop-color="#1c1430"/><stop offset="100%" stop-color="#0c0818"/></linearGradient>
          <radialGradient id="ed-sun" cx="0.85" cy="0.3" r="0.65"><stop offset="0%" stop-color="rgba(230,130,30,0.38)"/><stop offset="100%" stop-color="rgba(230,130,30,0)"/></radialGradient>
        </defs>
        <ellipse cx="55" cy="188" rx="28" ry="5" fill="rgba(0,0,0,0.55)"/>
        <ellipse cx="36" cy="186" rx="12" ry="5" fill="#14100c"/>
        <ellipse cx="60" cy="186" rx="12" ry="5" fill="#100c08"/>
        <rect x="28" y="138" width="16" height="50" rx="6" fill="#181028"/>
        <rect x="52" y="138" width="16" height="50" rx="6" fill="#140e22"/>
        <path d="M18 78 Q14 140 16 186 L34 186 L34 138 L58 138 L58 186 L76 186 Q78 140 74 78 Z" fill="url(#ed-cl)"/>
        <path d="M24 78 Q22 112 24 136 L55 136 L78 136 Q80 112 78 78 Q55 72 24 78 Z" fill="#24184a"/>
        <path d="M78 80 Q84 112 82 132" stroke="rgba(230,130,30,0.22)" stroke-width="3" fill="none"/>
        <path d="M24 80 Q22 110 24 128" stroke="rgba(255,255,255,0.05)" stroke-width="2.5" fill="none"/>
        <rect x="14" y="128" width="64" height="11" rx="2" fill="#16102e"/>
        <rect x="40" y="127" width="16" height="13" rx="2" fill="#c0940c"/>
        <path d="M24 80 Q6 105 4 155 Q18 150 24 134 Q20 112 26 86 Z" fill="#140e28" opacity="0.92"/>
        <ellipse cx="22" cy="82" rx="12" ry="6.5" fill="#201840"/>
        <ellipse cx="70" cy="82" rx="12" ry="6.5" fill="#1c1438"/>
        <path d="M10 82 Q22 75 34 82" stroke="#c0940c" stroke-width="1.5" fill="none"/>
        <path d="M58 82 Q70 75 82 82" stroke="#c0940c" stroke-width="1.5" fill="none"/>
        <path d="M20 84 Q10 116 12 136 L24 134 Q24 112 28 88 Z" fill="#161030"/>
        <path d="M72 84 Q82 116 80 136 L68 134 Q68 112 64 88 Z" fill="#12102c"/>
        <path d="M80 88 Q92 96 96 92" stroke="#1c1838" stroke-width="6" stroke-linecap="round"/>
        <ellipse cx="96" cy="93" rx="7.5" ry="5" fill="url(#ed-sk)"/>
        <rect x="90" y="90" width="14" height="22" rx="2.5" fill="#22180c" opacity="0.9"/>
        <rect x="92" y="96" width="10" height="1.5" rx="1" fill="#4a3818" opacity="0.8"/>
        <rect x="92" y="100" width="10" height="1.5" rx="1" fill="#4a3818" opacity="0.7"/>
        <rect x="92" y="104" width="8" height="1.5" rx="1" fill="#4a3818" opacity="0.6"/>
        <ellipse cx="16" cy="138" rx="7.5" ry="5" fill="url(#ed-sk)"/>
        <rect x="43" y="59" width="12" height="21" rx="5" fill="url(#ed-sk)"/>
        <ellipse cx="55" cy="42" rx="18" ry="20" fill="url(#ed-sk)"/>
        <path d="M37 26 Q55 16 73 26 Q69 30 55 28 Q41 30 37 26 Z" fill="#1a1008"/>
        <path d="M37 28 Q30 34 30 44" stroke="#1a1008" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M73 28 Q80 34 80 44" stroke="#181008" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M38 30 Q44 32 50 31" stroke="#241408" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="45" cy="38" rx="5" ry="3.8" fill="#d0c090"/>
        <ellipse cx="65" cy="38" rx="5" ry="3.8" fill="#d0c090"/>
        <ellipse cx="45.5" cy="38" rx="2.9" ry="3.2" fill="#3a2010"/>
        <ellipse cx="65.5" cy="38" rx="2.9" ry="3.2" fill="#3a2010"/>
        <ellipse cx="46" cy="38" rx="1.4" ry="1.6" fill="#080404"/>
        <ellipse cx="66" cy="38" rx="1.4" ry="1.6" fill="#080404"/>
        <circle cx="47" cy="36.5" r="0.9" fill="rgba(255,255,255,0.72)"/>
        <circle cx="67" cy="36.5" r="0.9" fill="rgba(255,255,255,0.72)"/>
        <ellipse cx="37" cy="43" rx="4" ry="5.5" fill="#a05828"/>
        <path d="M41 30 Q47 27 53 29" stroke="#2c1608" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <path d="M57 29 Q62 27 67 30" stroke="#2c1608" stroke-width="2.1" stroke-linecap="round" fill="none"/>
        <path d="M52 46 Q48 52 45 55 Q55 57 65 55 Q62 52 58 46 Z" fill="rgba(80,30,8,0.18)"/>
        <path d="M45 55 Q55 57 65 55" stroke="rgba(105,45,12,0.5)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M47 61 Q55 64 63 61" stroke="#c87850" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M48 63 Q55 65.5 62 63" stroke="rgba(0,0,0,0.12)" stroke-width="1" fill="none" stroke-linecap="round"/>
        <ellipse cx="55" cy="42" rx="18" ry="20" fill="url(#ed-sun)" opacity="0.6"/>
      </svg>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 92% 88% at 50% 50%,transparent 40%,rgba(2,1,4,0.72) 100%);pointer-events:none;"></div>`,

    'secret-meeting': `
      <div style="position:absolute;inset:0;background:#010104;"></div>
      <div style="position:absolute;top:24%;left:40%;width:20%;height:24%;background:radial-gradient(ellipse,rgba(232,175,30,0.95) 0%,rgba(208,140,20,0.6) 16%,rgba(170,100,12,0.24) 40%,rgba(110,62,6,0.08) 62%,transparent 78%);animation:cs-pulse 2.8s ease-in-out infinite;"></div>
      <div style="position:absolute;bottom:20%;left:26%;width:48%;height:22%;background:radial-gradient(ellipse at 50% 0%,rgba(150,98,16,0.14) 0%,transparent 68%);"></div>
      <div style="position:absolute;top:0;left:28%;width:44%;height:28%;background:radial-gradient(ellipse at 50% 100%,rgba(125,85,12,0.08) 0%,transparent 58%);"></div>
      <div style="position:absolute;top:0;left:0;width:10%;height:100%;background:linear-gradient(90deg,#010103,transparent);"></div>
      <div style="position:absolute;top:0;right:0;width:10%;height:100%;background:linear-gradient(270deg,#010103,transparent);"></div>
      <div style="position:absolute;top:0;left:0;right:0;height:12%;background:linear-gradient(180deg,#010104,transparent);"></div>
      <div style="position:absolute;top:24%;left:45.5%;width:9%;height:10%;background:#1e1408;border:1px solid #302008;border-radius:5px;box-shadow:0 3px 10px rgba(0,0,0,0.9);"></div>
      <div style="position:absolute;top:25.5%;left:48.5%;width:4%;height:5.5%;background:radial-gradient(circle,#fad848 0%,#eca025 52%,transparent 72%);border-radius:50% 50% 32% 32%;animation:cs-flicker 0.9s ease-in-out infinite;"></div>
      <div style="position:absolute;top:18%;left:50%;width:0.6%;height:8%;background:#100a04;"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:28%;background:linear-gradient(0deg,#020206 0%,#050408 100%);"></div>
      <div style="position:absolute;bottom:22%;left:28%;width:44%;height:4%;background:#100e08;border-top:1px solid #1c1810;"></div>
      <div style="position:absolute;bottom:18%;left:28%;width:44%;height:3.5%;background:#0c0a06;"></div>
      <div style="position:absolute;bottom:23.5%;left:45%;width:3%;height:4%;background:#0e0c08;border-radius:1px;"></div>
      <svg style="position:absolute;bottom:21%;left:8%;width:16%;height:48%;animation:cs-breathe 4.5s ease-in-out infinite;" viewBox="0 0 130 175" fill="none">
        <defs>
          <radialGradient id="sm-sk1" cx="0.6" cy="0.3" r="0.7"><stop offset="0%" stop-color="#d4904a"/><stop offset="45%" stop-color="#a86830"/><stop offset="100%" stop-color="#6a3818"/></radialGradient>
          <linearGradient id="sm-cl1" x1="0" y1="0" x2="0.5" y2="1"><stop offset="0%" stop-color="#1a2038"/><stop offset="100%" stop-color="#0a0e1c"/></linearGradient>
          <radialGradient id="sm-lntrn1" cx="0.55" cy="0.8" r="0.65"><stop offset="0%" stop-color="rgba(230,160,30,0.42)"/><stop offset="100%" stop-color="rgba(230,160,30,0)"/></radialGradient>
        </defs>
        <ellipse cx="64" cy="173" rx="30" ry="5" fill="rgba(0,0,0,0.55)"/>
        <rect x="38" y="130" width="14" height="42" rx="5" fill="#131a2c"/>
        <rect x="60" y="130" width="14" height="42" rx="5" fill="#0f1626"/>
        <path d="M22 72 Q18 132 20 172 L38 172 L38 130 L62 130 L62 172 L80 172 Q82 132 80 72 Z" fill="url(#sm-cl1)"/>
        <path d="M28 72 Q26 106 28 128 L50 128 L74 128 Q76 106 74 72 Q50 66 28 72 Z" fill="#1e2840"/>
        <path d="M74 74 Q80 106 78 124" stroke="rgba(220,155,30,0.2)" stroke-width="3" fill="none"/>
        <path d="M74 80 Q94 95 102 100" stroke="#1a2038" stroke-width="8" stroke-linecap="round"/>
        <ellipse cx="103" cy="104" rx="9" ry="6" fill="url(#sm-sk1)"/>
        <rect x="14" y="122" width="64" height="10" rx="2" fill="#10162a"/>
        <path d="M26 74 Q8 98 6 140 Q20 136 26 122 Q22 104 28 80 Z" fill="#0e1628" opacity="0.9"/>
        <ellipse cx="24" cy="76" rx="12" ry="6" fill="#182038"/>
        <ellipse cx="72" cy="76" rx="12" ry="6" fill="#14182e"/>
        <path d="M14 78 Q6 106 8 124 L20 122 Q20 104 24 82 Z" fill="#12203a"/>
        <ellipse cx="14" cy="126" rx="7" ry="5" fill="url(#sm-sk1)"/>
        <rect x="44" y="54" width="12" height="20" rx="5" fill="url(#sm-sk1)"/>
        <ellipse cx="52" cy="36" rx="18" ry="20" fill="url(#sm-sk1)"/>
        <path d="M34 19 Q52 10 70 19 Q66 24 52 22 Q38 24 34 19 Z" fill="#180e06"/>
        <path d="M34 21 Q28 28 28 36" stroke="#180e06" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M70 21 Q76 28 76 36" stroke="#160e06" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="34" cy="37" rx="4" ry="5.5" fill="#9a6030"/>
        <path d="M40 24 Q47 20 54 23" stroke="#2a1608" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <path d="M55 23 Q61 20 66 24" stroke="#2a1608" stroke-width="2.3" stroke-linecap="round" fill="none"/>
        <ellipse cx="44" cy="31" rx="5" ry="4" fill="#d8b880"/>
        <ellipse cx="60" cy="31" rx="5" ry="4" fill="#d8b880"/>
        <ellipse cx="44.5" cy="31" rx="2.8" ry="3.2" fill="#3c2010"/>
        <ellipse cx="60.5" cy="31" rx="2.8" ry="3.2" fill="#3c2010"/>
        <ellipse cx="45" cy="31" rx="1.4" ry="1.6" fill="#060404"/>
        <ellipse cx="61" cy="31" rx="1.4" ry="1.6" fill="#060404"/>
        <circle cx="46.2" cy="29.5" r="1" fill="rgba(255,255,255,0.72)"/>
        <circle cx="62.2" cy="29.5" r="1" fill="rgba(255,255,255,0.72)"/>
        <path d="M50 39 Q46 45 43 48 Q52 50 61 48 Q58 45 54 39 Z" fill="rgba(60,25,5,0.2)"/>
        <path d="M43 48 Q52 50 61 48" stroke="rgba(100,45,12,0.48)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M44 54 Q52 52 60 54" stroke="#a06030" stroke-width="1.9" fill="none" stroke-linecap="round"/>
        <ellipse cx="52" cy="36" rx="18" ry="20" fill="url(#sm-lntrn1)" opacity="0.52"/>
        <ellipse cx="52" cy="36" rx="18" ry="20" fill="rgba(5,3,8,0.25)"/>
      </svg>
      <svg style="position:absolute;bottom:21%;right:6%;width:14%;height:46%;animation:cs-breathe 5.2s ease-in-out 0.6s infinite;" viewBox="0 0 115 165" fill="none">
        <defs>
          <radialGradient id="sm-sk2" cx="0.45" cy="0.3" r="0.7"><stop offset="0%" stop-color="#c8804a"/><stop offset="45%" stop-color="#9c5c2e"/><stop offset="100%" stop-color="#5e2e12"/></radialGradient>
          <linearGradient id="sm-cl2" x1="0.5" y1="0" x2="0.1" y2="1"><stop offset="0%" stop-color="#2a1c38"/><stop offset="100%" stop-color="#14101e"/></linearGradient>
          <radialGradient id="sm-lntrn2" cx="0.45" cy="0.75" r="0.6"><stop offset="0%" stop-color="rgba(230,160,30,0.38)"/><stop offset="100%" stop-color="rgba(230,160,30,0)"/></radialGradient>
        </defs>
        <ellipse cx="57" cy="163" rx="28" ry="4.5" fill="rgba(0,0,0,0.5)"/>
        <rect x="36" y="122" width="13" height="40" rx="5" fill="#14101c"/>
        <rect x="56" y="122" width="13" height="40" rx="5" fill="#100e18"/>
        <path d="M20 66 Q16 124 18 162 L36 162 L36 122 L58 122 L58 162 L76 162 Q78 124 76 66 Z" fill="url(#sm-cl2)"/>
        <path d="M26 66 Q24 98 26 120 L48 120 L72 120 Q74 98 72 66 Q48 60 26 66 Z" fill="#32203a"/>
        <path d="M26 68 Q22 98 24 116" stroke="rgba(230,160,30,0.18)" stroke-width="3" fill="none"/>
        <rect x="16" y="114" width="60" height="10" rx="2" fill="#12101a"/>
        <path d="M72 68 Q90 90 96 104" stroke="#2a1c38" stroke-width="7" stroke-linecap="round"/>
        <ellipse cx="98" cy="108" rx="8" ry="5.5" fill="url(#sm-sk2)"/>
        <path d="M20 70 Q2 92 0 130 Q14 126 20 114 Q16 96 22 76 Z" fill="#1a1028" opacity="0.9"/>
        <ellipse cx="20" cy="72" rx="11" ry="6" fill="#241840"/>
        <ellipse cx="72" cy="72" rx="11" ry="6" fill="#20163c"/>
        <path d="M16 74 Q6 100 8 116 L20 114 Q20 96 24 78 Z" fill="#18163a"/>
        <ellipse cx="12" cy="118" rx="7" ry="5" fill="url(#sm-sk2)"/>
        <rect x="43" y="50" width="11" height="18" rx="4.5" fill="url(#sm-sk2)"/>
        <ellipse cx="50" cy="33" rx="17" ry="19" fill="url(#sm-sk2)"/>
        <path d="M33 18 Q50 10 67 18 Q63 22 50 20 Q37 22 33 18 Z" fill="#1c0e08"/>
        <path d="M33 20 Q27 27 27 34" stroke="#1c0e08" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M67 20 Q73 27 73 34" stroke="#180e08" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M33 20 Q24 18 16 22 Q22 25 17 30" stroke="#1c0e08" stroke-width="4" stroke-linecap="round" fill="none"/>
        <ellipse cx="67" cy="34" rx="4" ry="5.5" fill="#906030"/>
        <path d="M38 22 Q44 19 50 21" stroke="#2a1408" stroke-width="2.3" stroke-linecap="round" fill="none"/>
        <path d="M51 21 Q57 19 62 22" stroke="#2a1408" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <ellipse cx="42" cy="29" rx="5" ry="3.8" fill="#d4bc88"/>
        <ellipse cx="58" cy="29" rx="5" ry="3.8" fill="#d4bc88"/>
        <ellipse cx="42.5" cy="29" rx="2.8" ry="3.1" fill="#38200e"/>
        <ellipse cx="58.5" cy="29" rx="2.8" ry="3.1" fill="#38200e"/>
        <ellipse cx="43" cy="29" rx="1.4" ry="1.5" fill="#060404"/>
        <ellipse cx="59" cy="29" rx="1.4" ry="1.5" fill="#060404"/>
        <circle cx="44.2" cy="27.8" r="0.9" fill="rgba(255,255,255,0.7)"/>
        <circle cx="60.2" cy="27.8" r="0.9" fill="rgba(255,255,255,0.7)"/>
        <path d="M48 37 Q44 43 41 46 Q50 48 59 46 Q56 43 52 37 Z" fill="rgba(50,20,5,0.2)"/>
        <path d="M41 46 Q50 48 59 46" stroke="rgba(95,40,10,0.48)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M43 51 Q50 49 57 51" stroke="#984830" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <ellipse cx="50" cy="33" rx="17" ry="19" fill="url(#sm-lntrn2)" opacity="0.5"/>
      </svg>
      <div style="position:absolute;bottom:0;left:7%;width:22%;height:25%;background:linear-gradient(135deg,rgba(0,0,0,0.55) 0%,transparent 60%);transform:skewX(-18deg);"></div>
      <div style="position:absolute;bottom:0;right:7%;width:22%;height:25%;background:linear-gradient(225deg,rgba(0,0,0,0.55) 0%,transparent 60%);transform:skewX(18deg);"></div>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 85% 80% at 50% 46%,transparent 32%,rgba(1,1,4,0.88) 100%);pointer-events:none;"></div>`,

    'blockade-shore': `
      <div style="position:absolute;inset:0;background:linear-gradient(185deg,#030610 0%,#060b18 22%,#0a1430 48%,#0e1a3c 62%,#0a1228 78%,#060e1e 100%);"></div>
      <div id="cs-sf" style="position:absolute;top:0;left:0;width:1px;height:1px;opacity:0.45;"></div>
      <div style="position:absolute;top:5%;right:15%;width:3.2%;padding-top:3.2%;background:radial-gradient(circle at 38% 38%,#dcdad0,#c0b8b0);border-radius:50%;box-shadow:0 0 15px 7px rgba(208,200,175,0.2),0 0 40px 20px rgba(188,180,155,0.09);"></div>
      <div style="position:absolute;bottom:38%;right:0;width:48%;height:22%;background:radial-gradient(ellipse 80% 50% at 100% 50%,rgba(26,46,105,0.16) 0%,transparent 68%);"></div>
      <div style="position:absolute;bottom:36%;left:0;width:100%;height:10%;background:linear-gradient(0deg,rgba(38,58,105,0.12) 0%,transparent 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:100%;height:40%;background:linear-gradient(0deg,#030708 0%,#070c1c 46%,#0a1226 80%,#0c1630 100%);"></div>
      <div class="cs-shimmer-layer" style="height:40%;opacity:0.25;"></div>
      <div style="position:absolute;bottom:1%;right:12%;width:4.5%;height:28%;background:radial-gradient(ellipse 50% 100% at 50% 100%,rgba(200,192,168,0.09) 0%,transparent 65%);"></div>
      <div style="position:absolute;bottom:0;left:0;width:34%;height:65%;background:#020308;clip-path:polygon(0% 100%,0% 30%,8% 18%,16% 12%,22% 18%,28% 10%,34% 100%);"></div>
      <div style="position:absolute;bottom:38%;left:4%;width:24%;height:18%;background:linear-gradient(135deg,rgba(10,14,24,0.55) 0%,transparent 50%);"></div>
      <svg style="position:absolute;bottom:39%;left:20%;width:8%;opacity:0.58;" viewBox="0 0 105 58" fill="none"><path d="M3 36 Q52 46 102 36 L95 54 Q52 60 10 54 Z" fill="#06090e"/><line x1="28" y1="36" x2="28" y2="8" stroke="#06090e" stroke-width="2.5"/><line x1="60" y1="36" x2="60" y2="3" stroke="#06090e" stroke-width="2.5"/><polygon points="28,10 47,20 28,34" fill="#0a1020"/><polygon points="60,5 84,17 60,34" fill="#0a1020"/></svg>
      <svg style="position:absolute;bottom:39%;left:32%;width:9%;opacity:0.68;" viewBox="0 0 115 62" fill="none"><path d="M4 42 Q57 52 110 42 L103 59 Q57 66 11 59 Z" fill="#050810"/><line x1="32" y1="42" x2="32" y2="8" stroke="#050810" stroke-width="3"/><line x1="68" y1="42" x2="68" y2="3" stroke="#050810" stroke-width="3"/><polygon points="32,10 53,22 32,40" fill="#090e1c"/><polygon points="68,5 92,20 68,40" fill="#090e1c"/></svg>
      <svg style="position:absolute;bottom:38.5%;left:44%;width:14%;opacity:0.82;" viewBox="0 0 155 74" fill="none"><path d="M5 52 Q77 63 150 52 L140 70 Q77 78 15 70 Z" fill="#050810"/><line x1="46" y1="52" x2="46" y2="10" stroke="#050810" stroke-width="3.5"/><line x1="92" y1="52" x2="92" y2="3" stroke="#050810" stroke-width="3.5"/><line x1="130" y1="52" x2="130" y2="18" stroke="#050810" stroke-width="3"/><polygon points="46,12 72,26 46,50" fill="#090e1c"/><polygon points="92,5 124,22 92,50" fill="#090e1c"/><polygon points="46,12 72,18 46,26" fill="#440a0a" opacity="0.92"/></svg>
      <svg style="position:absolute;bottom:39%;left:61%;width:9%;opacity:0.65;" viewBox="0 0 115 62" fill="none"><path d="M4 42 Q57 52 110 42 L103 59 Q57 66 11 59 Z" fill="#050810"/><line x1="32" y1="42" x2="32" y2="8" stroke="#050810" stroke-width="3"/><line x1="68" y1="42" x2="68" y2="3" stroke="#050810" stroke-width="3"/><polygon points="32,10 53,22 32,40" fill="#090e1c"/><polygon points="68,5 92,20 68,40" fill="#090e1c"/></svg>
      <svg style="position:absolute;bottom:39.5%;left:73%;width:8%;opacity:0.5;" viewBox="0 0 105 58" fill="none"><path d="M3 36 Q52 46 102 36 L95 54 Q52 60 10 54 Z" fill="#06090e"/><line x1="28" y1="36" x2="28" y2="8" stroke="#06090e" stroke-width="2.5"/><line x1="60" y1="36" x2="60" y2="3" stroke="#06090e" stroke-width="2.5"/><polygon points="28,10 47,20 28,34" fill="#0a1020"/><polygon points="60,5 84,17 60,34" fill="#0a1020"/></svg>
      <svg style="position:absolute;bottom:40%;left:84%;width:7%;opacity:0.36;" viewBox="0 0 95 54" fill="none"><path d="M3 34 Q47 42 92 34 L86 50 Q47 56 9 50 Z" fill="#07090e"/><line x1="26" y1="34" x2="26" y2="8" stroke="#07090e" stroke-width="2"/><line x1="55" y1="34" x2="55" y2="3" stroke="#07090e" stroke-width="2"/><polygon points="26,10 42,18 26,32" fill="#0b1020"/><polygon points="55,5 74,15 55,32" fill="#0b1020"/></svg>
      <div style="position:absolute;bottom:37%;left:2%;width:30%;height:1.2%;background:#040710;"></div>
      <svg style="position:absolute;bottom:38%;left:11%;width:10%;height:40%;animation:cs-breathe 5.8s ease-in-out infinite;" viewBox="0 0 88 155" fill="none">
        <defs>
          <linearGradient id="bs-sk" x1="0.7" y1="0" x2="0.3" y2="1"><stop offset="0%" stop-color="#9898b8"/><stop offset="45%" stop-color="#707090"/><stop offset="100%" stop-color="#303050"/></linearGradient>
          <linearGradient id="bs-cl" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0%" stop-color="#242c1e"/><stop offset="100%" stop-color="#14180c"/></linearGradient>
          <radialGradient id="bs-moon" cx="0.75" cy="0.25" r="0.65"><stop offset="0%" stop-color="rgba(192,204,240,0.28)"/><stop offset="100%" stop-color="rgba(192,204,240,0)"/></radialGradient>
        </defs>
        <ellipse cx="44" cy="153" rx="26" ry="4.5" fill="rgba(0,0,0,0.6)"/>
        <ellipse cx="28" cy="151" rx="12" ry="5" fill="#10100c"/>
        <ellipse cx="54" cy="151" rx="12" ry="5" fill="#0c0c08"/>
        <rect x="22" y="110" width="14" height="42" rx="5" fill="#1e1c10"/>
        <rect x="46" y="110" width="14" height="42" rx="5" fill="#1a1810"/>
        <path d="M14 64 Q10 112 12 152 L28 152 L28 110 L52 110 L52 152 L68 152 Q70 112 66 64 Z" fill="url(#bs-cl)"/>
        <path d="M20 64 Q18 96 20 108 L44 108 L66 108 Q68 96 66 64 Q44 58 20 64 Z" fill="#2c2a1c"/>
        <path d="M20 66 Q18 94 20 106" stroke="rgba(192,204,240,0.12)" stroke-width="2.5" fill="none"/>
        <rect x="12" y="102" width="56" height="10" rx="2" fill="#181810"/>
        <path d="M14 66 Q0 88 -2 120 Q10 116 14 104 Q10 86 16 72 Z" fill="#181606" opacity="0.88"/>
        <ellipse cx="14" cy="68" rx="10" ry="5.5" fill="#22201a"/>
        <ellipse cx="62" cy="68" rx="10" ry="5.5" fill="#201e16"/>
        <path d="M10 70 Q2 96 4 108 L16 106 Q16 88 20 74 Z" fill="#1c1a14"/>
        <path d="M62 70 Q72 96 70 108 L58 106 Q58 88 54 74 Z" fill="#18160e"/>
        <ellipse cx="8" cy="110" rx="7" ry="5" fill="url(#bs-sk)"/>
        <ellipse cx="68" cy="110" rx="7" ry="5" fill="url(#bs-sk)"/>
        <rect x="38" y="48" width="11" height="18" rx="4.5" fill="url(#bs-sk)"/>
        <ellipse cx="44" cy="32" rx="16" ry="18" fill="url(#bs-sk)"/>
        <path d="M28 16 Q44 8 60 16 Q56 20 44 18 Q32 20 28 16 Z" fill="#18120a"/>
        <path d="M28 18 Q22 25 22 32" stroke="#18120a" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M60 18 Q66 25 66 32" stroke="#140e08" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M30 18 Q24 15 18 18" stroke="#18120a" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="60" cy="33" rx="3.5" ry="5" fill="#606074"/>
        <path d="M32 21 Q38 17 44 20" stroke="#201808" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <path d="M45 20 Q51 17 56 21" stroke="#201808" stroke-width="2.3" stroke-linecap="round" fill="none"/>
        <path d="M30 24 Q27 26 26 30 Q24 34 26 36" stroke="#201808" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        <ellipse cx="37" cy="27" rx="4.5" ry="3.5" fill="#c0b8cc"/>
        <ellipse cx="51" cy="27" rx="4.5" ry="3.5" fill="#c0b8cc"/>
        <ellipse cx="37.5" cy="27" rx="2.6" ry="2.8" fill="#22203a"/>
        <ellipse cx="51.5" cy="27" rx="2.6" ry="2.8" fill="#22203a"/>
        <ellipse cx="38" cy="27" rx="1.3" ry="1.4" fill="#060610"/>
        <ellipse cx="52" cy="27" rx="1.3" ry="1.4" fill="#060610"/>
        <circle cx="39" cy="25.8" r="0.8" fill="rgba(255,255,255,0.68)"/>
        <circle cx="53" cy="25.8" r="0.8" fill="rgba(255,255,255,0.68)"/>
        <path d="M26 30 Q30 28 33 32 Q30 36 26 36 Z" fill="rgba(40,35,60,0.5)"/>
        <path d="M41 34 Q38 40 34 43 Q44 45 54 43 Q50 40 47 34 Z" fill="rgba(30,20,45,0.2)"/>
        <path d="M34 43 Q44 45 54 43" stroke="rgba(55,40,70,0.48)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M36 48 Q44 46 52 48" stroke="#5a5570" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <ellipse cx="44" cy="32" rx="16" ry="18" fill="url(#bs-moon)" opacity="0.52"/>
      </svg>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 95% 90% at 50% 50%,transparent 42%,rgba(2,3,8,0.78) 100%);pointer-events:none;"></div>`,

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

// ─── CUTSCENE PARALLAX ───────────────────────
function csParallax(e) {
  if (!csState.active) return;
  const art = document.getElementById('cs-art');
  if (!art || art.classList.contains('cs-fading') || art.classList.contains('cs-entering')) return;
  const rx = (e.clientX / window.innerWidth  - 0.5);
  const ry = (e.clientY / window.innerHeight - 0.5);
  art.style.transform = `translate(${rx * -9}px, ${ry * -4}px)`;
}

// ─── CUTSCENE ART ENHANCEMENT ────────────────
function csEnhanceArt(sceneId, artEl) {
  // Brightness reveal entrance
  artEl.classList.remove('cs-entering');
  void artEl.offsetWidth;
  artEl.classList.add('cs-entering');
  setTimeout(() => artEl.classList.remove('cs-entering'), 950);

  // Atmospheric fog for naval/night scenes
  if (['aurelion-night', 'marenic-fleet', 'blockade-shore'].includes(sceneId)) {
    const f1 = document.createElement('div');
    f1.className = 'cs-fog-layer';
    artEl.appendChild(f1);
    const f2 = document.createElement('div');
    f2.className = 'cs-fog-layer cs-fog-layer-2';
    artEl.appendChild(f2);
  }

  // Rising embers for fire / ruin scenes
  if (['veyra-ruins', 'emissary-dock'].includes(sceneId)) {
    for (let i = 0; i < 16; i++) {
      const em = document.createElement('div');
      em.className = 'cs-ember';
      const xDrift = (Math.random() - 0.5) * 52;
      em.style.cssText = [
        `left:${6 + Math.random() * 78}%`,
        `bottom:${26 + Math.random() * 44}%`,
        `width:${1.5 + Math.random() * 3}px`,
        `height:${1.5 + Math.random() * 3}px`,
        `--dur:${1.3 + Math.random() * 1.9}s`,
        `--delay:${Math.random() * 2.8}s`,
        `--x:${xDrift}px`,
      ].join(';');
      artEl.appendChild(em);
    }
  }

  // Ambient warm glow pulse for interior torch scenes
  if (['council-chamber', 'secret-meeting'].includes(sceneId)) {
    const amb = document.createElement('div');
    amb.className = 'cs-ambient-pulse';
    artEl.appendChild(amb);
  }

  // Ship rocking for naval scenes
  if (['marenic-fleet', 'blockade-shore'].includes(sceneId)) {
    artEl.querySelectorAll('svg').forEach((svg, i) => {
      svg.style.animation = `ship-drift ${3.2 + i * 0.55}s ease-in-out ${i * 0.3}s infinite`;
      svg.style.transformOrigin = 'center 90%';
    });
  }
}

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
  document.addEventListener('mousemove', csParallax);

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
  art.style.transform = '';           // reset parallax position
  art.style.transition = 'none';
  art.classList.add('cs-fading');

  csDots(panels.length, idx);

  setTimeout(() => {
    art.innerHTML = CS_SCENE(panel.scene);

    // Starfield for night scenes
    const sf = art.querySelector('#cs-sf');
    if (sf) {
      const stars = [];
      for (let i = 0; i < 85; i++) {
        const x   = Math.random() * window.innerWidth;
        const y   = Math.random() * (window.innerHeight * 0.46);
        const op  = Math.random() > 0.6 ? 0.92 : 0.52;
        const sz  = Math.random() > 0.85 ? 2 : 1;
        const tw  = (0.8 + Math.random() * 2.4).toFixed(1);
        stars.push(`${Math.round(x)}px ${Math.round(y)}px 0 ${sz}px rgba(255,255,255,${op})`);
      }
      sf.style.cssText += ';position:absolute;width:1px;height:1px;box-shadow:' + stars.join(',') +
        ';animation:star-twinkle ' + (2.5 + Math.random()) + 's ease-in-out infinite';
    }

    art.classList.remove('cs-fading');
    void art.offsetWidth;
    art.style.transition = '';         // restore transition for parallax

    // Apply atmosphere effects + entrance animation
    csEnhanceArt(panel.scene, art);

    document.getElementById('cs-location').textContent  = panel.location;
    document.getElementById('cs-narration').textContent = '';

    csTypeText(panel.text, 26, () => {
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
  const art = document.getElementById('cs-art');
  art.style.transform = '';
  art.removeEventListener('click', handleCSClick);
  document.removeEventListener('mousemove', csParallax);
  document.getElementById('cutscene').classList.add('hidden');
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
