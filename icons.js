/* TRIGR · SVG icon system
 * Single sprite injected once on load. Use via <svg class="ic"><use href="#i-home"/></svg>
 * 24×24 viewbox · 1.6 stroke · currentColor · rounded
 */
(function () {
  const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
  <defs>
    <linearGradient id="g-orange" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FF8A4C"/><stop offset="100%" stop-color="#E8501A"/>
    </linearGradient>
    <linearGradient id="g-gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E6C088"/><stop offset="100%" stop-color="#B8915E"/>
    </linearGradient>
  </defs>
  <symbol id="i-logo" viewBox="0 0 32 32">
    <path d="M16 3 L26 9 L26 21 L16 27 L6 21 L6 9 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M11 13 L16 10 L21 13 L21 19 L16 22 L11 19 Z" fill="currentColor" opacity=".85"/>
    <path d="M16 10 L16 22 M11 13 L21 19 M21 13 L11 19" stroke="#0A0908" stroke-width="1" opacity=".4"/>
  </symbol>
  <symbol id="i-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10.5 L12 3 L21 10.5 V20 a1 1 0 0 1 -1 1 H4 a1 1 0 0 1 -1 -1 Z"/>
    <path d="M9 21 V13 h6 v8"/>
  </symbol>
  <symbol id="i-dumbbell" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6.5 6.5 L17.5 17.5"/>
    <rect x="2" y="9" width="4" height="6" rx="1"/>
    <rect x="18" y="9" width="4" height="6" rx="1"/>
    <rect x="5" y="10.5" width="3" height="3" rx=".5"/>
    <rect x="16" y="10.5" width="3" height="3" rx=".5"/>
  </symbol>
  <symbol id="i-scan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 8 V5 a1 1 0 0 1 1 -1 H8"/>
    <path d="M16 4 H19 a1 1 0 0 1 1 1 V8"/>
    <path d="M20 16 V19 a1 1 0 0 1 -1 1 H16"/>
    <path d="M8 20 H5 a1 1 0 0 1 -1 -1 V16"/>
    <circle cx="12" cy="12" r="3.2"/>
    <path d="M12 8.8 V7.2 M12 16.8 V15.2 M8.8 12 H7.2 M16.8 12 H15.2"/>
  </symbol>
  <symbol id="i-brain" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 4.5 a3 3 0 0 0 -3 3 a2.5 2.5 0 0 0 -2.5 2.5 a2.5 2.5 0 0 0 1 2 a2.5 2.5 0 0 0 -.5 1.5 a2.5 2.5 0 0 0 1.5 2.3 a3 3 0 0 0 3 2.7 H9 a2 2 0 0 0 2 2 V6.5 a2 2 0 0 0 -2 -2 Z"/>
    <path d="M15 4.5 a3 3 0 0 1 3 3 a2.5 2.5 0 0 1 2.5 2.5 a2.5 2.5 0 0 1 -1 2 a2.5 2.5 0 0 1 .5 1.5 a2.5 2.5 0 0 1 -1.5 2.3 a3 3 0 0 1 -3 2.7 H15 a2 2 0 0 1 -2 -2 V6.5 a2 2 0 0 1 2 -2 Z"/>
    <path d="M11 9 H9 M11 12 H8.5 M11 15 H9 M13 9 H15 M13 12 H15.5 M13 15 H15"/>
  </symbol>
  <symbol id="i-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 21 a8 8 0 0 1 16 0"/>
  </symbol>
  <symbol id="i-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12 H19 M13 6 L19 12 L13 18"/>
  </symbol>
  <symbol id="i-arrow-up-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 17 L17 7 M9 7 H17 V15"/>
  </symbol>
  <symbol id="i-chevron-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 6 L9 12 L15 18"/>
  </symbol>
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12.5 L10 17.5 L19 7.5"/>
  </symbol>
  <symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5 V19 M5 12 H19"/>
  </symbol>
  <symbol id="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 6 L18 18 M18 6 L6 18"/>
  </symbol>
  <symbol id="i-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 17 V11 a6 6 0 0 1 12 0 V17 L19.5 19 H4.5 Z"/>
    <path d="M10 21 a2 2 0 0 0 4 0"/>
  </symbol>
  <symbol id="i-settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15 a1.65 1.65 0 0 0 .3 1.8 l.1 .1 a2 2 0 1 1 -2.8 2.8 l-.1 -.1 a1.65 1.65 0 0 0 -1.8 -.3 a1.65 1.65 0 0 0 -1 1.5 V21 a2 2 0 1 1 -4 0 v-.1 a1.65 1.65 0 0 0 -1 -1.5 a1.65 1.65 0 0 0 -1.8 .3 l-.1 .1 a2 2 0 1 1 -2.8 -2.8 l.1 -.1 a1.65 1.65 0 0 0 .3 -1.8 a1.65 1.65 0 0 0 -1.5 -1 H3 a2 2 0 1 1 0 -4 h.1 a1.65 1.65 0 0 0 1.5 -1 a1.65 1.65 0 0 0 -.3 -1.8 l-.1 -.1 a2 2 0 1 1 2.8 -2.8 l.1 .1 a1.65 1.65 0 0 0 1.8 .3 H9 a1.65 1.65 0 0 0 1 -1.5 V3 a2 2 0 1 1 4 0 v.1 a1.65 1.65 0 0 0 1 1.5 a1.65 1.65 0 0 0 1.8 -.3 l.1 -.1 a2 2 0 1 1 2.8 2.8 l-.1 .1 a1.65 1.65 0 0 0 -.3 1.8 V9 a1.65 1.65 0 0 0 1.5 1 H21 a2 2 0 1 1 0 4 h-.1 a1.65 1.65 0 0 0 -1.5 1 Z"/>
  </symbol>
  <symbol id="i-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 8 V8 M12 11 V16"/>
  </symbol>
  <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/><path d="M16 16 L21 21"/>
  </symbol>
  <symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
    <path d="M4 7 H20 M4 12 H20 M4 17 H20"/>
  </symbol>
  <symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 2 L4 14 H11 L11 22 L20 10 H13 Z"/>
  </symbol>
  <symbol id="i-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 21 C8 18 3 14.5 3 9.5 a5.5 5.5 0 0 1 9 -4 a5.5 5.5 0 0 1 9 4 c0 5 -5 8.5 -9 11.5 Z"/>
  </symbol>
  <symbol id="i-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12 H6 L9 5 L12 19 L15 9 L17 12 H21"/>
  </symbol>
  <symbol id="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 13 A9 9 0 1 1 11 3 a7 7 0 0 0 10 10 Z"/>
  </symbol>
  <symbol id="i-droplet" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3 C8 8 6 11 6 14 a6 6 0 0 0 12 0 c0 -3 -2 -6 -6 -11 Z"/>
  </symbol>
  <symbol id="i-footprint" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="9" cy="11" rx="3.5" ry="5"/>
    <circle cx="15.5" cy="6" r="1.4"/><circle cx="18" cy="9" r="1.2"/>
    <circle cx="18.5" cy="13" r="1.1"/><circle cx="17" cy="16" r="1"/>
  </symbol>
  <symbol id="i-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </symbol>
  <symbol id="i-trend-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 17 L9 11 L13 15 L21 7 M15 7 H21 V13"/>
  </symbol>
  <symbol id="i-trend-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7 L9 13 L13 9 L21 17 M15 17 H21 V11"/>
  </symbol>
  <symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2"/>
    <path d="M3 10 H21 M8 3 V7 M16 3 V7"/>
  </symbol>
  <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15.5 14"/>
  </symbol>
  <symbol id="i-play" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 5 V19 L19 12 Z"/>
  </symbol>
  <symbol id="i-video" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="13" height="12" rx="2"/>
    <path d="M16 10 L21 7 V17 L16 14 Z"/>
  </symbol>
  <symbol id="i-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 7 H8 L10 5 H14 L16 7 H19 a1 1 0 0 1 1 1 V18 a1 1 0 0 1 -1 1 H5 a1 1 0 0 1 -1 -1 V8 a1 1 0 0 1 1 -1 Z"/>
    <circle cx="12" cy="13" r="3.5"/>
  </symbol>
  <symbol id="i-message" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12 a8 8 0 0 1 -11 7 L4 21 L5.5 16 a8 8 0 1 1 15.5 -4 Z"/>
  </symbol>
  <symbol id="i-share" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <path d="M8.6 10.7 L15.4 6.3 M8.6 13.3 L15.4 17.7"/>
  </symbol>
  <symbol id="i-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3 L14.8 9 L21.5 9.7 L16.5 14.2 L18 21 L12 17.5 L6 21 L7.5 14.2 L2.5 9.7 L9.2 9 Z"/>
  </symbol>
  <symbol id="i-crown" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7 L7 13 L12 6 L17 13 L21 7 L19.5 18 H4.5 Z"/>
    <circle cx="3" cy="7" r="1.2"/><circle cx="21" cy="7" r="1.2"/><circle cx="12" cy="6" r="1.2"/>
  </symbol>
  <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2"/>
    <path d="M8 11 V7 a4 4 0 0 1 8 0 V11"/>
  </symbol>
  <symbol id="i-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 14 a5 5 0 0 0 7 0 L20 11 a5 5 0 0 0 -7 -7 L11.5 5.5"/>
    <path d="M14 10 a5 5 0 0 0 -7 0 L4 13 a5 5 0 0 0 7 7 L12.5 18.5"/>
  </symbol>
  <symbol id="i-dna" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 3 C 6 8, 18 8, 18 13 S 6 18, 6 21"/>
    <path d="M18 3 C 18 8, 6 8, 6 13 S 18 18, 18 21"/>
    <path d="M8 6 H16 M8.5 10 H15.5 M8.5 14 H15.5 M8 18 H16"/>
  </symbol>
  <symbol id="i-flask" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 3 H15 M10 3 V10 L4 19 a1.5 1.5 0 0 0 1.3 2.2 H18.7 A1.5 1.5 0 0 0 20 19 L14 10 V3"/>
    <path d="M7.5 15 H16.5"/>
  </symbol>
  <symbol id="i-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 3 C9 3 3 9 3 17 a4 4 0 0 0 4 4 c8 0 14 -6 14 -18 Z"/>
    <path d="M9 17 C 12 14 16 10 21 3"/>
  </symbol>
  <symbol id="i-fire" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3 C 13 6 17 8 17 13 a5 5 0 1 1 -10 0 c0 -2 1 -3 2 -4 C 9 11 11 8 12 3 Z"/>
    <path d="M12 17 a2 2 0 0 0 2 -2 c 0 -1 -1 -1.5 -2 -3 c -1 1.5 -2 2 -2 3 a 2 2 0 0 0 2 2 Z"/>
  </symbol>
  <symbol id="i-running" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="15" cy="4.5" r="1.6"/>
    <path d="M13 21 L15 15 L11 12 L13 8 L17 10 L20 12 M11 12 L8 14 L6 19 M9 7 L4 8"/>
  </symbol>
  <symbol id="i-yoga" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="4.5" r="1.6"/>
    <path d="M12 7 V13 M12 13 L7 17 H17 L12 13 M3 17 C 7 19 17 19 21 17"/>
  </symbol>
  <symbol id="i-boxing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 9 V13 a3 3 0 0 0 3 3 H16 a3 3 0 0 0 3 -3 V9 a3 3 0 0 0 -3 -3 H10 a3 3 0 0 0 -3 3 Z"/>
    <path d="M5 11 H7 M19 11 V14 a3 3 0 0 1 -3 3 H10 L11 21 H16 L17 17"/>
  </symbol>
  <symbol id="i-apple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 8 C 8 5 4 7 4 13 c 0 6 5 9 8 9 c 3 0 8 -3 8 -9 c 0 -6 -4 -8 -8 -5 Z"/>
    <path d="M12 8 V5 C 13 3 15 3 16 4"/>
  </symbol>
  <symbol id="i-coin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <path d="M10 12 H14 M12 10 V14"/>
  </symbol>
  <symbol id="i-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 4 H17 V11 a5 5 0 0 1 -10 0 Z"/>
    <path d="M7 7 H4 V9 a3 3 0 0 0 3 3 M17 7 H20 V9 a3 3 0 0 1 -3 3"/>
    <path d="M10 16 H14 L13 21 H11 Z M8 21 H16"/>
  </symbol>
  <symbol id="i-gift" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="10" width="18" height="11" rx="1"/>
    <path d="M3 10 H21 V8 H3 Z M12 8 V21 M12 8 C 9 8 7 5 9 4 c 2 -1 3 2 3 4 c 0 -2 1 -5 3 -4 c 2 1 0 4 -3 4"/>
  </symbol>
  <symbol id="i-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 4 H5 L7 16 H19 L21 7 H6"/>
    <circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>
  </symbol>
  <symbol id="i-watch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="3"/>
    <path d="M9 6 L10 2 H14 L15 6 M9 18 L10 22 H14 L15 18"/>
    <path d="M12 9 V12 L14 13"/>
  </symbol>
  <symbol id="i-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 2 L11 13 M22 2 L15 22 L11 13 L2 9 Z"/>
  </symbol>
  <symbol id="i-pause" viewBox="0 0 24 24" fill="currentColor">
    <rect x="7" y="5" width="3.5" height="14" rx="1"/><rect x="13.5" y="5" width="3.5" height="14" rx="1"/>
  </symbol>
  <symbol id="i-coffee" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 9 H18 V14 a4 4 0 0 1 -4 4 H8 a4 4 0 0 1 -4 -4 Z"/>
    <path d="M18 11 H20 a2 2 0 0 1 0 4 H18 M8 6 C 7 5 9 4 8 3 M12 6 C 11 5 13 4 12 3"/>
  </symbol>
  <symbol id="i-mortar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 10 H19 L17 17 a2 2 0 0 1 -2 1.5 H9 a2 2 0 0 1 -2 -1.5 Z"/>
    <path d="M12 6 V10 M9 4 L13 8"/>
  </symbol>
  <symbol id="i-warn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4 L21 20 H3 Z"/><path d="M12 10 V14 M12 17 V17"/>
  </symbol>
  <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3 L20 6 V12 C 20 17 16 20 12 21 C 8 20 4 17 4 12 V6 Z"/>
    <path d="M9 12 L11 14 L15 10"/>
  </symbol>
  <symbol id="i-sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3 L13.5 9.5 L20 11 L13.5 12.5 L12 19 L10.5 12.5 L4 11 L10.5 9.5 Z"/>
    <path d="M19 4 L19.5 6.5 L22 7 L19.5 7.5 L19 10 L18.5 7.5 L16 7 L18.5 6.5 Z"/>
  </symbol>
  <symbol id="i-mic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="3" width="6" height="12" rx="3"/>
    <path d="M5 11 a7 7 0 0 0 14 0 M12 18 V22 M8 22 H16"/>
  </symbol>
  <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12 H21 M12 3 C 15 6 15 18 12 21 M12 3 C 9 6 9 18 12 21"/>
  </symbol>
  <symbol id="i-power" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
    <path d="M12 4 V12 M6.3 7.3 a8 8 0 1 0 11.4 0"/>
  </symbol>
  <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22 C 7 16 4 13 4 10 a8 8 0 0 1 16 0 c 0 3 -3 6 -8 12 Z"/>
    <circle cx="12" cy="10" r="3"/>
  </symbol>
  <symbol id="i-stretch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="4.5" r="1.6"/>
    <path d="M12 7 V14 M12 14 L9 17 L7 21 M12 14 L15 17 L17 21 M5 10 H10 M14 10 H19"/>
  </symbol>
  <symbol id="i-upload" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 17 V19 a2 2 0 0 0 2 2 H18 a2 2 0 0 0 2 -2 V17"/>
    <path d="M12 3 V15 M7 8 L12 3 L17 8"/>
  </symbol>
  <symbol id="i-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 3 H14 L19 8 V20 a1 1 0 0 1 -1 1 H7 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 Z"/>
    <path d="M14 3 V8 H19 M9 13 H15 M9 17 H15"/>
  </symbol>
</svg>`;
  function inject() {
    if (document.getElementById('trigr-sprite')) return;
    const wrap = document.createElement('div');
    wrap.id = 'trigr-sprite';
    wrap.innerHTML = SPRITE;
    document.body.insertBefore(wrap.firstElementChild, document.body.firstChild);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
