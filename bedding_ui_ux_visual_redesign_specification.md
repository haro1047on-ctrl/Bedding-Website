# Bedding Website — UI/UX Visual Redesign Specification
## Antigravity + Gemini 3.8 Flash High

**Purpose:** A separate, design-first correction brief for an existing bedding e-commerce website whose current visual result is not close enough to the supplied references. This document focuses on art direction, layout, typography, imagery, product presentation and visible motion.

**Do not rebuild the application. Do not add a new standalone interactive feature section, quiz, product configurator or room-design tool.** The required interactions are the ones that support browsing: horizontal product rails, hero slides, editorial image sliders and product-gallery transitions.

Reference: https://sheetsociety.com/en

The client's four-part visual reference communicates:
1. A sunlit architectural bedroom with layered natural bedding.
2. An earthy palette and tactile material moodboard.
3. Editorial Cormorant Garamond typography.
4. A premium bedding e-commerce homepage with large imagery and restrained navigation.

Translate these into one coherent brand experience. Do not paste the reference images into the site or copy the reference brand's exact layouts/assets.

---

# 1. The intended art direction

Create a premium bedding website that feels art-directed for a respected interiors magazine and engineered as a professional online store.

The website should feel warm, tactile, architectural, calm, contemporary and quietly luxurious. Photography, typography, spacing, composition and material details must do the visual work.

The existing result needs a **noticeable visual redesign**, not a few cosmetic color changes. Review and improve the overall hierarchy, image scale, section rhythm, product presentation, page layouts and motion.

Avoid:
- Generic beige Shopify/AI templates.
- The same beige background on every section.
- Identical rounded cards with shadows everywhere.
- Glassmorphism, random gradients, glows and decorative blobs.
- Generic centered hero text over an arbitrary stock image.
- Repetitive image crops and symmetrical grids in every section.
- Fake AI bedrooms with distorted furniture or synthetic-looking fabric.
- Oversized headlines without intentional composition.
- Excessive badges, pills and icons.
- Animations that are only generic fades or that obstruct shopping.

## Design concept: The Quiet Atelier

Think of a carefully composed digital interiors editorial: beautiful rooms, natural fabrics, considered details, quiet typography and curated product discovery.

# 2. Visual design system

## Color palette

| Token | Hex | Role |
|---|---|---|
| Porcelain | `#F4F0E8` | Main warm background |
| Chalk | `#FBF9F5` | Light surfaces |
| Oat | `#D8CBB8` | Secondary neutral |
| Umber | `#49372F` | Primary dark text |
| Olive Ink | `#596451` | Restrained brand accent |
| Clay Rose | `#B77F70` | Occasional warm accent |
| Dusk Blue | `#71818A` | Supporting accent |
| Soft Graphite | `#282725` | High-contrast text |

Use Porcelain and Chalk as the foundation, but vary sections with photography, whitespace, Oat and occasional deep Umber panels. Use Olive Ink sparingly. Clay Rose and Dusk Blue are supporting accents only. Maintain readable contrast. Product swatches must represent actual product variants.

Avoid gradients. Prefer photography, solid color and real material texture.

## Typography

Use:
- **Cormorant Garamond** for hero headlines, collection titles and editorial statements.
- **DM Sans** for navigation, body copy, product names, prices, labels and controls.

The serif provides character; the sans-serif provides usability. Use deliberate line breaks and comfortable line lengths. Avoid excessive uppercase, tiny captions and too many font families.

Suggested responsive type scale:
- Hero: `clamp(3.25rem, 7.5vw, 7rem)`.
- Section heading: `clamp(2.3rem, 4.5vw, 4.5rem)`.
- Body: `1rem–1.125rem`.
- Product title: `0.95rem–1.05rem`.
- Utility label: `0.7rem–0.8rem`, sparingly.

## Layout language

Use a consistent grid and generous page gutters, but avoid repetitive compositions. Mix full-bleed photography, split editorial layouts, asymmetric image groupings, clean product grids and quiet text-led sections. Let some images extend to the viewport edge. Keep text widths controlled. Use restrained borders and minimal shadows. Do not round every image or container.

---

# 3. Photography and image direction

Photography is the most important visual asset.

Use:
- Architectural bedrooms with beautiful natural light.
- Linen and cotton bedding with visible folds, drape and texture.
- Warm wood, stone, plaster, natural fibers and subtle greenery.
- Wide room scenes mixed with macro fabric details.
- Consistent color grading and believable product colors.
- Real product images with multiple useful angles.

Avoid repeated stock images, obvious AI-generated rooms, distorted bedding, impossible folds, stretched images and crops that hide the product.

Prioritize client-owned photography. If it is missing, use clearly identified temporary placeholders and provide a shot list. Never present placeholder imagery as actual client product photography.

---

# 4. Homepage — rebuild the visual rhythm

The homepage should feel like a premium interiors campaign, not a stack of generic store sections.

## 4.1 Header

Create a slim announcement strip and refined header:
- Distinctive wordmark with breathing room.
- Calm, well-spaced navigation.
- Search, account and cart controls kept understated.
- Subtle divider or surface change only when needed.
- Optional sticky header that gently reduces height on scroll.
- If a mega menu already exists, make it restrained and editorial, not a wall of promotional tiles.

## 4.2 Hero — cinematic bedroom campaign

Use a large, immersive image of a beautifully styled bedroom. The photograph should feel like an interiors magazine: architectural windows, natural daylight, warm materials and layered bedding.

Composition:
- Hero image occupies most of the first viewport.
- Place headline in intentional negative space.
- Do not put a large opaque card behind the text.
- Use Cormorant Garamond for the main line.
- Supporting copy should be short.
- One clear CTA.
- Art-direct a separate mobile crop.

Example copy direction only: “Make room for slower mornings.” Use client-approved brand language in production.

### Required hero animation
Implement a genuine horizontal slide transition:
- On next, the outgoing image moves to the **left**.
- The incoming image enters from the **right**.
- Add a restrained crossfade during movement.
- Headline and supporting text move subtly, with a slight delay.
- Include minimal pagination and previous/next controls.
- Support touch swipe.
- If autoplay is enabled, use a slow 5–7 second interval and pause appropriately on interaction/focus.
- Essential information must not exist only on a slide that disappears.

Suggested timing: image 700–950ms; text 350–550ms; text offset 16–28px. Use refined ease-in-out. Reduced-motion mode should use a static state or brief crossfade.

Do not substitute a fade-only effect for the requested horizontal slide.

## 4.3 Category discovery

Use real product or bedroom photography, not generic icons. Create a varied image-led composition with one or two larger category images and smaller supporting categories. Keep labels simple and quiet. A subtle image zoom or underline response is enough.

Only show categories the client actually sells: sheets, duvet/quilt covers, pillowcases, quilts/comforters, throws, etc.

## 4.4 Brand story

Create a deliberate editorial pause:
- One side: a short, specific brand statement.
- Other side: close-up textile, bedroom detail or genuine maker/founder image.

Do not use a generic row of icons and three benefits. Use verifiable brand details only.

## 4.5 Featured collection

Treat this like a campaign:
- One large editorial image.
- A compact product selection.
- Asymmetric composition or image-led split layout.
- Clear collection link.

Avoid a generic banner followed by repetitive cards if a more considered layout is possible.

## 4.6 Bestsellers — required horizontal product rail

This is a core requirement.

Build a single-row horizontal product rail:
- Product cards sit in one horizontal track.
- Right arrow advances the track; the visible product group moves **left** to reveal products further along the row.
- Left arrow reverses the movement.
- Support touch swipe and natural trackpad interaction where appropriate.
- On desktop, show a deliberate number of products and optionally a glimpse of the next item to communicate that more products exist.
- Use consistent card widths and image ratios.
- Keep product name, PKR price and available swatches aligned.
- Do not allow the entire page to overflow horizontally.
- Provide subtle progress feedback.
- Keep controls accessible by keyboard.

Product cards should use large product imagery, minimal chrome, no heavy shadow, clear names and PKR prices. Show swatches only for real variants. Use a gentle alternate-image crossfade on hover only if a real alternate image exists. No fake “trending” or stock badges.

Rail movement: 450–700ms, smooth ease-out, no exaggerated spring or bounce. On touch devices, preserve natural swipe behavior. Respect reduced motion.

**The rail must visibly move horizontally. A static grid is not an acceptable substitute.**

## 4.7 Material story

Make fabric texture visible:
- Macro image of an actual material sold.
- Editorial serif heading.
- Concise material explanation.
- Construction, weave and care details only when verified.
- Optional supporting detail images.

Do not replace this with generic icon benefits.

## 4.8 Bedroom inspiration slider

Create a horizontal editorial image sequence of styled bedrooms or curated looks:
- Large, high-quality images.
- Consistent image treatment.
- Short titles and optional product links.
- Subtle previous/next controls.
- Manual navigation and touch swipe.
- No autoplay while the user is reading or inspecting content.

## 4.9 Shop the look

If the catalogue supports it, show one styled bedroom image and a few products used in that look. Link directly to real products. This is simple editorial merchandising—not a room configurator or product builder.

## 4.10 Supporting sections

Keep genuine reviews, journal, newsletter and footer visually quiet and credible. Never invent testimonials, ratings, certifications or delivery promises.

---

# 5. Collection page

The collection page should feel curated, not like an unstyled catalogue.

- Breadcrumbs understated.
- Collection title in Cormorant Garamond.
- Short description.
- Optional editorial image.
- Product count and controls secondary.
- Three or four product columns on wide desktop depending on image size.
- Two columns on mobile when images remain clear.
- Large consistent product images.
- Minimal card decoration.
- Clear product name and PKR price.
- Real color swatches only.

Filters should be functional but understated: size, color, material, price and availability, where supported. On mobile use a simple drawer. Keep active filters visible and removable.

---

# 6. Product detail page

Use a balanced product-first layout:
- Large image gallery on the left.
- Clear purchase information on the right.
- Product title, PKR price, material descriptor, color, size, quantity and Add to Cart.
- Useful delivery and returns details where known.
- Size guide, care and material information.
- Avoid crowding the purchase area with badges and decorative boxes.

Gallery imagery should include product views, fabric close-ups and styled bedroom context.

### Required gallery motion
When navigating forward:
- Current image moves left.
- Next image enters from the right.
- Previous navigation reverses direction.
- Use a subtle crossfade.
- Support touch swipe on mobile.
- Keep controls accessible.
- Do not use dramatic rotations, flips or 3D effects.
- Do not delay product inspection.

---

# 7. Motion system — animation must be visibly implemented

The current website has insufficient motion. Do not add only generic fade-ins and claim the animation requirement is complete.

Use the project's existing animation library. If Motion / Framer Motion is installed, inspect its version and use the compatible API. Do not add a duplicate animation library unnecessarily.

## Directional slide rule

For forward navigation:
- Current content exits left.
- Next content enters from right.

For backward navigation:
- Current content exits right.
- Previous content enters from left.

Apply this to:
- Hero campaign slider.
- Bestselling product rail.
- Editorial bedroom inspiration slider.
- Product image gallery.

Do not turn every section into a carousel. Use sliding only for sequences that benefit from browsing.

## Scroll reveal patterns

Use several restrained patterns rather than the same fade everywhere:

**A. Text rise**
- Starts 16–24px below final position.
- Opacity 0 to 1.
- 500–700ms.

**B. Image mask reveal**
- Selected large editorial images reveal with a subtle clip-path.
- 700–1000ms.
- Use sparingly.

**C. Product stagger**
- Related product cards reveal with 50–90ms stagger.
- Keep movement small.
- Do not delay access to products.

**D. Image hover**
- Very subtle scale, approximately 1.00 to 1.03.
- 350–500ms.
- Do not crop the product awkwardly.

**E. Header response**
- Slight height reduction after scrolling.
- Subtle background or border if needed.
- No dramatic shrinking.

### Timing guide

| Interaction | Duration |
|---|---:|
| Button hover | 160–220ms |
| Swatch selection | 180–260ms |
| Navigation menu | 220–320ms |
| Product image change | 350–550ms |
| Product rail slide | 450–700ms |
| Hero slide | 700–950ms |
| Text reveal | 500–700ms |
| Editorial image reveal | 700–1000ms |

Respect `prefers-reduced-motion`. Use transforms and opacity where possible. Keep carousels keyboard accessible with labeled controls. Avoid scroll hijacking and heavy scroll handlers.

---

# 8. Mobile art direction

Mobile must be designed intentionally, not merely scaled down:
- Use a deliberate hero crop and short readable headline.
- Product rails must support touch swipe.
- Product cards must be wide enough to show useful imagery.
- Do not rely on hover.
- Use a simple navigation drawer.
- Stack editorial layouts in a considered order.
- Reduce or remove parallax.
- Keep product purchase controls easy to reach.
- Prevent horizontal page overflow while allowing horizontal rails to work.

Test at 360px, 390px, 768px, 1024px, 1440px and 1920px.

---

# 9. PKR pricing and content integrity

All customer-facing prices must use Pakistani Rupees:
- `PKR 4,500`
- `PKR 8,900`
- `PKR 12,500`

Use actual client-approved prices. Do not convert dollar prices with an invented exchange rate or create arbitrary values. If approved prices are unavailable, keep clearly identified placeholders and report that client confirmation is required.

Use a shared currency formatter, preferably based on `Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 })`, adjusted if needed to produce consistent `PKR 4,500` formatting.

Update product cards, product details, cart, checkout, order summaries and price filters. Search for `$`, USD and hardcoded currency labels, but do not blindly replace unrelated code.

Do not invent product specifications, thread counts, certifications, sustainability claims, reviews, ratings, delivery promises, discounts or stock levels.

---

# 10. Explicitly out of scope

Do not add:
- Build Your Bed configurator.
- Bedding quiz.
- Room-design tool.
- Product customizer.
- 3D room preview.
- A separate interactive showcase section.
- Decorative widgets with no shopping purpose.

The required interactions are product browsing and presentation: horizontal sliding, image galleries, editorial sliders and subtle scroll reveals.

---

# 11. Antigravity workflow

You are Gemini 3.8 Flash High operating as a senior UI/UX implementation agent inside an existing project.

## Phase 1 — Inspect
Run the current website and review all existing pages at desktop and mobile sizes. Identify why the result feels generic or visually different from the supplied references. Review imagery, layout, typography, spacing, color, product cards and current motion.

## Phase 2 — Plan
Report:
- What currently looks generic or unfinished.
- Which page sections need redesign.
- Which imagery needs replacing or recropping.
- Which components need directional slide motion.
- Which existing components must be preserved.
- Which files will change.

Then continue with implementation unless a critical missing client asset or decision prevents progress.

## Phase 3 — Redesign
Implement the visual system, cinematic hero, image-led category discovery, editorial brand story, premium product rail, material story, inspiration slider and refined collection/product pages.

## Phase 4 — Implement motion
Visibly verify:
- Hero advances with a leftward slide.
- Product rail moves left to reveal later products.
- Previous controls reverse direction.
- Product gallery transitions directionally.
- Editorial image rail is navigable.
- Selected sections have scroll reveals.
- Reduced-motion behavior works.

A generic opacity fade alone does not satisfy the motion requirement.

## Phase 5 — Validate
Test slide controls, touch behavior, product links, purchase controls, PKR prices, reduced-motion behavior, responsive layouts, horizontal overflow, console errors and broken assets. Preserve existing working functionality.

## Phase 6 — Report
Provide:
1. Pages visually redesigned.
2. Components modified.
3. Exact slide animations implemented.
4. Scroll effects implemented.
5. Responsive sizes tested.
6. Client assets still required.
7. Known limitations.

Do not claim a feature works unless it has been tested in the browser.

---

# 12. Definition of done

- [ ] The site has a distinct editorial bedding identity.
- [ ] The visual result is substantially improved, not just recolored.
- [ ] The bedroom, palette, typography and e-commerce references form one coherent system.
- [ ] Hero advances with a real horizontal slide.
- [ ] Product rail visibly moves left to reveal subsequent products.
- [ ] Previous navigation reverses direction.
- [ ] Product gallery has directional transitions.
- [ ] Editorial image browsing works.
- [ ] Scroll reveals are varied, restrained and visible.
- [ ] No unnecessary standalone interactive feature section has been added.
- [ ] Product information remains easy to shop.
- [ ] Mobile is deliberately art-directed.
- [ ] Reduced-motion preferences are respected.
- [ ] Prices use PKR and approved client values.
- [ ] No fabricated claims or reviews appear.
- [ ] Existing functionality is preserved.
- [ ] Browser testing and an honest final report are completed.

---

# FINAL COMMAND TO GEMINI

Redesign the **visual experience** of the existing bedding website, not its feature list.

The previous result is not close enough to the supplied visual direction. Make a substantial art-direction improvement: large authentic bedroom photography, warm architectural composition, Cormorant Garamond and DM Sans, the specified earthy palette, varied editorial layouts, premium product imagery and generous intentional whitespace.

Most importantly, implement the requested motion visibly. When the user advances a hero slide, product rail or product gallery, content must move horizontally in the correct direction. The product rail must slide left to reveal the next products. Add restrained scroll reveals and image transitions to support the editorial experience.

Do not add a configurator, quiz or separate interactive feature section. Do not rebuild the application from scratch. Inspect the existing project, redesign its presentation, preserve working features, test the actual browser result and report exactly what changed.

**The finished website should feel like a premium bedding label photographed and art-directed for a respected interiors magazine, with the clarity and reliability of a professional e-commerce store.**
