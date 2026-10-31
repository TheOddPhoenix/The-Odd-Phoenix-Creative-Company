# Odd Phoenix Creative Company

Astro static website for GitHub Pages and https://theoddphoenix.com. Original repository logo assets are preserved unchanged. Homepage redesigned October 31, 2026: Your story, your way; original transparent header logo and decorative phoenix watermark; larger typography; grouped service lists; founder credibility and inquiry form on the homepage.

## Run and build

Use Node.js 22.12+ (or a supported newer LTS), then npm ci, npm run dev, and npm run build. The production output is dist/. npm run preview serves it locally.

## Maintain

- Pages: src/pages/. Home, About, Services, Portfolio, and Contact have individual URLs and metadata.
- Shared SEO and page shell: src/layouts/SiteLayout.astro.
- Brand tokens and responsive styles: src/styles/global.css. Georgia and Arial need no remote fonts.
- Shared UI: src/components/.
- Service summaries and full lists: src/data/services.js and service-details.js.
- Portfolio content: src/data/projects.js; docs/project-template.md describes approved content requirements. Projects are still pending; portfolio is noindex and excluded from the sitemap until real content is published. Placeholder cards and Portfolio navigation are hidden from the homepage.
- Original artwork: assets/logos/. Keep white/light backgrounds, original colors, and proportions.

## Search visibility

Each page has a unique title, description, canonical URL, Open Graph metadata, semantic headings, and internal links. Organization structured data includes no invented address. sitemap.xml includes Home, About, Services, and Contact. robots.txt allows crawling in production. PUBLIC_SITE_PREVIEW=true applies noindex and robots disallow to previews. Do not set it true for launch. Search indexing/rankings require publication and useful approved content; metadata alone cannot ensure rankings.

## Inquiry connection

The full accessible inquiry form is implemented but disabled until configured. No submission can be made from the unconfigured preview. Create a Formspree form with a confirmed receiving address and add its public endpoint (https://formspree.io/f/...) as repository Actions variable PUBLIC_FORM_ENDPOINT, or in .env for local builds. This is a public form identifier, not a private credential. See .env.example. Restrict the form to theoddphoenix.com and enable service-side spam protection. A _gotcha honeypot is included. Only an HTTP success displays confirmation; errors preserve entered text. Perform a real delivery test after setup. No receiving address has been invented.

## Deployment and domain

See docs/domain-setup.md for exact Spaceship DNS records, GitHub Pages domain binding, HTTPS, and Search Console steps. The manual .github/workflows/pages.yml builds and deploys dist/. Source uses repository variables SITE_BASE (default /), PUBLIC_FORM_ENDPOINT, and PUBLIC_SITE_PREVIEW. The domain is connected to GitHub Pages with HTTPS enforced and ownership verified. GitHub Actions custom domains use the Pages setting; no CNAME file is required.

## Outstanding

Full brand guide, approved icons and portfolio content, confirmation of photography availability, receiving email/Formspree endpoint, Spaceship DNS setup, Pages activation, HTTPS and delivery verification. No e-commerce, pricing packages, invented projects, or testimonials are included.


Logo.astro frames transparent canvas padding without altering visible artwork or the source PNG files. InquiryForm.astro is shared by the homepage and /contact/. Header navigation targets homepage sections. Copyright is The Odd Phoenix LLC. All 83 services remain in the HTML, with supplemental service entries exposed through native details controls. Optional inquiry fields are collapsed. Form delivery still needs PUBLIC_FORM_ENDPOINT.
