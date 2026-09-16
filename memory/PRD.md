# PRD — Hamat Al-ebda'a (هامات الإبداع) Landing Page

## Original Problem Statement
Build a premium, creative, interactive-looking static one-page bilingual (EN default / العربية RTL) landing page for Hamat Al-ebda'a, a Saudi event management company. Content strictly from the attached Company Profile PDF; visual identity strictly from the Brand Guidelines PDF (dusty purple #8A688A, charcoal, warm gold #C5A16F; Red Hat Display EN / Cairo AR fonts; tagline "Experience. Inspire. Succeed."). No search bar. Contact nav item scrolls to contact form. Company Profile PDF download button in footer. Updated email: entertainment@hamatalebdaa.com.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lucide-react + sonner. Single-page, section-based with smooth scroll.
- Backend: FastAPI, `/api/contact` POST/GET (MongoDB `contact_messages`), `/api/status` (template).
- Assets: Real logo extracted from brand guidelines (transparent purple + white variants in `public/assets/`), real project/event photos extracted from company profile PDF, 3D isometric event dioramas from the PDF used as hero/about visuals. Company profile PDF served at `/hamat-al-ebdaa-company-profile.pdf`.
- i18n: `src/i18n.js` — LangProvider with full EN/AR translations (exact profile wording), sets `document.dir` for RTL.

## User Personas
- Corporate/government event buyer evaluating the company
- Potential partner/sponsor
- Arabic-first Saudi visitor (RTL)

## Core Requirements (static)
1. One-page static site, smooth-scroll nav: Home, About, Services, Expertise, Our Work, Clients, Why Us, Contact
2. EN default + العربية switcher in header with full RTL
3. Hero with 3D event-inspired visual + CTAs (Contact Us / View Our Work)
4. Sections with exact profile content: Who We Are, Vision & Mission, Values (5), Services (5), Goals (3), Team Expertise (10), Our Work (4 projects), Clients/Partners, Why Us (4), Contact form
5. Footer: logo, quick links, contact info, social, Download Company Profile button
6. No search bar anywhere

## Implemented (2026-09-15)
- Full bilingual one-page site with all 11 sections + footer, exact profile copy EN/AR
- Brand-authentic assets: transparent logo variants, real photos (SGS/LePure/Mazda/Pink Cup), mauve 3D dioramas
- Contact form wired to backend `/api/contact` (saved in MongoDB, sonner toast feedback)
- Clients marquee (17 real clients/partners from profile)
- Footer PDF download button (one click, verified HTTP 200)
- Verified: EN + AR rendering, RTL flip, form submission in both languages, smooth scroll, no console errors (only platform telemetry)

## Implemented (2026-09-15, round 2)
- Hero: new interactive 3D scene (`HeroScene.jsx`) — generated brand-palette 3D event platform + balloons/spotlight/gold-star layers, mouse-tilt parallax (framer-motion springs), orbit rings, twinkling stars. Assets `public/assets/3d-*.webp` (chroma-keyed to transparent).
- Services cards: clickable ("View Our Work" → smooth-scrolls to #work), keyboard accessible.
- Our Work: photos no longer crop people — blurred-fill background + `object-contain`; letterboxed LePure photo cropped to content; click-to-open lightbox (Esc/backdrop/close button).
- Floating WhatsApp button (wa.me/966569969513), bilingual label.

## Implemented (2026-09-15, round 3)
- Preloader (`Preloader.jsx`): full-screen intro before site — white logo, "شركة هامات الإبداع" / "Hamat Al-ebda'a Company", gold→fuchsia progress line, 0–100% counter, fade-out (~2.5s), brand grid + pattern bg.
- Hero 3D rebuilt as a real WebGL scene (`Stage3D.jsx`, react-three-fiber + postprocessing Bloom): wireframe/glass neon stage on a slab — LED screen shader, gold truss, moving spotlight beams, glowing crowd points, confetti, orbit rings; mouse parallax + auto-rotate; `<img>` fallback when WebGL missing. Deps: three, @react-three/fiber, @react-three/postprocessing (drei skipped: needs Node 22).
- Brand logo-mark pattern: mark vectorized to SVG (`public/assets/mark.svg`), tiled via CSS classes `.brand-pattern` / `.brand-pattern-light` (inline data-URI) on Hero, Services, Our Work, Clients, Contact, Footer, Preloader.
- Clients: 16 real logos extracted at 300dpi from profile PDF page 12 → `public/assets/clients/*.png`, circular badges (purple ring / gold ring like the profile), marquee pauses on hover, name tooltip.
- Tested by testing agent: /app/test_reports/iteration_1.json — 100% pass.

- City Walk photo (Contact section) upscaled/enhanced 682→1264px (AI enhance of the same photo, content unchanged); original kept in memory/assets_src.

- Pink + Hattrick client badges rebuilt from full source logos (were clipped by the circle); verified in /app/test_reports/iteration_2.json.

## Implemented (2026-06, round 4 — targeted client edits)
- Our Work section rebuilt with 6 real projects from the client Portfolio PPTX (original photos extracted): AROYA Cruise (1 img), Pink Cup Event (4 imgs), W2K23 Event (2 imgs), JAHEZ Event (2 imgs), Ittihad Fan Zone (4 imgs), Al-Ahli Match (1 img). Assets under `public/assets/portfolio/`.
- Cards now show uniform LANDSCAPE 4:3 covers (object-cover, smart-cropped so no faces/people distorted). Multi-image projects show a photo-count badge and open a navigable lightbox gallery (prev/next arrows, keyboard ←/→, dot indicators). Single-image projects open a plain lightbox (no nav).
- Contact section: added company address (Alitqan Square, Jeddah City – Office 510 / الإتقان سكوير، جدة – مكتب 510), Google Maps embed iframe (replaced decorative image), MapPin address row, and a "Get Directions / الاتجاهات" button → google maps directions URL.
- Logo replaced everywhere (Header, Footer, Preloader) with new brand logo `public/assets/logo-hamat-new.png` (white-bg logo placed in a white rounded chip so it stays legible on dark surfaces; logo used as-is, unmodified).
- Verified: /app/test_reports/iteration_3.json — frontend 100% pass, EN/AR both, no 404s/console errors.

## Backlog / Next
- P0: none
- P1: Email notification on contact form (needs Resend API key) — STILL PENDING (contact form only saves to MongoDB)
- P2: SEO/OpenGraph tags; official Google Maps Embed API key for map reliability
