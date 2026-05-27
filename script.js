/* ============================================================
   VOICES OF ILIATANIA — Two Lives Edition
   ============================================================ */

// ─── SCENE ART ───────────────────────────────────────────────
const SCENE_ART = {

'council': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#08050f 0%,#12091e 55%,#1a0f10 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="210" width="600" height="110" fill="#0d0916"/>
    <rect x="60" y="60" width="18" height="155" fill="#1e1630" rx="2"/><rect x="60" y="55" width="22" height="10" fill="#2a2040" rx="1"/>
    <rect x="522" y="60" width="18" height="155" fill="#1e1630" rx="2"/><rect x="518" y="55" width="22" height="10" fill="#2a2040" rx="1"/>
    <rect x="130" y="80" width="14" height="135" fill="#1a1328" rx="2"/><rect x="456" y="80" width="14" height="135" fill="#1a1328" rx="2"/>
    <path d="M180 215 Q300 80 420 215 Z" fill="none" stroke="#2a1f40" stroke-width="2"/>
    <rect x="180" y="180" width="240" height="36" fill="#130e22"/>
    <circle cx="300" cy="135" r="38" fill="none" stroke="#2a1f40" stroke-width="1.5"/>
    <polygon points="300,100 308,127 337,127 314,144 322,171 300,154 278,171 286,144 263,127 292,127" fill="none" stroke="#3a2f50" stroke-width="1"/>
    <rect x="88" y="100" width="6" height="22" fill="#2a1f30" rx="1"/>
    <ellipse cx="91" cy="98" rx="5" ry="7" fill="#c06020" opacity="0.9"><animate attributeName="opacity" values="0.9;0.6;0.85;0.5;0.9" dur="1.8s" repeatCount="indefinite"/></ellipse>
    <rect x="506" y="100" width="6" height="22" fill="#2a1f30" rx="1"/>
    <ellipse cx="509" cy="98" rx="5" ry="7" fill="#c06020" opacity="0.9"><animate attributeName="opacity" values="0.7;0.95;0.5;0.9;0.7" dur="2.1s" repeatCount="indefinite"/></ellipse>
    <radialGradient id="tg1" cx="50%" cy="50%"><stop offset="0%" stop-color="#c06020" stop-opacity="0.18"/><stop offset="100%" stop-color="#c06020" stop-opacity="0"/></radialGradient>
    <ellipse cx="91" cy="115" rx="40" ry="30" fill="url(#tg1)"/><ellipse cx="509" cy="115" rx="40" ry="30" fill="url(#tg1)"/>
    <ellipse cx="300" cy="222" rx="100" ry="18" fill="#130e1c" stroke="#241a34" stroke-width="1.5"/>
    <ellipse cx="210" cy="205" rx="10" ry="14" fill="#0e0b18"/><rect x="202" y="204" width="16" height="20" fill="#0e0b18" rx="3"/>
    <ellipse cx="300" cy="202" rx="11" ry="15" fill="#0d0a16"/><rect x="292" y="200" width="18" height="22" fill="#0d0a16" rx="3"/>
    <ellipse cx="390" cy="205" rx="10" ry="14" fill="#0e0b18"/><rect x="382" y="204" width="16" height="20" fill="#0e0b18" rx="3"/>
  </svg>
</div>`,

'corridor': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#060408 0%,#100b18 60%,#160f0c 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <polygon points="0,320 600,320 420,190 180,190" fill="#0c0814"/>
    <rect x="0" y="0" width="180" height="320" fill="#090610"/><rect x="420" y="0" width="180" height="320" fill="#090610"/>
    <polygon points="0,0 600,0 420,190 180,190" fill="#06040d"/>
    <polygon points="180,190 420,190 380,130 220,130" fill="#0a0715"/>
    <polygon points="220,130 380,130 360,90 240,90" fill="#08060f"/>
    <line x1="180" y1="0" x2="180" y2="320" stroke="#1e1630" stroke-width="2"/>
    <line x1="420" y1="0" x2="420" y2="320" stroke="#1e1630" stroke-width="2"/>
    <rect x="30" y="110" width="8" height="28" fill="#1e1628" rx="1"/>
    <ellipse cx="34" cy="108" rx="6" ry="9" fill="#b05018" opacity="0.9"><animate attributeName="opacity" values="0.9;0.5;0.85;0.4;0.9" dur="1.9s" repeatCount="indefinite"/></ellipse>
    <rect x="562" y="110" width="8" height="28" fill="#1e1628" rx="1"/>
    <ellipse cx="566" cy="108" rx="6" ry="9" fill="#b05018" opacity="0.9"><animate attributeName="opacity" values="0.5;0.9;0.4;0.88;0.5" dur="2.2s" repeatCount="indefinite"/></ellipse>
    <radialGradient id="cg1" cx="50%" cy="50%"><stop offset="0%" stop-color="#b05018" stop-opacity="0.22"/><stop offset="100%" stop-color="#b05018" stop-opacity="0"/></radialGradient>
    <ellipse cx="34" cy="140" rx="55" ry="45" fill="url(#cg1)"/><ellipse cx="566" cy="140" rx="55" ry="45" fill="url(#cg1)"/>
  </svg>
</div>`,

'hospital': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#060a08 0%,#0a1210 55%,#0c1008 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="230" width="600" height="90" fill="#0a0e0c"/><rect x="0" y="228" width="600" height="3" fill="#182420"/>
    <rect x="120" y="30" width="70" height="90" fill="#0e1a12" rx="2"/>
    <line x1="155" y1="35" x2="155" y2="115" stroke="#182420" stroke-width="1.5"/>
    <line x1="125" y1="75" x2="185" y2="75" stroke="#182420" stroke-width="1.5"/>
    <rect x="410" y="30" width="70" height="90" fill="#0e1a12" rx="2"/>
    <line x1="445" y1="35" x2="445" y2="115" stroke="#182420" stroke-width="1.5"/>
    <line x1="415" y1="75" x2="475" y2="75" stroke="#182420" stroke-width="1.5"/>
    <rect x="60" y="180" width="120" height="55" fill="#0f1a12" rx="3" stroke="#1a2a1e" stroke-width="1"/>
    <rect x="420" y="180" width="120" height="55" fill="#0f1a12" rx="3" stroke="#1a2a1e" stroke-width="1"/>
    <ellipse cx="300" cy="185" rx="12" ry="16" fill="#0d1810"/><rect x="290" y="183" width="20" height="30" fill="#0d1810" rx="3"/>
    <radialGradient id="hg1" cx="50%" cy="50%"><stop offset="0%" stop-color="#206030" stop-opacity="0.14"/><stop offset="100%" stop-color="#206030" stop-opacity="0"/></radialGradient>
    <ellipse cx="300" cy="120" rx="150" ry="100" fill="url(#hg1)"/>
  </svg>
</div>`,

'assembly': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#06040c 0%,#0e0b18 55%,#120e10 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="260" width="600" height="60" fill="#0c0918"/>
    <rect x="20" y="235" width="560" height="28" fill="#0b0816" rx="1"/>
    <rect x="50" y="210" width="500" height="28" fill="#0a0715" rx="1"/>
    <rect x="85" y="188" width="430" height="25" fill="#090614" rx="1"/>
    <rect x="125" y="168" width="350" height="22" fill="#080513" rx="1"/>
    <ellipse cx="80" cy="260" rx="9" ry="12" fill="#060410"/><ellipse cx="180" cy="260" rx="9" ry="12" fill="#060410"/>
    <ellipse cx="280" cy="260" rx="9" ry="12" fill="#070512"/><ellipse cx="380" cy="260" rx="9" ry="12" fill="#060410"/>
    <ellipse cx="480" cy="260" rx="9" ry="12" fill="#060410"/><ellipse cx="520" cy="260" rx="9" ry="12" fill="#060410"/>
    <ellipse cx="130" cy="235" rx="8" ry="11" fill="#050310"/><ellipse cx="250" cy="235" rx="8" ry="11" fill="#050310"/>
    <ellipse cx="370" cy="235" rx="8" ry="11" fill="#050310"/><ellipse cx="460" cy="235" rx="8" ry="11" fill="#050310"/>
    <rect x="220" y="150" width="160" height="20" fill="#14101e" rx="2"/>
    <ellipse cx="300" cy="143" rx="13" ry="17" fill="#0f0c1c"/><rect x="289" y="140" width="22" height="28" fill="#0f0c1c" rx="3"/>
    <rect x="200" y="130" width="6" height="24" fill="#1a1428" rx="1"/>
    <ellipse cx="203" cy="128" rx="5" ry="8" fill="#c05020" opacity="0.9"><animate attributeName="opacity" values="0.9;0.5;0.85;0.4;0.9" dur="1.7s" repeatCount="indefinite"/></ellipse>
    <rect x="394" y="130" width="6" height="24" fill="#1a1428" rx="1"/>
    <ellipse cx="397" cy="128" rx="5" ry="8" fill="#c05020" opacity="0.9"><animate attributeName="opacity" values="0.5;0.9;0.4;0.88;0.5" dur="2.0s" repeatCount="indefinite"/></ellipse>
    <radialGradient id="ag1" cx="50%" cy="100%"><stop offset="0%" stop-color="#c05020" stop-opacity="0.15"/><stop offset="100%" stop-color="#c05020" stop-opacity="0"/></radialGradient>
    <ellipse cx="300" cy="160" rx="100" ry="60" fill="url(#ag1)"/>
  </svg>
</div>`,

'antechamber': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#06040d 0%,#0c0a1a 55%,#100c12 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="245" width="600" height="75" fill="#0b0918"/><rect x="0" y="243" width="600" height="3" fill="#1e1830"/>
    <rect x="210" y="60" width="180" height="186" fill="#0e0b1c" rx="2" stroke="#2a2040" stroke-width="2"/>
    <line x1="300" y1="60" x2="300" y2="246" stroke="#2a2040" stroke-width="1.5"/>
    <path d="M210,100 Q300,40 390,100" fill="none" stroke="#2a2040" stroke-width="2"/>
    <circle cx="288" cy="175" r="4" fill="#2a2040"/><circle cx="312" cy="175" r="4" fill="#2a2040"/>
    <rect x="130" y="65" width="20" height="185" fill="#100d1e" rx="2"/>
    <rect x="450" y="65" width="20" height="185" fill="#100d1e" rx="2"/>
    <rect x="15" y="130" width="7" height="20" fill="#1e1830" rx="1"/>
    <ellipse cx="18" cy="128" rx="5" ry="7" fill="#b04818" opacity="0.9"><animate attributeName="opacity" values="0.9;0.5;0.85;0.4;0.9" dur="1.9s" repeatCount="indefinite"/></ellipse>
    <radialGradient id="dg1" cx="50%" cy="60%"><stop offset="0%" stop-color="#c8a050" stop-opacity="0.06"/><stop offset="100%" stop-color="#c8a050" stop-opacity="0"/></radialGradient>
    <ellipse cx="300" cy="200" rx="140" ry="100" fill="url(#dg1)"/>
  </svg>
</div>`,

'rooftop': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#05080f 0%,#08101a 40%,#0c141e 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <circle cx="45" cy="20" r="1" fill="#c8c0a8" opacity="0.7"/><circle cx="200" cy="15" r="1.2" fill="#c8c0a8" opacity="0.8"/>
    <circle cx="390" cy="10" r="1" fill="#c8c0a8" opacity="0.7"/><circle cx="555" cy="18" r="1.1" fill="#c8c0a8" opacity="0.8"/>
    <circle cx="480" cy="55" r="22" fill="#d4c890" opacity="0.12"/><circle cx="480" cy="55" r="16" fill="#d4c890" opacity="0.18"/>
    <polygon points="0,200 110,160 220,155 300,160 380,155 490,180 600,180 600,320 0,320" fill="#07090f"/>
    <rect x="0" y="228" width="600" height="3" fill="#161e28"/>
    <radialGradient id="mg1" cx="80%" cy="0%"><stop offset="0%" stop-color="#d4c890" stop-opacity="0.06"/><stop offset="100%" stop-color="#d4c890" stop-opacity="0"/></radialGradient>
    <rect x="0" y="0" width="600" height="320" fill="url(#mg1)"/>
  </svg>
</div>`,

'market': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#080612 0%,#0f0c1c 55%,#120e14 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="225" width="600" height="95" fill="#0c0a16"/>
    <rect x="0" y="223" width="600" height="3" fill="#1e1a30"/>
    <rect x="10" y="115" width="155" height="110" fill="#0f0d1e" rx="2"/>
    <polygon points="0,115 175,115 165,95 10,95" fill="#1a1632"/>
    <rect x="0" y="93" width="175" height="5" fill="#26203c"/>
    <rect x="25" y="132" width="32" height="22" fill="#0c0a18" rx="1"/><rect x="68" y="127" width="28" height="27" fill="#0c0a18" rx="1"/>
    <rect x="108" y="134" width="38" height="20" fill="#0c0a18" rx="1"/>
    <rect x="435" y="115" width="155" height="110" fill="#0f0d1e" rx="2"/>
    <polygon points="425,115 600,115 590,95 435,95" fill="#1a1632"/>
    <rect x="425" y="93" width="175" height="5" fill="#26203c"/>
    <rect x="448" y="132" width="32" height="22" fill="#0c0a18" rx="1"/><rect x="492" y="127" width="28" height="27" fill="#0c0a18" rx="1"/>
    <rect x="532" y="134" width="38" height="20" fill="#0c0a18" rx="1"/>
    <polygon points="175,320 425,320 395,225 205,225" fill="#0d0b1a"/>
    <line x1="185" y1="55" x2="300" y2="55" stroke="#1a1630" stroke-width="1.5"/>
    <line x1="300" y1="55" x2="415" y2="55" stroke="#1a1630" stroke-width="1.5"/>
    <ellipse cx="242" cy="67" rx="7" ry="9" fill="#1a1430"/>
    <ellipse cx="242" cy="65" rx="5" ry="6" fill="#c06020" opacity="0.85"><animate attributeName="opacity" values="0.85;0.5;0.8;0.4;0.85" dur="1.9s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="358" cy="67" rx="7" ry="9" fill="#1a1430"/>
    <ellipse cx="358" cy="65" rx="5" ry="6" fill="#c06020" opacity="0.85"><animate attributeName="opacity" values="0.5;0.88;0.4;0.82;0.5" dur="2.2s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="192" cy="222" rx="8" ry="11" fill="#07050f"/><rect x="185" y="219" width="14" height="18" fill="#07050f" rx="2"/>
    <ellipse cx="408" cy="222" rx="8" ry="11" fill="#07050f"/><rect x="401" y="219" width="14" height="18" fill="#07050f" rx="2"/>
    <radialGradient id="mkg1" cx="50%" cy="65%"><stop offset="0%" stop-color="#c06020" stop-opacity="0.14"/><stop offset="100%" stop-color="#c06020" stop-opacity="0"/></radialGradient>
    <ellipse cx="300" cy="185" rx="200" ry="80" fill="url(#mkg1)"/>
  </svg>
</div>`,

'office': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#07050c 0%,#0e0a18 55%,#120c10 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="252" width="600" height="68" fill="#0c0918"/><rect x="0" y="250" width="600" height="3" fill="#201a30"/>
    <rect x="155" y="198" width="290" height="55" fill="#110e20" rx="2" stroke="#241e38" stroke-width="1.5"/>
    <rect x="155" y="194" width="290" height="8" fill="#1a1530" rx="1"/>
    <rect x="175" y="183" width="48" height="14" fill="#0e0c1c" rx="1"/><rect x="355" y="185" width="32" height="12" fill="#0e0c1c" rx="1"/>
    <rect x="228" y="18" width="144" height="170" fill="#0a0816" rx="3" stroke="#201a34" stroke-width="2"/>
    <line x1="300" y1="18" x2="300" y2="188" stroke="#201a34" stroke-width="1.5"/>
    <line x1="228" y1="103" x2="372" y2="103" stroke="#201a34" stroke-width="1.5"/>
    <radialGradient id="ofwg" cx="50%" cy="30%"><stop offset="0%" stop-color="#3040a0" stop-opacity="0.09"/><stop offset="100%" stop-color="#3040a0" stop-opacity="0"/></radialGradient>
    <rect x="228" y="18" width="144" height="170" fill="url(#ofwg)"/>
    <rect x="0" y="28" width="168" height="200" fill="#09071a"/>
    <rect x="10" y="42" width="148" height="175" fill="#0b091e"/>
    <rect x="16" y="55" width="135" height="14" fill="#12103a"/><rect x="16" y="85" width="135" height="14" fill="#12103a"/>
    <rect x="16" y="115" width="135" height="14" fill="#12103a"/><rect x="16" y="145" width="135" height="14" fill="#12103a"/>
    <rect x="16" y="175" width="135" height="14" fill="#12103a"/>
    <rect x="432" y="28" width="168" height="200" fill="#09071a"/>
    <rect x="442" y="42" width="148" height="175" fill="#0b091e"/>
    <rect x="448" y="55" width="135" height="14" fill="#12103a"/><rect x="448" y="85" width="135" height="14" fill="#12103a"/>
    <rect x="448" y="115" width="135" height="14" fill="#12103a"/><rect x="448" y="145" width="135" height="14" fill="#12103a"/>
    <rect x="448" y="175" width="135" height="14" fill="#12103a"/>
    <rect x="168" y="153" width="6" height="48" fill="#1a1530" rx="1"/>
    <ellipse cx="171" cy="151" rx="20" ry="11" fill="#201840"/>
    <ellipse cx="171" cy="153" rx="9" ry="5" fill="#d08030" opacity="0.9"><animate attributeName="opacity" values="0.9;0.6;0.85;0.5;0.9" dur="2.0s" repeatCount="indefinite"/></ellipse>
    <radialGradient id="lmpg" cx="50%" cy="50%"><stop offset="0%" stop-color="#d08030" stop-opacity="0.22"/><stop offset="100%" stop-color="#d08030" stop-opacity="0"/></radialGradient>
    <ellipse cx="171" cy="190" rx="72" ry="58" fill="url(#lmpg)"/>
    <ellipse cx="300" cy="191" rx="13" ry="16" fill="#06040e"/><rect x="290" y="189" width="22" height="30" fill="#06040e" rx="3"/>
  </svg>
</div>`,

'exam': `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#06050e 0%,#0d0b18 55%,#0f0c14 100%)">
  <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="248" width="600" height="72" fill="#0b0918"/><rect x="0" y="246" width="600" height="3" fill="#1a1630"/>
    <line x1="0" y1="265" x2="600" y2="265" stroke="#100d1c" stroke-width="1"/>
    <line x1="150" y1="248" x2="150" y2="320" stroke="#100d1c" stroke-width="1"/>
    <line x1="300" y1="248" x2="300" y2="320" stroke="#100d1c" stroke-width="1"/>
    <line x1="450" y1="248" x2="450" y2="320" stroke="#100d1c" stroke-width="1"/>
    <rect x="0" y="0" width="90" height="248" fill="#090715"/><rect x="510" y="0" width="90" height="248" fill="#090715"/>
    <rect x="85" y="0" width="22" height="248" fill="#0e0b1c" rx="1"/>
    <rect x="493" y="0" width="22" height="248" fill="#0e0b1c" rx="1"/>
    <rect x="262" y="18" width="76" height="108" fill="#0e1030" rx="3"/>
    <line x1="300" y1="18" x2="300" y2="126" stroke="#181a3c" stroke-width="1.5"/>
    <line x1="262" y1="72" x2="338" y2="72" stroke="#181a3c" stroke-width="1.5"/>
    <radialGradient id="exwg" cx="50%" cy="0%"><stop offset="0%" stop-color="#2030a0" stop-opacity="0.12"/><stop offset="100%" stop-color="#2030a0" stop-opacity="0"/></radialGradient>
    <ellipse cx="300" cy="90" rx="90" ry="80" fill="url(#exwg)"/>
    <rect x="95" y="82" width="6" height="18" fill="#1a1530" rx="1"/>
    <ellipse cx="98" cy="80" rx="5" ry="7" fill="#a04218" opacity="0.9"><animate attributeName="opacity" values="0.9;0.5;0.85;0.4;0.9" dur="2.1s" repeatCount="indefinite"/></ellipse>
    <rect x="499" y="82" width="6" height="18" fill="#1a1530" rx="1"/>
    <ellipse cx="502" cy="80" rx="5" ry="7" fill="#a04218" opacity="0.9"><animate attributeName="opacity" values="0.5;0.9;0.4;0.88;0.5" dur="1.8s" repeatCount="indefinite"/></ellipse>
    <rect x="195" y="166" width="210" height="10" fill="#141028" rx="1"/>
    <rect x="220" y="150" width="160" height="18" fill="#110e22" rx="1"/>
    <ellipse cx="300" cy="133" rx="9" ry="11" fill="#08061a"/><rect x="292" y="130" width="16" height="20" fill="#08061a" rx="2"/>
  </svg>
</div>`,

}; // end SCENE_ART

// ─── SILHOUETTES ─────────────────────────────────────────────
const SILHOUETTES = {

poor: `<svg viewBox="0 0 80 128" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto">
  <ellipse cx="38" cy="17" rx="11" ry="12" fill="#120a08"/>
  <rect x="35" y="27" width="7" height="7" fill="#120a08"/>
  <path d="M16,35 Q38,32 60,37 L63,56 Q50,54 38,55 Q24,54 14,57 Z" fill="#120a08"/>
  <rect x="5" y="35" width="13" height="23" fill="#120a08" rx="2"/>
  <ellipse cx="4" cy="59" rx="8" ry="7" fill="#0e0806"/>
  <rect x="63" y="37" width="11" height="19" fill="#120a08" rx="2"/>
  <path d="M14,57 L12,113 L38,117 L64,113 L63,56 Z" fill="#120a08"/>
  <rect x="12" y="82" width="52" height="4" fill="#0c0806" rx="1"/>
  <rect x="11" y="111" width="16" height="8" fill="#120a08" rx="2"/>
  <rect x="49" y="113" width="16" height="6" fill="#120a08" rx="2"/>
</svg>`,

rich: `<svg viewBox="0 0 80 128" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto">
  <ellipse cx="40" cy="15" rx="10" ry="11" fill="#0c0a18"/>
  <rect x="36" y="24" width="8" height="6" fill="#0c0a18"/>
  <rect x="30" y="3" width="20" height="13" fill="#0c0a18" rx="1"/>
  <rect x="26" y="14" width="28" height="4" fill="#0c0a18" rx="1"/>
  <path d="M19,31 Q40,28 61,31 L64,56 Q52,54 40,55 Q28,54 16,56 Z" fill="#0c0a18"/>
  <path d="M35,31 L40,44 L45,31" fill="#09071a"/>
  <rect x="6" y="31" width="13" height="28" fill="#0c0a18" rx="3"/>
  <rect x="61" y="31" width="13" height="28" fill="#0c0a18" rx="3"/>
  <path d="M19,56 L16,113 L36,117 L40,90 L44,117 L64,113 L61,56 Z" fill="#0c0a18"/>
  <line x1="40" y1="56" x2="40" y2="113" stroke="#07060f" stroke-width="2"/>
  <rect x="14" y="111" width="21" height="8" fill="#0c0a18" rx="2"/>
  <rect x="45" y="111" width="21" height="8" fill="#0c0a18" rx="2"/>
</svg>`,

}; // end SILHOUETTES

// ─── SOCIETY RULES ───────────────────────────────────────────
const SOCIETY_RULES = [
  {
    icon: '🌊',
    grapesCat: 'CIVILIZATION OVERVIEW',
    title: 'ILIATANIA',
    body: 'An island nation built on one promise: rank, respect, and opportunity belong to those who earn them — not those who inherit them. Two citizens live that promise from opposite ends.',
    credit: true,
  },
  {
    icon: '🗺',
    grapesCat: 'G — GEOGRAPHY',
    title: 'Island Nation & Colonial Empire',
    body: 'Fortified island capital with ocean access, watchtowers, and supply routes. Each colonial territory manages one resource — spices, crops, or manufactured goods — and pays tribute in exchange for military protection and civic rights.',
  },
  {
    icon: '⛩',
    grapesCat: 'R — RELIGION',
    title: 'One Dominant Faith, Many Protected',
    body: 'The state religion shapes civic ceremonies and calendars. Anti-discrimination laws shield all minority faiths. Every citizen may practice freely — religious inequality exists, and so does legal protection against it.',
  },
  {
    icon: '🏥',
    grapesCat: 'A — ACHIEVEMENT',
    title: 'Hospitals, Merit & the Quota System',
    body: 'Advanced civic hospitals keep the population and military strong. The merit system lets any citizen rise through exams and service. Colonies that meet their resource quota receive supplies, protection, and commendation from the capital.',
  },
  {
    icon: '🏛',
    grapesCat: 'P — POLITICS',
    title: 'Centralized Government, Colonial Territories',
    body: 'A central council governs Iliatania and all territories. Governors are appointed by merit. The capital controls law, redistribution, and military — colonies cannot build armies large enough to challenge the center.',
  },
  {
    icon: '⚓',
    grapesCat: 'E — ECONOMICS',
    title: 'Diversified Trade & Shipping Networks',
    body: 'No single resource. Oranges, sugarcane, olives, weapons, technology. Elaborate ports and shipping lanes connect every colony to the capital. This diversity prevents collapse — unlike empires that depended on one source.',
  },
  {
    icon: '⚖',
    grapesCat: 'S — SOCIAL',
    title: 'Egalitarian — Social Class Can Change',
    body: 'No inherited titles. Rank is earned through civic contribution, merit exams, and public service. A Common Citizen can rise to Imperial Representative. This is the promise — the simulation tests whether it holds.',
  },
  {
    icon: '▶',
    grapesCat: 'HOW TO PLAY',
    title: 'Your Choices Shape the Society',
    body: 'Play as Lira (market vendor) or Aldric (merchant lord). Every decision changes your stats. Earlier choices affect later scenes. The Society Integrity Meter tracks whether Iliatania\'s promise is being kept or broken across both lives.',
  },
];

// ─── CHARACTERS ──────────────────────────────────────────────
const CHARACTERS = [

// ══════ LIRA VOSS ══════
{
  id: 'poor',
  name: 'Lira Voss',
  title: 'The Market Vendor',
  classLabel: 'Common Citizen — Lower District',
  tagline: 'Three days behind on rent. Eight credits in hand. A son to feed.',
  color: '#c87840',
  icon: '◉',
  silhouette: 'poor',
  background: {
    who: 'Lira is a 34-year-old single mother who sells handmade cloth goods at the lower district market. She has lived in the same rented room for six years. Her son Tam is eight.',
    problems: 'Rent is always almost due. Food is rationed by what she earns each day. The civic support system requires employment verification she cannot provide as a freelance seller. She is one bad week from losing her room.',
    goals: 'Survive. Keep Tam fed and in school. Maybe — eventually — earn enough civic credits to access the housing assistance program. She does not dream of rank. She dreams of a month with no crisis.',
    beliefs: 'Iliatania promises that hard work is enough. Lira works hard every day. She is not sure the promise is for people like her. But she has not given up on it.',
    playerGoal: 'Keep Lira and Tam stable. Find allies, use community systems, and navigate a society that was not designed with her in mind. Every choice costs something.',
  },
  statDefs: [
    { key: 'survival', label: 'Survival',  icon: '◉', color: '#e05030', desc: 'Food, shelter, and daily security.' },
    { key: 'community',label: 'Community', icon: '⊕', color: '#5aad8a', desc: 'Support network and relationships.' },
    { key: 'health',   label: 'Health',    icon: '♥', color: '#cc4a88', desc: 'Physical and mental wellbeing.' },
    { key: 'hope',     label: 'Hope',      icon: '◈', color: '#c8a850', desc: 'Forward opportunity and outlook.' },
  ],
  initialStats: { survival: 22, community: 42, health: 55, hope: 28 },
  rankTiers: [
    { min: 80, name: 'Thriving'    },
    { min: 65, name: 'Secure'      },
    { min: 50, name: 'Stable'      },
    { min: 35, name: 'Getting By'  },
    { min: 20, name: 'Struggling'  },
    { min: 0,  name: 'Desperate'   },
  ],
  rankStatKey: 'survival',
  scenes: [
    {
      title: 'Three Days', location: 'Lower District — Rented Room',
      art: 'corridor', label: 'DAY ONE',
      npcName: 'Landlord Gorm',
      npcLine: '"Twelve credits by Friday, Lira. You know the rule. The civic housing bureau won\'t touch you if you\'re already behind — they only help people who are current."',
      innerVoice: 'To get help, you need to not need help yet. You\'ve known this for a year.',
      body: `<p>The notice was slipped under the door while Tam was asleep. Twelve credits. You have eight. Friday is three days away. Outside, the lower district is already loud with morning carts and argument. <em>Tam asks if there\'s bread. You tell him yes, and go look.</em></p>`,
      choices: [
        { text: 'Go to the civic emergency office before the market opens.',
          sub: '"There\'s a hardship provision. I need to know if I qualify."',
          consequence: 'The clerk is kind but slow. Two hours lost. You qualify for a five-credit emergency credit — processed in three to five days. Not Friday. But something.',
          changes: { survival: 5, hope: 6, community: 2, health: -2 }, sets: { triedCivicOffice: true } },
        { text: 'Ask neighbor Maren if she can lend four credits until market day.',
          sub: '"I\'ll pay it back Saturday. I just need to make it to Friday."',
          consequence: 'Maren has three credits she can spare. Not four. But you take three and promise Saturday. The gap is smaller now. The obligation is real.',
          changes: { survival: 6, community: 8, hope: 4, health: 0 }, sets: { owedMaren: true } },
        { text: 'Work a double day at the market. Start at dawn, stay until dark.',
          sub: '(You wake Tam early and pack your stall before sunrise.)',
          consequence: 'Twelve hours of selling. Your feet ache. You make six credits — good day, bad body. Tam falls asleep on the walk home. You are one credit short and exhausted.',
          changes: { survival: 7, health: -6, community: -2, hope: -2 } },
      ],
    },
    {
      title: 'The Stall', location: 'Lower District Market',
      art: 'market', label: 'DAY TWO',
      npcName: 'Guild Registrar Nim',
      npcLine: '"The new vendor has a guild sponsorship filed correctly. The spot reassignment follows the charter. Your three years of tenure is noted in the record. I\'m sorry — that\'s what noted means here."',
      innerVoice: 'Three years of showing up every day, and "noted" is what you get for it.',
      body: `<p>You arrive at your usual spot to find someone already there — younger, cleaner coat, a guild placard on his table. He smiles apologetically. He is not responsible for this. The charter apparently is. <em>Your spot is now officially "reassigned." You have an hour to find another one or go home.</em></p>`,
      choices: [
        { text: 'Challenge the sponsorship — file a formal objection with the guild.',
          sub: '"Three years of continuous occupancy should count for something. I want that in writing."',
          consequence: 'The objection is filed. It will be reviewed in four to six weeks. Until then, the new vendor stays and so does the paperwork you just started.',
          changes: { community: 5, hope: 7, survival: -3, health: -2 }, sets: { challengedSpot: true } },
        { text: 'Introduce yourself to the new vendor. Propose sharing customers.',
          sub: '"We sell different things. I\'ll send people your way if you\'ll send them mine."',
          consequence: 'He agrees, surprised. By midday you\'ve each added two sales from each other\'s recommendations. It\'s not your spot back — but it\'s something.',
          changes: { community: 9, hope: 5, survival: 4, health: 2 }, sets: { allyVendor: true } },
        { text: 'Take the open spot near the far gate. Less traffic, but yours.',
          sub: '(You move your stall without a word and set up before the best morning traffic is gone.)',
          consequence: 'Fewer customers pass the far gate. You make two-thirds of your usual. You keep your dignity. The math is harder.',
          changes: { survival: 3, health: -1, community: -1, hope: -4 } },
      ],
    },
    {
      title: 'The Application', location: 'Civic Support Office',
      art: 'antechamber', label: 'DAY THREE',
      npcName: 'Clerk Veena',
      npcLine: '"The housing assistance form requires three months of employer-verified income. Freelance sales count — but you need a registered employer to stamp the form. Without that, the system returns it unprocessed."',
      innerVoice: 'A stamp. The entire thing comes down to a stamp from an employer you don\'t have because you\'ve been working for yourself.',
      body: `<p>You have been in this waiting room for ninety minutes. The chairs are hard. There is a poster on the wall that says <em>Iliatania Provides.</em> You have filled in every box on the form correctly. <em>The form does not have a box for "I have no employer because I am my own employer."</em></p>`,
      choices: [
        { text: 'Ask if the neighborhood cooperative can serve as your registered employer.',
          sub: '"They\'re a civic-registered organization. Could their treasurer stamp the form?"',
          consequence: 'Veena checks. Technically yes — if the cooperative lists you as a contributing member. You have to join first. That takes another visit.',
          changes: { hope: 8, community: 6, survival: 3, health: 0 }, sets: { cooperativeOption: true },
          requiresMemory: 'allyVendor' },
        { text: 'Ask to speak to a supervisor about the freelance classification gap.',
          sub: '"I want this documented — the form doesn\'t accommodate self-employed market vendors. Someone should know that."',
          consequence: 'The supervisor sees you briefly. He agrees the gap is real and says he\'ll flag it for review. Your application remains returned. But a note goes in a file somewhere.',
          changes: { hope: 5, community: 3, health: -1, survival: 0 } },
        { text: 'Ask Veena directly what the workaround is. You\'re not the first person in this situation.',
          sub: '"You\'ve seen this before. What do people actually do?"',
          consequence: 'Veena lowers her voice: "The market guild has a provisional employer certification. Two credit fee. Most people don\'t know." You write it down.',
          changes: { hope: 10, community: 4, survival: 5, health: 1 }, sets: { foundLoophole: true } },
      ],
    },
    {
      title: 'Maren\'s Door', location: 'Lower District — Shared Corridor',
      art: 'corridor', label: 'DAY FIVE',
      npcName: 'Neighbor Maren',
      npcLine: '"Sera has a fever. I\'ve been up two nights. I don\'t have anything left for food today and I can\'t leave her. I know you\'re tight too, Lira. I wouldn\'t ask."',
      innerVoice: 'She wouldn\'t ask if she had anyone else. Neither would you.',
      body: `<p>Maren is in the doorway at seven in the morning, her daughter on her hip, fever-pink and limp. You have four credits. Enough for today and tomorrow for you and Tam — if nothing goes wrong. <em>Something is already going wrong right here.</em></p>`,
      memoryLines: { owedMaren: `<p><em>She lent you three credits when you needed it. She did not ask for them back early.</em></p>` },
      choices: [
        { text: 'Share your food for today and give her two credits for medicine.',
          sub: '(You go back to your room and return with bread and two credits.)',
          consequence: 'Sera\'s fever breaks by evening. Maren cries quietly in a way she doesn\'t know you hear. You and Tam eat less today. It doesn\'t feel like a sacrifice.',
          changes: { community: 12, hope: 6, survival: -9, health: 2 }, sets: { helpedMaren: true } },
        { text: 'Take Maren and Sera to the cooperative food store together.',
          sub: '"Get dressed. We\'re going together — they have a hardship counter, they won\'t turn Sera away."',
          consequence: 'The cooperative provides emergency food provisions without requiring credits. You spend two hours getting there and back. Sera is fed. You lose a morning of market time.',
          changes: { community: 9, hope: 7, survival: -2, health: 3 }, sets: { helpedMaren: true } },
        { text: 'Tell Maren about the civic emergency child health provision she may not know exists.',
          sub: '"There\'s a provision for sick children under ten — you don\'t need credits for medicine if you show the birth record. Go to the civic clinic, second door on the left."',
          consequence: 'You lose nothing and give her something real. She goes. It works. She thanks you the next morning with a hand on your arm that says everything.',
          changes: { community: 7, hope: 8, survival: 0, health: 2 }, sets: { helpedMaren: true } },
      ],
    },
    {
      title: 'The Offer', location: 'Lower District Market — Back Room',
      art: 'market', label: 'DAY EIGHT', pivotal: true,
      npcName: 'Merchant Bray',
      npcLine: '"Twenty credits a week. Steady. You work my shop, I handle the guild registration, and the housing form gets your employer stamp sorted in a day. Hours run long sometimes. I need reliability and I need discretion."',
      innerVoice: '"Discretion" is the word. That\'s the word you need to sit with.',
      body: `<p>Merchant Bray has a warm office and a cold smile. Twenty credits — double your best week. Housing form sorted. <em>Everyone knows he pays late and fires anyone who complains. Half the district works for him anyway.</em></p>`,
      choices: [
        { text: 'Accept — you need the stability.',
          sub: '(You shake his hand before you can think about it too long.)',
          consequence: 'The money is real. Week one is fine. Week two runs thirteen hours on three days. You don\'t file a complaint. You need the stamp.',
          changes: { survival: 14, health: -7, community: -5, hope: -4 }, sets: { workingForBray: true } },
        { text: 'Negotiate before accepting — ask for terms in writing.',
          sub: '"I need the hours capped at ten per day and payment on the same day each week. In writing. Then yes."',
          consequence: 'Bray pauses. He agrees — you can tell he didn\'t expect this. The written terms won\'t cover everything, but they cover something. You start Monday.',
          changes: { survival: 9, health: -3, hope: 5, community: 0 }, sets: { workingForBray: true } },
        { text: 'Refuse. Find another way to get the employer stamp.',
          sub: '"I appreciate the offer. I\'m going to look at the cooperative certification first."',
          consequence: 'Bray shrugs. The cooperative certification costs two credits and two weeks. You leave with nothing today, and a path that doesn\'t require discretion.',
          changes: { survival: -3, hope: 8, community: 4, health: 3 }, sets: { refusedBray: true } },
      ],
    },
    {
      title: 'The Meeting', location: 'Neighborhood Cooperative Hall',
      art: 'assembly', label: 'DAY TWELVE', pivotal: true,
      npcName: 'Organizer Fenn',
      npcLine: '"We have eleven members. The petition needs twelve to file. Two evenings a week — you come to meetings and you sign the documents. Without you, we can\'t submit the housing condition complaint."',
      innerVoice: 'Two evenings a week is two evenings you\'re not at the market, not with Tam, not resting.',
      body: `<p>The cooperative hall is warmer than your room. Eleven people around a table who all know exactly what bad housing looks like from the inside. Fenn has organized three successful petitions in four years. The fourth one needs you. <em>Everything costs something. The question is what this one costs against what it builds.</em></p>`,
      memoryLines: { helpedMaren: `<p><em>Maren is already a member. She waves you toward the empty seat beside her.</em></p>` },
      choices: [
        { text: 'Join fully — two evenings a week, meetings and everything.',
          sub: '"I\'m in. Tell me what you need."',
          consequence: 'You are the twelfth member. The petition is filed. The cooperative now has an emergency food provision you can draw on. The evenings cost. The network grows.',
          changes: { community: 12, hope: 10, health: -4, survival: -3 }, sets: { joinedCooperative: true } },
        { text: 'Offer money but not time — contribute four credits toward the filing fee.',
          sub: '"I can\'t do the evenings right now, but I can contribute four credits to the filing. Does that help?"',
          consequence: 'Fenn accepts it. The petition files with eleven members plus your financial contribution. You are not part of the network in the same way. The benefit is smaller.',
          changes: { community: 5, hope: 4, survival: -5, health: 1 } },
        { text: 'Ask if you can join next month when things settle.',
          sub: '"Next month — I promise. Can the petition wait?"',
          consequence: 'It cannot. Fenn files with eleven members. The petition is returned — minimum twelve required. Nothing changes for six more weeks. You feel this.',
          changes: { community: -3, hope: -4, health: 2, survival: 1 } },
      ],
    },
    {
      title: 'Tam Is Sick', location: 'Civic Hospital — East Corridor',
      art: 'hospital', label: 'DAY FIFTEEN',
      npcName: 'Hospital Clerk',
      npcLine: '"East wing wait today is approximately six hours. Private care is immediate — five credits. Your choice, and I do mean that."',
      innerVoice: 'Six hours is a full day\'s market earnings. Five credits is three days of food.',
      body: `<p>Tam\'s forehead is hot. His breathing is fast and shallow. You carried him here because you had no other option and the map in your head said: hospital. <em>The hospital says: east wing or private care.</em> East wing means waiting. Private means credits you do not have surplus of. Both options are real. Both are cruel in different ways.</p>`,
      choices: [
        { text: 'Wait in the east wing. Six hours. You stay with him.',
          sub: '(You find two chairs and pull them together so he can lie across both.)',
          consequence: 'Six hours. A doctor sees him — upper respiratory infection, not serious. You miss a full day of market. Tam is treated and sleeping by evening. You sit in the dark for a while after.',
          changes: { health: 8, survival: -5, hope: -4, community: 3 } },
        { text: 'Pay five credits for immediate private care.',
          sub: '"Private. Please."',
          consequence: 'Tam is seen in twenty minutes. He is prescribed medicine and home in two hours. Five credits gone. He is fine. You are fine. Your margin is not fine.',
          changes: { health: 12, survival: -9, hope: -3, community: 0 } },
        { text: 'Ask the cooperative if anyone knows a neighborhood healer.',
          sub: '(You send a message through Fenn\'s network before you sit down.)',
          consequence: 'A retired civic physician responds within an hour. She sees Tam at the hospital — she still has her credentials. Tam is treated, you owe a favor, and the community held.',
          changes: { health: 9, community: 8, survival: -2, hope: 5 },
          requiresMemory: 'joinedCooperative' },
      ],
    },
    {
      title: 'The Vote', location: 'Civic Assembly Hall',
      art: 'assembly', label: 'DAY TWENTY', isFinal: true,
      npcName: 'Assembly Caller',
      npcLine: '"The housing security bill — lower district provisions. Citizens are invited to address the assembly. Three minutes each. The vote follows public comment."',
      innerVoice: 'Three minutes to say twenty days. Three minutes to say a whole life.',
      body: `<p>The housing security bill: expand support to freelance workers, reduce verification barriers, add emergency credit for families. <em>If it passes, people like you finally become visible to the system.</em></p>`,
      memoryLines: {
        joinedCooperative: `<p><em>Fenn and four cooperative members are in the gallery. They came to see what you do with the platform they helped build.</em></p>`,
        helpedMaren: `<p><em>Maren is in the back row with Sera. She nods at you once when you walk in.</em></p>`,
        triedCivicOffice: `<p><em>You know exactly which clause failed you. You know the number of the form. You know Veena\'s name. That specificity is something.</em></p>`,
      },
      choices: [
        { text: 'Speak. Tell them exactly what these twenty days cost.',
          sub: '"I want to tell you what the employer verification requirement looks like from a market stall in the lower district. Then I want to tell you what fixing it would mean."',
          consequence: 'You use all three minutes. Your hands shake a little at the start and stop shaking by the second minute. The bill passes 14-9. The clerk who processes the first reformed application does not know your name. That\'s fine.',
          changes: { hope: 15, community: 10, survival: 5, health: 3 } },
        { text: 'Submit a written statement and stay home — the market doesn\'t close for assemblies.',
          sub: '(You write two pages the night before and hand them in at the door.)',
          consequence: 'The written statement is read into the record. The bill passes 13-10. You made credits at the stall. You do not know what your words did.',
          changes: { survival: 7, hope: 8, community: 3, health: 2 } },
        { text: 'Bring Tam. Sit in the gallery. Let him see what citizens can do.',
          sub: '(You don\'t speak. But you are present, and you are counted.)',
          consequence: 'The bill passes. On the walk home, Tam asks why the people in the big chairs had to vote on whether you deserved help. You tell him the truth: because someone has to, and it should be people who know.',
          changes: { hope: 12, community: 7, health: 5, survival: 2 } },
      ],
    },
  ],
},

// ══════ ALDRIC MARSH ══════
{
  id: 'rich',
  name: 'Aldric Marsh',
  title: 'The Merchant Lord',
  classLabel: 'Civic Contributor — Upper District',
  tagline: 'Three properties. Forty workers. One government that has decided it wants a share.',
  color: '#4a6ecc',
  icon: '◈',
  silhouette: 'rich',
  background: {
    who: 'Aldric is a 52-year-old spice and textile merchant who built his trading company over twenty years. He owns three properties in the upper district and employs forty workers. He has no inherited title — he earned his rank through trade.',
    problems: 'The new Civic Contribution Assessment taxes property and wealth at 15%. His rival is gaining government contracts through compliance. His workers are organizing. The civic gazette is running stories about merchants like him. He is not used to being on the defensive.',
    goals: 'Protect his wealth and his business independence. Navigate — or defeat — the government\'s new redistribution framework. Maintain his reputation and relationships. Not lose what twenty years built.',
    beliefs: 'He built this himself. The society promised that merit and hard work would be protected. He considers his taxes a civic contribution already and this new assessment an overreach. He is not sure he is entirely wrong.',
    playerGoal: 'Protect Aldric\'s wealth and influence while navigating increasing government pressure. Every concession costs something. Every act of resistance costs something else. Decide what kind of man he is.',
  },
  statDefs: [
    { key: 'wealth',     label: 'Wealth',       icon: '◈', color: '#c8a850', desc: 'Financial assets and business security.' },
    { key: 'influence',  label: 'Influence',     icon: '◉', color: '#4a88cc', desc: 'Political and social connections.' },
    { key: 'compliance', label: 'Gov. Standing', icon: '⊕', color: '#5aad8a', desc: 'Your relationship with the government.' },
    { key: 'reputation', label: 'Reputation',    icon: '◆', color: '#9070c8', desc: 'How the public sees you.' },
  ],
  initialStats: { wealth: 70, influence: 62, compliance: 42, reputation: 55 },
  rankTiers: [
    { min: 85, name: 'Dominant'   },
    { min: 70, name: 'Powerful'   },
    { min: 55, name: 'Influential'},
    { min: 40, name: 'Established'},
    { min: 25, name: 'Diminished' },
    { min: 0,  name: 'Marginalized'},
  ],
  rankStatKey: 'influence',
  scenes: [
    {
      title: 'The Notice', location: 'Marsh Trading Company — Upper Office',
      art: 'office', label: 'WEEK ONE',
      npcName: 'Accountant Levin',
      npcLine: '"Fifteen percent of assessed property value. The notice gives you thirty days to pay or contest. If we contest and lose, there are penalties. If we pay now, we can negotiate a credit offset in next quarter\'s filing."',
      innerVoice: 'Thirty days to decide whether to fight or pay. The amount itself is not the point. The principle is.',
      body: `<p>The assessment notice is on your desk when you arrive. You have read it three times. Fifteen percent of property value — that\'s forty-two thousand civic credits. Levin has already done the numbers. <em>The law is new. It passed two months ago while you were on a trade route and your representative abstained.</em></p>`,
      choices: [
        { text: 'Pay in full. Remove the pressure. Negotiate from strength later.',
          sub: '"Pay it. Then we fight the framework, not the specific bill."',
          consequence: 'Paid. Levin processes it without comment. Your compliance record improves immediately. The principle remains unaddressed, but you are not in default.',
          changes: { compliance: 10, wealth: -14, reputation: 5, influence: -2 }, sets: { paidAssessment: true } },
        { text: 'Contest through legal appeal. This is an overreach.',
          sub: '"Get the civic appeals attorney on the line. This assessment is challengeable."',
          consequence: 'The appeal is filed. It takes four months to resolve. During that time your compliance record shows "contested" — which affects two contract applications.',
          changes: { compliance: -5, influence: 6, wealth: -3, reputation: 2 }, sets: { contestedAssessment: true } },
        { text: 'Request a direct meeting with the assessment official. Negotiate before committing.',
          sub: '"I want to sit across from whoever signed this before I decide anything."',
          consequence: 'Official Drev agrees to meet. He is not unfriendly. The meeting plants a seed for later conversations. No resolution today, but a relationship established.',
          changes: { influence: 8, compliance: 3, wealth: -1, reputation: 3 }, sets: { metDrev: true } },
      ],
    },
    {
      title: 'The Inspector', location: 'Marsh Trading Company — Warehouse',
      art: 'corridor', label: 'WEEK TWO',
      npcName: 'Inspector Dorel',
      npcLine: '"This is a routine compliance review. I need full access to cargo manifests, crew records, and property declarations. Cooperation is noted in the report. Non-cooperation is also noted."',
      innerVoice: 'Both sentences mean the same thing with different consequences. He is telling you this is not optional.',
      body: `<p>Inspector Dorel arrives with two assistants and a civic seal on his satchel. He is polite, thorough, and clearly experienced with merchants who try to manage the scope of his visit. <em>Your records are clean — mostly. There are three cargo assessments from last autumn that were classified under the lower rate, technically correctly but not unambiguously so.</em></p>`,
      choices: [
        { text: 'Full cooperation. Open everything. Let him see it all.',
          sub: '"My records manager will give you complete access. Anything you need."',
          consequence: 'Dorel finds the autumn assessments and notes them. He classifies them as within acceptable interpretation. Full cooperation noted in the report. Your compliance score rises significantly.',
          changes: { compliance: 12, reputation: 6, influence: -3, wealth: -2 }, sets: { fullCooperation: true } },
        { text: 'Request a formal scope notice before granting access.',
          sub: '"Standard procedure — I\'d like the specific scope of this review in writing before we begin. You understand."',
          consequence: 'Dorel produces the scope notice without friction — he has done this before. The process takes two hours longer. Your records manager uses that time to flag the autumn assessments for voluntary disclosure.',
          changes: { influence: 6, compliance: 2, wealth: 0, reputation: 2 } },
        { text: 'Grant access but personally escort the inspectors through everything.',
          sub: '"Of course. I\'ll walk you through myself."',
          consequence: 'You guide Dorel through your records personally. He notices you\'re managing the tour. He also notices you know your own records intimately — which cuts both ways.',
          changes: { compliance: -3, influence: 5, reputation: -2, wealth: 1 } },
      ],
    },
    {
      title: 'The Petition', location: 'Marsh Trading Company — Assembly Room',
      art: 'assembly', label: 'WEEK THREE', pivotal: true,
      npcName: 'Foreman Cassev',
      npcLine: '"Forty workers. Fifteen combined years of service each, average. We are petitioning for pension credit reclassification — seasonal work counted at full rate, not the partial rate. This is a legal petition under Article 14."',
      innerVoice: 'He has read the charter more carefully than you expected. He is correct, and he knows it, and he knows you know it.',
      body: `<p>Forty workers. Foreman Cassev spent three months reading the charter — and he is right. <em>Granting the petition costs four thousand credits a year. Refusing it costs something harder to calculate.</em></p>`,
      choices: [
        { text: 'Grant the reclassification voluntarily. Set the standard yourself.',
          sub: '"The petition is correct. We\'ll implement the reclassification effective next quarter. No fight."',
          consequence: 'Cassev is visibly surprised. The workers are told. Your compliance record improves. The civic gazette runs a brief positive mention. It cost four thousand a year and bought more than that.',
          changes: { compliance: 9, reputation: 10, wealth: -5, influence: 6 }, sets: { grantedPetition: true } },
        { text: 'Negotiate — offer partial reclassification, reduced from full.',
          sub: '"The petition has merit. I\'m prepared to offer three-quarter rate reclassification effective immediately. Full rate after a two-year review."',
          consequence: 'Cassev accepts after two hours of negotiation. Partial victory for both sides. No external noise. The workers are cautiously satisfied.',
          changes: { compliance: 4, reputation: 5, wealth: -2, influence: 3 } },
        { text: 'Contest through the guild appeals process.',
          sub: '"The charter interpretation is arguable. We\'ll refer this to the guild appeals board."',
          consequence: 'The appeal takes six weeks. You win on technical grounds. The workers file a civic grievance the same day. The war continues on a different front.',
          changes: { compliance: -7, reputation: -6, wealth: 2, influence: -3 }, sets: { contestedPetition: true } },
      ],
    },
    {
      title: 'The Rival', location: 'Upper District — Trade Club',
      art: 'antechamber', label: 'WEEK FOUR',
      npcName: 'Business Partner Elm',
      npcLine: '"Cass just secured three civic infrastructure contracts. She announced publicly that she was \'proud to contribute to the redistribution framework.\' She\'s getting favorable treatment, Aldric. We should consider something visible."',
      innerVoice: 'She is performing cooperation. The question is whether performing it and meaning it have the same effect on the contracts.',
      body: `<p>Cass Vellan runs a competing trading house. Six months ago she was in the same position as you. Now she has three government contracts and a civic commendation on the wall of her office. <em>Everyone in this club knows she pivoted. The question is whether it was strategic or sincere. The contracts don\'t care.</em></p>`,
      memoryLines: { grantedPetition: `<p><em>You already did something real. Elm doesn\'t know that yet.</em></p>` },
      choices: [
        { text: 'Make a visible civic donation — announce it publicly.',
          sub: '"Ten thousand credits to the lower district housing fund. Issue a statement."',
          consequence: 'The donation is covered by the gazette. Your reputation rises sharply. Three officials contact you within a week. The money is real. The visibility was the point.',
          changes: { reputation: 10, compliance: 5, wealth: -12, influence: 5 } },
        { text: 'Investigate Cass\'s arrangement — understand what she actually agreed to.',
          sub: '"Before I react to her, I want to know exactly what she gave up for those contracts."',
          consequence: 'The arrangement is public record. Cass opened one warehouse to civic storage at a twenty percent rate reduction. It\'s a real concession. You file this away.',
          changes: { influence: 7, reputation: -1, compliance: 0, wealth: 0 }, sets: { investigatedCass: true } },
        { text: 'Stay the course. Don\'t chase optics.',
          sub: '"We don\'t change strategy because a competitor performed something for the cameras."',
          consequence: 'Nothing changes. Cass keeps her contracts. You keep your principles and your current situation.',
          changes: { influence: 3, reputation: -3, compliance: -1, wealth: 1 } },
      ],
    },
    {
      title: 'The Story', location: 'Upper District — Morning',
      art: 'rooftop', label: 'WEEK FIVE',
      npcName: 'Aide Senna',
      npcLine: '"Morning edition. You\'re named alongside two others under the headline: \'Merchant Class Resists Civic Contribution Framework.\' It quotes a source close to your appeal. It\'s already circulating."',
      innerVoice: 'Someone close to the appeal. You know who it is. That\'s a different problem for a different day.',
      body: `<p>The article is three columns. It has your name, a rough figure for your assessed wealth, and the phrase "resistant to civic duty" attributed to an unnamed official. It is not false exactly. It is not complete. <em>By midday, two business contacts have sent you copies without comment, which is itself a kind of comment.</em></p>`,
      choices: [
        { text: 'Issue a public statement detailing your actual civic record.',
          sub: '"I\'ve paid every required civic contribution for twenty years. Let me be specific."',
          consequence: 'The counter-statement gets partial coverage. The narrative shifts slightly. You have now publicly entered the debate — a position that is harder to exit than enter.',
          changes: { reputation: 6, compliance: 3, influence: -2, wealth: 0 }, sets: { wentPublic: true } },
        { text: 'Make a significant donation to a visible civic cause.',
          sub: '(You call the lower district cooperative fund directly and offer fifteen thousand credits.)',
          consequence: 'The donation is announced before the day is out. The story changes. Three journalists write follow-up pieces about the donation. The article becomes context instead of headline.',
          changes: { reputation: 12, compliance: 6, wealth: -17, influence: 4 }, sets: { madePublicDonation: true } },
        { text: 'Say nothing. Ride it out.',
          sub: '(You put the paper down and go to work.)',
          consequence: 'The story runs two more days, then fades. Your reputation drops and holds there. No one will mention it to your face. Everyone will have read it.',
          changes: { reputation: -7, compliance: -2, influence: 2, wealth: 0 } },
      ],
    },
    {
      title: 'The Deal', location: 'Civic Administration Building',
      art: 'council', label: 'WEEK SIX', pivotal: true,
      npcName: 'Official Drev',
      npcLine: '"Forty percent reduction on the assessment in perpetuity, in exchange for twenty percent of your largest warehouse allocated to civic storage. No interference with your commercial operations. The offer is on the table for seven days."',
      innerVoice: 'He came to you. That means he needs something. The question is whether what he\'s offering is worth what he\'s asking.',
      body: `<p>Drev presents the deal the way someone presents a decision already made. <em>Twenty percent of your warehouse. Forty percent assessment reduction. The math works — if the "no interference" clause holds.</em></p>`,
      memoryLines: {
        metDrev: `<p><em>You\'ve met him before. He remembers. That helps — not much, but some.</em></p>`,
        investigatedCass: `<p><em>Cass got infrastructure contracts in exchange for storage access. This is the same structure. Now you know what it actually means.</em></p>`,
      },
      choices: [
        { text: 'Accept the deal.',
          sub: '"Seven days is more time than I need. Yes."',
          consequence: 'Signed. The assessment drops immediately. The warehouse section is allocated. Your compliance record improves dramatically. You have made a real concession that has real benefits.',
          changes: { compliance: 12, wealth: 9, reputation: 8, influence: 4 }, sets: { acceptedDeal: true } },
        { text: 'Counter-offer: ten percent warehouse, same assessment reduction.',
          sub: '"Twenty is more than the value. Ten is proportional. That\'s my counter."',
          consequence: 'Drev considers for three days. He comes back at fifteen percent. You agree. It costs less than the original offer and you negotiated it. Drev notes this for future conversations.',
          changes: { compliance: 6, wealth: 4, reputation: 5, influence: 6 }, sets: { acceptedDeal: true } },
        { text: 'Reject the deal. Pay the full assessment and maintain control.',
          sub: '"I pay the assessment in full. That\'s my civic contribution. The warehouse stays mine."',
          consequence: 'Drev accepts the rejection without expression. The assessment stands. Your independence is preserved. Your compliance score does not improve. The conversation is over, for now.',
          changes: { compliance: -6, wealth: -10, influence: 5, reputation: -2 }, sets: { rejectedDeal: true } },
      ],
    },
    {
      title: 'The Strike', location: 'Marsh Trading Company — Warehouse',
      art: 'assembly', label: 'WEEK EIGHT',
      npcName: 'Official Drev',
      npcLine: '"We are aware of the situation. If the work stoppage continues past day five, the civic mediation board becomes involved. Their ruling is binding. I thought you should have the timeline."',
      innerVoice: 'He is giving you a deadline and calling it information. He is also right that you have five days.',
      body: `<p>Forty workers. Day three. The warehouse is still. Drev\'s call came this morning — civic courtesy, he called it. <em>The workers want the petition concession you resisted. Or did not fully grant. Or did grant, depending on which week you\'re counting from.</em> The timeline is five days before it leaves your hands entirely.</p>`,
      memoryLines: {
        grantedPetition: `<p><em>You already granted the reclassification. Whatever this is, it\'s a different grievance — or you need to remind them what you already gave.</em></p>`,
        contestedPetition: `<p><em>The guild appeal came back in your favor. The workers filed a civic grievance the same day. This is that grievance, made physical.</em></p>`,
      },
      choices: [
        { text: 'Meet with the workers directly. Offer real, specific concessions.',
          sub: '"I want to sit down with Cassev today. No intermediaries, no lawyers. I want to hear what they need."',
          consequence: 'The meeting runs three hours. You offer full pension reclassification and a quarterly review mechanism. The workers return the next morning. Drev is not needed. The cost is real and the workers know you sat down.',
          changes: { compliance: 9, reputation: 11, wealth: -7, influence: 5 } },
        { text: 'Wait out the five days. Let the mediation board come.',
          sub: '(You tell Levin to prepare for binding arbitration and go back to work.)',
          consequence: 'Day six: the board arrives. Their ruling grants the workers full reclassification plus a penalty surcharge for delayed resolution. It costs more than meeting with Cassev would have.',
          changes: { compliance: -4, reputation: -9, wealth: -5, influence: -6 } },
        { text: 'Offer a partial concession before day five — enough to restart negotiations.',
          sub: '"Three-quarter reclassification effective immediately. Full rate after six months of review. That\'s the offer on the table today."',
          consequence: 'Cassev takes it back to the workers. They vote. Return on day four, which keeps mediation out. The concession costs less than full, and the process stays in your hands.',
          changes: { compliance: 5, reputation: 6, wealth: -4, influence: 3 } },
      ],
    },
    {
      title: 'The Final Offer', location: 'Imperial Council Chamber',
      art: 'council', label: 'WEEK TEN', isFinal: true,
      npcName: 'Official Drev',
      npcLine: '"Thirty percent of your largest property converted to worker cooperative housing. In exchange: permanent assessment reduction, civic endorsement, and full commercial freedom on your remaining assets. The society is being built, Mr. Marsh. This is your opportunity to be part of that."',
      innerVoice: 'He said opportunity. He means your last negotiating position before this stops being optional.',
      body: `<p>The council chamber is formal and cold. Drev has three officials with him. The proposal is real — thirty percent of the Westgate property, converted to cooperative housing for lower-district workers. In exchange: significant tax relief, a civic commendation, and the government stops looking at the other two properties. <em>This is the offer that ends the conversation, one way or another.</em></p>`,
      memoryLines: {
        acceptedDeal: `<p><em>You\'ve made concessions before and survived them. The model is familiar now.</em></p>`,
        madePublicDonation: `<p><em>Your reputation can absorb a concession framed correctly. You\'ve seen how this works.</em></p>`,
        rejectedDeal: `<p><em>You rejected the warehouse deal. This is what followed.</em></p>`,
      },
      choices: [
        { text: 'Accept in full. Make it public and frame it your way.',
          sub: '"Yes. And I\'ll announce it myself, in my own words, before you do."',
          consequence: 'Drev agrees. You draft the announcement that afternoon. The cooperative housing opens in eight months. The civic gazette calls it a partnership. You call it a business decision. Both are true.',
          changes: { compliance: 14, reputation: 12, influence: 7, wealth: -18 } },
        { text: 'Negotiate to fifteen percent. Hold the other half.',
          sub: '"Thirty is the opening position. Fifteen is where this ends. I\'ll put it in writing today."',
          consequence: 'Three days of back-and-forth. Drev settles at eighteen percent. You accept. You kept more than you gave up, and you still got the tax relief. Cassev calls it a partial victory. You call it a successful negotiation.',
          changes: { compliance: 7, reputation: 6, influence: 8, wealth: -8 } },
        { text: 'Refuse. Fight this through the civic appeals process.',
          sub: '"My property. My choice. I\'ll see you at the appeals board."',
          consequence: 'The appeal takes five months. You win partial protections — fifteen percent is ordered instead of thirty. The legal fees cost eight thousand. Your influence grows among merchants who watched the fight. The government files a review of your other properties.',
          changes: { compliance: -12, reputation: -6, influence: 10, wealth: -10 } },
      ],
    },
  ],
},

]; // end CHARACTERS

// ─── ENDINGS ─────────────────────────────────────────────────
const ENDINGS = {

  poor: [
    {
      condition: gs => gs.stats.survival >= 48 && gs.stats.hope >= 45,
      eyebrow: 'LIRA VOSS — FINAL RECORD',
      title: 'The Voice That Was Heard',
      body: 'Lira did not just survive — she made something from the surviving. The housing bill passed. Her name is not in the record, but her words are in the room where it changed. Tam asked her on the walk home why she looked different. She said she wasn\'t sure yet. That was the truth, and it was enough.',
    },
    {
      condition: gs => gs.stats.community >= 60,
      eyebrow: 'LIRA VOSS — FINAL RECORD',
      title: 'The Neighbor Who Built',
      body: 'The building got harder and she built more. Maren. The cooperative. Fenn\'s petition. Each connection cost something and returned more. Lira\'s stability came not from the system that was supposed to hold her but from the people around her who decided to hold each other instead. Tam has eleven names he can call if he needs something.',
    },
    {
      condition: gs => gs.stats.survival >= 30,
      eyebrow: 'LIRA VOSS — FINAL RECORD',
      title: 'Still Standing',
      body: 'She made it. That is not a small thing — it is exactly as large as it sounds from inside the life she was living. No crisis claimed the room. No week broke her completely. Iliatania did not become what it promised. But Lira is still here. Still at the stall before dawn. Still telling Tam yes when she can and the truth when she can\'t.',
    },
    {
      condition: () => true,
      eyebrow: 'LIRA VOSS — FINAL RECORD',
      title: 'The Weight of It',
      body: 'Some weights are too specific for anyone outside them to understand. Lira carried hers through twenty days that required more of her than anyone asked — because no one was asking. The system recorded none of it. Tam will remember a mother who did not quit. That has to be its own form of record.',
    },
  ],

  rich: [
    {
      condition: gs => gs.stats.compliance >= 65 && gs.stats.reputation >= 65,
      eyebrow: 'ALDRIC MARSH — FINAL RECORD',
      title: 'The Merchant Who Transformed',
      body: 'Aldric did not lose what twenty years built. He changed what it meant. The cooperative housing unit opened on the Westgate property. His workers have pension credits that count. The civic gazette ran a long profile — not hostile. He does not call himself a philanthropist. He calls it practical. He is not entirely wrong, and he knows it.',
    },
    {
      condition: gs => gs.stats.wealth >= 65 && gs.stats.influence >= 65,
      eyebrow: 'ALDRIC MARSH — FINAL RECORD',
      title: 'The Deal Maker',
      body: 'He gave ground where ground needed giving and held the line where it mattered. The assessment did not break him. The inspection did not catch him. The strike resolved before the board arrived. Aldric emerges from ten weeks with his business intact and his influence grown — because people who watch negotiations learn more about a man from how he handles them than from what he says.',
    },
    {
      condition: gs => gs.stats.influence >= 50,
      eyebrow: 'ALDRIC MARSH — FINAL RECORD',
      title: 'The Fighter',
      body: 'He fought every inch of it. Some he won. Some he lost. The appeals cost him money and bought him a reputation among merchants as someone who does not fold, which is worth something in a world where the government is watching closely. He is not comfortable. He is not diminished. He is a man in a long argument that is not over, and he knows it.',
    },
    {
      condition: () => true,
      eyebrow: 'ALDRIC MARSH — FINAL RECORD',
      title: 'The Cost',
      body: 'Twenty years of building is not undone in ten weeks. But it can be bent, and some things once bent do not return to their original shape. The assessment, the strike, the story — each took something from Aldric that money does not fully replace. He still has the business. He is not sure what kind of man he has become in order to keep it.',
    },
  ],
};

// ─── FINAL ENDINGS ───────────────────────────────────────────
const FINAL_ENDINGS = [
  {
    condition: gs =>
      (gs.completedQuality.poor === 'good' || gs.completedQuality.poor === 'medium') &&
      (gs.completedQuality.rich === 'good'),
    artKey: 'assembly',
    title: 'The Society Iliatania Promised',
    subtitle: 'Two lives. One possibility.',
    body: `<p>Somewhere in the lower district, a woman named Lira is at her stall before dawn. The housing form now has a box for freelance workers. Tam is in school. In the upper district, a man named Aldric signed over a warehouse section and got a tax reduction in return. His workers have pension credits that count. Neither of them knows the other exists.</p><p>Iliatania did not become perfect. It became <em>slightly more honest about what it owed the people inside it.</em> That is not the ending anyone would choose to write. It is the ending that actually happens when enough people push in the same direction from different starting points.</p>`,
  },
  {
    condition: gs =>
      (gs.completedQuality.poor === 'good' || gs.completedQuality.poor === 'medium') &&
      (gs.completedQuality.rich === 'medium' || gs.completedQuality.rich === 'bad'),
    artKey: 'rooftop',
    title: 'Two Cities in One',
    subtitle: 'The gap is real. So is the movement.',
    body: `<p>From the rooftop you can see both districts at once. The lower district still runs on improvisation, community, and things that are not supposed to work but do. The upper district still has men who built things and would prefer the rules stayed the same as when they were winning.</p><p>Change is not coming because the system decided to allow it. It is coming because people like Lira did not stop when the system told them to wait. The gap between the two cities is still wide. It has people crossing it now.</p>`,
  },
  {
    condition: gs =>
      (gs.completedQuality.poor === 'bad') &&
      (gs.completedQuality.rich === 'good' || gs.completedQuality.rich === 'medium'),
    artKey: 'council',
    title: 'Inequality as Architecture',
    subtitle: 'Built in. Held in place.',
    body: `<p>The society's mechanisms ran exactly as designed. A man who already had resources navigated the new framework and emerged with his position intact — perhaps even stronger. A woman who needed the system to notice her spent twenty days discovering that "enough to survive" means something different depending on where you start.</p><p>Iliatania promises opportunity belongs to those who earn it. What it delivers is a society where earning is much easier from some starting points than others. The promise is not a lie. It is something more durable than a lie: a half-truth held in place by architecture.</p>`,
  },
  {
    condition: () => true,
    artKey: 'corridor',
    title: 'The Ongoing Question',
    subtitle: 'Nothing resolved. Everything matters.',
    body: `<p>Two people moved through Iliatania's systems over the same weeks. Neither of them knew the other. Their choices rippled into a society that recorded some of it and ignored the rest. The system did not transform. Neither did they, entirely.</p><p>Iliatania is not a finished thing. It is an argument still in progress — about who it is actually for, what the promise of merit means in practice, and whether people at different starting points are playing the same game. That argument is ongoing. So are the lives inside it.</p>`,
  },
];

// ─── GAME STATE ───────────────────────────────────────────────
const gameState = {
  currentChar: null,
  currentScene: 0,
  stats: {},
  completed: {},
  completedQuality: {},
  councilPlayed: false,
  memory: {},
  completedMemory: {},
  societyScore: 50,
  achievements: {},
};

// ─── UTILITIES ────────────────────────────────────────────────
function clamp(v, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, v));
}

function getCurrentRank(char, val) {
  for (const tier of char.rankTiers) {
    if (val >= tier.min) return tier.name;
  }
  return char.rankTiers[char.rankTiers.length - 1].name;
}

let _txOverlay = null;
function showScreen(id) {
  if (!_txOverlay) {
    _txOverlay = document.createElement('div');
    _txOverlay.id = 'tx-overlay';
    document.body.appendChild(_txOverlay);
  }
  _txOverlay.classList.add('tx-on');
  setTimeout(() => {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
      s.classList.add('hidden');
    });
    const el = document.getElementById(id);
    if (el) { el.classList.remove('hidden'); el.classList.add('active'); }
    requestAnimationFrame(() => _txOverlay.classList.remove('tx-on'));
  }, 280);
}

// ─── STAT RENDERING ───────────────────────────────────────────
function renderStats() {
  const char = gameState.currentChar;
  const barsEl = document.getElementById('ss-bars');
  barsEl.innerHTML = '';
  char.statDefs.forEach(def => {
    const val = clamp(gameState.stats[def.key] || 0);
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.dataset.key = def.key;
    row.innerHTML =
      `<div class="stat-label-row">` +
        `<span class="stat-icon" style="color:${def.color}">${def.icon}</span>` +
        `<span class="stat-name">${def.label}</span>` +
        `<span class="stat-val" id="sv-${def.key}">${val}</span>` +
      `</div>` +
      `<div class="stat-bar-track">` +
        `<div class="stat-bar-fill" id="sbf-${def.key}" style="width:${val}%;background:${def.color}"></div>` +
      `</div>`;
    barsEl.appendChild(row);
  });
  updateRankDisplay();
}

function updateRankDisplay() {
  const char = gameState.currentChar;
  if (!char) return;
  const rankVal = clamp(gameState.stats[char.rankStatKey] || 0);
  const rankName = getCurrentRank(char, rankVal);
  const rankEl = document.getElementById('rank-display');
  if (rankEl) {
    rankEl.innerHTML =
      `<div class="rank-tier">${char.classLabel}</div>` +
      `<div class="rank-name">${rankName}</div>`;
  }
  const ghRight = document.getElementById('gh-right');
  if (ghRight) {
    const score = Math.round(gameState.societyScore || 50);
    const socLabel = score >= 70 ? 'JUST' : score >= 50 ? 'CONTESTED' : score >= 30 ? 'STRAINED' : 'FRACTURED';
    ghRight.innerHTML =
      `<span class="gh-rank">${rankName}</span>` +
      `<span class="gh-soc soc-${socLabel.toLowerCase()}" id="gh-soc" title="Iliatania Society Score: ${score}/100">` +
        `ILIATANIA ${score}` +
      `</span>`;
  }
}

// ─── STAT ANIMATION ───────────────────────────────────────────
function animateStats(changes) {
  const updates = {};
  Object.entries(changes).forEach(([key, delta]) => {
    const from = clamp(gameState.stats[key] || 0);
    const to = clamp(from + delta);
    updates[key] = { from, to, delta };
    gameState.stats[key] = to;
  });

  setTimeout(() => {
    Object.entries(updates).forEach(([key, { from, to, delta }]) => {
      const fillEl = document.getElementById(`sbf-${key}`);
      const valEl = document.getElementById(`sv-${key}`);
      const rowEl = fillEl ? fillEl.closest('.stat-row') : null;

      if (fillEl) {
        fillEl.style.width = `${to}%`;
        fillEl.classList.add('stat-glow');
        setTimeout(() => fillEl.classList.remove('stat-glow'), 1400);
      }
      if (valEl) animateNumber(valEl, from, to, 900);
      if (rowEl && delta !== 0) {
        showStatDelta(rowEl, delta);
        if (delta > 0) {
          const def = gameState.currentChar?.statDefs.find(d => d.key === key);
          spawnParticles(rowEl, def ? def.color : '#c8a850', 4);
        }
      }
    });
    const net = Object.values(updates).reduce((acc, { delta }) => acc + delta, 0);
    if (net > 0) Sound.play('stat-up');
    else if (net < -4) Sound.play('stat-down');
    updateAmbient();
    updateRankDisplay();
  }, 1000);
}

function animateNumber(el, from, to, duration) {
  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    el.textContent = Math.round(from + (to - from) * ease);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function showStatDelta(rowEl, delta) {
  const badge = document.createElement('div');
  badge.className = 'stat-delta';
  badge.textContent = delta > 0 ? `+${delta}` : `${delta}`;
  badge.style.color = delta > 0 ? '#5aad8a' : '#e05030';
  rowEl.style.position = 'relative';
  rowEl.appendChild(badge);
  setTimeout(() => badge.remove(), 1800);
}

// ─── SOCIETY SCORE ────────────────────────────────────────────
function computeSocietyDelta(changes) {
  const char = gameState.currentChar;
  if (!char) return 0;
  let delta = 0;
  if (char.id === 'poor') {
    delta = Math.round(((changes.hope || 0) + (changes.community || 0)) * 0.35);
  } else {
    delta = Math.round(((changes.compliance || 0) + (changes.reputation || 0)) * 0.35);
  }
  return Math.max(-12, Math.min(12, delta));
}

function updateSocietyDisplay() {
  const el = document.getElementById('gh-soc');
  if (!el) return;
  const score = Math.round(gameState.societyScore || 50);
  const socLabel = score >= 70 ? 'JUST' : score >= 50 ? 'CONTESTED' : score >= 30 ? 'STRAINED' : 'FRACTURED';
  el.textContent = `ILIATANIA ${score}`;
  el.className = `gh-soc soc-${socLabel.toLowerCase()}`;
  el.title = `Iliatania Society Score: ${score}/100 — ${socLabel}`;
}

// ─── RULES SCREEN ─────────────────────────────────────────────
function showRulesScreen() {
  const el = document.getElementById('rules-content');
  if (el) {
    el.innerHTML = SOCIETY_RULES.map(r =>
      `<div class="rule-card${r.credit ? ' rule-civ-header' : ''}">` +
        `<div class="rule-icon">${r.icon}</div>` +
        `<div class="rule-body">` +
          (r.grapesCat ? `<div class="rule-cat">${r.grapesCat}</div>` : '') +
          `<h3 class="rule-title">${r.title}</h3>` +
          `<p class="rule-text">${r.body}</p>` +
          (r.credit ? `<p class="rule-credit">Project by: <strong>Tomas C &amp; Tengyi Zou</strong></p>` : '') +
        `</div>` +
      `</div>`
    ).join('');
  }
  const hEl = document.querySelector('#rules-screen .rules-title');
  if (hEl) hEl.textContent = 'Civilization Overview';
  const eEl = document.querySelector('#rules-screen .rules-eyebrow');
  if (eEl) eEl.textContent = 'ILIATANIA — GRAPES BREAKDOWN';
  const sEl = document.querySelector('#rules-screen .rules-sub');
  if (sEl) sEl.textContent = 'Built on merit. Tested by two lives.';
  showScreen('rules-screen');
}

// ─── CHARACTER BACKGROUND SCREEN ──────────────────────────────
function showCharBackground(char) {
  const bg = char.background;
  const nameEl = document.getElementById('cb-charname');
  const titleEl = document.getElementById('cb-chartitle');
  const classEl = document.getElementById('cb-classlabel');
  const iconEl = document.getElementById('cb-icon');
  const contentEl = document.getElementById('cb-content');
  const contBtn = document.getElementById('cb-continue');
  const screen = document.getElementById('char-bg-screen');

  if (nameEl) nameEl.textContent = char.name;
  if (titleEl) titleEl.textContent = char.title;
  if (classEl) classEl.textContent = char.classLabel;
  if (iconEl) { iconEl.textContent = char.icon; iconEl.style.color = char.color; }
  if (screen) screen.style.setProperty('--char-color', char.color);
  if (contBtn) contBtn.dataset.charId = char.id;

  if (contentEl) {
    contentEl.innerHTML =
      `<div class="cb-section">` +
        `<div class="cb-label">WHO IS ${char.name.toUpperCase()}?</div>` +
        `<p>${bg.who}</p>` +
      `</div>` +
      `<div class="cb-section">` +
        `<div class="cb-label">THE PROBLEMS</div>` +
        `<p>${bg.problems}</p>` +
      `</div>` +
      `<div class="cb-section">` +
        `<div class="cb-label">GOALS</div>` +
        `<p>${bg.goals}</p>` +
      `</div>` +
      `<div class="cb-section">` +
        `<div class="cb-label">BELIEFS</div>` +
        `<p>${bg.beliefs}</p>` +
      `</div>` +
      `<div class="cb-player-goal">` +
        `<div class="cb-pg-label">YOUR MISSION AS THE PLAYER</div>` +
        `<p>${bg.playerGoal}</p>` +
      `</div>` +
      `<div class="cb-stats-preview">` +
        `<div class="cb-stats-title">Starting Stats</div>` +
        char.statDefs.map(def =>
          `<div class="cb-stat-row">` +
            `<span class="cb-stat-icon" style="color:${def.color}">${def.icon}</span>` +
            `<span class="cb-stat-label">${def.label}</span>` +
            `<span class="cb-stat-val">${char.initialStats[def.key]}</span>` +
            `<div class="cb-stat-track">` +
              `<div class="cb-stat-fill" style="width:${char.initialStats[def.key]}%;background:${def.color}"></div>` +
            `</div>` +
          `</div>`
        ).join('') +
      `</div>`;
  }
  showScreen('char-bg-screen');
}

// ─── CHARACTER SELECT ─────────────────────────────────────────
function renderCharSelect() {
  const grid = document.getElementById('char-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CHARACTERS.forEach(char => {
    const done = !!gameState.completed[char.id];
    const card = document.createElement('div');
    card.className = `char-card${done ? ' char-done' : ''}`;
    card.style.setProperty('--char-color', char.color);

    if (done) {
      card.innerHTML =
        `<div class="char-card-top">` +
          `<span class="char-icon" style="color:${char.color}">${char.icon}</span>` +
          `<span class="char-badge">COMPLETED</span>` +
        `</div>` +
        `<div class="char-name">${char.name}</div>` +
        `<div class="char-card-title">${char.classLabel}</div>` +
        `<div class="char-done-title">${gameState.completed[char.id]}</div>`;
    } else {
      card.innerHTML =
        `<div class="char-card-top">` +
          `<span class="char-icon" style="color:${char.color}">${char.icon}</span>` +
        `</div>` +
        `<div class="char-name">${char.name}</div>` +
        `<div class="char-card-title">${char.classLabel}</div>` +
        `<p class="char-card-tag">${char.tagline}</p>` +
        `<button class="btn-primary char-play-btn" data-id="${char.id}">` +
          `Play as ${char.name.split(' ')[0]} &#8594;` +
        `</button>`;
    }
    grid.appendChild(card);
  });

  const allDone = CHARACTERS.every(c => gameState.completed[c.id]);
  const unlockEl = document.getElementById('council-unlock');
  if (unlockEl) unlockEl.classList.toggle('hidden', !allDone);
}

// ─── START CHARACTER (from background screen) ─────────────────
function startCharacter(charId) {
  const char = CHARACTERS.find(c => c.id === charId);
  if (!char) return;
  showCharBackground(char);
}

function beginGame(charId) {
  const char = CHARACTERS.find(c => c.id === charId);
  if (!char) return;

  gameState.currentChar = char;
  gameState.currentScene = 0;
  gameState.stats = { ...char.initialStats };
  gameState.memory = {};

  const gameScreen = document.getElementById('game-screen');
  if (gameScreen) gameScreen.style.setProperty('--char-color', char.color);

  const nameEl = document.getElementById('gh-charname');
  if (nameEl) nameEl.textContent = char.name;

  renderStats();
  updateAmbient();
  showScreen('game-screen');
  showScene(0);
}

// ─── SCENE FLOW ───────────────────────────────────────────────
function showScene(idx) {
  const char = gameState.currentChar;
  const scene = char.scenes[idx];
  gameState.currentScene = idx;

  const progEl = document.getElementById('gh-prog');
  if (progEl) {
    progEl.innerHTML = Array.from({ length: char.scenes.length }, (_, i) => {
      const cls = i < idx ? 'sdot sdot-done' : i === idx ? 'sdot sdot-current' : 'sdot sdot-future';
      return `<span class="${cls}" title="Scene ${i + 1}${i < idx ? ' — done' : i === idx ? ' — here' : ''}"></span>`;
    }).join('');
  }

  // Reset silhouette before cutscene
  const silEl = document.getElementById('player-silhouette');
  if (silEl) silEl.classList.remove('sil-vis');

  showCutscene(scene, () => {
    const artEl = document.getElementById('scene-art');
    if (artEl) artEl.innerHTML = SCENE_ART[scene.art] || '';

    if (silEl) {
      silEl.innerHTML = SILHOUETTES[char.silhouette] || '';
      requestAnimationFrame(() => requestAnimationFrame(() => silEl.classList.add('sil-vis')));
    }
    renderScene(scene);
    const govLaw = GOV_LAWS[`${char.id}.${idx}`];
    if (govLaw) setTimeout(() => showDispatch(govLaw), 700);
  });
}

function showCutscene(scene, callback) {
  Sound.play('cutscene');
  const ov = document.getElementById('cutscene-ov');
  const locEl = document.getElementById('cso-loc');
  const ttlEl = document.getElementById('cso-ttl');
  const numEl = document.getElementById('cso-num');

  if (locEl) locEl.textContent = scene.location || '';
  if (ttlEl) ttlEl.textContent = scene.title || '';
  if (numEl) numEl.textContent = scene.label || '';

  if (ov) ov.classList.add('cso-on');

  setTimeout(() => {
    if (ov) ov.classList.remove('cso-on');
    setTimeout(() => { if (callback) callback(); }, 600);
  }, 2200);
}

function renderScene(scene) {
  let bodyHtml = scene.body || '';
  if (scene.memoryLines) {
    Object.entries(scene.memoryLines).forEach(([flag, html]) => {
      if (gameState.memory[flag]) bodyHtml += html;
    });
  }

  const locEl = document.getElementById('sc-location');
  const lblEl = document.getElementById('sc-label');
  const ttlEl = document.getElementById('sc-title');
  const bodyEl = document.getElementById('sc-body');
  if (locEl) locEl.textContent = scene.location || '';
  if (lblEl) lblEl.textContent = scene.label || '';
  if (ttlEl) { ttlEl.textContent = ''; setTimeout(() => { ttlEl.textContent = scene.title || ''; ttlEl.classList.add('title-reveal'); }, 80); }
  if (bodyEl) {
    bodyEl.innerHTML = bodyHtml;
    bodyEl.classList.remove('scene-reveal');
    void bodyEl.offsetWidth;
    bodyEl.classList.add('scene-reveal');
  }

  // Inner voice — typewriter
  const ivEl = document.getElementById('inner-voice');
  if (ivEl) {
    if (scene.innerVoice) {
      ivEl.textContent = '';
      ivEl.classList.remove('hidden');
      setTimeout(() => typewriter(ivEl, scene.innerVoice, 18), 350);
    } else {
      ivEl.classList.add('hidden');
    }
  }

  // NPC bubble — typewriter after slide-in
  const npcBubble = document.getElementById('npc-bubble');
  const npcSpeaker = document.getElementById('npc-speaker');
  const npcLine = document.getElementById('npc-line');
  if (npcBubble) npcBubble.classList.remove('npc-vis');

  if (scene.npcName && scene.npcLine) {
    if (npcSpeaker) npcSpeaker.textContent = scene.npcName;
    if (npcLine) npcLine.textContent = '';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (npcBubble) npcBubble.classList.add('npc-vis');
      setTimeout(() => { if (npcLine) typewriter(npcLine, scene.npcLine, 20); }, 650);
    }));
  }

  // Reset consequence and continue
  const consEl = document.getElementById('consequence');
  const contBtn = document.getElementById('continue-btn');
  if (consEl) consEl.classList.add('hidden');
  if (contBtn) contBtn.classList.add('hidden');

  // Choices with stagger
  renderChoices(scene.choices);

  // Pivotal moment banner
  const _existPiv = document.querySelector('.pivotal-banner');
  if (_existPiv) _existPiv.remove();
  if (scene.pivotal) {
    const _pivBanner = document.createElement('div');
    _pivBanner.className = 'pivotal-banner';
    _pivBanner.innerHTML = '<span class="piv-gem">◆</span> PIVOTAL MOMENT — This choice will echo';
    const _choicesEl = document.getElementById('choices');
    if (_choicesEl) _choicesEl.before(_pivBanner);
  }

  // Investigation panel + countdown/mechanic (after choices rendered)
  const _extras = SCENE_EXTRAS[`${gameState.currentChar.id}.${gameState.currentScene}`];
  if (_extras) {
    if (_extras.investigate) renderInvestigate(_extras.investigate);
    if (_extras.mechanic) {
      _pendingUrgency = _extras.urgency || null;
      renderMechanic(_extras.mechanic);
    } else if (_extras.urgency) {
      startCountdown(_extras.urgency);
    }
    // NPC dialogue — make bubble interactive if questions exist
    if (_extras.npcQuestions && scene.npcName) {
      setTimeout(() => {
        const bubble = document.getElementById('npc-bubble');
        if (bubble) {
          bubble.classList.add('npc-interactive');
          bubble.addEventListener('click', function onBubbleClick() {
            if (!bubble.classList.contains('dialogue-mode')) {
              Sound.play('reveal');
              enterNpcDialogue(_extras.npcQuestions, scene.npcName, scene.npcLine);
            }
          });
        }
      }, 1200);
    }
  }
  renderWorldEcho(gameState.currentChar.id, gameState.currentScene);
  Sound.play('reveal');
}

function renderChoices(choices) {
  const choicesEl = document.getElementById('choices');
  if (!choicesEl) return;
  choicesEl.innerHTML = '';

  let visibleIdx = 0;
  choices.forEach((ch, i) => {
    if (ch.requiresMemory && !gameState.memory[ch.requiresMemory]) return;

    const locked = ch.minStat &&
      Object.entries(ch.minStat).some(([k, v]) => (gameState.stats[k] || 0) < v);

    const btn = document.createElement('button');
    btn.className = `choice-btn${locked ? ' locked' : ''}`;
    btn.dataset.idx = i;

    // Stat impact preview shown on hover
    let previewHtml = '';
    if (ch.changes && !locked) {
      const char = gameState.currentChar;
      previewHtml = `<span class="choice-stat-preview">` +
        Object.entries(ch.changes)
          .filter(([, v]) => v !== 0)
          .map(([k, v]) => {
            const def = char.statDefs.find(d => d.key === k);
            return `<span style="color:${v > 0 ? '#5aad8a' : '#e05030'}">${def ? def.icon : k}&thinsp;${v > 0 ? '+' : ''}${v}</span>`;
          }).join('') +
        `</span>`;
    }

    btn.innerHTML =
      `<span class="choice-main">${ch.text}</span>` +
      (ch.sub ? `<span class="choice-sub">${ch.sub}</span>` : '') +
      previewHtml +
      (locked ? `<span class="choice-lock-note">Requires higher stat</span>` : '');

    if (!locked) {
      btn.addEventListener('click', () => handleChoice(i));
      if (ch.changes) {
        btn.addEventListener('mouseenter', () => previewStats(ch.changes));
        btn.addEventListener('mouseleave', clearStatPreview);
      }
    }

    // Staggered entrance
    btn.style.cssText = 'opacity:0;transform:translateY(12px)';
    const delay = 420 + visibleIdx * 110;
    setTimeout(() => {
      btn.style.transition = 'opacity 0.38s ease, transform 0.38s ease, background 0.14s, border-color 0.14s';
      btn.style.opacity = '';
      btn.style.transform = '';
    }, delay);
    visibleIdx++;

    choicesEl.appendChild(btn);
  });
}

function handleChoice(idx) {
  Sound.play('click');
  stopCountdown();
  const scene = gameState.currentChar.scenes[gameState.currentScene];
  const choice = scene.choices[idx];

  // Fire toasts for memory flags being set
  if (choice.sets) Object.keys(choice.sets).forEach(flag => { if (choice.sets[flag]) showToast(flag); });
  // Log to journal
  journalLog(scene.title, choice.text, choice.consequence);

  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    b.classList.add('selected-dimmed');
  });
  const selectedBtn = document.querySelector(`.choice-btn[data-idx="${idx}"]`);
  if (selectedBtn) {
    selectedBtn.classList.remove('selected-dimmed');
    selectedBtn.classList.add('choice-selected');
  }

  if (choice.sets) Object.assign(gameState.memory, choice.sets);

  // Civic dispatch headlines for significant memory flags
  if (choice.sets) {
    Object.keys(choice.sets).forEach(flag => {
      if (choice.sets[flag] && DISPATCH_HEADLINES[flag]) showDispatch(DISPATCH_HEADLINES[flag]);
    });
  }

  // Merge mechanic bonus on top of base choice changes
  const changes = Object.assign({}, choice.changes);
  if (_mechanicResult && _mechanicResult.bonusChanges) {
    Object.entries(_mechanicResult.bonusChanges).forEach(([k, v]) => {
      changes[k] = (changes[k] || 0) + v;
    });
    _mechanicResult = null;
  }

  if (Object.keys(changes).length > 0) {
    const net = Object.values(changes).reduce((a, b) => a + b, 0);
    if (net < -6) shakeScreen();
    if (net < -12) flashDanger();
    animateStats(changes);
    // Update global society score
    const societyDelta = computeSocietyDelta(changes);
    if (societyDelta !== 0) {
      gameState.societyScore = Math.max(0, Math.min(100, (gameState.societyScore || 50) + societyDelta));
      setTimeout(updateSocietyDisplay, 1100);
    }
  }

  setTimeout(checkAchievements, 1300);

  // Consequence display with typewriter
  const consEl = document.getElementById('consequence');
  const consText = document.getElementById('consequence-text');
  const consChips = document.getElementById('consequence-chips');

  if (consText) {
    consText.textContent = '';
    setTimeout(() => typewriter(consText, choice.consequence || '', 15), 120);
  }
  if (consChips && Object.keys(changes).length > 0) {
    setTimeout(() => {
      consChips.innerHTML = Object.entries(changes).map(([k, v]) => {
        const def = gameState.currentChar.statDefs.find(d => d.key === k);
        const label = def ? def.label : k;
        return `<span class="chip ${v > 0 ? 'chip-pos' : 'chip-neg'} chip-pop">${label} ${v > 0 ? '+' : ''}${v}</span>`;
      }).join('');
    }, 200);
  } else if (consChips) {
    consChips.innerHTML = '';
  }

  if (consEl) consEl.classList.remove('hidden');
  const contBtn = document.getElementById('continue-btn');
  if (contBtn) contBtn.classList.remove('hidden');
}

function nextScene() {
  const char = gameState.currentChar;
  const nextIdx = gameState.currentScene + 1;

  if (nextIdx >= char.scenes.length) {
    checkAchievements();
    finishCharacter();
  } else {
    if (Math.random() < 0.35 && gameState.currentScene > 0) {
      showCityPulse();
      setTimeout(() => showScene(nextIdx), 1800);
    } else {
      showScene(nextIdx);
    }
  }
}

// ─── CHARACTER ENDING ─────────────────────────────────────────
function finishCharacter() {
  const char = gameState.currentChar;
  const endingList = ENDINGS[char.id];
  let endingIdx = endingList.length - 1;
  for (let i = 0; i < endingList.length; i++) {
    if (endingList[i].condition(gameState)) { endingIdx = i; break; }
  }
  const ending = endingList[endingIdx];

  // Track quality: 0-1 = good, 2 = medium, 3 = bad
  const quality = endingIdx === 0 ? 'good' : endingIdx <= 1 ? 'medium' : endingIdx <= 2 ? 'medium' : 'bad';
  gameState.completedQuality[char.id] = quality;
  gameState.completed[char.id] = ending.title;
  gameState.completedMemory[char.id] = Object.assign({}, gameState.memory);

  const eyeEl = document.getElementById('ce-eyebrow');
  const ttlEl = document.getElementById('ce-title');
  const bodyEl = document.getElementById('ce-body');
  const screen = document.getElementById('char-end-screen');

  const successPrefix = endingIdx === 0 ? '✓ SUCCESS — ' : endingIdx === 1 ? '◈ ACHIEVED — ' : '';
  if (eyeEl) eyeEl.textContent = successPrefix + (ending.eyebrow || `${char.name.toUpperCase()} — FINAL RECORD`);
  if (ttlEl) ttlEl.textContent = ending.title;
  if (bodyEl) bodyEl.textContent = ending.body;
  if (screen) screen.style.setProperty('--char-color', char.color);

  showScreen('char-end-screen');
}

// ─── FINAL ENDING ─────────────────────────────────────────────
function showFinalEnding() {
  const final = FINAL_ENDINGS.find(e => e.condition(gameState)) ||
    FINAL_ENDINGS[FINAL_ENDINGS.length - 1];

  const titleEl = document.getElementById('ending-title');
  const subEl = document.getElementById('ending-subtitle');
  const bodyEl = document.getElementById('ending-body');
  const bgArt = document.getElementById('ending-bg-art');
  const voicesEl = document.getElementById('ending-voices');
  const statsEl = document.getElementById('ending-final-stats');

  if (titleEl) titleEl.textContent = final.title;
  if (subEl) subEl.textContent = final.subtitle || '';
  if (bodyEl) bodyEl.innerHTML = final.body;
  if (bgArt) bgArt.innerHTML = SCENE_ART[final.artKey || 'council'] || '';
  const gemEl = document.getElementById('ending-gem');
  if (gemEl) {
    const isBest = FINAL_ENDINGS.indexOf(final) === 0;
    gemEl.textContent = isBest ? '✓ MISSION COMPLETE' : '◆';
    if (isBest) gemEl.classList.add('ending-success-gem');
    else gemEl.classList.remove('ending-success-gem');
  }

  if (voicesEl) {
    voicesEl.innerHTML =
      `<div class="ev-header">THE VOICES OF ILIATANIA</div>` +
      Object.entries(gameState.completed).map(([id, title]) => {
        const char = CHARACTERS.find(c => c.id === id);
        if (!char) return '';
        return `<div class="ev-entry">` +
          `<span class="ev-icon" style="color:${char.color};font-size:1.3rem;margin-right:10px">${char.icon}</span>` +
          `<div>` +
            `<div class="ev-name">${char.name}</div>` +
            `<div class="ev-ending-title">${title}</div>` +
          `</div>` +
        `</div>`;
      }).join('');
  }

  if (statsEl) statsEl.innerHTML = '';

  gameState.councilPlayed = true;
  checkAchievements();
  showScreen('ending-screen');
}

// ─── STAT PREVIEW (hover over choices) ───────────────────────
function previewStats(changes) {
  if (!changes) return;
  Object.entries(changes).forEach(([key, delta]) => {
    const fill = document.getElementById(`sbf-${key}`);
    const valEl = document.getElementById(`sv-${key}`);
    if (!fill) return;
    const current = clamp(gameState.stats[key] || 0);
    const projected = clamp(current + delta);
    if (!fill.dataset.realWidth) fill.dataset.realWidth = fill.style.width;
    fill.style.width = `${projected}%`;
    fill.classList.add('stat-projected');
    if (valEl && !valEl.dataset.realVal) {
      valEl.dataset.realVal = valEl.textContent;
      valEl.textContent = projected;
      valEl.classList.add('stat-projected-val');
    }
  });
}

function clearStatPreview() {
  document.querySelectorAll('.stat-bar-fill.stat-projected').forEach(fill => {
    if (fill.dataset.realWidth !== undefined) {
      fill.style.width = fill.dataset.realWidth;
      delete fill.dataset.realWidth;
    }
    fill.classList.remove('stat-projected');
  });
  document.querySelectorAll('.stat-val.stat-projected-val').forEach(val => {
    if (val.dataset.realVal !== undefined) {
      val.textContent = val.dataset.realVal;
      delete val.dataset.realVal;
    }
    val.classList.remove('stat-projected-val');
  });
}

// ─── ANIMATION UTILITIES ──────────────────────────────────────
function typewriter(el, text, speed = 22) {
  el.textContent = '';
  el.classList.add('typing');
  let i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text[i++];
      const ch = text[i - 1];
      const pause = (ch === '.' || ch === '!' || ch === '?') ? 110 : ch === ',' ? 55 : 0;
      setTimeout(tick, speed + pause);
    } else {
      el.classList.remove('typing');
    }
  }
  tick();
}

function spawnParticles(rowEl, color, count = 4) {
  const rect = rowEl.getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'voi-particle';
    const tx = (Math.random() - 0.5) * 48;
    const ty = -(Math.random() * 32 + 8);
    p.style.cssText =
      `left:${rect.left + Math.random() * rect.width}px;` +
      `top:${rect.top + rect.height * 0.5}px;` +
      `background:${color};` +
      `--tx:${tx}px;--ty:${ty}px;` +
      `animation-delay:${Math.random() * 180}ms`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1300);
  }
}

function updateAmbient() {
  const char = gameState.currentChar;
  if (!char) return;
  const val = clamp(gameState.stats[char.rankStatKey] || 0);
  const danger = parseFloat(Math.max(0, 1 - val / 32).toFixed(3));
  document.documentElement.style.setProperty('--ambient-danger', danger);
}

function shakeScreen() {
  Sound.play('danger');
  const body = document.querySelector('.game-body');
  if (!body) return;
  body.classList.remove('shake-screen');
  void body.offsetWidth;
  body.classList.add('shake-screen');
  setTimeout(() => body.classList.remove('shake-screen'), 560);
}

function flashDanger() {
  const overlay = document.createElement('div');
  overlay.className = 'danger-flash';
  document.querySelector('.game-body')?.appendChild(overlay);
  setTimeout(() => overlay.remove(), 700);
}

// ─── SOUND ENGINE (Web Audio API — no external libs) ──────────
const Sound = (() => {
  let ctx = null;
  function init() {
    if (ctx) return;
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  function tone(freq, type, vol, dur, startOffset = 0, freqEnd = null) {
    if (!ctx) return;
    const t = ctx.currentTime + startOffset;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (freqEnd) o.frequency.exponentialRampToValueAtTime(freqEnd, t + dur * 0.9);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.01);
  }
  function noise(vol, dur, filterFreq = 2000) {
    if (!ctx) return;
    const bufLen = ctx.sampleRate * dur;
    const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / bufLen);
    const src = ctx.createBufferSource();
    const flt = ctx.createBiquadFilter();
    const g = ctx.createGain();
    src.buffer = buf; flt.type = 'bandpass'; flt.frequency.value = filterFreq; flt.Q.value = 0.4;
    src.connect(flt); flt.connect(g); g.connect(ctx.destination);
    g.gain.value = vol; src.start(ctx.currentTime);
  }
  return {
    init,
    play(type) {
      init();
      if (!ctx) return;
      if (type === 'click')          { tone(700, 'sine', 0.07, 0.06); tone(440, 'sine', 0.03, 0.05, 0.04); }
      else if (type === 'hover')     { tone(900, 'sine', 0.025, 0.05); }
      else if (type === 'reveal')    { noise(0.1, 0.12, 2800); tone(330, 'triangle', 0.035, 0.14); }
      else if (type === 'cutscene')  { tone(90, 'sawtooth', 0.12, 0.9, 0, 45); tone(140, 'sine', 0.06, 0.55, 0.15); }
      else if (type === 'stat-up')   { [523,659,784].forEach((f,i) => tone(f,'sine',0.055,0.22,i*0.075)); }
      else if (type === 'stat-down') { tone(220,'sine',0.065,0.28); tone(185,'sine',0.04,0.24,0.06); }
      else if (type === 'danger')    { tone(55,'sawtooth',0.09,0.45); tone(58,'sawtooth',0.065,0.4,0.02); }
      else if (type === 'toast')     { tone(528,'sine',0.05,0.18); tone(660,'sine',0.04,0.14,0.12); }
      else if (type === 'tick')      { tone(880,'square',0.025,0.04); }
      else if (type === 'timeout')   { [220,165,110].forEach((f,i) => tone(f,'sawtooth',0.09,0.22,i*0.12)); }
      else if (type === 'unlock')    { [440,554,660,880].forEach((f,i) => tone(f,'sine',0.06,0.3,i*0.08)); }
      else if (type === 'dispatch')  { tone(220,'sine',0.04,0.18); tone(330,'sine',0.055,0.3,0.1); tone(440,'sine',0.035,0.22,0.22); }
    }
  };
})();

// ─── WORLD ECHOES (cross-character awareness) ─────────────────
const WORLD_ECHOES = {
  // Aldric at The Rival (Week 4) — hears about Lira's cooperative
  'rich.3': [{
    requiredChar: 'poor', requiredFlag: 'joinedCooperative',
    header: 'LOWER DISTRICT — SAME WEEK',
    text: 'The lower district housing cooperative reached twelve members and filed its Article 14 petition with the Civic Registry this week. A different fight than the one in your assembly room today. Same chapter of the charter.',
  }],
  // Aldric at The Story (Week 5) — the gazette article lands while Lira works for Bray
  'rich.4': [{
    requiredChar: 'poor', requiredFlag: 'workingForBray',
    header: 'LOWER DISTRICT MARKET — THIS WEEK',
    text: 'The article about merchant resistance landed the same week a market worker in the lower district started her second week at a private merchant\'s shop on discretion terms. No written contract. Hours already longer than stated. The story doesn\'t mention her. She is in it anyway.',
  }],
  // Aldric at The Strike (Week 8) — housing bill passed same week
  'rich.6': [{
    requiredChar: 'poor', requiredFlag: 'joinedCooperative',
    header: 'LOWER DISTRICT — CIVIC ASSEMBLY',
    text: 'The lower district housing security bill passed in civic assembly this week. Forty workers in your warehouse are watching the same news on the day they are not showing up for work. The charter moved for some people today. They noticed.',
  }],
  // Lira at The Meeting (Day 12) — hears about Aldric\'s petition decision
  'poor.5': [
    {
      requiredChar: 'rich', requiredFlag: 'grantedPetition',
      header: 'UPPER DISTRICT — SAME WEEK',
      text: 'Word filtered through the cooperative this morning: a merchant in the upper district voluntarily granted his workers\' pension reclassification. No guild appeal. No fight. He read the charter and acted on it. Some of them do.',
    },
    {
      requiredChar: 'rich', requiredFlag: 'contestedPetition',
      header: 'UPPER DISTRICT — GUILD APPEALS BOARD',
      text: 'The guild appeals board received a petition contest from an upper district trading company this week — forty workers, pension reclassification, Article 14. Technical grounds. Workers filed a civic grievance the same day. The war moved. It did not end.',
    },
  ],
  // Lira at The Vote (Day 20) — Aldric\'s donation reached her cooperative
  'poor.7': [{
    requiredChar: 'rich', requiredFlag: 'madePublicDonation',
    header: 'UPPER DISTRICT — FIVE DAYS AGO',
    text: 'Fifteen thousand credits to the lower district housing fund. A merchant named Marsh. The gazette covered it briefly. The cooperative emergency provision you drew on last month is partly that money. You did not know. You do now.',
  }],
  // Lira at the hospital (Day 15) — Aldric\'s warehouse deal signed same week
  'poor.6': [{
    requiredChar: 'rich', requiredFlag: 'acceptedDeal',
    header: 'UPPER DISTRICT — THIS WEEK',
    text: 'An upper district merchant signed a civic storage agreement in exchange for a forty percent assessment reduction. A warehouse section, allocated. The gazette called it a partnership. Meanwhile you are in a hospital corridor deciding what five credits means.',
  }],
};

// ─── SCENE EXTRAS (investigate items + urgency timers) ────────
const SCENE_EXTRAS = {
  'poor.0': {
    urgency: 32,
    investigate: [
      { icon: '📋', label: 'Read the Notice',  text: 'Twelve credits by Friday. Standard clause 7b. The civic housing bureau contact number is at the bottom in text small enough to require better light than you have.' },
      { icon: '🪟', label: 'Look Outside',     text: 'The lower district is already moving. Carts, argument, smoke from the tea house three doors down. It smells like rain that hasn\'t decided yet.' },
      { icon: '🍞', label: 'Check the Kitchen',text: 'Half a loaf. Enough for today. Tomorrow is a different question.' },
    ],
    mechanic: {
      type: 'allocate',
      prompt: 'You have 8 credits. Decide how to use them before you choose your plan.',
      pool: 8,
      buckets: [
        { key: 'rent',      icon: '🏠', label: 'Put toward rent',        bonusStat: 'survival', rate: 1.5 },
        { key: 'food',      icon: '🍞', label: 'Stock up on food',       bonusStat: 'health',   rate: 1.8 },
        { key: 'emergency', icon: '⚕',  label: 'Keep as emergency fund', bonusStat: 'hope',     rate: 1.2 },
      ],
    },
    npcQuestions: [
      { q: 'What if I pay six now and the rest next week?', a: 'No partial payments. The bureau won\'t accept a pending balance — the full twelve has to be there. That\'s the policy, not me.' },
      { q: 'Is there any flexibility on the Friday deadline?', a: 'Friday is Friday. If you\'re behind, the bureau marks you in arrears. They won\'t process hardship applications from people who are behind.' },
      { q: 'What\'s the contact at the civic bureau?', a: 'Number\'s at the bottom of the notice. Extension four. They close at three. Don\'t call Friday morning — the line is always full.' },
    ],
  },
  'poor.1': {
    investigate: [
      { icon: '🏪', label: 'Your Old Stall',   text: 'Three years of the same spot, same angle, same morning light. The new vendor has placed his things neatly. He is not wrong to be here. That\'s the worst part.' },
      { icon: '📜', label: 'Guild Placard',    text: 'Certified. Stamped. Current quarter. The certification costs forty credits and takes six weeks. He has been planning this.' },
      { icon: '👥', label: 'Market Crowd',     text: 'The morning traffic is already splitting around both stalls. Customers are confused. Confusion costs you.' },
    ],
  },
  'poor.3': {
    investigate: [
      { icon: '🚪', label: 'Maren\'s Face',    text: 'She has been awake all night. You know because you know what that looks like. You\'ve looked that way too, for different reasons.' },
      { icon: '👧', label: 'Sera',             text: 'Eight years old and fever-pink. Her breathing is fast. She\'s not crying, which is somehow harder to look at.' },
      { icon: '🏠', label: 'The Corridor',     text: 'Seven families on this floor. You know all of them by sound. You don\'t know any of them well enough to ask for four credits without it meaning something.' },
    ],
    mechanic: {
      type: 'allocate',
      prompt: 'You have 4 credits. Before you decide what to do, decide how to split what you have.',
      pool: 4,
      buckets: [
        { key: 'maren',  icon: '🤝', label: 'Give to Maren',         bonusStat: 'community', rate: 4.0 },
        { key: 'self',   icon: '🍞', label: 'Keep for you and Tam',  bonusStat: 'survival',  rate: 3.0 },
        { key: 'shared', icon: '💊', label: 'Buy medicine for Sera', bonusStat: 'health',    rate: 3.5 },
      ],
    },
  },
  'poor.4': {
    npcQuestions: [
      { q: 'What does "discretion" mean exactly?', a: 'It means you don\'t discuss hours or pay with the other workers. Standard arrangement in any decent workplace.' },
      { q: 'Can I have the terms in writing before I decide?', a: 'Of course. My attorney can draft something by tomorrow morning. Take the night to think it over.' },
      { q: 'Why me specifically?', a: 'You\'re reliable. You\'ve been at the market three years. I know what I\'m getting. That\'s worth something.' },
    ],
    mechanic: {
      type: 'slider',
      prompt: 'Bray is watching you. How do you position yourself before you speak?',
      leftLabel: 'Take what he offers',
      rightLabel: 'Hold the line',
      positions: [
        { min: 0,  max: 30,  label: 'You\'ll take it. The stability matters more than the terms right now.', bonusChanges: { survival: 5, hope: -3 } },
        { min: 31, max: 65,  label: 'You\'ll negotiate — carefully, but you won\'t just nod.',               bonusChanges: { hope: 3, health: 1 } },
        { min: 66, max: 100, label: 'You need terms in writing before you shake his hand.',                   bonusChanges: { hope: 6, health: 3, survival: -2 } },
      ],
    },
  },
  'poor.7': {
    mechanic: {
      type: 'compose',
      prompt: 'Three minutes at the assembly. Select 2 points to make in your speech.',
      required: 2,
      points: [
        { key: 'form',     label: 'Name the exact form — 12B, clause 7, clerk Veena by name.',         bonusStat: 'hope',      bonus: 5 },
        { key: 'others',   label: 'You\'re not the only one. Speak for the eleven others you know.',   bonusStat: 'community', bonus: 6 },
        { key: 'solution', label: 'Come with a fix: provisional employer certification, two credits.', bonusStat: 'hope',      bonus: 5 },
        { key: 'tam',      label: 'Tell them about Tam. Not to manipulate — to make it real.',         bonusStat: 'community', bonus: 7 },
        { key: 'record',   label: 'Three years. Six days a week. Every tax paid on time.',             bonusStat: 'survival',  bonus: 4 },
      ],
    },
  },
  'poor.6': {
    urgency: 20,
    investigate: [
      { icon: '🏥', label: 'East Wing Sign',   text: 'Six hours estimated wait. Understaffed. The notice was posted two months ago and not updated.' },
      { icon: '💳', label: 'Private Care',     text: 'Immediate attention. Clean room. Five credits. The difference between this corridor and that door is five credits and the assumption that you have them.' },
      { icon: '👦', label: 'Tam',              text: 'He\'s trying not to show you how bad he feels. He has been doing that since he was five. You didn\'t mean to teach him that.' },
    ],
  },
  'rich.0': {
    npcQuestions: [
      { q: 'What happens if we miss the deadline?', a: 'Penalties at two percent per month, compounding. And it goes on the civic record as delinquent. That affects future contract applications.' },
      { q: 'Is this assessment challengeable?', a: 'Through civic appeals, yes. Four months minimum. During that time your record shows "contested" — which two contract boards will notice.' },
      { q: 'What\'s the best outcome if we pay now?', a: 'Clean record, no penalties, and we negotiate the framework from a position of compliance rather than conflict. That\'s my recommendation.' },
    ],
    investigate: [
      { icon: '📜', label: 'The Assessment',   text: 'Forty-two thousand civic credits. Page three shows the calculation. It is mathematically correct.' },
      { icon: '📊', label: 'Levin\'s Work',    text: 'Six scenarios already on your desk. He ran them last night. You haven\'t opened any of them.' },
      { icon: '🌆', label: 'Window View',      text: 'Three of your properties are visible from this office. They look the same as yesterday. Everything looks the same as yesterday.' },
    ],
  },
  'rich.2': {
    npcQuestions: [
      { q: 'How long have you been building this?', a: 'Three months. I read the charter in full. Article 14, Section 3. It\'s unambiguous. We\'re not asking for anything the law doesn\'t already say we\'re owed.' },
      { q: 'What happens if I contest it through the guild?', a: 'We file a civic grievance the same day you file the appeal. The war doesn\'t end — it just moves to a different board.' },
      { q: 'What do the workers actually want?', a: 'Seasonal work counted at full rate. That\'s it. Three hours of your time to implement. We\'ve been asking informally for two years.' },
    ],
    investigate: [
      { icon: '📄', label: 'The Petition',     text: 'Forty signatures. Article 14, Section 3. Properly formatted and cited. Cassev has read more of the charter than you have.' },
      { icon: '👥', label: 'The Workers',      text: 'Forty people standing in your assembly room, watching you read what they filed. They already know what it says. They want to see what you do with it.' },
      { icon: '📚', label: 'The Charter',      text: 'Cassev\'s copy has sticky notes in three colors and twelve underlined passages. He has been building this for months.' },
    ],
    mechanic: {
      type: 'slider',
      prompt: 'Forty workers are in your assembly room waiting for your response. Where do you stand?',
      leftLabel: 'Contest everything',
      rightLabel: 'Grant in full',
      positions: [
        { min: 0,  max: 30,  label: 'You\'ll fight this through every legal channel available.',   bonusChanges: { compliance: -5, influence: 4, reputation: -4 } },
        { min: 31, max: 65,  label: 'You\'ll respond — but on your own terms and timeline.',       bonusChanges: { compliance: 2, reputation: 2 } },
        { min: 66, max: 100, label: 'You\'ll meet them. Most of it, at least.',                    bonusChanges: { compliance: 7, reputation: 8, wealth: -4 } },
      ],
    },
  },
  'rich.5': {
    investigate: [
      { icon: '📰', label: 'The Article',      text: 'Three columns. Your name, a wealth figure, the phrase "resistant to civic duty." Attributed to "a source close to the appeal." You know who it is.' },
      { icon: '📱', label: 'Business Contacts', text: 'Two messages, both sending you the article without comment. The absence of comment is itself a comment.' },
      { icon: '☕', label: 'Your Office',      text: 'The morning is normal. Your desk is the same. The world outside has already changed in a way that will be slow to unhappen.' },
    ],
  },
  'rich.6': {
    urgency: 28,
    npcQuestions: [
      { q: 'What happens on day five exactly?', a: 'The civic mediation board is notified. Their ruling is binding and not appealable. Their decisions trend toward labor — that\'s not my opinion, that\'s the record.' },
      { q: 'Is there any way to pause the clock?', a: 'No. Day five, they are involved. That is the timeline and it is not negotiable from my end.' },
      { q: 'What do you recommend?', a: 'Off the record? Sit down with Cassev before day five. The board will cost you more than a conversation will. That\'s not civic advice — that\'s arithmetic.' },
    ],
    investigate: [
      { icon: '🏭', label: 'Empty Warehouse',  text: 'Day three. You can hear the silence through the office wall. Forty workers, none of them here.' },
      { icon: '📞', label: 'Drev\'s Call',     text: '"We are aware of the situation." He read that sentence. He had already written it before he picked up the phone.' },
      { icon: '📅', label: 'The Calendar',     text: 'Day five is circled in red in Levin\'s handwriting. He added it last night and didn\'t mention it to you this morning.' },
    ],
  },
};

// ─── TOAST MESSAGES (memory flag → notification) ──────────────
const TOAST_MESSAGES = {
  triedCivicOffice:    { icon: '⊕', title: 'Civic Record',         text: 'You approached the system. It noticed.' },
  owedMaren:           { icon: '◉', title: 'Debt Recorded',         text: 'Three credits. Saturday. She\'ll remember.' },
  challengedSpot:      { icon: '▲', title: 'Objection Filed',       text: '4–6 weeks. The paperwork has started.' },
  allyVendor:          { icon: '⊕', title: 'Alliance',              text: 'A rival became a route to more customers.' },
  cooperativeOption:   { icon: '◈', title: 'Path Opened',           text: 'The cooperative can vouch for you.' },
  foundLoophole:       { icon: '◆', title: 'Knowledge Gained',      text: 'Two credits. Most people don\'t know this.' },
  helpedMaren:         { icon: '⊕', title: 'Community',             text: 'You were there when she had no one else.' },
  workingForBray:      { icon: '●', title: 'Employment',            text: 'Twenty credits a week. Read the fine print.' },
  refusedBray:         { icon: '◈', title: 'Refused',               text: 'You kept looking for another way.' },
  joinedCooperative:   { icon: '◆', title: 'Coalition — 12/12',     text: 'The petition can now be filed.' },
  paidAssessment:      { icon: '◆', title: 'Assessment Paid',       text: '42,000 credits gone. Your record is clean.' },
  contestedAssessment: { icon: '▲', title: 'Appeal Filed',          text: '"Contested" now shows on your record.' },
  metDrev:             { icon: '◉', title: 'Connection Made',       text: 'Official Drev will remember this meeting.' },
  grantedPetition:     { icon: '⊕', title: 'Concession Given',      text: 'Your workers know you didn\'t have to.' },
  contestedPetition:   { icon: '●', title: 'Guild Appeal',          text: 'Technical win. The fight moves.' },
  investigatedCass:    { icon: '◈', title: 'Intel Gathered',        text: 'Now you know what she actually gave up.' },
  acceptedDeal:        { icon: '◆', title: 'Deal Signed',           text: 'Warehouse allocated. Assessment reduced.' },
  madePublicDonation:  { icon: '◆', title: 'Public Statement',      text: '15,000 credits. The gazette will cover it.' },
  wentPublic:          { icon: '▲', title: 'On the Record',         text: 'You\'ve entered the public debate now.' },
};

// ─── CIVIC DISPATCH HEADLINES ─────────────────────────────────
const DISPATCH_HEADLINES = {
  joinedCooperative: {
    date: 'Day 12 — Lower District Registry',
    headline: 'Housing Petition Reaches Required Threshold',
    body: 'A twelve-member cooperative has formally filed an Article 14 housing condition complaint with the Civic Registry.',
  },
  workingForBray: {
    date: 'Day 8 — Lower District Market',
    headline: 'Market Worker Accepts Employment Through Private Arrangement',
    body: 'Employer certification to be resolved outside standard cooperative pathway.',
  },
  refusedBray: {
    date: 'Day 8 — Lower District Market',
    headline: 'Market Vendor Declines Private Employment, Pursues Cooperative Certification',
    body: 'Cooperative certification pathway: two credits, two weeks. Process initiated.',
  },
  helpedMaren: {
    date: 'Day 6 — Lower District Building 14',
    headline: 'Neighbor Assistance Recorded in Community Network',
    body: 'Three credits loaned. One resident to another. The cooperative noted it.',
  },
  grantedPetition: {
    date: 'Week 3 — Upper District',
    headline: 'Marsh Trading Grants Workers’ Pension Reclassification Voluntarily',
    body: 'Seasonal workers to receive full rate credit effective next quarter. No guild appeal filed.',
  },
  contestedPetition: {
    date: 'Week 3 — Guild Appeals Board',
    headline: 'Marsh Trading Contests Pension Petition on Technical Grounds',
    body: 'Workers filed civic grievance the same day. Case proceeds to secondary review.',
  },
  madePublicDonation: {
    date: 'Week 5 — Upper District',
    headline: 'Merchant Pledges 15,000 Credits to Lower District Housing Fund',
    body: '“A practical investment in the stability of the lower district.” — Aldric Marsh',
  },
  paidAssessment: {
    date: 'Week 1 — Civic Treasury',
    headline: 'Marsh Trading Pays Full Assessment in Compliance',
    body: '42,000 civic credits received. Record updated to good standing.',
  },
  acceptedDeal: {
    date: 'Week 6 — Civic Administration',
    headline: 'Warehouse Deal Signed: Assessment Reduced 40%',
    body: 'Civic storage access secured. Gazette calls it a partnership.',
  },
  wentPublic: {
    date: 'Week 5 — Civic Gazette',
    headline: 'Merchant Issues Counter-Statement on Civic Record',
    body: '“Twenty years of required contributions.” Partial coverage in morning edition.',
  },
};

// ─── CITY PULSE EVENTS (random between scenes) ───────────────
const CITY_PULSE = {
  poor: [
    { icon:'☀', title:'Good Morning', text:'Tam won a school recitation prize. No credits — just pride, and a little more of it.', changes:{hope:5} },
    { icon:'🛒', title:'Market Luck', text:'A loyal customer paid extra for the same cloth. "For what it\'s worth," she said.', changes:{survival:4, hope:2} },
    { icon:'🌧', title:'Slow Day', text:'Rain kept the morning crowd away. Half your usual income today.', changes:{survival:-4} },
    { icon:'📋', title:'Civic Notice', text:'A posted notice: the cooperative food provision window opens again next month.', changes:{hope:3} },
    { icon:'🤝', title:'Helping Hand', text:'A neighbor carried your stall frame without being asked. The district knows you.', changes:{community:5} },
    { icon:'💊', title:'Health Scare', text:'Tam had a bad cough for three days. Cleared up on its own, but the worry cost you sleep.', changes:{health:-3, hope:-2} },
    { icon:'📰', title:'Good News', text:'The cooperative posted a win in the civic registry. Something in the district moved forward.', changes:{hope:4, community:3} },
    { icon:'🏪', title:'Busy Week', text:'Three new customers from the far gate. The spot is starting to feel like yours.', changes:{survival:5, hope:3} },
  ],
  rich: [
    { icon:'📈', title:'Trade Wind', text:'Cargo prices stabilized for the quarter. Your shipping costs drop by a notable margin.', changes:{wealth:6} },
    { icon:'🤝', title:'Alliance Inquiry', text:'Two merchants from the harbor district reached out about a trade coalition.', changes:{influence:5} },
    { icon:'📰', title:'Favorable Coverage', text:'The civic gazette ran a piece on trade stability. Your name mentioned positively.', changes:{reputation:4} },
    { icon:'⚖', title:'Review Delayed', text:'The assessment review board delayed their decision by two weeks. Time is a resource.', changes:{compliance:3} },
    { icon:'💼', title:'Contract Win', text:'A small civic supply contract came through — routine, but real.', changes:{wealth:4, compliance:2} },
    { icon:'📉', title:'Rough Week', text:'A shipping route dispute delayed two orders. Not serious. Annoying and visible.', changes:{wealth:-4, influence:-2} },
    { icon:'🏛', title:'Official Contact', text:'A clerk from civic administration sent an informal note. Watching — but not unfavorably.', changes:{compliance:3, influence:2} },
    { icon:'👥', title:'Worker Morale', text:'Cassev reported the warehouse team had their best output week in three months.', changes:{reputation:4, compliance:2} },
  ],
};

// ─── ACHIEVEMENTS ─────────────────────────────────────────────
const ACHIEVEMENTS = [
  { id:'rising_tide',   charId:'poor', icon:'⊕', title:'Rising Tide',
    text:'Lira\'s community network reached 65. She is no longer navigating this alone.',
    check: gs => (gs.stats.community || 0) >= 65 },
  { id:'against_grain', charId:'poor', icon:'◆', title:'Against the Grain',
    text:'Refused the easy money and kept looking for another way. That costs more in the short term.',
    check: gs => !!(gs.memory.refusedBray) },
  { id:'solidarity',    charId:'poor', icon:'⊕', title:'Solidarity',
    text:'Helped Maren AND joined the cooperative. This is what community actually means.',
    check: gs => !!(gs.memory.helpedMaren && gs.memory.joinedCooperative) },
  { id:'voice_heard',   charId:'poor', icon:'◈', title:'Voice Heard',
    text:'Hope and survival both crossed 45. Lira found a real way forward.',
    check: gs => (gs.stats.hope || 0) >= 45 && (gs.stats.survival || 0) >= 45 },
  { id:'conciliator',   charId:'rich', icon:'◆', title:'The Conciliator',
    text:'Granted the petition and accepted the deal. Compromise is its own kind of winning.',
    check: gs => !!(gs.memory.grantedPetition && gs.memory.acceptedDeal) },
  { id:'rep_restored',  charId:'rich', icon:'◉', title:'Reputation Restored',
    text:'Aldric\'s public standing surpassed 70. The gazette story became context, not headline.',
    check: gs => (gs.stats.reputation || 0) >= 70 },
  { id:'power_player',  charId:'rich', icon:'◈', title:'Power Player',
    text:'Wealth and influence both above 70. He kept what twenty years built.',
    check: gs => (gs.stats.wealth || 0) >= 70 && (gs.stats.influence || 0) >= 70 },
  { id:'two_cities',    charId: null,  icon:'◆', title:'Two Cities',
    text:'Both stories complete. Two different lives — the same society.',
    check: gs => !!(gs.completed.poor && gs.completed.rich) },
];

// ─── GOVERNMENT LAW EVENTS ────────────────────────────────────
const GOV_LAWS = {
  'poor.0': {
    date: 'CIVIC HOUSING BUREAU — NEW REGULATION',
    headline: 'Employer Verification Now Required for Housing Support',
    body: 'Freelance workers must file cooperative employment status before hardship applications are accepted.',
  },
  'poor.4': {
    date: 'LABOR BOARD — NEW LAW IN EFFECT',
    headline: 'Private Employment Contracts Must Be Registered',
    body: 'Workers have the legal right to request written terms. All contracts over 10 hours/week require civic filing.',
  },
  'poor.7': {
    date: 'CIVIC ASSEMBLY — TODAY\'S VOTE',
    headline: 'Housing Security Bill: Public Comment Period Open',
    body: 'Proposed provisions: freelance worker eligibility, reduced verification barriers, emergency credit for families.',
  },
  'rich.0': {
    date: 'CIVIC TREASURY — LAW NOW IN EFFECT',
    headline: 'Civic Contribution Assessment Act Enacted',
    body: '15% annual property tax on assets above 100,000 credits. Merchants have 30 days to pay or formally contest.',
  },
  'rich.2': {
    date: 'LABOR CHARTER — ARTICLE 14 CONFIRMED',
    headline: 'Pension Reclassification Petition Right Upheld',
    body: 'Seasonal workers may formally petition for full credit reclassification. Employers must respond within 30 days.',
  },
  'rich.5': {
    date: 'CIVIC ADMINISTRATION — PROGRAM ANNOUNCEMENT',
    headline: 'Government Launches Warehouse Sharing Initiative',
    body: 'Merchants may receive up to 40% assessment reduction in exchange for civic storage space. Seven-day offer window.',
  },
  'rich.7': {
    date: 'CIVIC ADMINISTRATION — FINAL NOTICE',
    headline: 'Property Conversion Program: Last Window Before Binding Review',
    body: 'Merchants with open compliance issues have one final opportunity to negotiate. Cooperative housing conversion qualifies for full exemption.',
  },
};

// ─── CIVIC DISPATCH & WORLD ECHO ──────────────────────────────
function showDispatch(dispatch) {
  const existing = document.getElementById('civic-dispatch');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.id = 'civic-dispatch';
  el.className = 'civic-dispatch';
  el.innerHTML =
    `<div class="dispatch-masthead">ILIATANIA CIVIC GAZETTE</div>` +
    `<div class="dispatch-date">${dispatch.date}</div>` +
    `<div class="dispatch-rule"></div>` +
    `<div class="dispatch-headline">${dispatch.headline}</div>` +
    `<div class="dispatch-body">${dispatch.body}</div>` +
    `<button class="dispatch-close" aria-label="Dismiss">&#10005;</button>`;
  document.body.appendChild(el);
  Sound.play('dispatch');
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('dispatch-vis')));
  const close = () => {
    el.classList.remove('dispatch-vis');
    setTimeout(() => el.remove(), 380);
  };
  el.querySelector('.dispatch-close').addEventListener('click', close);
  setTimeout(close, 5500);
}

function showCityPulse() {
  const char = gameState.currentChar;
  if (!char) return;
  const events = CITY_PULSE[char.id];
  if (!events || !events.length) return;
  const ev = events[Math.floor(Math.random() * events.length)];
  const changes = ev.changes || {};
  Object.entries(changes).forEach(([k, v]) => {
    gameState.stats[k] = clamp((gameState.stats[k] || 0) + v);
  });
  const el = document.createElement('div');
  el.className = 'city-pulse-popup';
  const chipsHtml = Object.entries(changes).map(([k, v]) => {
    const def = char.statDefs.find(d => d.key === k);
    const label = def ? def.label : k;
    return `<span class="chip ${v > 0 ? 'chip-pos' : 'chip-neg'} chip-pop">${label} ${v > 0 ? '+' : ''}${v}</span>`;
  }).join('');
  el.innerHTML =
    `<div class="cp-icon">${ev.icon}</div>` +
    `<div class="cp-content">` +
      `<div class="cp-tag">CITY EVENT</div>` +
      `<div class="cp-title">${ev.title}</div>` +
      `<p class="cp-text">${ev.text}</p>` +
      `<div class="cp-chips">${chipsHtml}</div>` +
    `</div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('cp-vis')));
  Sound.play('toast');
  setTimeout(() => {
    el.classList.remove('cp-vis');
    setTimeout(() => el.remove(), 400);
  }, 3200);
}

function checkAchievements() {
  if (!gameState.achievements) gameState.achievements = {};
  let delay = 0;
  ACHIEVEMENTS.forEach(ach => {
    if (gameState.achievements[ach.id]) return;
    if (ach.charId && gameState.currentChar?.id !== ach.charId) return;
    if (ach.check(gameState)) {
      gameState.achievements[ach.id] = true;
      setTimeout(() => showAchievement(ach), delay);
      delay += 700;
    }
  });
}

function showAchievement(ach) {
  Sound.play('unlock');
  const el = document.createElement('div');
  el.className = 'achievement-pop';
  el.innerHTML =
    `<div class="ach-inner">` +
      `<div class="ach-label">ACHIEVEMENT UNLOCKED</div>` +
      `<div class="ach-icon">${ach.icon}</div>` +
      `<div class="ach-title">${ach.title}</div>` +
      `<p class="ach-text">${ach.text}</p>` +
    `</div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('ach-vis')));
  setTimeout(() => {
    el.classList.remove('ach-vis');
    setTimeout(() => el.remove(), 500);
  }, 3800);
}

function renderWorldEcho(charId, sceneIdx) {
  const existing = document.getElementById('world-echo-panel');
  if (existing) existing.remove();
  const key = `${charId}.${sceneIdx}`;
  const echoes = WORLD_ECHOES[key];
  if (!echoes) return;
  const active = echoes.find(e =>
    gameState.completed[e.requiredChar] &&
    (gameState.completedMemory[e.requiredChar] || {})[e.requiredFlag]
  );
  if (!active) return;
  const panel = document.createElement('div');
  panel.id = 'world-echo-panel';
  panel.className = 'world-echo';
  panel.innerHTML =
    `<div class="we-header">&#9670; ${active.header}</div>` +
    `<p class="we-text">${active.text}</p>`;
  const bodyEl = document.getElementById('sc-body');
  if (bodyEl) bodyEl.after(panel);
  requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('we-vis')));
}

// ─── INVESTIGATION PANEL ──────────────────────────────────────
function renderInvestigate(items) {
  const existing = document.getElementById('investigate-panel');
  if (existing) existing.remove();

  const panel = document.createElement('div');
  panel.id = 'investigate-panel';
  panel.className = 'investigate-panel';
  panel.innerHTML =
    `<div class="inv-header">◈ <span>EXAMINE THE SCENE</span></div>` +
    `<div class="inv-items">` +
      items.map((item, i) =>
        `<button class="inv-btn" data-inv="${i}">
           <span class="inv-icon">${item.icon}</span>
           <span class="inv-label">${item.label}</span>
         </button>`
      ).join('') +
    `</div>` +
    `<div class="inv-reveal hidden" id="inv-reveal"></div>`;

  const choicesEl = document.getElementById('choices');
  if (choicesEl) choicesEl.before(panel);

  panel.querySelectorAll('.inv-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      Sound.play('reveal');
      panel.querySelectorAll('.inv-btn').forEach(b => b.classList.remove('inv-active'));
      btn.classList.add('inv-active');
      const reveal = document.getElementById('inv-reveal');
      if (reveal) {
        reveal.classList.remove('hidden');
        reveal.textContent = '';
        typewriter(reveal, items[i].text, 14);
      }
    });
  });
}

// ─── COUNTDOWN TIMER ──────────────────────────────────────────
let _cdInterval = null;
let _cdWrap = null;

function startCountdown(seconds) {
  stopCountdown();
  const choicesEl = document.getElementById('choices');
  if (!choicesEl) return;

  _cdWrap = document.createElement('div');
  _cdWrap.className = 'countdown-wrap';
  _cdWrap.innerHTML =
    `<div class="cd-row">
       <span class="cd-icon">⏱</span>
       <span class="cd-label">Decide quickly</span>
       <span class="cd-num" id="cd-num">${seconds}</span>
     </div>
     <div class="cd-track"><div class="cd-fill" id="cd-fill"></div></div>`;
  choicesEl.before(_cdWrap);

  const fill = document.getElementById('cd-fill');
  const numEl = document.getElementById('cd-num');
  if (fill) {
    fill.style.width = '100%';
    fill.style.transition = `width ${seconds}s linear`;
    requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = '0%'; }));
  }

  let remaining = seconds;
  _cdInterval = setInterval(() => {
    remaining--;
    if (numEl) numEl.textContent = remaining;
    if (remaining <= 8 && fill) fill.classList.add('cd-warn');
    if (remaining <= 4 && remaining > 0) Sound.play('tick');
    if (remaining <= 0) {
      stopCountdown();
      Sound.play('timeout');
      shakeScreen();
      const first = document.querySelector('.choice-btn:not(.locked):not(:disabled)');
      if (first) { first.classList.add('auto-selected'); setTimeout(() => first.click(), 500); }
    }
  }, 1000);
}

function stopCountdown() {
  if (_cdInterval) { clearInterval(_cdInterval); _cdInterval = null; }
  if (_cdWrap) { _cdWrap.remove(); _cdWrap = null; }
}

// ─── TOAST NOTIFICATIONS ──────────────────────────────────────
let _toastQueue = [], _toastRunning = false;

function showToast(flag) {
  const msg = TOAST_MESSAGES[flag];
  if (!msg) return;
  _toastQueue.push(msg);
  if (!_toastRunning) _nextToast();
}

function _nextToast() {
  if (!_toastQueue.length) { _toastRunning = false; return; }
  _toastRunning = true;
  const msg = _toastQueue.shift();
  Sound.play('toast');

  const el = document.createElement('div');
  el.className = 'game-toast';
  el.innerHTML =
    `<span class="toast-icon">${msg.icon}</span>
     <div><div class="toast-title">${msg.title}</div><div class="toast-text">${msg.text}</div></div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('toast-show')));
  setTimeout(() => {
    el.classList.remove('toast-show');
    setTimeout(() => { el.remove(); _nextToast(); }, 380);
  }, 2700);
}

// ─── DECISION JOURNAL ─────────────────────────────────────────
const journal = [];

function journalLog(sceneTitle, choiceText, consequence) {
  journal.push({ scene: sceneTitle, choice: choiceText, consequence });
  const btn = document.getElementById('journal-btn');
  if (btn) {
    btn.classList.remove('new-entry');
    void btn.offsetWidth;
    btn.classList.add('new-entry');
  }
}

function renderJournalDecisions() {
  if (journal.length === 0) return `<p class="journal-empty">No decisions recorded yet.</p>`;
  return journal.map((e, i) =>
    `<div class="journal-entry">
       <div class="je-scene">${i + 1}. ${e.scene}</div>
       <div class="je-choice">"${e.choice}"</div>
       <div class="je-result">${e.consequence}</div>
     </div>`
  ).join('');
}

function renderJournalRecord() {
  const seen = new Set();
  const cards = [];
  const addFlag = flag => {
    if (!seen.has(flag) && TOAST_MESSAGES[flag]) {
      seen.add(flag);
      cards.push(TOAST_MESSAGES[flag]);
    }
  };
  Object.keys(gameState.memory).filter(k => gameState.memory[k]).forEach(addFlag);
  Object.values(gameState.completedMemory || {}).forEach(mem =>
    Object.keys(mem).filter(k => mem[k]).forEach(addFlag)
  );
  if (cards.length === 0) return `<p class="journal-empty">No civic records yet.</p>`;
  return `<div class="jrec-grid">` +
    cards.map(msg =>
      `<div class="jrec-card">` +
        `<span class="jrec-icon">${msg.icon}</span>` +
        `<div><div class="jrec-title">${msg.title}</div><div class="jrec-text">${msg.text}</div></div>` +
      `</div>`
    ).join('') +
    `</div>`;
}

function toggleJournal() {
  let drawer = document.getElementById('journal-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'journal-drawer';
    drawer.className = 'journal-drawer';
    document.getElementById('game-screen').appendChild(drawer);
  }
  const isOpen = drawer.classList.toggle('journal-open');
  if (isOpen) {
    Sound.play('reveal');
    drawer.innerHTML =
      `<div class="journal-header">
         <span class="journal-title">&#9670; ARCHIVE</span>
         <div class="journal-tabs">
           <button class="jtab jtab-active" data-tab="decisions">Decisions</button>
           <button class="jtab" data-tab="record">Civic Record</button>
         </div>
         <button class="journal-close" id="journal-close">&#10005;</button>
       </div>` +
      `<div class="journal-body" id="journal-body">${renderJournalDecisions()}</div>`;

    drawer.querySelectorAll('.jtab').forEach(tab => {
      tab.addEventListener('click', () => {
        drawer.querySelectorAll('.jtab').forEach(t => t.classList.remove('jtab-active'));
        tab.classList.add('jtab-active');
        Sound.play('hover');
        const body = document.getElementById('journal-body');
        if (body) body.innerHTML = tab.dataset.tab === 'decisions'
          ? renderJournalDecisions()
          : renderJournalRecord();
      });
    });
    document.getElementById('journal-close')?.addEventListener('click', toggleJournal);
  }
}

// ─── NPC DIALOGUE ─────────────────────────────────────────────
function enterNpcDialogue(questions, speakerName, originalLine) {
  const bubble = document.getElementById('npc-bubble');
  if (!bubble) return;
  bubble._origLine = originalLine;
  bubble.classList.add('dialogue-mode');

  bubble.innerHTML =
    `<div class="npc-speaker">${speakerName}</div>` +
    `<div class="npc-dialogue-hint">Ask a question:</div>` +
    `<div class="npc-qs">` +
    questions.map((q, i) =>
      `<button class="npc-q-btn" data-qi="${i}">${q.q}</button>`
    ).join('') +
    `</div>` +
    `<div class="npc-q-answer hidden" id="npc-q-answer"></div>` +
    `<button class="npc-back-btn" id="npc-back-btn">&#8592; Close</button>`;

  bubble.querySelectorAll('.npc-q-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      Sound.play('reveal');
      bubble.querySelectorAll('.npc-q-btn').forEach(b => b.classList.remove('npc-q-active'));
      btn.classList.add('npc-q-active', 'npc-q-asked');
      const answerEl = document.getElementById('npc-q-answer');
      if (answerEl) {
        answerEl.classList.remove('hidden');
        answerEl.textContent = '';
        typewriter(answerEl, questions[i].a, 15);
      }
    });
  });

  document.getElementById('npc-back-btn')?.addEventListener('click', () => {
    exitNpcDialogue(speakerName);
  });
}

function exitNpcDialogue(speakerName) {
  const bubble = document.getElementById('npc-bubble');
  if (!bubble) return;
  bubble.classList.remove('dialogue-mode');
  const origLine = bubble._origLine || '';
  bubble.innerHTML =
    `<div class="npc-speaker" id="npc-speaker">${speakerName}</div>` +
    `<p class="npc-line" id="npc-line"></p>`;
  const lineEl = document.getElementById('npc-line');
  if (lineEl) typewriter(lineEl, origLine, 18);
}

// ─── MECHANIC ENGINE ─────────────────────────────────────────
let _mechanicResult = null;
let _pendingUrgency = null;

function renderMechanic(mechanic) {
  _mechanicResult = null;
  const choicesEl = document.getElementById('choices');
  if (!choicesEl) return;
  choicesEl.style.display = 'none';

  const panel = document.createElement('div');
  panel.id = 'mechanic-panel';
  panel.className = 'mechanic-panel';

  if (mechanic.type === 'allocate')     renderAllocateMechanic(panel, mechanic, choicesEl);
  else if (mechanic.type === 'slider')  renderSliderMechanic(panel, mechanic, choicesEl);
  else if (mechanic.type === 'compose') renderComposeMechanic(panel, mechanic, choicesEl);

  choicesEl.before(panel);
  requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('mech-vis')));
}

function _unlockChoices(choicesEl) {
  const panel = document.getElementById('mechanic-panel');
  if (panel) { panel.classList.add('mech-done'); setTimeout(() => panel.remove(), 380); }
  choicesEl.style.display = '';
  Sound.play('unlock');
  document.querySelectorAll('.choice-btn').forEach((btn, i) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(12px)';
    setTimeout(() => {
      btn.style.transition = 'opacity 0.38s ease, transform 0.38s ease, background 0.14s, border-color 0.14s';
      btn.style.opacity = '';
      btn.style.transform = '';
    }, 80 + i * 110);
  });
  if (_pendingUrgency) { startCountdown(_pendingUrgency); _pendingUrgency = null; }
}

function renderAllocateMechanic(panel, mechanic, choicesEl) {
  const alloc = {};
  mechanic.buckets.forEach(b => { alloc[b.key] = 0; });
  let remaining = mechanic.pool;

  panel.innerHTML =
    `<div class="mech-header"><span class="mech-icon">&#x2295;</span><span class="mech-title">ALLOCATE RESOURCES</span></div>` +
    `<p class="mech-prompt">${mechanic.prompt}</p>` +
    `<div class="mech-pool-row"><span>Credits remaining:</span><strong class="pool-num" id="pool-num">${mechanic.pool}</strong></div>` +
    `<div class="alloc-buckets">` +
    mechanic.buckets.map(b =>
      `<div class="alloc-bucket">` +
        `<div class="alloc-top"><span class="alloc-icon">${b.icon}</span><span class="alloc-label">${b.label}</span></div>` +
        `<div class="alloc-controls">` +
          `<button class="alloc-btn alloc-minus" data-key="${b.key}">&minus;</button>` +
          `<span class="alloc-val" id="alloc-val-${b.key}">0</span>` +
          `<button class="alloc-btn alloc-plus" data-key="${b.key}">+</button>` +
        `</div>` +
        `<div class="alloc-track"><div class="alloc-fill" id="alloc-fill-${b.key}"></div></div>` +
      `</div>`
    ).join('') +
    `</div>` +
    `<button class="mech-confirm" id="mech-confirm" disabled>&#9670; Lock In Allocation</button>`;

  panel.querySelectorAll('.alloc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      Sound.play('click');
      const key = btn.dataset.key;
      if (btn.classList.contains('alloc-plus') && remaining > 0) {
        alloc[key]++; remaining--;
      } else if (btn.classList.contains('alloc-minus') && alloc[key] > 0) {
        alloc[key]--; remaining++;
      }
      document.getElementById('pool-num').textContent = remaining;
      document.getElementById(`alloc-val-${key}`).textContent = alloc[key];
      const fill = document.getElementById(`alloc-fill-${key}`);
      if (fill) fill.style.width = `${(alloc[key] / mechanic.pool) * 100}%`;
      panel.querySelector('#mech-confirm').disabled = (remaining !== 0);
    });
  });

  panel.querySelector('#mech-confirm').addEventListener('click', () => {
    const bonusChanges = {};
    mechanic.buckets.forEach(b => {
      if (alloc[b.key] > 0 && b.bonusStat)
        bonusChanges[b.bonusStat] = (bonusChanges[b.bonusStat] || 0) + Math.round(alloc[b.key] * b.rate);
    });
    _mechanicResult = { bonusChanges };
    _unlockChoices(choicesEl);
  });
}

function renderSliderMechanic(panel, mechanic, choicesEl) {
  const midIdx = Math.floor(mechanic.positions.length / 2);
  let currentPos = mechanic.positions[midIdx];

  panel.innerHTML =
    `<div class="mech-header"><span class="mech-icon">&#9670;</span><span class="mech-title">SET YOUR POSITION</span></div>` +
    `<p class="mech-prompt">${mechanic.prompt}</p>` +
    `<div class="slider-outer">` +
      `<div class="slider-edge-row">` +
        `<span class="slider-edge-label">${mechanic.leftLabel}</span>` +
        `<span class="slider-edge-label">${mechanic.rightLabel}</span>` +
      `</div>` +
      `<input type="range" class="mech-slider" id="mech-slider" min="0" max="100" value="50">` +
    `</div>` +
    `<div class="slider-pos-desc" id="slider-pos-desc">${currentPos.label}</div>` +
    `<button class="mech-confirm" id="mech-confirm">&#9670; Commit to This Position</button>`;

  const slider = panel.querySelector('#mech-slider');
  const desc = panel.querySelector('#slider-pos-desc');

  slider.addEventListener('input', () => {
    Sound.play('hover');
    const val = parseInt(slider.value);
    const pos = mechanic.positions.find(p => val >= p.min && val <= p.max) || currentPos;
    if (pos !== currentPos) {
      currentPos = pos;
      desc.textContent = pos.label;
      desc.classList.remove('slider-desc-flash');
      void desc.offsetWidth;
      desc.classList.add('slider-desc-flash');
    }
  });

  panel.querySelector('#mech-confirm').addEventListener('click', () => {
    const val = parseInt(slider.value);
    const pos = mechanic.positions.find(p => val >= p.min && val <= p.max) || currentPos;
    _mechanicResult = { bonusChanges: pos.bonusChanges || {} };
    _unlockChoices(choicesEl);
  });
}

function renderComposeMechanic(panel, mechanic, choicesEl) {
  const selected = new Set();

  panel.innerHTML =
    `<div class="mech-header"><span class="mech-icon">&#9672;</span><span class="mech-title">COMPOSE YOUR ARGUMENT</span></div>` +
    `<p class="mech-prompt">${mechanic.prompt}</p>` +
    `<div class="compose-points" id="compose-points">` +
    mechanic.points.map(p =>
      `<button class="compose-point" data-key="${p.key}">${p.label}</button>`
    ).join('') +
    `</div>` +
    `<div class="compose-status" id="compose-status">0 / ${mechanic.required} selected</div>` +
    `<button class="mech-confirm" id="mech-confirm" disabled>&#9670; Finalize Argument</button>`;

  panel.querySelectorAll('.compose-point').forEach(btn => {
    btn.addEventListener('click', () => {
      Sound.play('click');
      const key = btn.dataset.key;
      if (selected.has(key)) {
        selected.delete(key);
        btn.classList.remove('compose-active');
      } else if (selected.size < mechanic.required) {
        selected.add(key);
        btn.classList.add('compose-active');
      } else {
        const status = document.getElementById('compose-status');
        if (status) { status.classList.remove('compose-over'); void status.offsetWidth; status.classList.add('compose-over'); }
        return;
      }
      document.getElementById('compose-status').textContent = `${selected.size} / ${mechanic.required} selected`;
      panel.querySelector('#mech-confirm').disabled = (selected.size < mechanic.required);
    });
  });

  panel.querySelector('#mech-confirm').addEventListener('click', () => {
    const bonusChanges = {};
    mechanic.points.filter(p => selected.has(p.key)).forEach(p => {
      if (p.bonusStat) bonusChanges[p.bonusStat] = (bonusChanges[p.bonusStat] || 0) + (p.bonus || 0);
    });
    _mechanicResult = { bonusChanges, selectedKeys: [...selected] };
    _unlockChoices(choicesEl);
  });
}

// ─── EVENT LISTENERS ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Title → Rules
  const startBtn = document.getElementById('start-btn');
  if (startBtn) startBtn.addEventListener('click', showRulesScreen);

  // Rules → Char select
  const rulesContinueBtn = document.getElementById('rules-continue-btn');
  if (rulesContinueBtn) rulesContinueBtn.addEventListener('click', () => {
    renderCharSelect();
    showScreen('char-screen');
  });

  // Char grid — play button
  const charGrid = document.getElementById('char-grid');
  if (charGrid) charGrid.addEventListener('click', e => {
    const btn = e.target.closest('[data-id]');
    if (btn) startCharacter(btn.dataset.id);
  });

  // Char background → Begin game
  const cbContinue = document.getElementById('cb-continue');
  if (cbContinue) cbContinue.addEventListener('click', e => {
    beginGame(e.currentTarget.dataset.charId);
  });

  // Council of Voices button
  const councilBtn = document.getElementById('council-btn');
  if (councilBtn) councilBtn.addEventListener('click', showFinalEnding);

  // Back to char select from game
  const backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.addEventListener('click', () => {
    renderCharSelect();
    showScreen('char-screen');
  });

  // Continue after choice
  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) continueBtn.addEventListener('click', nextScene);

  // Char end → Char select
  const ceContinue = document.getElementById('ce-continue');
  if (ceContinue) ceContinue.addEventListener('click', () => {
    renderCharSelect();
    showScreen('char-screen');
  });

  // Final ending buttons
  const replayBtn = document.getElementById('ending-replay-btn');
  if (replayBtn) replayBtn.addEventListener('click', () => {
    renderCharSelect();
    showScreen('char-screen');
  });

  const restartBtn = document.getElementById('ending-restart-btn');
  if (restartBtn) restartBtn.addEventListener('click', () => {
    gameState.completed = {};
    gameState.completedQuality = {};
    gameState.completedMemory = {};
    gameState.councilPlayed = false;
    gameState.societyScore = 50;
    gameState.achievements = {};
    gameState.currentChar = null;
    showScreen('title-screen');
  });

  // Journal button
  const journalBtn = document.getElementById('journal-btn');
  if (journalBtn) journalBtn.addEventListener('click', toggleJournal);

  // Choice hover sound
  document.getElementById('choices')?.addEventListener('mouseover', e => {
    if (e.target.closest('.choice-btn:not(:disabled):not(.locked)') && e.target !== e.currentTarget) {
      Sound.play('hover');
    }
  });

  // Initialize sound on first interaction anywhere
  document.addEventListener('click', () => Sound.init(), { once: true });

  // Mouse parallax on scene art
  const gameBody = document.querySelector('.game-body');
  if (gameBody) {
    gameBody.addEventListener('mousemove', e => {
      const art = document.getElementById('scene-art');
      if (!art) return;
      const rect = gameBody.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      art.style.transform = `translate(${x * 10}px, ${y * 6}px) scale(1.04)`;
    });
    gameBody.addEventListener('mouseleave', () => {
      const art = document.getElementById('scene-art');
      if (art) art.style.transform = '';
    });
  }

  // Char card stagger entrance
  const charScreen = document.getElementById('char-screen');
  if (charScreen) {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('#char-grid .char-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s, border-color 0.2s';
          card.style.opacity = '';
          card.style.transform = '';
        }, 80 + i * 120);
      });
    });
    observer.observe(document.getElementById('char-grid'), { childList: true });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    const gameActive = document.getElementById('game-screen')?.classList.contains('active');
    if (!gameActive) return;

    // J — toggle journal
    if (e.key === 'j' || e.key === 'J') { toggleJournal(); return; }

    // Escape — close journal or NPC dialogue
    if (e.key === 'Escape') {
      const drawer = document.getElementById('journal-drawer');
      if (drawer?.classList.contains('journal-open')) { toggleJournal(); return; }
      const bubble = document.getElementById('npc-bubble');
      if (bubble?.classList.contains('dialogue-mode')) {
        const speakerName = bubble.querySelector('.npc-speaker')?.textContent || '';
        exitNpcDialogue(speakerName);
        return;
      }
    }

    // 1 / 2 / 3 — select choices (only when choices are visible and not locked)
    if (['1','2','3'].includes(e.key)) {
      const choicesEl = document.getElementById('choices');
      if (!choicesEl || choicesEl.style.display === 'none') return;
      const idx = parseInt(e.key) - 1;
      const btns = [...choicesEl.querySelectorAll('.choice-btn:not(.locked):not(:disabled)')];
      if (btns[idx]) {
        Sound.play('click');
        btns[idx].classList.add('kb-flash');
        setTimeout(() => { btns[idx].classList.remove('kb-flash'); btns[idx].click(); }, 120);
      }
    }

    // Space / Enter — advance if continue button is visible
    if (e.key === ' ' || e.key === 'Enter') {
      const cont = document.getElementById('continue-btn');
      if (cont && !cont.classList.contains('hidden')) { e.preventDefault(); cont.click(); }
    }
  });

  // Initial render
  renderCharSelect();
});
