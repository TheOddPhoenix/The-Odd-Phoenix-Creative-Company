# Editorial redesign review

Branch: `redesign/editorial-studio`. Prepared for review only. Do not deploy this branch through the production Pages workflow.

The supplied mockup drives the composition: charcoal typographic hero, painted emphasis, bone service band with six photographic links, forest philosophy beside The Lab, and a garnet closing strip. The site remains Astro with separate Home, Services, About, Lab, and Contact pages. Original logo PNGs are retained untouched and are not displayed in this redesign.

## Functional changes

- Seven detailed service categories retain the original offerings, with E-Commerce & Online Stores added as a flagship category.
- Services links preselect the matching inquiry checkbox.
- Home search is available through the service-band disclosure; the Services page has an always-visible search input. Curated synonyms map terms such as “fix my logo,” “PowerPoint,” and “webshop” to relevant offerings.
- Accessible mobile menu, keyboard focus treatment, one H1 per page, reduced-motion CSS, and reserved hero dimensions.
- Homepage founder credentials and résumé material removed. The Lab identifies Oddities as in production and makes no launch or client-work claims.
- Existing domain, canonical URLs, copyright entity, and public email retained. Lab added to sitemap. The old portfolio URL is a useful noindex signpost to The Lab rather than an empty project grid.

## Required form configuration before release

The repository has no verified form endpoint. `PUBLIC_FORM_ENDPOINT` must be an owner-created and verified `https://formspree.io/f/...` URL delivering to theoddphoenix@outlook.com. This is a public form identifier, never a secret API key.

The form includes native required/email validation, length limits, a honeypot, pending-state protection, success feedback only after an accepted response, and failure feedback preserving entered text. The form is not a mailto submission mechanism. While unconfigured, fields and checkboxes work, but submission is explicitly unavailable. Direct email remains a secondary contact option.

To finish configuration: verify the destination in Formspree, set the repository variable, restrict allowed domains as appropriate, review the provider's spam controls, and confirm one real inbox delivery plus success/error handling. No real inquiry or test email was sent during this redesign. Delivery remains unverified and this PR should stay draft until connected.

## Assets

Six individual photographic assets were created with the built-in image-generation tool, then optimized to 480×640 WebP (approximately 25–47 KB each). These depict objects, not client work. No reference screenshot is embedded as a webpage background. Paper grain, torn edges, brushstroke shapes, and ink accents are scalable CSS/SVG layers.

Image prompt template: “Use case: product-mockup. Create a single photographic website service-card asset. [Subject below.] Moody cinematic realistic still-life photography, vintage editorial aesthetic, subtle distressed texture, restrained warm light, deep shadows. Portrait composition with object in upper two thirds and lower third dark clear space reserved for HTML heading. No text, letters, logo, watermark, birds, people, UI or borders. Fill frame edge to edge; no rounded corners. Production-quality individual asset, not a website screenshot.”

Subjects:
- `strategy.webp`: A single antique brass king chess piece, upright, dramatically side-lit, on deep forest green #243526 mottled paper backdrop.
- `editorial.webp`: A vintage black mechanical typewriter with antique gold keys and a blank neutral sheet of paper, three quarter front view, on dark aubergine #351F35 mottled backdrop.
- `branding.webp`: A carefully arranged fan of physical paper color swatches and print samples, bone cream terracotta antique gold and garnet, on dark garnet #642D3D backdrop.
- `photography.webp`: A professional black mirrorless camera with detailed lens, three quarter front view, on deep forest green #243526 mottled backdrop.
- `digital.webp`: An open thin black laptop with blank dark screen, warm metallic highlights, three quarter front view on dark aubergine #351F35 mottled backdrop.
- `commerce.webp`: A miniature antique-gold wire shopping cart, three quarter side view, dramatically lit on garnet #642D3D mottled backdrop.

Barlow Condensed and Permanent Marker are self-hosted; their license files are included under `public/fonts/`. Georgia provides the editorial serif. No remote font or tracking request is needed at runtime.

## Validation

- Production build passes.
- `node scripts/validate-build.mjs` validates seven HTML pages, 107 internal links, six homepage cards, e-commerce copy, and image references.
- Browser checks at 320, 390, 768, and 1536 CSS pixels found no horizontal overflow on the homepage. Services tablet layout and Contact mobile layout also checked.
- Menu opens and closes with Escape; checkboxes toggle, optional details expand, e-commerce preselection works, and searches for “fix my logo” and “PowerPoint” return relevant results.
- Reduced-motion behavior implemented in CSS. No claim of a comprehensive assistive-technology audit or measured Core Web Vitals.
- Contact delivery cannot be tested until an endpoint is configured.

Review images: `docs/previews/desktop.webp` and `docs/previews/mobile.webp`.
