# Premium Bedding E-Commerce Website
## Complete UI/UX Art Direction & Website Generation Brief

> **Project purpose:** Design a distinctive, premium, conversion-focused bedding and home-linen website for a real client. This document is a design and implementation prompt—not permission to start coding or building. Use it as the master brief for a UI/UX designer or an AI coding/design assistant when the client is ready.

---

## 1. Creative Direction

Create a high-end bedding and home-linen e-commerce experience that feels art-directed by an experienced digital designer and an interiors editorial team. The website should communicate comfort, material quality, craftsmanship, taste and quiet confidence.

The result must feel like a real, considered brand—not a generic AI-generated Shopify template, a prebuilt theme with a new color palette, or a collection of predictable rounded cards and gradients.

### The desired impression

- Calm, tactile, warm and inviting.
- Premium without feeling cold, sterile or inaccessible.
- Contemporary with a subtle sense of timelessness.
- Editorial and visually expressive, while remaining easy to shop.
- Human, authentic and specific to the client's actual products and story.
- Designed around beautiful bedroom photography, fabric detail and useful product information.

### Reference website

Client reference: https://sheetsociety.com/en

Use the reference to understand the level of polish, product storytelling, merchandising, category navigation, styling inspiration and overall e-commerce quality. Do **not** reproduce its exact layouts, copy, brand assets, color combinations, typography, product naming, illustrations or distinctive interactions. Develop an original identity for the client's business.

The reference is useful for these strategic ideas:
- Bedding should be shown in beautifully styled real-life bedroom environments.
- Customers should be able to browse by product type, material, color and collection.
- Product pages should explain fabric and construction rather than relying only on attractive images.
- Styling inspiration and coordinated product suggestions help customers imagine a complete bedroom.
- Shopping should feel intuitive, with product information and purchase actions easy to find.

---

## 2. Brand Positioning and Audience

Design for a bedding business that wants to be perceived as a specialist brand, not a general household-goods catalogue.

### Core customer motivations
1. They want a bedroom that looks considered, restful and beautiful.
2. They care about softness, breathability, durability and material quality.
3. They want confidence in sizing, care instructions, color accuracy and delivery.
4. They may be buying a complete bedroom refresh, a replacement item or a thoughtful gift.
5. They want inspiration but do not want to work hard to understand the store.

### Brand personality
Use the following as the creative baseline:
- Thoughtful, warm and quietly confident.
- Sensory and descriptive, without exaggerated luxury clichés.
- Design-aware, but never pretentious.
- Honest about materials, origin, care and product benefits.
- Friendly and human in customer-facing language.

Avoid generic phrases such as “Elevate your lifestyle”, “Where luxury meets comfort”, “Discover the ultimate experience” and “Transform your space” unless the client has a genuine, specific reason to use them. Prefer concrete, memorable language based on the actual product.

### Important client inputs to confirm before production
Do not invent any of these:
- Brand name, logo, tagline and brand story.
- Country, currency, shipping regions and tax rules.
- Actual products, fabrics, sizes, colors, prices and stock.
- Product certifications, sustainability claims and country of manufacture.
- Return policy, delivery times, warranty and customer support details.
- Product photography, lifestyle photography and usage rights.
- E-commerce platform, payment providers and inventory system.

Use clearly marked placeholder content during design exploration. Replace it with verified client information before launch.

---

## 3. Distinctive Visual Identity

### Proposed creative concept: “The Quiet Atelier”

A warm, tactile visual world inspired by natural textiles, architectural interiors, vintage print ephemera and contemporary editorial design. The site should feel like stepping into a thoughtfully styled bedroom—not entering a software dashboard.

Use a restrained foundation and let photography, fabric texture, product colors and typography provide personality. Avoid making every section the same beige rectangle.

### Color palette

Use this palette as the initial art direction. Adjust only after reviewing the client's actual products and photography.

| Token | Color | Hex | Intended use |
|---|---|---:|---|
| Porcelain | Soft warm ivory | `#F4F0E8` | Main page background |
| Chalk | Clean warm white | `#FBF9F5` | Product cards and light surfaces |
| Oat | Muted natural beige | `#D8CBB8` | Secondary backgrounds and swatches |
| Umber | Deep earthy brown | `#49372F` | Primary text and strong contrast |
| Olive Ink | Muted botanical green | `#596451` | Accent links, selected states and small details |
| Clay Rose | Dusty terracotta-rose | `#B77F70` | Occasional accent and campaign details |
| Dusk Blue | Greyed slate blue | `#71818A` | Secondary accent and selected product stories |
| Soft Graphite | Warm near-black | `#282725` | Body text where stronger contrast is needed |

#### Palette rules
- Porcelain and Chalk should form the majority of the interface.
- Umber and Soft Graphite should carry most text and navigation.
- Olive Ink should be used sparingly as a recognizable brand accent.
- Clay Rose and Dusk Blue are supporting accents, not competing primary colors.
- Product swatches must reflect actual product colors, not this interface palette.
- Avoid applying a beige background to every section. Alternate light surfaces, photography, deep editorial panels and open whitespace.
- Check text contrast and keyboard focus visibility. Never sacrifice readability for a muted aesthetic.
- Do not use gradients as a substitute for art direction.

### Typography system

Use a deliberate two-family pairing: an expressive editorial serif for display moments and a highly legible sans-serif for navigation, product information and controls.

**Recommended pairing**
- Display / editorial: **Cormorant Garamond** — elegant, characterful serif with a tactile, literary quality.
- Interface / body: **DM Sans** — clean, contemporary and readable at small sizes.

**Alternative pairing if the brand needs a more contemporary, architectural feel**
- Display: **Instrument Serif**
- Interface: **Manrope**

Choose one pairing and use it consistently. Do not mix all four families.

#### Typography rules
- Use the display serif for large campaign headlines, collection titles and selected editorial statements.
- Use the sans-serif for navigation, body copy, labels, product titles, prices, filters and buttons.
- Headlines should have intentional line breaks and restrained line lengths.
- Use a clear type scale rather than arbitrary font sizes.
- Keep product names and prices easy to scan.
- Use uppercase sparingly for tiny utility labels, not for every heading.
- Avoid excessive letter spacing, ultra-thin text and tiny low-contrast captions.
- Use locally hosted or properly licensed font files where appropriate; provide sensible fallback fonts.

### Suggested type scale
These are starting points, not rigid values:
- Hero headline: `clamp(3rem, 7vw, 6.5rem)`, tight line-height.
- Section heading: `clamp(2rem, 4vw, 3.75rem)`.
- Editorial subheading: 1.25–1.75rem.
- Body: 1rem–1.125rem with comfortable line-height.
- Product title: 0.95–1.05rem.
- Utility labels: 0.7–0.8rem, used sparingly.

---

## 4. Layout and Design Principles

### Overall composition
- Use a responsive 12-column desktop grid with consistent gutters.
- Use generous but purposeful whitespace.
- Align elements to a clear grid; do not position everything independently.
- Let selected photography bleed to the edge of the viewport for editorial impact.
- Use asymmetry where it strengthens the story, not as random decoration.
- Keep content widths controlled for comfortable reading.
- Use consistent spacing tokens and a deliberate rhythm between sections.

### Shape language
- Prefer clean rectangles, subtle borders and carefully considered image crops.
- Use small corner radii only where they serve a purpose, such as input fields or compact controls.
- Avoid the generic “everything is a rounded card” aesthetic.
- Avoid floating pills, glassmorphism, neon gradients, excessive shadows and dashboard-like containers.
- Buttons should feel tactile and intentional, with clear hierarchy.

### Photography is the main design asset
The quality of photography will determine whether this design feels premium. Prioritize:
- Real bedrooms with natural light and believable lived-in details.
- Beautifully styled beds with visible folds, drape, layering and texture.
- Close-up macro shots of weave, stitching, hems, quilting and fabric surfaces.
- Multiple angles and useful product detail shots.
- Consistent color grading and realistic product colors.
- A mix of wide environmental images, portrait editorial images and square product imagery.

Avoid:
- Obvious AI-generated bedrooms, distorted furniture, impossible folds, inconsistent patterns or synthetic-looking fabric.
- Repeating the same stock bedroom image across multiple sections.
- Images with text baked into them.
- Overly polished CGI where real product photography is available.
- Cropping that hides the product or makes the fabric difficult to judge.

If the client has limited photography, create a realistic photography shot list before relying on generic stock imagery.

---

## 5. Site Architecture and Navigation

Create a simple, premium navigation system that supports both discovery and direct shopping.

### Recommended primary navigation
- New Arrivals
- Bedding
- Bed Sheets
- Duvet / Quilt Covers
- Pillowcases
- Comforters / Quilts
- Blankets & Throws
- Collections
- Our Materials
- Journal / Inspiration

Only include categories that match the client's actual catalogue. Rename terms to match the client's market (for example, duvet cover vs. quilt cover).

### Header behavior
- Slim announcement strip for one genuine message: shipping threshold, new collection, promotion or delivery information.
- Main header with logo, primary navigation, search, account and cart.
- Keep the header visually light and avoid crowding.
- Use a sticky header that reduces in height subtly after scrolling.
- On mobile, use a clear menu trigger, centered or left-aligned logo and accessible cart/search actions.
- Mega menus may use a curated image and a few useful category links, but should not become oversized promotional billboards.
- Ensure hover menus also work with keyboard focus and touch.

### Footer
Include:
- Customer care and contact information.
- Shipping and returns.
- Size guide.
- Fabric and care guide.
- FAQs.
- About the brand.
- Journal / inspiration.
- Newsletter signup with a clear value proposition.
- Social links, payment information and legal links.
- Country/currency selector only if the business actually supports multiple markets.

---

## 6. Homepage: Recommended Section-by-Section Experience

The homepage should tell a visual story, establish trust and guide visitors into shopping. Avoid making it a long sequence of identical product grids.

### Section 1 — Announcement bar
A restrained, low-height strip at the top. Use one useful message. If a promotion is shown, make sure it is real and current.

### Section 2 — Navigation
A minimal, well-spaced header with clear shopping categories. Keep the logo distinctive and give it enough breathing room.

### Section 3 — Hero: “A bedroom worth coming home to”
Create a cinematic, full-width or near-full-width bedroom image with authentic textile detail. The image should carry the emotional impact.

Overlay or position a carefully composed headline, one short supporting line and one primary CTA such as “Shop bedding”. A secondary CTA may lead to the latest collection.

Design direction:
- Use a real lifestyle photograph with strong composition.
- Place text where it remains legible without heavy overlays.
- Avoid a generic centered headline floating over a random image.
- Consider a split editorial layout if the photography is more compelling without text over it.
- On mobile, art-direct a separate crop rather than shrinking the desktop image.

### Section 4 — Shop by category
A visual category strip or grid with clear image-led links:
- Sheets
- Duvet / Quilt Covers
- Pillowcases
- Quilts / Comforters
- Throws / Blankets

Use consistent image treatment and concise labels. Each item should be a real destination.

### Section 5 — Brand point of view
A short editorial statement explaining what makes the business worth choosing. Pair it with a close-up textile image, a bedroom detail or a founder / maker photograph.

The message must be specific and verifiable: fabric quality, thoughtful construction, local production, design philosophy or another genuine differentiator.

### Section 6 — Featured collection
Show one curated collection with a strong campaign image and a compact product selection. Avoid placing too many products above the fold.

### Section 7 — Bestsellers
A clean product grid with:
- Consistent image aspect ratios.
- Product name.
- Material or collection.
- Price.
- Color swatches where available.
- Clear sale/stock labels only when accurate.
- Quick add only if the product has a simple, unambiguous purchase configuration.

Use product photography that helps compare items. Do not rely on decorative card shadows.

### Section 8 — Material story
Create a visually rich section that explains the feel and practical qualities of the fabrics the client actually sells.

Potential content:
- Cotton: weave, softness, breathability and care.
- Linen: texture, relaxed drape and natural variation.
- Percale / sateen: explain the difference only if those products are offered.
- Quilting / fill: explain warmth, weight and construction where relevant.

Do not make unverified claims about thread count, organic status, certifications, temperature regulation or sourcing.

### Section 9 — Styling / bedroom inspiration
Use a magazine-like editorial layout with one large image and smaller supporting images. Link each look to the products used where possible.

The goal is to help shoppers picture a finished room and discover combinations—not simply add decorative content.

### Section 10 — Quality and trust
Use three or four concise proof points, only when true:
- Fabric and construction details.
- Delivery and returns.
- Customer support.
- Warranty or quality promise.
- Verified customer reviews.

Do not invent badges, certifications, awards or review counts.

### Section 11 — Customer reviews
Use genuine customer reviews with permission and an honest rating source. Keep the design restrained and readable. Link to the review platform if applicable.

### Section 12 — Journal / editorial
Feature two or three useful articles:
- How to choose the right bedding.
- How to care for linen or cotton.
- How to style a layered bed.
- How to choose bedding sizes.

### Section 13 — Newsletter
Use a thoughtful invitation, not a generic “Subscribe now”. Explain what subscribers receive, such as new collection previews, styling advice or occasional offers—only if the business will actually send them.

### Section 14 — Footer
A structured footer with customer support, policies, brand information and social links.

---

## 7. Collection and Category Pages

The collection page must make browsing effortless and visually coherent.

### Collection header
- Collection title.
- One concise description.
- Optional campaign image or restrained editorial introduction.
- Breadcrumbs where useful.

### Product listing
- Desktop: 3 or 4 columns depending on image size and catalogue density.
- Tablet: 2 or 3 columns.
- Mobile: 2 columns where product images and labels remain usable; switch to one column if the product requires larger imagery.
- Keep product cards consistent.
- Provide useful sorting: featured, newest, price low-high, price high-low, where supported.
- Provide filters that reflect real product data: size, color, material, price, availability and collection.
- Show active filters and make them easy to remove.
- Keep filter controls accessible on mobile, preferably in a clear drawer or sheet.
- Preserve filter and sort state when navigating back from a product page.

### Product card interaction
- Image swap on hover only when a genuinely useful alternate image exists.
- Color swatches should update the displayed image and link to the correct variant.
- Quick add should not conceal required choices such as size.
- Make sale pricing and stock status clear without visual noise.
- Use restrained transitions; avoid bouncing, spinning or excessive card movement.

---

## 8. Product Detail Page

The product page is one of the most important conversion surfaces. It should balance emotional photography with practical confidence.

### Product media
- Large gallery with front, styled, detail and scale/context images.
- Allow zoom or a useful lightbox for fabric details.
- Use thumbnails or a clear gallery indicator.
- Mobile gallery should be swipeable and not trap scrolling.
- Video may be used for a genuine product demonstration, but should not autoplay with sound.

### Purchase information
Show, in a clear hierarchy:
1. Product name.
2. Price and genuine sale price if applicable.
3. Short material / collection descriptor.
4. Color selection.
5. Size selection.
6. Quantity where relevant.
7. Add to cart CTA.
8. Delivery estimate or shipping information, if available.
9. Returns information.
10. Payment options where relevant.

### Product education
Use accordions or clearly separated content for:
- Fabric composition.
- Feel and weave.
- Dimensions and size guide.
- What's included.
- Care instructions.
- Construction details.
- Shipping and returns.
- Product origin and certifications, only if verified.

### Useful conversion details
- Clearly indicate selected color and size.
- Disable unavailable combinations and explain why.
- Keep the Add to Cart action visible without covering essential information.
- Provide an informative added-to-cart confirmation.
- Suggest complementary items based on actual product relationships.
- Show recently viewed products only if it helps users return to them.
- Include genuine reviews and customer imagery where available.

---

## 9. Signature Feature: Build Your Bed

If the client's product catalogue supports mix-and-match purchasing, consider a guided “Build Your Bed” experience. This can become a memorable brand feature rather than a decorative gimmick.

### Suggested flow
1. Choose a base sheet color or fabric.
2. Choose a duvet / quilt cover.
3. Add pillowcases.
4. Add a throw or blanket.
5. Preview the selected combination using real product imagery or a carefully designed visual composition.
6. Show selected products, sizes and total price.
7. Add selected items to cart.

### Important constraints
- Only offer combinations that are actually available.
- Make clear whether the preview is illustrative or an exact product rendering.
- Do not imply that colors will appear identical on every screen.
- Keep the experience usable on mobile.
- Provide a simple standard shopping route for customers who do not want to use the builder.

If the client's catalogue or development budget does not support this feature, launch with curated “Shop the look” combinations instead.

---

## 10. Motion Design and Framer-Style Interactions

Motion should make the website feel considered, responsive and tactile. It must never compete with the products or slow down shopping.

Use Framer Motion (or the current Motion for React package/API selected by the development team) for interaction and scroll-based animation. The implementation team should verify the current package and API before coding.

### Motion principles
- Subtle, purposeful and consistent.
- Mostly short transitions with restrained easing.
- Motion should communicate hierarchy, reveal content or confirm an action.
- Avoid animating every element independently.
- Do not use scroll hijacking or force users through a staged sequence.
- Never delay access to product information or purchase actions for an animation.

### Recommended motion system

**A. Initial page entrance**
- Small opacity and vertical movement for key content.
- Hero image can reveal with a subtle mask or clip-path.
- Avoid long intro sequences or loading screens.

**B. Scroll reveal**
- Section headings and editorial content fade/translate into view once.
- Stagger small groups of related items with a short delay.
- Use viewport thresholds so content does not appear too late.
- Avoid repeated dramatic animations every time a user scrolls up and down.

**C. Image reveal**
- Use a restrained clip-path reveal for selected editorial imagery.
- Keep product images stable and immediately visible.
- Never hide essential product content until the user scrolls.

**D. Parallax**
- Use very subtle parallax on a few large lifestyle images only.
- Avoid parallax on product grids, text-heavy areas or mobile if it causes discomfort or performance problems.

**E. Header**
- Slightly reduce header height after scrolling.
- Add a subtle background or border when content moves beneath it.
- Keep the change fast and predictable.

**F. Product interactions**
- Gentle image crossfade on product variant selection.
- Subtle image swap on desktop hover.
- Clear selected-state animation for swatches and size buttons.
- Small cart icon or confirmation feedback when an item is added.

**G. Navigation**
- Smooth mega-menu reveal.
- Clear focus and active states.
- Close menus predictably on Escape, outside click and route change.

**H. Buttons**
- Subtle background, border or arrow movement on hover.
- Clear pressed and focus states.
- No oversized spring bounce.

**I. Gallery**
- Smooth image transition between slides.
- Keep swipe gestures natural.
- Support keyboard navigation and accessible labels.

### Timing and easing guidelines
Use as starting points:
- Micro-interactions: 120–200ms.
- Buttons and controls: 160–240ms.
- Menus and drawers: 200–320ms.
- Section reveals: 450–750ms.
- Editorial image reveals: 600–900ms.
- Prefer ease-out or carefully tuned cubic-bezier curves.
- Use stagger only for related groups, typically 40–90ms between children.

### Accessibility and performance
- Respect `prefers-reduced-motion`.
- Provide a reduced-motion experience with minimal or no nonessential movement.
- Avoid scroll event handlers that cause excessive layout work.
- Prefer performant transforms and opacity.
- Lazy-load below-the-fold imagery.
- Avoid animating large areas continuously.
- Keep interactions responsive on mid-range mobile devices.

---

## 11. Responsive Design

Design mobile deliberately; do not treat it as a compressed desktop layout.

### Desktop
- Strong editorial compositions.
- Large lifestyle photography.
- Spacious product grids.
- Hover states where appropriate.
- Clear navigation and useful mega menus.

### Tablet
- Reflow editorial grids without awkward image crops.
- Reduce spacing while maintaining hierarchy.
- Ensure filters and navigation remain easy to use.

### Mobile
- Prioritize product discovery and purchase.
- Use a compact header and simple menu.
- Use art-directed image crops.
- Keep text readable and buttons comfortably tappable.
- Avoid tiny swatches, cramped filters and dense product information.
- Use drawers for filters and size guides where helpful.
- Keep cart and checkout actions easy to reach.
- Do not use hover as the only way to reveal information.
- Reduce or remove parallax and heavy scroll effects.

Test at minimum:
- 360px mobile width.
- 390px mobile width.
- 768px tablet width.
- 1024px laptop/tablet landscape.
- 1440px desktop.
- 1920px wide desktop.

---

## 12. UX, Accessibility and E-Commerce Requirements

The design must be beautiful and genuinely usable.

### Core user journeys
1. Homepage → category → product → select size/color → add to cart → checkout.
2. Search → relevant results → product → purchase.
3. Inspiration article → linked product → purchase.
4. Product page → size guide / fabric guide → return to product.
5. Cart → edit quantity/remove item → checkout.
6. Existing customer → account / order information.

### Search
- Search products by name, category, material and relevant attributes if supported.
- Show useful suggestions and a clear no-results state.
- Do not make search an ornamental icon that does nothing.

### Cart
- Show product, variant, quantity, price and subtotal.
- Allow quantity updates and removal.
- Show shipping thresholds only when accurate.
- Make checkout action unmistakable.
- Preserve cart state appropriately.

### Accessibility
- Semantic headings and landmarks.
- Keyboard-operable navigation, filters, galleries and dialogs.
- Visible focus indicators.
- Labels for inputs and icon-only buttons.
- Meaningful alt text for product and editorial images.
- Sufficient color contrast.
- Error messages that explain how to fix the issue.
- Do not communicate availability, errors or selection through color alone.
- Ensure dialogs and drawers manage focus correctly.

### Trust and clarity
- Make shipping, returns, sizing and care information easy to find.
- Do not invent reviews, badges, guarantees or delivery claims.
- Use clear pricing and variant availability.
- Explain what is included in each product.
- Avoid deceptive urgency, fake stock counts and fabricated discount timers.

---

## 13. Content and Brand Voice

Write like a knowledgeable bedding specialist with a strong sense of design.

### Voice characteristics
- Warm, direct and sensory.
- Confident but not boastful.
- Helpful rather than pushy.
- Specific about material and construction.
- Short enough to scan.

### Example direction (placeholder copy only)
Hero headline:
“Make room for slower mornings.”

Supporting copy:
“Thoughtfully made bedding for the everyday rituals that make a room feel like yours.”

CTA:
“Explore the collection”

Material heading:
“Feel the difference in every layer.”

These are creative examples, not approved brand claims. Rewrite them to reflect the client's actual positioning and product range.

---

## 14. Technical and Design Handoff Expectations

This is a design brief, not a fixed technology mandate. Choose the implementation stack based on the client's existing platform, integrations and operational needs.

### Design system deliverables
- Color tokens.
- Typography tokens.
- Spacing scale.
- Grid and breakpoint rules.
- Button variants and states.
- Form fields and validation states.
- Product cards.
- Product gallery.
- Swatches and size selectors.
- Navigation and mega menu.
- Filter and sort controls.
- Cart drawer / cart page.
- Accordions and dialogs.
- Badges and labels.
- Empty, loading, success and error states.

### Component quality
- Reusable components with consistent spacing and behavior.
- Clear separation between content, layout and interaction.
- Realistic product data and image ratios.
- No arbitrary one-off styling for every section.
- Avoid unnecessary dependencies and animation libraries.
- Keep the implementation maintainable and easy for the client to update.

### SEO and performance
- Descriptive page titles and meta descriptions.
- Logical heading structure.
- Product structured data where appropriate.
- Descriptive image alt text.
- Optimized responsive images and modern formats.
- Lazy loading below the fold.
- Avoid loading large animation libraries or oversized images unnecessarily.
- Good Core Web Vitals and fast initial rendering.
- Accessible URLs and sensible internal linking.

---

## 15. Anti-AI-Generated Design Rules

This section is critical. The final design must not look like a generic output from an AI website generator.

**Do not use:**
- A predictable beige-and-white template with no brand-specific character.
- The same rounded card repeated in every section.
- Random gradients, glassmorphism or glowing effects.
- Excessive floating pills and decorative badges.
- Huge generic headlines with no editorial composition.
- Random abstract blobs, sparkles or unnecessary icons.
- Fake testimonials, fake metrics, invented awards or fabricated product claims.
- Generic AI bedroom images with distorted fabric, furniture or architecture.
- Repetitive stock photography.
- Identical image crops and identical section layouts from top to bottom.
- Animation on every heading, card and image.
- Generic copy such as “Elevate your space” repeated across the site.
- Overly complex navigation or unnecessary features added only to appear sophisticated.

**Do instead:**
- Build a visual identity around the actual products and the client's point of view.
- Use art-directed photography and varied but coherent compositions.
- Let typography, spacing, image selection and material details create the premium feel.
- Use a few memorable design moments rather than dozens of decorative effects.
- Keep shopping patterns familiar and predictable.
- Make every section earn its place.
- Use genuine product information and human brand storytelling.
- Review the website at full size and mobile size as a complete experience, not just as isolated screenshots.

---

## 16. Suggested Design Review Checklist

Before approving the design, check:

### Brand and visual quality
- [ ] Does the website feel like a distinct bedding brand?
- [ ] Is the palette coherent and used with restraint?
- [ ] Do the fonts create a recognizable editorial identity?
- [ ] Does photography look authentic and consistent?
- [ ] Are there varied compositions rather than repetitive templates?
- [ ] Does the site feel premium without sacrificing warmth?

### Shopping and usability
- [ ] Can a first-time visitor understand what the business sells?
- [ ] Are categories easy to find?
- [ ] Can users compare products and understand materials?
- [ ] Are size and color selections clear?
- [ ] Is Add to Cart easy to find?
- [ ] Are shipping, returns and care information accessible?
- [ ] Do filters, search and cart work as expected?

### Motion and responsive behavior
- [ ] Are animations subtle and purposeful?
- [ ] Does reduced-motion mode work?
- [ ] Is mobile scrolling natural?
- [ ] Are touch targets comfortable?
- [ ] Are there no layout shifts or delayed content reveals?
- [ ] Does the website remain fast on mobile?

### Content integrity
- [ ] Are all product details verified?
- [ ] Are all claims substantiated?
- [ ] Are reviews authentic?
- [ ] Are policies and delivery details correct?
- [ ] Are all images licensed and approved?

---

## 17. Master Prompt for the Designer / Website Design Assistant

Use the following prompt when the client is ready to begin the design phase:

> Act as a senior digital art director, award-level e-commerce UI/UX designer and brand experience designer specializing in premium interiors, bedding and home-linen brands.
>
> Create a complete, distinctive and commercially effective bedding e-commerce website based on the requirements in this document. The visual direction is “The Quiet Atelier”: tactile, warm, editorial, contemporary and quietly luxurious.
>
> Treat the supplied Sheet Society website strictly as a quality and category reference. Do not copy its brand identity, exact layouts, assets, copy, product names or distinctive design solutions. Develop an original identity that can belong to the client's business.
>
> Use the proposed palette—Porcelain `#F4F0E8`, Chalk `#FBF9F5`, Oat `#D8CBB8`, Umber `#49372F`, Olive Ink `#596451`, Clay Rose `#B77F70`, Dusk Blue `#71818A` and Soft Graphite `#282725`—as the initial design foundation. Pair Cormorant Garamond display typography with DM Sans interface typography, unless a documented brand reason supports the alternative Instrument Serif and Manrope pairing.
>
> Make photography, real textile texture, considered typography, spacing and composition the primary sources of visual impact. Do not compensate for weak art direction with gradients, rounded cards, excessive shadows, decorative icons or generic animation.
>
> Design the complete responsive experience: homepage, category and collection pages, product detail pages, search, cart, material guide, styling inspiration, about/story page, customer support content and footer. Include realistic interaction states and empty, loading, success and error states.
>
> Create a strong editorial homepage with a cinematic bedroom hero, visual category discovery, brand story, featured collection, bestsellers, material education, styling inspiration, trust information, genuine reviews, journal content, newsletter and a considered footer.
>
> Make product pages exceptionally clear: product imagery, fabric and construction details, color and size variants, price, availability, delivery and returns information, care instructions, size guide and a prominent purchase action.
>
> Use Framer-style motion thoughtfully: subtle section reveals, restrained image masks, a refined sticky header, gentle menu transitions, product image crossfades and clear cart feedback. Respect reduced-motion preferences and never use scroll hijacking or animations that obstruct shopping.
>
> The site must be mobile-first in its interaction decisions, accessible, performant and easy to maintain. Every control shown must have a real purpose and a defined state. Do not create decorative controls that do nothing.
>
> Most importantly, make the result look human-designed and art-directed. Use asymmetry with intention, varied image compositions, real product context, confident typography and carefully controlled whitespace. Avoid the recognizable visual clichés of AI-generated websites.
>
> Do not invent client facts. Use placeholders for unknown brand information, prices, materials, certifications, shipping promises and reviews, and clearly identify what must be confirmed with the client.
>
> The final outcome should feel like a premium independent bedding label with the visual confidence of a respected interiors publication and the usability of a mature e-commerce brand.

---

## 18. Final Recommendation Before Design Begins

Do not start by asking a design assistant to generate the entire website in one pass. First collect the client's logo, product catalogue, actual product photography, target audience, market, brand story and business policies.

Then work in this order:
1. Confirm brand positioning and visual direction.
2. Approve the palette, font pairing and photography style.
3. Design the homepage and one product detail page.
4. Validate the design with the client.
5. Build the remaining templates and responsive states.
6. Define and test interactions and motion.
7. Validate product data, checkout, accessibility and performance.

**The strongest premium bedding websites are not the ones with the most effects. They are the ones where the product, photography, typography, layout and shopping experience feel like they were all considered by the same designer.**
