# Oluwaseun Ayeni — Professional portfolio

Responsive portfolio for a product designer, writer, and founder. Built with semantic HTML, CSS, JavaScript, and Vite.

## Development

Requires Node.js 20.19+ or 22.12+ (validated on Node.js 24).

```sh
npm ci
npm run dev -- --port 5173
```

## Production

```sh
npm run build
npm run preview -- --port 4173
```

Deploy the generated `dist/` directory to a static hosting provider.

## Content to finalise

- Add original product screenshots and full case studies for procurement, Koliv, lending, and BiBuddy. Current interface treatments are illustrative.
- Add verified venture product screens, company links, career details, and a portrait if desired.
- Replace the contact notice/dialog with a verified email or booking URL.
- Add the official cover and purchase link for the published In the Beginning, There Was Design.
- Other books expose summaries only; full manuscript content and excerpts are omitted, not just visually hidden.
- Confirm the biography and original concept cover treatments before publication.

The bookshelf and five individual book pages use the supplied summaries. Product illustrations and cover treatments are original HTML/CSS artwork. No client outcomes or testimonials are claimed. Newsreader and Commissioner fonts are self-hosted in public/fonts, with their licenses and system fallbacks. No credentials or backend services are required.

## Visual direction

The current layout adapts the supplied home.pdf: forest-green introduction card, typographic identity panel pending a real portrait, serif editorial headings, accessible three-chapter journey tabs, deep-green venture feature, bordered project cards, and a writing index. The reference person’s credentials, portrait, employers, and awards are not used.

## Current content direction

The latest supplied portfolio notes establish Midnight Blue (#101D30), four journey chapters (Designer, Design Leader, Founder, Author), eight-plus years in product design, approved work summaries, five ventures including Ridewave, and ADPList mentorship. Numeric leadership claims are omitted pending validation. No testimonials or external profile links are invented.

## Header and hero

Fixed four-link header: My Journey, About me, Work, Writing, shared across all seven pages. The homepage uses an editorial statement and a compact profile card, with deep ink and warm ivory as its primary palette. Anchor offsets account for the fixed navigation.

## FOLIO format

The current presentation follows the supplied FOLIO.pdf: a dark gallery, oversized introduction, prominent two-column project grid, compact about/journey/expertise/mentorship panels, venture and book galleries, and a full-width contact card. All existing content and publication restrictions are retained. The fixed four-link navigation remains.

The FOLIO layout now uses the reference’s single oversized professional title, visual-first project cards with minimal captions, wide visual/content column and narrow stacked information sidebar. Existing venture and book content extends the wider column; current journey, expertise, and mentorship content extends the sidebar. A typographic identity panel occupies the reference portrait slot until a real portrait is supplied.

On desktop, the profile/experience/statistics group is sticky below the fixed header while the right-hand information panels scroll. It releases at the end of that two-column section; ventures and writing follow below. Mobile uses normal document scrolling.

## Pages and display controls

The header opens /journey/, /about/, /work/, and /books/ as separate static pages. Let's talk links to the homepage contact section. Floating controls scroll up/down one screen at a time and switch between dark/light themes. The theme is stored locally in the browser; no account or backend is required. All ten routes are included in the Vite production build. Netlify serves their generated index.html files directly.

## Project detail pages

Project cards now navigate to four static routes under /work/: stanbic-digital-lending, titan-document-workflows, healthcare-records, and public-service-transformation. Each has a large title, summary, known project metadata, illustrative interface, context and experience priorities, and next-project navigation. These are project overviews: research, dates, tools, responsibilities and measured outcomes must be supplied before presenting full case studies.

The project bodies follow Sample.pdf: horizontal sticky section navigation; overview, problem, goal, research, design process, testing, solution, results, and reflection. Unprovided research/testing/results are explicitly identified as unpublished; the sample's client work and metrics are not used as personal evidence.
