/** @type {import('tailwindcss').Config} */
module.exports = {
  // ── Class-based dark mode — toggle by adding/removing `dark` on <html> ────
  darkMode: 'class',

  // ── Content paths for Next.js App Router ─────────────────────────────────
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts}',
  ],

  theme: {
    extend: {

      // ── Color palette ──────────────────────────────────────────────────────
      // Bungee is monochromatic — photography provides color, the chrome stays
      // stark black/white. Dark-mode swaps ink ↔ chalk.
      colors: {
        ink:          '#0C0C0C',   // page background (dark), primary text (light)
        chalk:        '#FFFFFF',   // page background (light), primary text (dark)
        muted:        '#6B6B6B',   // secondary text, captions, labels
        border:       '#E5E5E5',   // dividers, card outlines
        surface:      '#F5F5F3',   // card / tinted section backgrounds (light)
        'surface-dark': '#1A1A1A', // card / tinted section backgrounds (dark)
      },

      // ── Font families ──────────────────────────────────────────────────────
      // CSS variables are injected by next/font in layout.tsx and applied to <html>.
      fontFamily: {
        display: ['var(--font-big-shoulders)', 'sans-serif'],
        sans:    ['var(--font-nunito)',         'system-ui', 'sans-serif'],
        mono:    ['var(--font-roboto-mono)',    '"Courier New"', 'monospace'],
      },

      // ── Type scale ─────────────────────────────────────────────────────────
      // Fixed-size steps that work alongside the fluid clamp() tokens in
      // globals.css. The display/8xl entries are Bungee-specific additions.
      fontSize: {
        'display': ['clamp(4rem,10vw,10rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        '8xl':     ['7rem',    { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        // Tailwind's default 7xl–4xl are kept but overridden with tighter tracking
        '7xl':     ['5rem',    { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '6xl':     ['3.75rem', { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        '5xl':     ['3rem',    { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        '4xl':     ['2.25rem', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
      },

      // ── Spacing ────────────────────────────────────────────────────────────
      // 8px base grid. Fills the gaps left by Tailwind's default scale and adds
      // large section-padding tokens Bungee uses heavily.
      spacing: {
        '4.5': '1.125rem',  //  18px
        '18':  '4.5rem',    //  72px
        '22':  '5.5rem',    //  88px
        '26':  '6.5rem',    // 104px
        '30':  '7.5rem',    // 120px
        '34':  '8.5rem',    // 136px
        '38':  '9.5rem',    // 152px
        '42':  '10.5rem',   // 168px
        '50':  '12.5rem',   // 200px
      },

      // ── Border radius ──────────────────────────────────────────────────────
      borderRadius: {
        'card': '1.5rem',   // 24px — gallery image cards
        'pill': '9999px',   // fully rounded — CTA buttons / chips
      },

      // ── Letter spacing ─────────────────────────────────────────────────────
      letterSpacing: {
        'display': '-0.04em',  // hero wordmark
        'heading': '-0.02em',  // section headings
        'label':   '0.08em',   // ( _01 ) style counter labels
        'wide':    '0.05em',   // secondary uppercase labels
      },

      // ── Line heights ───────────────────────────────────────────────────────
      lineHeight: {
        'display': '0.92',  // very tight — hero scale text
        'heading': '1.1',   // section headings
        'snug':    '1.3',   // subheadings, UI text
        'body':    '1.65',  // comfortable reading rhythm
      },

      // ── Max widths ─────────────────────────────────────────────────────────
      maxWidth: {
        'container': '1280px',  // outer shell
        'content':   '1040px',  // body copy columns
      },

    },
  },
};
